import { Metadata } from 'next';
import { useMemo } from 'react';

// Update metadata for the experience page
export const metadata: Metadata = {
  title: 'Experience | Astrid Lapinski',
  description:
    'Professional experience and work history of Astrid Lapinski, showcasing a diverse background in software engineering, test automation, and technical leadership.',
  keywords: [
    'work experience',
    'software engineer',
    'test automation',
    'technical leadership',
    'career history',
    'professional background',
    'Astrid Lapinski experience',
  ],
  openGraph: {
    title: 'Experience | Astrid Lapinski',
    description:
      'Professional experience and work history of Astrid Lapinski, showcasing a diverse background in software engineering and technical leadership.',
    type: 'website',
    url: '/experience',
    images: [
      {
        url: '/images/og-experience.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Experience - Astrid Lapinski',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Experience | Astrid Lapinski',
    description: 'Professional experience and work history of Astrid Lapinski.',
    images: ['/images/og-experience.jpg'],
  },
  alternates: {
    canonical: '/experience',
  },
};

// Define a type for individual experience items
type ExperienceItem = {
  title: string;
  company: string;
  location?: string;
  dates: string;
  responsibilities: string[];
};

// Sample data based on the original Experience.tsx
const experiences: ExperienceItem[] = [
  {
    title: 'Independent Contractor & Software Engineer',
    company: 'Self-Employed, Remote',
    dates: 'March 2023 - Present',
    responsibilities: [
      'Research and Prototyping - Explored AI/ML integrations (OpenAI) and developed software prototypes (e.g. local AutoGPT for long-term tasks), Set up local instances of popular LLMs (Llama, OpenAI) for advanced experimentation.',
      "Software Development - Built a proof-of-concept Python project that reduced bank statement reviews from days to minutes, and developed a NodeJS portfolio website, deployed and managed by Netlify's serverless infrastructure.",
      'Professional Development - Established new work processes, oversaw task and project management, and initiated LLC formation.',
      'Client Engagement - Met with prospective clients, to discuss process, pricing and overall timelines and deliverable expectations.',
    ],
  },
  {
    title:
      'Principal Technical Staff (Software Architecture) for Credit Platform',
    company: 'PayPal, Conshohocken & Remote',
    dates: '2019 - March 2023',
    responsibilities: [
      'Member of the architecture team guiding the credit platform.',
      'Responsible for creating high-level architectures and plans to implement product needs.',
      'Worked closely with Product and Senior Engineers to ensure that the technical solution meets architectural goals of the credit platform.',
      'Mentored senior engineers interested in architectural path.',
    ],
  },
  {
    title: 'Senior Engineer in Business Financing',
    company: 'PayPal, Conshohocken & Remote',
    dates: '2017 - 2019',
    responsibilities: [
      'Led a small focused team of 3 engineers and 1 QA engineer in management of all front-end projects such as internal tools, and customer facing websites.',
      'Spent part of this role leading Swift Financial engineering integration with PayPal Credit.',
      'Led architectural solutions for strategic projects to enable PayPal integration.',
    ],
  },
  {
    title: 'Lead Software Engineer',
    company: 'PayPal, Conshohocken & Remote',
    dates: '2016 - 2017',
    responsibilities: [
      'Led a small focused team of 3 engineers and 1 QA engineer in management of all front-end projects such as internal tools, and customer facing websites.',
      'Spent part of this role leading Swift Financial engineering integration with PayPal Credit.',
      'Led architectural solutions for strategic projects to enable PayPal integration.',
    ],
  },
  {
    title: 'Senior Software Engineer',
    company: 'Swift Capital, Conshohocken',
    dates: '2014 - 2015',
    responsibilities: [
      'Full Stack Developer and member of the .NET Agile Web Development Team.',
      'Worked as a Senior Developer in completing a new website designed to offer short-term business loans to small businesses.',
      'Primary role was to support development in Angular JS and ASP.NET on the server side.',
      'During this time, I brought in more modern front-end build tools using gulp and enriched the existing front-end development techniques.',
    ],
  },
  {
    title: 'Principal Developer',
    company: 'Razorfish Healthware, Philadelphia',
    dates: '2012 - 2014',
    responsibilities: [
      'Full Stack Developer with focus on user interaction with software as well as overall software architecture.',
      'Designed numerous .NET / C# solutions (including front and back end architectures).',
      'Worked closely with the client to determine the optimal UI/UX experience of a software platform.',
      'Worked as a lead developer / technical architect to manage remote teams of developers across europe and the US.',
    ],
  },
  {
    title: 'Senior Developer',
    company: 'Razorfish Health, Philadelphia',
    dates: '2010 - 2012',
    responsibilities: [
      'Full Stack developer with a focus on User Experience.',
      'Worked closely with the client to determine UI / UX, and Information Architecture',
      'Mentored Junior Engineers',
      'Responsible for Interviewing Interns',
    ],
  },
  {
    title: 'Presentation Layer Developer',
    company: 'Avenue A | Razorfish, Philadelphia',
    dates: '2007 - 2010',
    responsibilities: [
      'Front-End Developer with focus on client-side technologies and architectures.',
      'Worked with HTML, CSS, JS in creating front-end solutions.',
      'Worked on backend solutions as well as front-end, focus on display of content via quick server-side frameworks.',
    ],
  },
];

// Color definitions based on the Progress Pride flag
const flagColors = {
  // Main rainbow colors
  purple: { border: 'border-purple-500', bg: 'bg-purple-100', text: 'text-purple-800', darkBg: 'bg-purple-900/30', darkText: 'text-purple-200', gradientFrom: 'from-purple-500', gradientTo: 'from-purple-400' },
  blue: { border: 'border-blue-500', bg: 'bg-blue-100', text: 'text-blue-800', darkBg: 'bg-blue-900/30', darkText: 'text-blue-200', gradientFrom: 'from-blue-500', gradientTo: 'from-blue-400' },
  green: { border: 'border-green-500', bg: 'bg-green-100', text: 'text-green-800', darkBg: 'bg-green-900/30', darkText: 'text-green-200', gradientFrom: 'from-green-500', gradientTo: 'from-green-400' },
  yellow: { border: 'border-yellow-500', bg: 'bg-yellow-100', text: 'text-yellow-800', darkBg: 'bg-yellow-900/30', darkText: 'text-yellow-200', gradientFrom: 'from-yellow-500', gradientTo: 'from-yellow-400' },
  orange: { border: 'border-orange-500', bg: 'bg-orange-100', text: 'text-orange-800', darkBg: 'bg-orange-900/30', darkText: 'text-orange-200', gradientFrom: 'from-orange-500', gradientTo: 'from-orange-400' },
  red: { border: 'border-red-500', bg: 'bg-red-100', text: 'text-red-800', darkBg: 'bg-red-900/30', darkText: 'text-red-200', gradientFrom: 'from-red-500', gradientTo: 'from-red-400' },
  // Additional colors from Progress Pride flag
  black: { border: 'border-gray-900', bg: 'bg-gray-100', text: 'text-gray-900', darkBg: 'bg-gray-800/30', darkText: 'text-gray-200', gradientFrom: 'from-gray-900', gradientTo: 'from-gray-700' },
  brown: { border: 'border-amber-800', bg: 'bg-amber-100', text: 'text-amber-900', darkBg: 'bg-amber-900/30', darkText: 'text-amber-200', gradientFrom: 'from-amber-800', gradientTo: 'from-amber-600' },
  // Trans and additional colors (reserved for future use)
  transBlue: { border: 'border-sky-400', bg: 'bg-sky-100', text: 'text-sky-800', darkBg: 'bg-sky-900/30', darkText: 'text-sky-200', gradientFrom: 'from-sky-400', gradientTo: 'from-sky-300' },
  transPink: { border: 'border-pink-300', bg: 'bg-pink-100', text: 'text-pink-800', darkBg: 'bg-pink-900/30', darkText: 'text-pink-200', gradientFrom: 'from-pink-300', gradientTo: 'from-pink-200' },
  white: { border: 'border-gray-200', bg: 'bg-gray-50', text: 'text-gray-700', darkBg: 'bg-gray-700/30', darkText: 'text-gray-200', gradientFrom: 'from-gray-200', gradientTo: 'from-gray-100' },
};

// Map each experience to a specific color
const experienceColors = [
  'brown',     // Independent Contractor & Software Engineer (Self-Employed)
  'black',     // Principal Technical Staff (PayPal)
  'red',       // Senior Engineer in Business Financing (PayPal)
  'orange',    // Lead Software Engineer (PayPal)
  'yellow',    // Senior Software Engineer (Swift Capital)
  'green',     // Principal Developer (Razorfish Healthware)
  'blue',      // Senior Developer (Razorfish Health)
  'purple',    // Presentation Layer Developer (Avenue A | Razorfish)
  // Future experiences will use these colors in order:
  // 'transBlue',
  // 'transPink',
  // 'white'
];

const ExperienceItem = ({ exp, index }: { exp: ExperienceItem; index: number }) => {
  // Get the color for this experience, or default to purple if not found
  const colorName = experienceColors[index] || 'purple';
  const colors = flagColors[colorName as keyof typeof flagColors] || flagColors.purple;

  return (
    <div
      className={`group relative rounded-xl border-l-4 ${colors.border} bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg dark:bg-gray-800 md:p-8`}
      data-aos="fade-up"
      data-aos-delay={index * 50}
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="flex-1">
          <h2 className="mb-1 text-2xl font-bold text-gray-900 dark:text-white">
            {exp.title}
          </h2>
          <div className="mb-3 flex flex-col text-lg text-gray-600 dark:text-gray-300 sm:flex-row sm:items-center">
            <span className="font-medium">{exp.company}</span>
            {exp.location && (
              <>
                <span className="mx-2 hidden sm:inline">•</span>
                <span>{exp.location}</span>
              </>
            )}
          </div>
          <div className={`mb-4 inline-block rounded-full ${colors.bg} px-3 py-1 text-sm font-medium ${colors.text} dark:${colors.darkBg} dark:${colors.darkText}`}>
            {exp.dates}
          </div>
        </div>
      </div>

      <ul className="mt-4 space-y-3">
        {exp.responsibilities.map((responsibility, i) => (
          <li key={i} className="flex items-start">
            <span className={`mr-2 mt-1 ${colors.text} dark:${colors.darkText}`}>•</span>
            <span className="text-gray-700 dark:text-gray-300">
              {responsibility}
            </span>
          </li>
        ))}
      </ul>

      {/* Decorative element */}
      <div className={`absolute -left-1 top-0 h-full w-1 rounded-full bg-gradient-to-b ${colors.gradientFrom} ${colors.gradientTo} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}></div>
    </div>
  );
};

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-white px-5 py-10 text-gray-800 transition-colors duration-200 dark:bg-gray-900 dark:text-gray-100">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-12 text-center md:mb-16">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            Professional Experience
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
            A journey through my professional career, highlighting key roles,
            responsibilities, and achievements.
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} exp={exp} index={index} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
            Want to know more about my experience?
          </h3>
          <p className="mx-auto mb-6 max-w-2xl text-gray-600 dark:text-gray-300">
            Feel free to reach out for a detailed resume or to discuss how I can
            contribute to your team.
          </p>
          <a
            href="/contact"
            className="inline-block rounded-lg bg-primary-600 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-primary-700"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}
