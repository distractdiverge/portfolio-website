import Link from 'next/link';
import { Metadata } from 'next';
import ProjectCard from '@/components/ProjectCard';

// Update metadata for the projects page
export const metadata: Metadata = {
  title: 'Projects | Astrid Lapinski',
  description:
    'Explore a selection of recent projects by Astrid Lapinski, including a portfolio website and an AI-powered offline research assistant. View details and links to the code.',
  keywords: [
    'portfolio projects',
    'software development',
    'web applications',
    'open source',
    'code samples',
    'software engineering portfolio',
  ],
  openGraph: {
    title: 'Projects | Astrid Lapinski',
    description:
      'Explore a selection of recent projects by Astrid Lapinski. View details and links to the code.',
    type: 'website',
    url: '/projects',
    images: [
      {
        url: '/images/og-projects.jpg',
        width: 1200,
        height: 630,
        alt: 'Projects by Astrid Lapinski',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects | Astrid Lapinski',
    description:
      'Explore a selection of recent projects by Astrid Lapinski. View details and links to the code.',
    images: ['/images/og-projects.jpg'],
  },
  alternates: {
    canonical: '/projects',
  },
};

export default function ProjectsPage() {
  const heroStyle = {
    backgroundImage: "url('https://picsum.photos/id/210/1200/400')", // Placeholder background
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center px-5 py-20 text-white"
        style={heroStyle}
      >
        {/* Overlay */}
        <div className="absolute inset-0 z-0 bg-black/50"></div>

        {/* Content */}
        <div className="container relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="mb-5 text-4xl font-bold md:text-5xl">Projects</h1>
          <p className="mb-8 text-xl text-gray-200 md:text-2xl">
            A selection of my recent work and personal projects.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-md bg-white px-6 py-3 text-lg font-semibold text-gray-900 transition-colors duration-300 hover:bg-gray-100"
          >
            Get In Touch
          </Link>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-16">
          <ProjectCard
            name="Collaborative Text Editor"
            description="An Electron-based desktop application that enables real-time collaborative text editing, featuring AI-powered code generation and task execution capabilities."
            imageUrl="/assets/projects/collab-text-editor.jpg"
            detailsUrl="/projects/collaborative-text-editor"
            githubUrl="https://github.com/distractdiverge/text-ai-collab-tool"
            imagePosition="left"
          />

          <ProjectCard
            name="Portfolio Website"
            description="This website, showcasing my projects, experience, and skills. Built with Next.js, TypeScript, and Tailwind CSS for optimal performance and SEO."
            imageUrl="/assets/projects/PortfolioWebsite_thumb.png"
            detailsUrl="/projects/portfolio-website"
            githubUrl="https://github.com/distractdiverge/portfolio-website"
            imagePosition="right"
          />

          <ProjectCard
            name="Offline Research Team"
            description="An innovative integration of CrewAI with Chainlit, creating a real-time interactive AI development assistant. Features multi-agent system to handle complex development tasks collaboratively with a user-friendly interface."
            imageUrl="/assets/projects/research-team.jpg"
            detailsUrl="/projects/offline-research-team"
            githubUrl="https://github.com/distractdiverge/poc-crewai"
            imagePosition="left"
          />
        </div>
      </div>
    </div>
  );
}
