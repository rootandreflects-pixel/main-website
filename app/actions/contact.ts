'use server'

import { Resend } from 'resend'
import { getServiceSupabase } from '@/lib/supabase'
import { generateContactEmail } from '@/lib/emails/contact-notification'
import { generateContactAcknowledgement } from '@/lib/emails/contact-user-acknowledgement'

const resend = new Resend(process.env.RESEND_API_KEY)

interface ContactData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export async function submitContact(data: ContactData) {
  try {
    // Validate required fields
    if (!data.name || !data.email || !data.subject || !data.message) {
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
    const { data: submission, error: dbError } = await supabase
      .from('contact_submissions')
      .insert({
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        subject: data.subject,
        message: data.message,
        status: 'unread',
      })
      .select()
      .single()

    if (dbError) {
      console.error('Database error:', dbError)
      return {
        success: false,
        error: 'Failed to send message. Please try again.',
      }
    }

    // Send email notifications
    try {
      // 1. Send notification to admin (rootandreflects@gmail.com)
      await resend.emails.send({
        from: 'Root & Reflect <noreply@rootandreflect.ca>',
        to: 'rootandreflects@gmail.com',
        subject: `New Contact Form - ${data.name}`,
        html: generateContactEmail({
          name: data.name,
          email: data.email,
          phone: data.phone,
          subject: data.subject,
          message: data.message,
        }),
      })

      // 2. Send acknowledgement to user
      await resend.emails.send({
        from: 'Root & Reflect <noreply@rootandreflect.ca>',
        to: data.email,
        subject: 'Message Received - Root & Reflect',
        html: generateContactAcknowledgement({
          name: data.name,
        }),
      })
    } catch (emailError) {
      // Log email error but don't fail the entire operation
      console.error('Email notification failed:', emailError)
    }

    return {
      success: true,
      submissionId: submission.id,
    }
  } catch (error) {
    console.error('Contact submission error:', error)
    return {
      success: false,
      error: 'An unexpected error occurred. Please try again.',
    }
  }
}
