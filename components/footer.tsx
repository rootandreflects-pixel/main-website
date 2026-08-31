'use client'

import Link from 'next/link'
import { ArrowUp, Mail, Phone, MapPin, Sparkles, Heart } from 'lucide-react'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#0c120e] text-white/90 border-t border-white/5 font-light">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand details */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-3xl font-serif font-light tracking-wide text-white">
              Root & Reflect
            </h3>
            <p className="text-white/60 leading-relaxed text-sm max-w-sm">
              Providing compassionate, evidence-based psychotherapy to help you heal, 
              grow, and find your path forward in a calming and supportive space.
            </p>
            <div className="flex items-center gap-2 text-[#b37048] text-xs uppercase tracking-widest font-medium pt-2">
              <Sparkles size={14} className="animate-pulse" />
              <span>A safe space for healing</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-white/40">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Us' },
                { href: '/services', label: 'Services' },
                { href: '/contact', label: 'Contact' },
                { href: '/appointment', label: 'Book Appointment' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white hover:pl-1 transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-white/40">
              Get in Touch
            </h4>
            <ul className="space-y-3.5 text-sm text-white/60">
              <li className="flex gap-2.5 items-start">
                <MapPin size={16} className="text-[#b37048] shrink-0 mt-0.5" />
                <span>
                  123 Healing Lane, Suite 200<br />
                  Wellness City, WC 12345
                </span>
              </li>
              <li className="flex gap-2.5 items-center">
                <Phone size={16} className="text-[#b37048] shrink-0" />
                <a href="tel:+15551234567" className="hover:text-white transition-colors duration-200">
                  (555) 123-4567
                </a>
              </li>
              <li className="flex gap-2.5 items-center">
                <Mail size={16} className="text-[#b37048] shrink-0" />
                <a href="mailto:hello@rootandreflect.com" className="hover:text-white transition-colors duration-200">
                  hello@rootandreflect.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter / Inner Reflection */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-white/40">
              Weekly Reflection
            </h4>
            <p className="text-xs text-white/50 leading-relaxed max-w-xs">
              Subscribe to receive mindful writing prompts, therapeutic insights, and updates from our practice.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2 pt-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-white/5 border border-white/10 rounded-full px-4 py-2.5 text-xs focus:outline-none focus:border-white/30 text-white placeholder-white/30 transition-colors"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-1 top-1 bottom-1 px-4.5 bg-white text-[#0c120e] rounded-full text-xs font-semibold hover:bg-white/95 active:scale-95 transition-all shadow-sm cursor-pointer"
                >
                  Join
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-xs text-white/40">
            <span>&copy; {new Date().getFullYear()} Root & Reflect Psychotherapy. All rights reserved.</span>
          </div>
          
          <div className="flex items-center gap-6 text-xs text-white/40">
            <Link href="/privacy" className="hover:text-white transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors duration-200">
              Terms of Service
            </Link>
            
            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 active:scale-95 transition-all duration-300 shadow-sm cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
