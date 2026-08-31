'use client'

import type { Metadata } from 'next'
import { useState } from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { StructuredData } from '@/components/structured-data'
import { seoConfig } from '@/lib/seo'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would send to an API
    setSubmitted(true)
  }

  const breadcrumbData = {
    path: '/contact',
    items: [
      { name: 'Home', path: '/' },
      { name: 'Contact', path: '/contact' }
    ]
  }

  return (
    <>
      <StructuredData 
        type="webpage" 
        data={{
          title: 'Contact Root & Reflect Psychotherapy',
          description: 'Contact information, office hours, and appointment scheduling',
          path: '/contact',
          breadcrumb: breadcrumbData
        }} 
      />
      <StructuredData type="breadcrumb" data={breadcrumbData} />
      
      <Navigation />
      
      <main className="pt-24">
        {/* Header */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">
              Contact Us
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-foreground mb-6 text-balance">
              We&apos;d Love to <span className="italic">Hear From You</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Have questions about our services? Ready to schedule your first appointment? 
              Reach out — we&apos;re here to help.
            </p>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-16 px-6 bg-secondary/30">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl md:text-3xl font-light text-foreground mb-8">
                  Get in <span className="italic">Touch</span>
                </h2>
                
                <div className="space-y-8">
                  <address className="flex gap-4 not-italic">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">Office Location</h3>
                      <p className="text-muted-foreground">
                        {seoConfig.business.address.street}<br />
                        {seoConfig.business.address.city}, {seoConfig.business.address.state} {seoConfig.business.address.zipCode}
                      </p>
                    </div>
                  </address>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">Phone</h3>
                      <a 
                        href={`tel:${seoConfig.business.phone.replace(/[^\d+]/g, '')}`} 
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`Call us at ${seoConfig.business.phone}`}
                      >
                        {seoConfig.business.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">Email</h3>
                      <a 
                        href={`mailto:${seoConfig.business.email}`} 
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`Email us at ${seoConfig.business.email}`}
                      >
                        {seoConfig.business.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">Office Hours</h3>
                      <div className="text-muted-foreground space-y-1">
                        <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                        <p>Saturday: 9:00 AM - 2:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-card rounded-2xl border border-border">
                  <h3 className="font-medium text-foreground mb-3">Emergency Resources</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    If you are experiencing a mental health emergency, please contact:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="text-muted-foreground">
                      <strong className="text-foreground">988 Suicide & Crisis Lifeline:</strong> Call or text 988
                    </li>
                    <li className="text-muted-foreground">
                      <strong className="text-foreground">Crisis Text Line:</strong> Text HOME to 741741
                    </li>
                    <li className="text-muted-foreground">
                      <strong className="text-foreground">Emergency:</strong> 911
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-card p-8 md:p-10 rounded-2xl border border-border/80 shadow-sm">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Send className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-light text-foreground mb-4">Message Sent</h3>
                    <p className="text-muted-foreground mb-8">
                      Thank you for reaching out. We&apos;ll get back to you within 24-48 hours.
                    </p>
                    <Link
                      href="/"
                      className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
                    >
                      Return Home
                    </Link>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-light text-foreground mb-6">
                      Send Us a Message
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
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
                          className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-foreground"
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
                            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-foreground"
                            placeholder="you@email.com"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                            Phone (Optional)
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-foreground"
                            placeholder="(555) 000-0000"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                          Subject
                        </label>
                        <select
                          id="subject"
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-foreground"
                        >
                          <option value="">Select a topic</option>
                          <option value="new-client">New Client Inquiry</option>
                          <option value="existing-client">Existing Client Question</option>
                          <option value="insurance">Insurance & Billing</option>
                          <option value="general">General Question</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                          Message
                        </label>
                        <textarea
                          id="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-foreground resize-none"
                          placeholder="How can we help you?"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3.5 bg-primary text-primary-foreground rounded-full hover:bg-primary/95 active:scale-95 transition-all text-base font-medium shadow-md shadow-primary/10"
                      >
                        Send Message
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
