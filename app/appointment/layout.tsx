import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata({
  title: 'Book Appointment - Schedule Your Therapy Session Online',
  description: 'Schedule your therapy appointment online with Root & Reflect Psychotherapy. Choose from individual therapy, couples counseling, family therapy, or free consultation. Easy online booking available.',
  path: '/appointment'
})

export default function AppointmentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}