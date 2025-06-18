import Image from 'next/image';
import { Metadata } from 'next';

// Update metadata for the education & skills page
export const metadata: Metadata = {
  title: 'Education & Skills | Allie Lapinski',
  description:
    'Discover the educational background and extensive skill set of Allie Lapinski, including proficiency in C#, Python, React, and various development tools and techniques.',
  keywords: [
    'education',
    'skills',
    'technical skills',
    'software development',
    'programming languages',
    'web development',
    'Allie Lapinski skills',
  ],
  openGraph: {
    title: 'Education & Skills | Allie Lapinski',
    description:
      'Discover the educational background and technical skills of Allie Lapinski, including expertise in software development, test automation, and engineering best practices.',
    type: 'website',
    url: '/education',
    images: [
      {
        url: '/images/og-education.jpg',
        width: 1200,
        height: 630,
        alt: 'Education & Skills - Allie Lapinski',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Education & Skills | Allie Lapinski',
    description:
      'Discover the educational background and technical skills of Allie Lapinski.',
    images: ['/images/og-education.jpg'],
  },
  alternates: {
    canonical: '/education',
  },
};

// Types
type EducationItem = {
  degree: string;
  institution: string;
  year: string;
};

type SkillItem = {
  name: string;
  years: string;
};

type SkillsData = {
  languagesAndFrameworks: SkillItem[];
  techniquesAndRoles: SkillItem[];
  tools: SkillItem[];
};

// Data
const educationData: EducationItem[] = [
  {
    degree: 'Masters of Science in Software Engineering',
    institution: 'Drexel, Philadelphia',
    year: '2017',
  },
  {
    degree: 'Bachelors of Science in Computer Science',
    institution: 'Drexel, Philadelphia',
    year: '2008',
  },
];

const skillsData: SkillsData = {
  languagesAndFrameworks: [
    { name: 'C#', years: '17 years' },
    { name: 'Python', years: '17 years' },
    { name: 'Java', years: '17 years' },
    { name: 'Ruby', years: '17 years' },
    { name: 'PHP', years: '17 years' },
    { name: 'Javascript', years: '17 years' },
    { name: 'NodeJS', years: '17 years' },
    { name: 'Typescript', years: '17 years' },
    { name: '.NET', years: '17 years' },
    { name: 'React', years: '17 years' },
    { name: 'BackboneJS', years: '17 years' },
    { name: 'AngularJS', years: '17 years' },
    { name: 'NextJS', years: '17 years' },
    { name: 'Vite', years: '17 years' },
    { name: 'Bootstrap', years: '17 years' },
    { name: 'LESS', years: '17 years' },
    { name: 'SASS', years: '17 years' },
    { name: 'UML', years: '17 years' },
    { name: 'Miro', years: '17 years' },
    { name: 'Team City', years: '17 years' },
    { name: 'Storybook', years: '17 years' },
    { name: 'jQuery', years: '17 years' },
  ],
  techniquesAndRoles: [
    { name: 'Wireframes', years: '17 years' },
    { name: 'Technical Reqs', years: '17 years' },
    { name: 'Annotated Specs', years: '17 years' },
    { name: 'Functional Reqs', years: '17 years' },
    { name: 'Release Mgmt', years: '17 years' },
    { name: 'Code Review', years: '17 years' },
    { name: 'Integration Mgmt', years: '17 years' },
    { name: 'Stakeholder Int.', years: '17 years' },
    { name: 'Dev Team Lead', years: '17 years' },
  ],
  tools: [
    { name: 'Confluence', years: '17 years' },
    { name: 'Bamboo', years: '17 years' },
    { name: 'Jenkins', years: '17 years' },
    { name: 'Adobe CQS', years: '17 years' },
    { name: 'Drupal', years: '17 years' },
    { name: 'Wordpress', years: '17 years' },
    { name: 'Omnigraffle', years: '17 years' },
    { name: 'Figma', years: '17 years' },
    { name: 'Redmine', years: '17 years' },
    { name: 'Jira', years: '17 years' },
  ],
};

// Components
const SkillTag = ({ name, years }: SkillItem) => (
  <div className="rounded-lg bg-purple-100 p-3 text-purple-700 shadow transition-shadow duration-200 hover:shadow-md dark:bg-purple-900/50 dark:text-purple-200">
    <div className="flex items-center">
      <span className="mr-2 rounded-full bg-purple-200 px-2.5 py-0.5 text-xs font-semibold text-purple-700 dark:bg-purple-800 dark:text-purple-200">
        {name[0].toUpperCase()}
      </span>
      <div>
        <p className="text-sm font-semibold">{name}</p>
        <p className="text-xs text-purple-600 dark:text-purple-400">{years}</p>
      </div>
    </div>
  </div>
);

const EducationItem = ({ degree, institution, year }: EducationItem) => (
  <li className="mb-4 last:mb-0">
    <div className="flex flex-col sm:flex-row sm:items-baseline">
      <span className="text-lg font-semibold text-gray-900 dark:text-white">
        {degree}
      </span>
      <span className="hidden text-gray-400 sm:mx-2 sm:block">•</span>
      <span className="text-gray-600 dark:text-gray-300">{institution}</span>
      <span className="hidden text-gray-400 sm:mx-2 sm:block">•</span>
      <span className="text-sm text-gray-500 dark:text-gray-400">{year}</span>
    </div>
  </li>
);

export default function EducationAndSkills() {
  return (
    <div className="min-h-screen bg-white text-gray-800 transition-colors duration-200 dark:bg-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-purple-900/80 dark:from-black/70 dark:to-black/70">
          <Image
            src="/assets/education-hero.jpg"
            alt="Education background"
            fill
            className="object-cover mix-blend-overlay"
            priority
            sizes="100vw"
          />
        </div>

        <div className="container relative mx-auto px-6 text-center">
          <div className="mx-auto inline-block max-w-2xl rounded-lg bg-white/90 p-8 shadow-lg backdrop-blur-sm dark:bg-gray-900/80 md:p-10">
            <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
              Education & Skills
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 md:text-xl">
              My academic background and technical expertise that I&apos;ve
              developed over 17+ years in software development.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-6xl px-6 py-12 md:py-16">
        {/* Education Section */}
        <section className="mb-16">
          <h2 className="mb-8 border-b border-gray-200 pb-2 text-3xl font-bold text-gray-900 dark:border-gray-700 dark:text-white">
            Education
          </h2>
          <ul className="space-y-6">
            {educationData.map((edu, index) => (
              <EducationItem key={index} {...edu} />
            ))}
          </ul>
        </section>

        {/* Skills Sections */}
        <section className="space-y-16">
          <div>
            <h2 className="mb-8 border-b border-gray-200 pb-2 text-3xl font-bold text-gray-900 dark:border-gray-700 dark:text-white">
              Languages and Frameworks
            </h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {skillsData.languagesAndFrameworks.map((skill, index) => (
                <SkillTag key={index} {...skill} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-8 border-b border-gray-200 pb-2 text-3xl font-bold text-gray-900 dark:border-gray-700 dark:text-white">
              Techniques and Roles
            </h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {skillsData.techniquesAndRoles.map((skill, index) => (
                <SkillTag key={index} {...skill} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-8 border-b border-gray-200 pb-2 text-3xl font-bold text-gray-900 dark:border-gray-700 dark:text-white">
              Tools
            </h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {skillsData.tools.map((skill, index) => (
                <SkillTag key={index} {...skill} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
