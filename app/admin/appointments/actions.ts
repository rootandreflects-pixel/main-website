'use server'

import { revalidatePath } from 'next/cache'
import { Resend } from 'resend'
import { getServiceSupabase } from '@/lib/supabase'
import { generateAppointmentConfirmed } from '@/lib/emails/appointment-confirmed'
import { generateAppointmentCancelled } from '@/lib/emails/appointment-cancelled'

const resend = new Resend(process.env.RESEND_API_KEY)

// Maps for display names
const sessionTypeNames: Record<string, string> = {
  consultation: 'Free Consultation (15 min)',
  individual: 'Individual Session (50 min)',
  couples: 'Couples Session (80 min)',
  family: 'Family Session (80 min)',
}

const therapistNames: Record<string, string> = {
  '1': 'Dr. Sarah Mitchell - Trauma & Anxiety',
  '2': 'Michael Chen - Couples & Family',
  '3': 'Dr. Amanda Foster - Grief & Transitions',
  'any': 'No Preference - First available therapist',
}

export async function updateAppointmentStatus(appointmentId: string, newStatus: string) {
  const supabase = getServiceSupabase()

  // Get current appointment data before update
  const { data: appointment, error: fetchError } = await supabase
    .from('appointments')
    .select('*')
    .eq('id', appointmentId)
    .single()

  if (fetchError || !appointment) {
    throw new Error('Failed to fetch appointment')
  }

  const oldStatus = appointment.status

  // Only proceed if status actually changed
  if (oldStatus === newStatus) {
    return // No change, no email needed
  }

  // Update status
  const { error } = await supabase
    .from('appointments')
    .update({ status: newStatus })
    .eq('id', appointmentId)

  if (error) {
    throw new Error('Failed to update appointment status')
  }

  // Send email if status changed to confirmed or cancelled
  try {
    const sessionTypeName = sessionTypeNames[appointment.session_type] || appointment.session_type
    const therapistName = therapistNames[appointment.therapist] || appointment.therapist

    if (newStatus === 'confirmed' && oldStatus !== 'confirmed') {
      // Send confirmation email to user
      await resend.emails.send({
        from: 'Root & Reflect <noreply@rootandreflect.ca>',
        to: appointment.email,
        subject: 'Appointment Confirmed - Root & Reflect',
        html: generateAppointmentConfirmed({
          name: appointment.name,
          sessionType: sessionTypeName,
          therapist: therapistName,
          date: appointment.date,
          time: appointment.time,
        }),
      })
    } else if (newStatus === 'cancelled' && oldStatus !== 'cancelled') {
      // Send cancellation email to user
      await resend.emails.send({
        from: 'Root & Reflect <noreply@rootandreflect.ca>',
        to: appointment.email,
        subject: 'Appointment Update - Root & Reflect',
        html: generateAppointmentCancelled({
          name: appointment.name,
          sessionType: sessionTypeName,
          date: appointment.date,
          time: appointment.time,
        }),
      })
    }
  } catch (emailError) {
    // Log but don't fail - status was updated successfully
    console.error('Failed to send status change email:', emailError)
  }

  revalidatePath('/admin/appointments')
  revalidatePath('/admin')
}

export async function deleteAppointment(appointmentId: string) {
  const supabase = getServiceSupabase()

  const { error } = await supabase
    .from('appointments')
    .delete()
    .eq('id', appointmentId)

  if (error) {
    throw new Error('Failed to delete appointment')
  }

  revalidatePath('/admin/appointments')
  revalidatePath('/admin')
}
