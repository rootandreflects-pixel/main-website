'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Calendar, Clock, User, ArrowRight, CheckCircle } from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { StructuredData } from '@/components/structured-data'

const therapists = [
  { id: '1', name: 'Dr. Sarah Mitchell', specialty: 'Trauma & Anxiety' },
  { id: '2', name: 'Michael Chen', specialty: 'Couples & Family' },
  { id: '3', name: 'Dr. Amanda Foster', specialty: 'Grief & Transitions' },
  { id: 'any', name: 'No Preference', specialty: 'First available therapist' },
]

const sessionTypes = [
  { id: 'consultation', name: 'Free Consultation', duration: '15 min', description: 'Brief call to discuss your needs' },
  { id: 'individual', name: 'Individual Session', duration: '50 min', description: 'One-on-one therapy session' },
  { id: 'couples', name: 'Couples Session', duration: '80 min', description: 'Session for partners' },
  { id: 'family', name: 'Family Session', duration: '80 min', description: 'Session for family members' },
]

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'
]

export default function AppointmentPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    sessionType: '',
    therapist: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    isNewClient: true,
    notes: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const canProceed = () => {
    switch (step) {
      case 1: return formData.sessionType !== ''
      case 2: return formData.therapist !== ''
      case 3: return formData.date !== '' && formData.time !== ''
      case 4: return formData.name !== '' && formData.email !== ''
      default: return false
    }
  }

  const breadcrumbData = {
    path: '/appointment',
    items: [
      { name: 'Home', path: '/' },
      { name: 'Book Appointment', path: '/appointment' }
    ]
  }

  if (submitted) {
    return (
      <>
        <Navigation />
        <main className="pt-24 min-h-screen flex items-center justify-center px-6">
          <div className="max-w-md text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-light text-foreground mb-4">
              Appointment Requested
            </h1>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Thank you for scheduling with Root & Reflect. We&apos;ll confirm your 
              appointment via email within 24 hours.
            </p>
            <div className="bg-card p-6 rounded-2xl border border-border text-left mb-8">
              <h2 className="font-medium text-foreground mb-4">Appointment Details</h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Session Type:</span>
                  <span className="text-foreground">{sessionTypes.find(s => s.id === formData.sessionType)?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Therapist:</span>
                  <span className="text-foreground">{therapists.find(t => t.id === formData.therapist)?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Date & Time:</span>
                  <span className="text-foreground">{formData.date} at {formData.time}</span>
                </div>
              </div>
            </div>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
            >
              Return Home
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <StructuredData 
        type="webpage" 
        data={{
          title: 'Book Appointment - Root & Reflect Psychotherapy',
          description: 'Online appointment scheduling for therapy services',
          path: '/appointment',
          breadcrumb: breadcrumbData
        }} 
      />
      <StructuredData type="breadcrumb" data={breadcrumbData} />
      
      <Navigation />
      
      <main className="pt-24">
        {/* Header */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">
              Book an Appointment
            </p>
            <h1 className="text-4xl md:text-5xl font-light leading-tight text-foreground mb-6 text-balance">
              Schedule Your <span className="italic">Session</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose a time that works for you. We offer both in-person and 
              telehealth appointments.
            </p>
          </div>
        </section>

        {/* Progress Steps */}
        <section className="px-6 mb-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between">
              {['Session Type', 'Therapist', 'Date & Time', 'Your Info'].map((label, index) => (
                <div key={label} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                        step > index + 1
                          ? 'bg-primary text-primary-foreground'
                          : step === index + 1
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary text-muted-foreground'
                      }`}
                    >
                      {step > index + 1 ? <CheckCircle size={20} /> : index + 1}
                    </div>
                    <span className="text-xs text-muted-foreground mt-2 hidden sm:block">{label}</span>
                  </div>
                  {index < 3 && (
                    <div
                      className={`w-12 sm:w-24 h-0.5 mx-2 transition-colors ${
                        step > index + 1 ? 'bg-primary' : 'bg-border'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form Steps */}
        <section className="py-8 px-6 pb-24">
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Session Type */}
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-light text-foreground mb-6">
                    What type of session are you looking for?
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {sessionTypes.map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, sessionType: type.id })}
                        className={`p-6 rounded-2xl border text-left transition-all ${
                          formData.sessionType === type.id
                            ? 'border-primary bg-primary/5'
                            : 'border-border bg-card hover:border-primary/30'
                        }`}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="font-medium text-foreground">{type.name}</h3>
                          <span className="text-sm text-primary">{type.duration}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{type.description}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Therapist */}
              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-light text-foreground mb-6">
                    Choose your therapist
                  </h2>
                  <div className="space-y-4">
                    {therapists.map((therapist) => (
                      <button
                        key={therapist.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, therapist: therapist.id })}
                        className={`w-full p-6 rounded-2xl border text-left transition-all flex items-center gap-4 ${
                          formData.therapist === therapist.id
                            ? 'border-primary bg-primary/5'
                            : 'border-border bg-card hover:border-primary/30'
                        }`}
                      >
                        <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center shrink-0">
                          <User className="w-6 h-6 text-muted-foreground" />
                        </div>
                        <div>
                          <h3 className="font-medium text-foreground">{therapist.name}</h3>
                          <p className="text-sm text-muted-foreground">{therapist.specialty}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Date & Time */}
              {step === 3 && (
                <div className="space-y-8">
                  <h2 className="text-2xl font-light text-foreground mb-6">
                    Select a date and time
                  </h2>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">
                      <Calendar className="inline w-4 h-4 mr-2" />
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-foreground"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">
                      <Clock className="inline w-4 h-4 mr-2" />
                      Available Times
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setFormData({ ...formData, time })}
                          className={`py-3 px-4 rounded-lg border text-sm transition-all ${
                            formData.time === time
                              ? 'border-primary bg-primary text-primary-foreground'
                              : 'border-border bg-card text-foreground hover:border-primary/30'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Contact Info */}
              {step === 4 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-light text-foreground mb-6">
                    Your information
                  </h2>
                  
                  <div className="flex gap-4 mb-6">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, isNewClient: true })}
                      className={`flex-1 py-3 rounded-lg border transition-all ${
                        formData.isNewClient
                          ? 'border-primary bg-primary/5 text-foreground'
                          : 'border-border text-muted-foreground'
                      }`}
                    >
                      New Client
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, isNewClient: false })}
                      className={`flex-1 py-3 rounded-lg border transition-all ${
                        !formData.isNewClient
                          ? 'border-primary bg-primary/5 text-foreground'
                          : 'border-border text-muted-foreground'
                      }`}
                    >
                      Returning Client
                    </button>
                  </div>

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-foreground"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-foreground"
                        placeholder="you@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-foreground"
                        placeholder="(555) 000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium text-foreground mb-2">
                      Anything you&apos;d like us to know? (Optional)
                    </label>
                    <textarea
                      id="notes"
                      rows={4}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-foreground resize-none"
                      placeholder="Brief description of what you'd like to work on..."
                    />
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-10">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-6 py-3 text-foreground hover:text-primary transition-colors"
                  >
                    Back
                  </button>
                ) : (
                  <div />
                )}
                
                {step < 4 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step + 1)}
                    disabled={!canProceed()}
                    className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/95 active:scale-95 transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 disabled:shadow-none"
                  >
                    Continue
                    <ArrowRight size={18} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={!canProceed()}
                    className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/95 active:scale-95 transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 disabled:shadow-none"
                  >
                    Book Appointment
                    <ArrowRight size={18} />
                  </button>
                )}
              </div>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
