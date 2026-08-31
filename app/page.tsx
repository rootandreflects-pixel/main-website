import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowDown, Leaf, Heart, Sparkles } from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { StructuredData } from '@/components/structured-data'
import { generatePageMetadata, seoConfig } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata({
  title: 'Root & Reflect',
  description: 'Root & Reflect offers professional psychotherapy services including individual therapy, couples counseling, family therapy, and trauma-informed care. Begin your healing journey in a safe, supportive environment.',
  path: ''
})

export default function HomePage() {
  const breadcrumbData = {
    path: '',
    items: [
      { name: 'Home', path: '/' }
    ]
  }

  return (
    <>
      <StructuredData 
        type="webpage" 
        data={{
          title: 'Root & Reflect Psychotherapy - Compassionate Mental Health Care',
          description: 'Professional psychotherapy services in a healing environment',
          path: '',
          breadcrumb: breadcrumbData,
          mainEntity: true
        }} 
      />
      <StructuredData type="breadcrumb" data={breadcrumbData} />
      
      <Navigation />
      
      <main>
        {/* Hero Section with Background Image */}
        <section className="relative h-screen flex flex-col items-center justify-center px-6 bg-pattern bg-cover bg-center overflow-hidden z-10">
          {/* Background Overlay */}
          <div className="absolute inset-0 bg-hero-overlay -z-10" />
          
          <div className="max-w-4xl mx-auto text-center space-y-6 z-10 pt-20">
            <div className="w-[1px] h-12 bg-white/20 mx-auto mb-4 animate-pulse" />
            <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-white/70 font-light mb-6">
              Psychotherapy Practice
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light leading-tight text-white mb-6 text-balance tracking-wide">
              Find your roots.
              <br />
              <span className="italic font-light">Embrace reflection.</span>
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed mb-10 font-light">
              A safe space for healing and growth. We offer compassionate, 
              evidence-based therapy to help you navigate life&apos;s challenges 
              and discover your authentic self.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/appointment"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-[#142214] font-medium rounded-full hover:bg-white/95 active:scale-95 transition-all shadow-lg"
                aria-label="Schedule your first therapy appointment"
              >
                Begin Your Journey
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/30 text-white font-light rounded-full hover:bg-white/10 active:scale-95 transition-all"
                aria-label="View our therapy services"
              >
                Our Services
              </Link>
            </div>
          </div>

          {/* Bottom Down Arrow Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
            <a href="#philosophy" aria-label="Scroll down to philosophy" className="text-white/50 hover:text-white transition-colors">
              <ArrowDown size={24} className="stroke-[1.5]" />
            </a>
          </div>
        </section>

        {/* Marquee Ticker */}
        <div className="bg-[#555435] py-4 overflow-hidden whitespace-nowrap border-y border-white/10">
          <div className="animate-marquee inline-flex">
            {[...Array(2)].map((_, i) => (
              <span key={i} className="inline-flex shrink-0">
                <span className="mx-8 text-white/90 text-sm font-medium tracking-[0.3em] uppercase">• Compassionate Care</span>
                <span className="mx-8 text-white/90 text-sm font-medium tracking-[0.3em] uppercase">• Evidence-Based Therapy</span>
                <span className="mx-8 text-white/90 text-sm font-medium tracking-[0.3em] uppercase">• Safe &amp; Confidential</span>
                <span className="mx-8 text-white/90 text-sm font-medium tracking-[0.3em] uppercase">• Licensed Therapists</span>
                <span className="mx-8 text-white/90 text-sm font-medium tracking-[0.3em] uppercase">• 10+ Years Experience</span>
                <span className="mx-8 text-white/90 text-sm font-medium tracking-[0.3em] uppercase">• 500+ Clients Helped</span>
              </span>
            ))}
          </div>
        </div>

        {/* Philosophy Section */}
        <section id="philosophy" className="py-16 md:py-24 px-6 bg-[#f7f1e5]/40 scroll-mt-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-light font-serif text-foreground mb-6">
                  Our Approach to <span className="italic font-light">Healing</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4 font-light">
                  At Root & Reflect, we believe that true healing begins with understanding. 
                  Our therapeutic approach combines evidence-based practices with deep 
                  compassion, creating a nurturing environment where you can explore your 
                  inner world safely.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6 font-light">
                  We work collaboratively with you to uncover the roots of your challenges 
                  and develop meaningful insights that lead to lasting change.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                >
                  Learn About Our Practice
                  <ArrowRight size={18} />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { number: '10+', label: 'Years Experience' },
                  { number: '500+', label: 'Clients Helped' },
                  { number: '98%', label: 'Client Satisfaction' },
                  { number: '3', label: 'Licensed Therapists' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-card p-6 rounded-2xl border border-border/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                    <p className="text-3xl md:text-4xl font-light text-primary mb-2">{stat.number}</p>
                    <p className="text-xs md:text-sm text-muted-foreground font-light tracking-wide">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-16 md:py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-light font-serif text-foreground mb-4">
                How We Can <span className="italic font-light">Help</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
                We offer a range of therapeutic services tailored to meet your unique needs 
                and support your journey toward wellness.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  icon: Leaf,
                  title: 'Individual Therapy',
                  description: 'One-on-one sessions focused on your personal growth, healing, and self-discovery in a supportive environment.',
                },
                {
                  icon: Heart,
                  title: 'Couples Therapy',
                  description: 'Strengthen your relationship through improved communication, deeper understanding, and renewed connection.',
                },
                {
                  icon: Sparkles,
                  title: 'Trauma-Informed Care',
                  description: 'Gentle, specialized support for processing difficult experiences and reclaiming your sense of safety.',
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="group p-8 bg-card rounded-2xl border border-border/85 shadow-sm hover:shadow-xl hover:border-primary/20 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-6 h-6 stroke-[1.5]" />
                    </div>
                    <h3 className="text-xl font-medium text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm font-light">
                      {service.description}
                    </p>
                  </div>
                  <Link
                    href="/services"
                    className="mt-6 inline-flex items-center gap-2 text-sm text-primary font-medium group-hover:gap-3 transition-all"
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 px-6 bg-gradient-to-br from-[#555435] to-[#3a3922] text-white">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-light font-serif tracking-wide">
              Ready to <span className="italic font-light">Begin?</span>
            </h2>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
              Taking the first step toward therapy is an act of courage. 
              We&apos;re here to walk alongside you on your journey to healing.
            </p>
            <div className="pt-4">
              <Link
                href="/appointment"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-[#555435] font-medium rounded-full hover:bg-white/95 active:scale-95 transition-all shadow-lg"
              >
                Schedule a Consultation
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
