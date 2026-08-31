import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata({
  title: 'Contact Us - Schedule Your Appointment Today',
  description: 'Get in touch with Root & Reflect Psychotherapy. Located at 123 Healing Lane, Wellness City. Call (555) 123-4567 or email hello@rootandreflect.com. Office hours Monday-Friday 9AM-7PM, Saturday 9AM-2PM.',
  path: '/contact'
})

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}