import Image from 'next/image';
import { Metadata } from 'next';
import Services from '@/components/Services';

// Update metadata for the about page
export const metadata: Metadata = {
  title: 'About | Allie Lapinski',
  description:
    'Learn more about Allie Lapinski, a software engineer and consultant with over 18 years of experience in software development, test automation, and engineering mentorship.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 transition-colors duration-200 dark:bg-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Hero Section */}
        <div className="mb-16 flex flex-col items-center gap-8 md:flex-row">
          <div className="md:w-1/2">
            <h1 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
              Rainbow Fern Consulting
            </h1>
            <div className="prose max-w-none dark:prose-invert">
              <p className="mb-6 text-lg">
                Hi! I&apos;m Allie, founder of Rainbow Fern Consulting.
              </p>
              <p className="mb-6">
                I have worked in the software field for the last 18 years,
                working up the corporate ladder from intern to architect.
              </p>
              <p className="mb-6">
                Now, I focus on taking on remote projects, mentoring, and
                helping develop amazing test automation suites.
              </p>
              <p className="mb-8">
                Take a look below at some recent projects, or details on what I
                offer as services.
              </p>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="relative h-96 w-full overflow-hidden rounded-xl shadow-xl md:h-[32rem]">
              <Image
                src="/assets/AllieLooktoSide.png"
                alt="Allie Lapinski"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>

        {/* Current Projects Section */}
        <section className="mb-20">
          <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
            Current Projects
          </h2>

          <div className="mb-8 grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg dark:bg-gray-800">
              <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                Portfolio Website
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                This site itself. Building out a new professional portfolio
                website using Next.js, TypeScript, and Tailwind CSS.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg dark:bg-gray-800">
              <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                Receipt Parser
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                A series of Python scripts and integration with AI models to
                parse out receipts for budgeting and expense tracking.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg dark:bg-gray-800">
              <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                Statement Summarizer
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                A set of Python scripts to extract and analyze data from bank
                statements, providing useful financial insights and summaries.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="/projects"
              className="inline-block rounded-md bg-primary-600 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-primary-700"
            >
              View All Projects
            </a>
          </div>
        </section>
      </div>

      {/* Services Section */}
      <Services />
    </div>
  );
}
