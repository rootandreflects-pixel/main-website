// Test if client-side anon key can access admin_users
// Run this in a client component temporarily to test

import { supabase } from '@/lib/supabase'

export async function testAdminUsersAccess() {
  console.log('Testing anon key access to admin_users...')
  
  const { data, error } = await supabase
    .from('admin_users')
    .select('*')
  
  console.log('Result:', { data, error })
  
  // If RLS is truly protecting, you should see:
  // error: "permission denied for table admin_users" or similar
  
  // If data is returned, then RLS was protecting it and now it's exposed
}
