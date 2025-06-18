import { Metadata } from 'next';

// Update metadata for the experience page
export const metadata: Metadata = {
  title: 'Experience | Allie Lapinski',
  description:
    'Professional experience and work history of Allie Lapinski, showcasing a diverse background in software engineering, test automation, and technical leadership.',
  keywords: [
    'work experience',
    'software engineer',
    'test automation',
    'technical leadership',
    'career history',
    'professional background',
    'Allie Lapinski experience',
  ],
  openGraph: {
    title: 'Experience | Allie Lapinski',
    description:
      'Professional experience and work history of Allie Lapinski, showcasing a diverse background in software engineering and technical leadership.',
    type: 'website',
    url: '/experience',
    images: [
      {
        url: '/images/og-experience.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Experience - Allie Lapinski',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Experience | Allie Lapinski',
    description: 'Professional experience and work history of Allie Lapinski.',
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
            <div
              key={index}
              className="group relative rounded-xl border-l-4 border-blue-500 bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg dark:bg-gray-800 md:p-8"
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
                  <div className="mb-4 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-200">
                    {exp.dates}
                  </div>
                </div>
              </div>

              <ul className="mt-4 space-y-3">
                {exp.responsibilities.map((responsibility, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 mt-1 text-blue-500">•</span>
                    <span className="text-gray-700 dark:text-gray-300">
                      {responsibility}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Decorative element */}
              <div className="absolute -left-1 top-0 h-full w-1 rounded-full bg-gradient-to-b from-blue-500 to-blue-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </div>
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
            className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-blue-700"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}
