import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Leaf, Heart, Sparkles, Users, Brain, Shield } from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { StructuredData } from '@/components/structured-data'
import { generatePageMetadata, services as seoServices } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata({
  title: 'Therapy Services - Individual, Couples, Family & Trauma Care',
  description: 'Comprehensive psychotherapy services including individual therapy, couples counseling, family therapy, trauma-informed care, anxiety treatment, depression support, and grief counseling. Evidence-based approaches in a supportive environment.',
  path: '/services'
})

const services = [
  {
    icon: Leaf,
    title: 'Individual Therapy',
    description: 'Personal one-on-one sessions tailored to your unique needs and goals. We create a safe, confidential space where you can explore your thoughts, feelings, and experiences.',
    details: [
      'Anxiety & Depression',
      'Life Transitions',
      'Self-Esteem & Identity',
      'Stress Management',
    ],
  },
  {
    icon: Heart,
    title: 'Couples Therapy',
    description: 'Strengthen your relationship through improved communication and deeper understanding. We help partners navigate challenges and build lasting connection.',
    details: [
      'Communication Skills',
      'Conflict Resolution',
      'Intimacy & Connection',
      'Trust Rebuilding',
    ],
  },
  {
    icon: Users,
    title: 'Family Therapy',
    description: 'Address family dynamics and improve relationships between family members. We work together to create healthier patterns of interaction.',
    details: [
      'Parent-Child Relationships',
      'Blended Family Issues',
      'Generational Patterns',
      'Family Communication',
    ],
  },
  {
    icon: Sparkles,
    title: 'Trauma-Informed Care',
    description: 'Gentle, specialized support for processing difficult experiences. We use evidence-based approaches to help you heal from past trauma.',
    details: [
      'EMDR Therapy',
      'Somatic Experiencing',
      'Attachment Work',
      'Safety & Stabilization',
    ],
  },
  {
    icon: Brain,
    title: 'Anxiety & Depression',
    description: 'Evidence-based treatment for anxiety disorders and depression. We help you understand your symptoms and develop effective coping strategies.',
    details: [
      'Cognitive Behavioral Therapy',
      'Mindfulness-Based Approaches',
      'Behavioral Activation',
      'Relaxation Techniques',
    ],
  },
  {
    icon: Shield,
    title: 'Grief & Loss',
    description: 'Compassionate support through life\'s most difficult losses. We honor your grief while helping you find a path forward.',
    details: [
      'Bereavement Support',
      'Complicated Grief',
      'Life Transitions',
      'Meaning-Making',
    ],
  },
]

export default function ServicesPage() {
  const breadcrumbData = {
    path: '/services',
    items: [
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' }
    ]
  }

  return (
    <>
      <StructuredData 
        type="webpage" 
        data={{
          title: 'Therapy Services - Root & Reflect Psychotherapy',
          description: 'Comprehensive mental health services including individual, couples, family therapy and more',
          path: '/services',
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
              Our Services
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-foreground mb-6 text-balance">
              Therapeutic Services for <span className="italic">Every Journey</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We offer a comprehensive range of evidence-based therapeutic services 
              designed to support your mental health and personal growth.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-6 bg-secondary/30">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <article
                  key={service.title}
                  className="bg-card p-8 md:p-10 rounded-2xl border border-border/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
                >
                  <service.icon className="w-12 h-12 text-primary mb-6" strokeWidth={1.5} />
                  <h2 className="text-2xl font-medium text-foreground mb-4">{service.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="border-t border-border pt-6">
                    <h3 className="text-sm font-medium text-foreground mb-3">Areas of Focus:</h3>
                    <ul className="grid grid-cols-2 gap-2">
                      {service.details.map((detail) => (
                        <li key={detail} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">
                Our Therapeutic <span className="italic">Approach</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We integrate multiple evidence-based modalities to create a 
                personalized treatment plan that meets your unique needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Cognitive Behavioral Therapy (CBT)',
                  description: 'Identify and change negative thought patterns that contribute to emotional distress and behavioral challenges.',
                },
                {
                  title: 'Psychodynamic Therapy',
                  description: 'Explore how past experiences shape current behaviors and relationships to promote deeper self-understanding.',
                },
                {
                  title: 'Mindfulness-Based Therapy',
                  description: 'Develop present-moment awareness to reduce stress, manage difficult emotions, and improve overall well-being.',
                },
                {
                  title: 'EMDR (Eye Movement Desensitization and Reprocessing)',
                  description: 'Process traumatic memories through guided eye movements and bilateral stimulation to reduce their emotional impact.',
                },
              ].map((approach) => (
                <article key={approach.title} className="p-6 border-l-2 border-primary/30">
                  <h3 className="text-lg font-medium text-foreground mb-2">{approach.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {approach.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Not Sure Where to Start?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
              Schedule a free consultation call to discuss your needs and 
              learn how we can best support you.
            </p>
            <Link
              href="/appointment"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-background text-foreground rounded-full hover:bg-background/90 transition-colors text-lg"
            >
              Book a Consultation
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
