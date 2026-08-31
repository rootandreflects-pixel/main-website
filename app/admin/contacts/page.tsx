import { redirect } from 'next/navigation'
import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'
import Link from 'next/link'
import { ArrowLeft, MessageSquare, Mail, Phone, FileText, Clock } from 'lucide-react'
import { ContactActions } from './contact-actions'

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

const subjectLabels: Record<string, string> = {
  'new-client': 'New Client Inquiry',
  'existing-client': 'Existing Client Question',
  'insurance': 'Insurance & Billing',
  'general': 'General Question'
}

export default async function ContactsPage() {
  const supabase = await getSupabase()
  const serviceSupabase = await getServiceSupabase()

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    redirect('/admin/login')
  }

  const { data: contacts, error } = await serviceSupabase
    .from('contact_submissions')
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
              <h1 className="text-2xl font-light text-slate-900">Contact Messages</h1>
              <p className="text-sm text-slate-600">Review and respond to inquiries</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-800">Failed to load contact messages</p>
          </div>
        )}

        {!contacts || contacts.length === 0 ? (
          <div className="bg-white rounded-xl border border-slate-200 p-12 text-center">
            <MessageSquare className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-slate-900 mb-2">No messages yet</h3>
            <p className="text-slate-600">Contact form submissions will appear here</p>
          </div>
        ) : (
          <div className="space-y-4">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className="bg-white rounded-xl border border-slate-200 p-6 hover:border-slate-300 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${
                      contact.status === 'unread' ? 'bg-blue-100' : 'bg-slate-100'
                    }`}>
                      <MessageSquare className={`w-6 h-6 ${
                        contact.status === 'unread' ? 'text-blue-600' : 'text-slate-600'
                      }`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-1">
                        {contact.name}
                      </h3>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                          {subjectLabels[contact.subject] || contact.subject}
                        </span>
                      </div>
                    </div>
                  </div>
                  <ContactActions contactId={contact.id} currentStatus={contact.status} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 pl-16">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="w-4 h-4 text-slate-400" />
                    <span className="text-slate-600">Email:</span>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-primary hover:underline font-medium"
                    >
                      {contact.email}
                    </a>
                  </div>
                  {contact.phone && (
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-600">Phone:</span>
                      <a
                        href={`tel:${contact.phone}`}
                        className="text-primary hover:underline font-medium"
                      >
                        {contact.phone}
                      </a>
                    </div>
                  )}
                </div>

                <div className="pl-16 pt-3 border-t border-slate-200">
                  <div className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-slate-400 mt-1" />
                    <div className="flex-1">
                      <span className="text-sm text-slate-600 font-medium">Message:</span>
                      <p className="text-slate-900 mt-1 whitespace-pre-wrap">{contact.message}</p>
                    </div>
                  </div>
                </div>

                <div className="pl-16 pt-4 border-t border-slate-200 mt-4">
                  <p className="text-xs text-slate-500 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    Submitted on {new Date(contact.created_at).toLocaleString()}
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
