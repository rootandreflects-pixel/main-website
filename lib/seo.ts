// SEO Configuration for Root & Reflect Psychotherapy
// Centralized configuration for all SEO-related metadata and business information

export interface BusinessConfig {
  name: string
  description: string
  phone: string
  email: string
  address: {
    street: string
    city: string
    state: string
    zipCode: string
    full: string
  }
  hours: {
    monday: string
    tuesday: string  
    wednesday: string
    thursday: string
    friday: string
    saturday: string
    sunday: string
  }
  serviceArea: string[]
  social: {
    facebook?: string
    instagram?: string
    linkedin?: string
  }
  credentials: string[]
}

export interface SEOConfig {
  siteUrl: string
  siteName: string
  siteDescription: string
  defaultImage: string
  twitterHandle?: string
  locale: string
  business: BusinessConfig
}

// TODO: Replace placeholder values with actual business information
export const seoConfig: SEOConfig = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://rootandreflect.ca',
  siteName: 'Root & Reflect',
  siteDescription: 'Root & Reflect Psychotherapy offers compassionate, evidence-based therapy services to help you navigate life\'s challenges and foster personal growth.',
  defaultImage: '/placeholder-logo.svg',
  locale: 'en_US',
  
  business: {
    name: 'Root & Reflect Psychotherapy',
    description: 'Professional psychotherapy practice offering individual, couples, family, and trauma-informed therapy services.',
    
    // PLACEHOLDER - Replace with actual business contact information
    phone: '(555) 123-4567',
    email: 'hello@rootandreflect.ca',
    address: {
      street: '123 Healing Lane, Suite 200',
      city: 'Wellness City', 
      state: 'WC',
      zipCode: '12345',
      full: '123 Healing Lane, Suite 200, Wellness City, WC 12345'
    },
    
    hours: {
      monday: '09:00-19:00',
      tuesday: '09:00-19:00',
      wednesday: '09:00-19:00', 
      thursday: '09:00-19:00',
      friday: '09:00-19:00',
      saturday: '09:00-14:00',
      sunday: 'closed'
    },
    
    // PLACEHOLDER - Replace with actual service areas
    serviceArea: ['Wellness City', 'Nearby Town', 'Metro Area'],
    
    social: {
      // PLACEHOLDER - Add actual social media URLs when available
      facebook: undefined,
      instagram: undefined,
      linkedin: undefined
    },
    
    credentials: [
      'Licensed Clinical Psychologists',
      'Licensed Marriage & Family Therapists',
      'Trauma-Informed Care Specialists',
      'EMDR Certified Therapists'
    ]
  }
}

export const services = [
  {
    name: 'Individual Therapy',
    description: 'Personal one-on-one sessions tailored to your unique needs and goals. We create a safe, confidential space where you can explore your thoughts, feelings, and experiences.',
    specialties: ['Anxiety & Depression', 'Life Transitions', 'Self-Esteem & Identity', 'Stress Management']
  },
  {
    name: 'Couples Therapy', 
    description: 'Strengthen your relationship through improved communication and deeper understanding. We help partners navigate challenges and build lasting connection.',
    specialties: ['Communication Skills', 'Conflict Resolution', 'Intimacy & Connection', 'Trust Rebuilding']
  },
  {
    name: 'Family Therapy',
    description: 'Address family dynamics and improve relationships between family members. We work together to create healthier patterns of interaction.',
    specialties: ['Parent-Child Relationships', 'Blended Family Issues', 'Generational Patterns', 'Family Communication']
  },
  {
    name: 'Trauma-Informed Care',
    description: 'Gentle, specialized support for processing difficult experiences. We use evidence-based approaches to help you heal from past trauma.',
    specialties: ['EMDR Therapy', 'Somatic Experiencing', 'Attachment Work', 'Safety & Stabilization']
  },
  {
    name: 'Anxiety & Depression Treatment',
    description: 'Evidence-based treatment for anxiety disorders and depression. We help you understand your symptoms and develop effective coping strategies.',
    specialties: ['Cognitive Behavioral Therapy', 'Mindfulness-Based Approaches', 'Behavioral Activation', 'Relaxation Techniques']
  },
  {
    name: 'Grief & Loss Support',
    description: 'Compassionate support through life\'s most difficult losses. We honor your grief while helping you find a path forward.',
    specialties: ['Bereavement Support', 'Complicated Grief', 'Life Transitions', 'Meaning-Making']
  }
] as const

export const therapists = [
  {
    name: 'Dr. Sarah Mitchell',
    role: 'Clinical Director, Licensed Psychologist',
    credentials: 'Ph.D., Licensed Clinical Psychologist',
    specialties: ['Trauma & PTSD', 'Anxiety Disorders', 'Depression'],
    bio: 'Dr. Mitchell founded Root & Reflect with a vision of creating a therapeutic space that honors each person\'s unique journey. With over 15 years of experience, she specializes in trauma-informed care and helping clients reconnect with their authentic selves.'
  },
  {
    name: 'Michael Chen',
    role: 'Senior Therapist, LMFT', 
    credentials: 'M.A., Licensed Marriage & Family Therapist',
    specialties: ['Couples Therapy', 'Family Systems', 'Relationship Issues'],
    bio: 'Michael brings warmth and insight to his work with couples and families. His approach combines systemic therapy with attachment-based techniques to help clients build stronger, more fulfilling relationships.'
  },
  {
    name: 'Dr. Amanda Foster',
    role: 'Staff Psychologist',
    credentials: 'Psy.D., Licensed Clinical Psychologist', 
    specialties: ['Grief & Loss', 'Life Transitions', 'Identity Exploration'],
    bio: 'Dr. Foster is passionate about helping clients navigate life\'s transitions with grace and resilience. She creates a nurturing environment where clients feel safe to explore their emotions and discover new paths forward.'
  }
] as const

// Helper function to generate page metadata
export function generatePageMetadata({
  title,
  description,
  path = '',
  image,
  noIndex = false
}: {
  title: string
  description: string
  path?: string
  image?: string
  noIndex?: boolean
}) {
  const fullTitle = `${title} | ${seoConfig.siteName}`
  const url = `${seoConfig.siteUrl}${path}`
  const ogImage = image || seoConfig.defaultImage

  return {
    title: fullTitle,
    description,
    canonical: url,
    robots: noIndex ? 'noindex, nofollow' : 'index, follow',
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: seoConfig.siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${title} - ${seoConfig.siteName}`
        }
      ],
      locale: seoConfig.locale,
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
      creator: seoConfig.twitterHandle
    }
  }
}

// Helper to format business hours for structured data
export function formatBusinessHours() {
  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
  return days.map(day => {
    const hours = seoConfig.business.hours[day as keyof typeof seoConfig.business.hours]
    if (hours === 'closed') return null
    
    const dayAbbr = day.substring(0, 2).toUpperCase()
    return `${dayAbbr} ${hours}`
  }).filter(Boolean)
}