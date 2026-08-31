import { redirect } from 'next/navigation'
import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, User, Mail, Phone, FileText, Trash2 } from 'lucide-react'
import { AppointmentActions } from './appointment-actions'

async function getSupabase() {
  const cookieStore = await cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
      },
    }
  )
}

async function getServiceSupabase() {
  const cookieStore = await cookies()
  
  return createServerClient(
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
}

const sessionTypeNames: Record<string, string> = {
  consultation: 'Free Consultation (15 min)',
  individual: 'Individual Session (50 min)',
  couples: 'Couples Session (80 min)',
  family: 'Family Session (80 min)',
}

const therapistNames: Record<string, string> = {
  '1': 'Dr. Sarah Mitchell',
  '2': 'Michael Chen',
  '3': 'Dr. Amanda Foster',
  'any': 'No Preference',
}

export default async function AppointmentsPage() {
  const supabase = await getSupabase()
  const serviceSupabase = await getServiceSupabase()

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    redirect('/admin/login')
  }

  const { data: appointments, error } = await serviceSupabase
    .from('appointments')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Link
              href="/admin"
              className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Dashboard
            </Link>
            <div className="border-l border-slate-300 h-6" />
            <div>
              <h1 className="text-2xl font-light text-slate-900">Appointments</h1>
              <p className="text-sm text-slate-600">Manage all appointment bookings</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-800">Failed to load appointments</p>
          </div>
        )}

        {!appointments || appointments.length === 0 ? (
          <div className="bg-white rounded-xl border border-slate-200 p-12 text-center">
            <Calendar className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-slate-900 mb-2">No appointments yet</h3>
            <p className="text-slate-600">Appointments will appear here once clients book them</p>
          </div>
        ) : (
          <div className="space-y-4">
            {appointments.map((appointment) => (
              <div
                key={appointment.id}
                className="bg-white rounded-xl border border-slate-200 p-6 hover:border-slate-300 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <User className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-1">
                        {appointment.name}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          appointment.is_new_client
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-slate-100 text-slate-700'
                        }`}>
                          {appointment.is_new_client ? 'New Client' : 'Returning Client'}
                        </span>
                      </div>
                    </div>
                  </div>
                  <AppointmentActions appointmentId={appointment.id} currentStatus={appointment.status} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 pl-16">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    <span className="text-slate-600">Date:</span>
                    <span className="text-slate-900 font-medium">{appointment.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-slate-400" />
                    <span className="text-slate-600">Time:</span>
                    <span className="text-slate-900 font-medium">{appointment.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="w-4 h-4 text-slate-400" />
                    <span className="text-slate-600">Email:</span>
                    <a
                      href={`mailto:${appointment.email}`}
                      className="text-primary hover:underline font-medium"
                    >
                      {appointment.email}
                    </a>
                  </div>
                  {appointment.phone && (
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-600">Phone:</span>
                      <a
                        href={`tel:${appointment.phone}`}
                        className="text-primary hover:underline font-medium"
                      >
                        {appointment.phone}
                      </a>
                    </div>
                  )}
                </div>

                <div className="pl-16 space-y-3">
                  <div className="text-sm">
                    <span className="text-slate-600">Session Type:</span>{' '}
                    <span className="text-slate-900 font-medium">
                      {sessionTypeNames[appointment.session_type] || appointment.session_type}
                    </span>
                  </div>
                  <div className="text-sm">
                    <span className="text-slate-600">Therapist:</span>{' '}
                    <span className="text-slate-900 font-medium">
                      {therapistNames[appointment.therapist] || appointment.therapist}
                    </span>
                  </div>
                  {appointment.notes && (
                    <div className="pt-3 border-t border-slate-200">
                      <div className="flex items-start gap-2 text-sm">
                        <FileText className="w-4 h-4 text-slate-400 mt-0.5" />
                        <div>
                          <span className="text-slate-600 font-medium">Notes:</span>
                          <p className="text-slate-900 mt-1">{appointment.notes}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="pl-16 pt-4 border-t border-slate-200 mt-4">
                  <p className="text-xs text-slate-500">
                    Submitted on {new Date(appointment.created_at).toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
