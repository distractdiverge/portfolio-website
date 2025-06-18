import Image from 'next/image';

const Services = () => {
  const servicesData = [
    {
      title: 'Software Engineering Consulting',
      description:
        'Helping teams with architecture, agile practices, and code reviews.',
    },
    {
      title: 'Software Test Automation',
      description:
        'Building robust, maintainable automated test suites for continuous integration.',
    },
    {
      title: 'Engineering Mentoring',
      description:
        'Guiding up-and-coming engineers and testers in best practices.',
    },
  ];

  return (
    <section
      id="services"
      className="bg-white py-10 transition-colors duration-200 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
          What I Do
        </h2>

        <div className="flex flex-col items-start gap-8 md:flex-row">
          <div className="order-2 w-full md:order-1 md:w-2/5 lg:w-1/3">
            <div className="relative h-64 w-full overflow-hidden rounded-lg shadow-lg md:h-80">
              <Image
                src="/assets/ShadowForest.png"
                alt="Shadow, the resident dog and a very good boy"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
            </div>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              This is Shadow, our resident dog and a very very good boy.
            </p>
          </div>

          <div className="order-1 w-full md:order-2 md:w-3/5 lg:w-2/3">
            <div className="grid gap-6 md:grid-cols-2">
              {servicesData.map((service, index) => (
                <div
                  key={index}
                  className="rounded-lg border-l-4 border-blue-500 bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg dark:bg-gray-800"
                >
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="/contact"
                className="inline-block rounded-md bg-blue-600 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-blue-700"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
