import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

// Update metadata for the home page
export const metadata: Metadata = {
  title: 'Allie Lapinski | Software & Automation Consultant',
  description:
    'Welcome to the portfolio of Allie Lapinski. Specializing in software development, test automation, and project mentorship with over 18 years of experience.',
};

export default function Home() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-8 md:px-8 lg:px-12">
      <div className="rounded-lg p-6 md:p-8">
        <h1 className="mb-8 text-3xl font-semibold text-gray-900 dark:text-white md:text-4xl">
          Rainbow Fern Consulting
        </h1>

        <div className="mb-12 flex flex-col sm:flex-row sm:items-start">
          <div className="w-full mb-6 sm:mb-0 sm:w-2/5 sm:order-last sm:ml-8">
            <div className="relative h-64 w-full max-w-[280px] mx-auto overflow-hidden rounded-lg md:h-80 md:max-w-[320px]">
              <Image
                src="/assets/AllieLooktoSide.png"
                alt="Allie Lapinski"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="rounded-lg object-cover object-top"
                priority
              />
            </div>
          </div>

          <div className="prose max-w-none dark:prose-invert w-full sm:w-3/5 sm:order-first">
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              Hi! I&apos;m Allie, founder of Rainbow Fern consulting.
            </p>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              I have worked in the software field for the last 18 years working
              up the corp ladder from intern to architect.
            </p>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              Now, I am focusing on taking on remote projects, mentoring and
              helping develop amazing test automation suites.
            </p>
            <p className="mb-8 text-gray-700 dark:text-gray-300">
              Take a look below at some recent projects, or details on what I
              offer as services.
            </p>
          </div>
        </div>

        <section className="my-12">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
            Current Projects
          </h2>
          <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Project Card 1 */}
            <div className="rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
              <h3 className="mb-3 text-lg font-bold text-gray-900 dark:text-white">
                Portfolio Website
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                This site itself. Building out a new professional portfolio
                website.
              </p>
            </div>

            {/* Project Card 2 */}
            <div className="rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
              <h3 className="mb-3 text-lg font-bold text-gray-900 dark:text-white">
                Receipt Parser
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                A series of python scripts and integration with AI models to
                parse out receipts for budgeting.
              </p>
            </div>

            {/* Project Card 3 */}
            <div className="rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
              <h3 className="mb-3 text-lg font-bold text-gray-900 dark:text-white">
                Statement Summarizer
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                A set of python scripts to extract data from bank statements and
                summarize.
              </p>
            </div>
          </div>

          <Link
            href="/projects"
            className="inline-block rounded-md bg-blue-600 px-6 py-2 font-semibold text-white transition-colors hover:bg-blue-700"
          >
            See My Projects
          </Link>
        </section>

        <div className="my-12 border-t border-gray-200 dark:border-gray-700"></div>

        {/* Services section will be added here */}
        <section>
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
            Services
          </h2>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            I offer a range of services including software development, test
            automation, and technical mentoring. More details coming soon...
          </p>
        </section>
      </div>
    </div>
  );
}
