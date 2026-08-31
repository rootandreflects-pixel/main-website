import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service | Root & Reflect',
  description: 'Terms of Service for Root & Reflect Psychotherapy. Read our terms and conditions for using our website and services.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-light text-slate-900 mb-4">Terms of Service</h1>
        <p className="text-slate-600 mb-8">Last updated: September 1, 2026</p>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Agreement to Terms</h2>
            <p className="text-slate-700 leading-relaxed">
              By accessing or using the Root & Reflect Psychotherapy website, you agree to be bound by these Terms of Service 
              and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from 
              using this site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Use of Website</h2>
            
            <h3 className="text-xl font-medium text-slate-800 mb-3 mt-6">Permitted Use</h3>
            <p className="text-slate-700 leading-relaxed mb-3">
              You may use our website to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
              <li>Learn about our therapy services</li>
              <li>Schedule appointments</li>
              <li>Contact us with inquiries</li>
              <li>Access general mental health information</li>
            </ul>

            <h3 className="text-xl font-medium text-slate-800 mb-3 mt-6">Prohibited Use</h3>
            <p className="text-slate-700 leading-relaxed mb-3">
              You agree not to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
              <li>Use the website for any illegal purpose</li>
              <li>Attempt to gain unauthorized access to any part of the website</li>
              <li>Transmit viruses, malware, or other harmful code</li>
              <li>Harass, abuse, or harm another person</li>
              <li>Impersonate any person or entity</li>
              <li>Collect or store personal data about other users</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Not Medical Advice</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-slate-700 leading-relaxed">
                <strong>Important:</strong> The information provided on this website is for general informational purposes only 
                and does not constitute medical or therapeutic advice. Always seek the advice of a qualified healthcare provider 
                with any questions you may have regarding a medical or mental health condition.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Emergency Situations</h2>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-slate-700 leading-relaxed mb-3">
                <strong>If you are experiencing a mental health emergency, do not use this website.</strong>
              </p>
              <p className="text-slate-700 leading-relaxed">
                Instead, call 911, go to your nearest emergency room, or contact the National Suicide Prevention Lifeline 
                at 988 (US) or 1-800-273-8255.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Appointment Booking</h2>
            <p className="text-slate-700 leading-relaxed mb-3">
              When you request an appointment through our website:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
              <li>Your request is <strong>pending confirmation</strong> until we contact you</li>
              <li>An appointment is not confirmed until you receive direct confirmation from us</li>
              <li>We reserve the right to decline appointment requests at our discretion</li>
              <li>Cancellation policies will be communicated during the confirmation process</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Intellectual Property</h2>
            <p className="text-slate-700 leading-relaxed mb-3">
              All content on this website, including but not limited to text, graphics, logos, images, and software, is the 
              property of Root & Reflect Psychotherapy or its content suppliers and is protected by copyright and intellectual 
              property laws.
            </p>
            <p className="text-slate-700 leading-relaxed">
              You may not reproduce, distribute, modify, or create derivative works from any content without our express 
              written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Third-Party Links</h2>
            <p className="text-slate-700 leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the content, privacy policies, 
              or practices of any third-party websites. Accessing third-party links is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Disclaimer of Warranties</h2>
            <p className="text-slate-700 leading-relaxed">
              This website is provided "as is" without any representations or warranties, express or implied. We make no 
              warranties or representations about the accuracy or completeness of the website's content or the content of 
              any websites linked to this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Limitation of Liability</h2>
            <p className="text-slate-700 leading-relaxed">
              To the fullest extent permitted by law, Root & Reflect Psychotherapy shall not be liable for any direct, 
              indirect, incidental, consequential, or punitive damages arising out of your use of, or inability to use, 
              this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Privacy</h2>
            <p className="text-slate-700 leading-relaxed">
              Your use of the website is also governed by our{' '}
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
              . Please review our Privacy Policy to understand our practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Changes to Terms</h2>
            <p className="text-slate-700 leading-relaxed">
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon 
              posting to the website. Your continued use of the website after changes are posted constitutes your acceptance 
              of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Governing Law</h2>
            <p className="text-slate-700 leading-relaxed">
              These Terms of Service shall be governed by and construed in accordance with the laws of [Your State/Province], 
              without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Contact Information</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              If you have questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-slate-50 rounded-lg p-4 space-y-2">
              <p className="text-slate-700">
                <strong>Root & Reflect Psychotherapy</strong>
              </p>
              <p className="text-slate-700">123 Healing Lane, Suite 200</p>
              <p className="text-slate-700">Wellness City, WC 12345</p>
              <p className="text-slate-700">
                Email: <a href="mailto:hello@rootandreflect.com" className="text-primary hover:underline">hello@rootandreflect.com</a>
              </p>
              <p className="text-slate-700">
                Phone: <a href="tel:5551234567" className="text-primary hover:underline">(555) 123-4567</a>
              </p>
            </div>
          </section>

          <section className="border-t border-slate-200 pt-6">
            <p className="text-sm text-slate-500 italic">
              By using this website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
