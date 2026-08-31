'use server'

import { revalidatePath } from 'next/cache'
import { getServiceSupabase } from '@/lib/supabase'

export async function updateContactStatus(contactId: string, status: string) {
  const supabase = getServiceSupabase()

  const { error } = await supabase
    .from('contact_submissions')
    .update({ status })
    .eq('id', contactId)

  if (error) {
    throw new Error('Failed to update contact status')
  }

  revalidatePath('/admin/contacts')
  revalidatePath('/admin')
}

export async function deleteContact(contactId: string) {
  const supabase = getServiceSupabase()

  const { error } = await supabase
    .from('contact_submissions')
    .delete()
    .eq('id', contactId)

  if (error) {
    throw new Error('Failed to delete contact')
  }

  revalidatePath('/admin/contacts')
  revalidatePath('/admin')
}
