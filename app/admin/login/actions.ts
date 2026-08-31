'use server'

import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { createServerClient, type CookieOptions } from '@supabase/ssr'

export async function loginAdmin(email: string, password: string) {
  const cookieStore = await cookies()

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          cookieStore.set({ name, value, ...options })
        },
        remove(name: string, options: CookieOptions) {
          cookieStore.set({ name, value: '', ...options })
        },
      },
    }
  )

  // Authenticate user
  const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (authError || !authData.user) {
    console.error('Auth error:', authError)
    return { success: false, error: 'Invalid email or password' }
  }

  console.log('User authenticated:', authData.user.id)

  // Use service role to check admin authorization
  const serviceSupabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
      },
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }
  )

  console.log('Checking admin_users table for user:', authData.user.id)
  console.log('Service role key configured:', !!process.env.SUPABASE_SERVICE_ROLE_KEY)
  console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL)

  // Try without .single() first to see all rows
  const { data: allAdmins, error: allError } = await serviceSupabase
    .from('admin_users')
    .select('*')

  console.log('All admin users query:', { allAdmins, allError })

  const { data: adminData, error: adminError } = await serviceSupabase
    .from('admin_users')
    .select('id')
    .eq('id', authData.user.id)
    .single()

  console.log('Admin check result:', { adminData, adminError })

  if (adminError || !adminData) {
    console.error('Admin check failed:', adminError)
    // User is not authorized - sign them out
    await supabase.auth.signOut()
    return { success: false, error: 'You do not have admin access' }
  }

  console.log('Admin access granted!')
  return { success: true }
}
