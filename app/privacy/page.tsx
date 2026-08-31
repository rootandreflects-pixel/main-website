import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy | Root & Reflect',
  description: 'Privacy Policy for Root & Reflect Psychotherapy. Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
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

        <h1 className="text-4xl font-light text-slate-900 mb-4">Privacy Policy</h1>
        <p className="text-slate-600 mb-8">Last updated: September 1, 2026</p>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Introduction</h2>
            <p className="text-slate-700 leading-relaxed">
              Root & Reflect Psychotherapy ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when 
              you visit our website or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-medium text-slate-800 mb-3 mt-6">Personal Information</h3>
            <p className="text-slate-700 leading-relaxed mb-3">
              We collect information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
              <li>Schedule an appointment</li>
              <li>Contact us through our website</li>
              <li>Sign up for our newsletter (if applicable)</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mt-3">
              This may include: name, email address, phone number, and any information you choose to share in messages or appointment requests.
            </p>

            <h3 className="text-xl font-medium text-slate-800 mb-3 mt-6">Automatically Collected Information</h3>
            <p className="text-slate-700 leading-relaxed">
              When you visit our website, we automatically collect certain information about your device, 
              including information about your web browser, IP address, time zone, and some of the cookies 
              that are installed on your device.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">How We Use Your Information</h2>
            <p className="text-slate-700 leading-relaxed mb-3">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
              <li>Respond to your inquiries and appointment requests</li>
              <li>Communicate with you about our services</li>
              <li>Improve our website and services</li>
              <li>Send you administrative information</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Cookies and Tracking</h2>
            <p className="text-slate-700 leading-relaxed mb-3">
              We use cookies and similar tracking technologies to track activity on our website and store certain information. 
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
            <p className="text-slate-700 leading-relaxed">
              We use:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4 mt-3">
              <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Data Security</h2>
            <p className="text-slate-700 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information. 
              However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot 
              guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Third-Party Services</h2>
            <p className="text-slate-700 leading-relaxed mb-3">
              We may use third-party service providers to help us operate our website and services. These providers 
              have access to your personal information only to perform specific tasks on our behalf and are obligated 
              not to disclose or use it for any other purpose.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Third-party services we use may include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4 mt-3">
              <li>Website hosting and maintenance</li>
              <li>Email delivery services</li>
              <li>Analytics providers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Your Rights</h2>
            <p className="text-slate-700 leading-relaxed mb-3">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
              <li>The right to access your personal information</li>
              <li>The right to correct inaccurate information</li>
              <li>The right to request deletion of your information</li>
              <li>The right to object to or restrict processing</li>
              <li>The right to data portability</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Children's Privacy</h2>
            <p className="text-slate-700 leading-relaxed">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal 
              information from children. If you are a parent or guardian and believe your child has provided us with 
              personal information, please contact us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-slate-700 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the 
              new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Contact Us</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              If you have questions about this Privacy Policy, please contact us:
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
              This privacy policy is provided for informational purposes. For any legal concerns regarding your 
              therapeutic relationship or health information privacy (HIPAA), please refer to the separate documents 
              provided during intake.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
