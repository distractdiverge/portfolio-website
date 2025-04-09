import React from "react";

const Services = () => {
  const servicesData = [
    {
      title: "Software Engineering Consulting",
      description:
        "Helping teams with architecture, agile practices, and code reviews."
    },
    {
      title: "Software Test Automation",
      description:
        "Building robust, maintainable automated test suites for continuous integration."
    },
    {
      title: "Engineering Mentoring",
      description:
        "Guiding up-and-coming engineers and testers in best practices."
    },
  ];

  return (
    <section id="services" className="bg-green-50 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">What I Do</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-4 shadow-sm bg-white"
            >
              <h3 className="text-xl font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;