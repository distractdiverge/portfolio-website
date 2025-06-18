import { Metadata } from 'next';
import ContactForm from './ContactForm';

// Update metadata for the contact page
export const metadata: Metadata = {
  title: 'Contact | Allie Lapinski',
  description:
    "Get in touch with Allie Lapinski to discuss potential projects, collaborations, or mentorship opportunities. Let's build something impactful together.",
  keywords: [
    'contact Allie Lapinski',
    'hire software engineer',
    'collaboration inquiry',
    'mentorship request',
    'project discussion',
    'freelance developer',
    'technical consultant',
    'software development services',
  ],
  openGraph: {
    title: 'Contact | Allie Lapinski',
    description:
      'Get in touch with Allie Lapinski to discuss potential projects, collaborations, or mentorship opportunities.',
    type: 'website',
    url: '/contact',
    images: [
      {
        url: '/images/og-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Allie Lapinski',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Allie Lapinski',
    description:
      'Get in touch to discuss potential projects, collaborations, or mentorship opportunities.',
    images: ['/images/og-contact.jpg'],
  },
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
