import { redirect } from 'next/navigation'
import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'
import Link from 'next/link'
import { Calendar, MessageSquare, Clock, CheckCircle, AlertCircle, LogOut, Users } from 'lucide-react'

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

export default async function AdminDashboardPage() {
  const supabase = await getSupabase()
  const serviceSupabase = await getServiceSupabase()

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    redirect('/admin/login')
  }

  // Get stats
  const { count: totalAppointments } = await serviceSupabase
    .from('appointments')
    .select('*', { count: 'exact', head: true })

  const { count: pendingAppointments } = await serviceSupabase
    .from('appointments')
    .select('*', { count: 'exact', head: true })
    .eq('status', 'pending')

  const { count: confirmedAppointments } = await serviceSupabase
    .from('appointments')
    .select('*', { count: 'exact', head: true })
    .eq('status', 'confirmed')

  const { count: unreadContacts } = await serviceSupabase
    .from('contact_submissions')
    .select('*', { count: 'exact', head: true })
    .eq('status', 'unread')

  // Get recent appointments
  const { data: recentAppointments } = await serviceSupabase
    .from('appointments')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(5)

  // Get recent contacts
  const { data: recentContacts } = await serviceSupabase
    .from('contact_submissions')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(5)

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-light text-slate-900">Root & Reflect</h1>
              <p className="text-sm text-slate-600">Admin Dashboard</p>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                View Website
              </Link>
              <form action="/api/auth/logout" method="POST">
                <button
                  type="submit"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-slate-700 hover:text-slate-900 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </form>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome */}
        <div className="mb-8">
          <h2 className="text-3xl font-light text-slate-900 mb-2">Welcome back</h2>
          <p className="text-slate-600">Here's what's happening with your practice today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-2xl font-semibold text-slate-900">{totalAppointments || 0}</span>
            </div>
            <h3 className="text-sm font-medium text-slate-600">Total Appointments</h3>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-amber-600" />
              </div>
              <span className="text-2xl font-semibold text-slate-900">{pendingAppointments || 0}</span>
            </div>
            <h3 className="text-sm font-medium text-slate-600">Pending</h3>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-2xl font-semibold text-slate-900">{confirmedAppointments || 0}</span>
            </div>
            <h3 className="text-sm font-medium text-slate-600">Confirmed</h3>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-purple-600" />
              </div>
              <span className="text-2xl font-semibold text-slate-900">{unreadContacts || 0}</span>
            </div>
            <h3 className="text-sm font-medium text-slate-600">Unread Messages</h3>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Link
            href="/admin/appointments"
            className="bg-white rounded-xl border border-slate-200 p-6 hover:border-primary transition-colors group"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Manage Appointments</h3>
                <p className="text-sm text-slate-600">View and manage all bookings</p>
              </div>
            </div>
          </Link>

          <Link
            href="/admin/contacts"
            className="bg-white rounded-xl border border-slate-200 p-6 hover:border-primary transition-colors group"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Contact Messages</h3>
                <p className="text-sm text-slate-600">Review inquiries and messages</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Appointments */}
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Recent Appointments</h3>
            <div className="space-y-4">
              {recentAppointments && recentAppointments.length > 0 ? (
                recentAppointments.map((appointment) => (
                  <div
                    key={appointment.id}
                    className="flex items-start justify-between p-4 bg-slate-50 rounded-lg"
                  >
                    <div>
                      <p className="font-medium text-slate-900">{appointment.name}</p>
                      <p className="text-sm text-slate-600">
                        {appointment.date} at {appointment.time}
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        appointment.status === 'pending'
                          ? 'bg-amber-100 text-amber-700'
                          : appointment.status === 'confirmed'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {appointment.status}
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-sm text-slate-500 text-center py-8">No appointments yet</p>
              )}
            </div>
            {recentAppointments && recentAppointments.length > 0 && (
              <Link
                href="/admin/appointments"
                className="block text-center text-sm text-primary hover:text-primary/80 mt-4"
              >
                View all appointments →
              </Link>
            )}
          </div>

          {/* Recent Contacts */}
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Recent Messages</h3>
            <div className="space-y-4">
              {recentContacts && recentContacts.length > 0 ? (
                recentContacts.map((contact) => (
                  <div
                    key={contact.id}
                    className="flex items-start justify-between p-4 bg-slate-50 rounded-lg"
                  >
                    <div className="flex-1">
                      <p className="font-medium text-slate-900">{contact.name}</p>
                      <p className="text-sm text-slate-600 line-clamp-1">{contact.message}</p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ml-2 ${
                        contact.status === 'unread'
                          ? 'bg-blue-100 text-blue-700'
                          : contact.status === 'read'
                          ? 'bg-slate-100 text-slate-700'
                          : 'bg-green-100 text-green-700'
                      }`}
                    >
                      {contact.status}
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-sm text-slate-500 text-center py-8">No messages yet</p>
              )}
            </div>
            {recentContacts && recentContacts.length > 0 && (
              <Link
                href="/admin/contacts"
                className="block text-center text-sm text-primary hover:text-primary/80 mt-4"
              >
                View all messages →
              </Link>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
