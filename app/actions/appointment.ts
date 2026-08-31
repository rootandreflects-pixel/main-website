'use server'

import { Resend } from 'resend'
import { getServiceSupabase } from '@/lib/supabase'
import { generateAppointmentEmail } from '@/lib/emails/appointment-notification'
import { generateAppointmentAcknowledgement } from '@/lib/emails/appointment-user-acknowledgement'

const resend = new Resend(process.env.RESEND_API_KEY)

interface AppointmentData {
  sessionType: string
  therapist: string
  date: string
  time: string
  name: string
  email: string
  phone: string
  isNewClient: boolean
  notes: string
}

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

export async function submitAppointment(data: AppointmentData) {
  try {
    // Validate required fields
    if (!data.name || !data.email || !data.sessionType || !data.therapist || !data.date || !data.time) {
      return {
        success: false,
        error: 'Please fill in all required fields.',
      }
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return {
        success: false,
        error: 'Please enter a valid email address.',
      }
    }

    // Store in Supabase
    const supabase = getServiceSupabase()
    const { data: appointment, error: dbError } = await supabase
      .from('appointments')
      .insert({
        session_type: data.sessionType,
        therapist: data.therapist,
        date: data.date,
        time: data.time,
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        is_new_client: data.isNewClient,
        notes: data.notes || null,
        status: 'pending',
      })
      .select()
      .single()

    if (dbError) {
      console.error('Database error:', dbError)
      return {
        success: false,
        error: 'Failed to save appointment. Please try again.',
      }
    }

    // Send email notifications
    try {
      const sessionTypeName = sessionTypeNames[data.sessionType] || data.sessionType
      const therapistName = therapistNames[data.therapist] || data.therapist

      // 1. Send notification to admin (rootandreflects@gmail.com)
      await resend.emails.send({
        from: 'Root & Reflect <noreply@rootandreflect.ca>',
        to: 'rootandreflects@gmail.com',
        subject: `New Appointment Request - ${data.name}`,
        html: generateAppointmentEmail({
          sessionType: sessionTypeName,
          therapist: therapistName,
          date: data.date,
          time: data.time,
          name: data.name,
          email: data.email,
          phone: data.phone,
          isNewClient: data.isNewClient,
          notes: data.notes,
        }),
      })

      // 2. Send acknowledgement to user
      await resend.emails.send({
        from: 'Root & Reflect <noreply@rootandreflect.ca>',
        to: data.email,
        subject: 'Appointment Request Received - Root & Reflect',
        html: generateAppointmentAcknowledgement({
          name: data.name,
          sessionType: sessionTypeName,
          therapist: therapistName,
          date: data.date,
          time: data.time,
        }),
      })
    } catch (emailError) {
      // Log email error but don't fail the entire operation
      // The appointment is already saved in the database
      console.error('Email notification failed:', emailError)
      // Still return success since the appointment was saved
    }

    return {
      success: true,
      appointmentId: appointment.id,
    }
  } catch (error) {
    console.error('Appointment submission error:', error)
    return {
      success: false,
      error: 'An unexpected error occurred. Please try again.',
    }
  }
}
