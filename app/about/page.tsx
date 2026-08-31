import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, GraduationCap, Award, Heart } from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { StructuredData } from '@/components/structured-data'
import { generatePageMetadata, therapists as seoTherapists } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata({
  title: 'About Our Practice - Licensed Therapists & Mental Health Professionals',
  description: 'Meet our team of licensed psychologists and therapists at Root & Reflect. Founded in 2014, we provide compassionate, evidence-based mental health care with over 15 years of combined experience.',
  path: '/about'
})

const team = [
  {
    name: 'Dr. Sarah Mitchell',
    role: 'Clinical Director, Licensed Psychologist',
    credentials: 'Ph.D., Licensed Clinical Psychologist',
    specialties: ['Trauma & PTSD', 'Anxiety Disorders', 'Depression'],
    bio: 'Dr. Mitchell founded Root & Reflect with a vision of creating a therapeutic space that honors each person\'s unique journey. With over 15 years of experience, she specializes in trauma-informed care and helping clients reconnect with their authentic selves.',
  },
  {
    name: 'Michael Chen',
    role: 'Senior Therapist, LMFT',
    credentials: 'M.A., Licensed Marriage & Family Therapist',
    specialties: ['Couples Therapy', 'Family Systems', 'Relationship Issues'],
    bio: 'Michael brings warmth and insight to his work with couples and families. His approach combines systemic therapy with attachment-based techniques to help clients build stronger, more fulfilling relationships.',
  },
  {
    name: 'Dr. Amanda Foster',
    role: 'Staff Psychologist',
    credentials: 'Psy.D., Licensed Clinical Psychologist',
    specialties: ['Grief & Loss', 'Life Transitions', 'Identity Exploration'],
    bio: 'Dr. Foster is passionate about helping clients navigate life\'s transitions with grace and resilience. She creates a nurturing environment where clients feel safe to explore their emotions and discover new paths forward.',
  },
]

const values = [
  {
    icon: Heart,
    title: 'Compassion',
    description: 'We approach every client with empathy, understanding, and unconditional positive regard.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We are committed to evidence-based practices and ongoing professional development.',
  },
  {
    icon: GraduationCap,
    title: 'Growth',
    description: 'We believe in the inherent capacity of every person to heal, grow, and thrive.',
  },
]

export default function AboutPage() {
  const breadcrumbData = {
    path: '/about',
    items: [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' }
    ]
  }

  return (
    <>
      <StructuredData 
        type="webpage" 
        data={{
          title: 'About Root & Reflect Psychotherapy Practice',
          description: 'Learn about our licensed therapists and mental health professionals',
          path: '/about',
          breadcrumb: breadcrumbData
        }} 
      />
      <StructuredData type="breadcrumb" data={breadcrumbData} />
      {/* Add individual therapist structured data */}
      {team.map((member, index) => (
        <StructuredData 
          key={member.name}
          type="person" 
          data={{
            id: member.name.toLowerCase().replace(/\s+/g, '-').replace(/\./g, ''),
            name: member.name,
            role: member.role,
            bio: member.bio,
            specialties: member.specialties
          }} 
        />
      ))}
      
      <Navigation />
      
      <main className="pt-24">
        {/* Header */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">
              About Us
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-foreground mb-6 text-balance">
              Rooted in Compassion, <span className="italic">Guided by Expertise</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              At Root & Reflect, we believe that healing happens in relationship. 
              Our team of dedicated therapists creates a warm, supportive environment 
              where you can explore, grow, and flourish.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 px-6 bg-secondary/30">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
                  Our <span className="italic">Story</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Root & Reflect was founded in 2014 with a simple but powerful vision: 
                  to create a therapeutic space where people feel truly seen and heard. 
                  Our name reflects our approach — helping clients explore the roots of 
                  their experiences while developing the capacity for self-reflection.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  What started as a small private practice has grown into a team of 
                  dedicated mental health professionals who share a commitment to 
                  compassionate, evidence-based care. We&apos;ve had the privilege of 
                  supporting hundreds of individuals, couples, and families on their 
                  journeys toward healing.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today, we continue to honor our founding vision while expanding 
                  our services to meet the diverse needs of our community.
                </p>
              </div>
              <div className="bg-card p-10 rounded-2xl border border-border">
                <blockquote className="text-xl md:text-2xl font-light text-foreground leading-relaxed italic">
                  &ldquo;The curious paradox is that when I accept myself just as I am, 
                  then I can change.&rdquo;
                </blockquote>
                <p className="text-muted-foreground mt-6">— Carl Rogers</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">
                Our <span className="italic">Values</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These core values guide everything we do at Root & Reflect.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value) => (
                <div key={value.title} className="text-center p-8">
                  <value.icon className="w-12 h-12 text-primary mx-auto mb-6" strokeWidth={1.5} />
                  <h3 className="text-xl font-medium text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 px-6 bg-secondary/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">
                Meet Our <span className="italic">Team</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our therapists bring diverse expertise and a shared commitment 
                to supporting your mental health journey.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="bg-card p-8 rounded-2xl border border-border/80 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-20 h-20 bg-secondary rounded-full mb-6 flex items-center justify-center">
                    <span className="text-2xl font-light text-foreground">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-medium text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm text-primary mb-2">{member.role}</p>
                  <p className="text-xs text-muted-foreground mb-4">{member.credentials}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {member.bio}
                  </p>
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs font-medium text-foreground mb-2">Specialties:</p>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty) => (
                        <span
                          key={specialty}
                          className="text-xs px-3 py-1 bg-secondary rounded-full text-muted-foreground"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              We&apos;re Here For You
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
              Ready to take the next step? We&apos;d love to learn about your needs 
              and discuss how we can support you.
            </p>
            <Link
              href="/appointment"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-background text-foreground rounded-full hover:bg-background/90 transition-colors text-lg"
            >
              Schedule a Consultation
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
