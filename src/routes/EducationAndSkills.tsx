import React from 'react';
import useSeo from '../hooks/useSeo.tsx';

const educationData = [
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

const skillsData = {
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
    { name: 'React', years: '17 years' }, // Replaced KrokenJS
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
    { name: 'Storybook', years: '17 years' }, // Replaced Story
    { name: 'jQuery', years: '17 years' },
    // Add more as needed
  ],
  techniquesAndRoles: [
    { name: 'Wireframes', years: '17 years' },
    { name: 'Technical Reqs', years: '17 years' },
    { name: 'Annotated Specs', years: '17 years' },
    { name: 'Functional Reqs', years: '17 years' },
    { name: 'Release Mgmt', years: '17 years' },
    { name: 'Code Review', years: '17 years' },
    { name: 'Integration Mgmt', years: '17 years' },
    { name: 'Stakeholder Int.', years: '17 years' }, // Abbreviated for space
    { name: 'Dev Team Lead', years: '17 years' },
    // Add more as needed
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
    // Add more as needed
  ],
};

const SkillTag: React.FC<{ name: string; years: string }> = ({ name, years }) => (
  <div className="bg-purple-100 text-purple-700 p-3 rounded-lg shadow hover:shadow-md transition-shadow duration-200">
    <div className="flex items-center">
      <span className="bg-purple-200 text-purple-700 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">C</span> {/* Placeholder icon/letter */}
      <div>
        <p className="font-semibold text-sm">{name}</p>
        <p className="text-xs">{years}</p>
      </div>
    </div>
  </div>
);

function EducationAndSkills() {
  useSeo({ 
    title: 'Education & Skills | Alex Lapinski',
    description: 'Discover the educational background and extensive skill set of Alex Lapinski, including proficiency in C#, Python, React, and various development tools and techniques.' 
  });

  const heroBackgroundImage = 'https://images.unsplash.com/photo-1550399105-c4db5fb85c18?ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80'; // Placeholder image

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center py-24 md:py-32 text-white"
        style={{ backgroundImage: `url(${heroBackgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-6 text-center">
          <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-sm p-8 md:p-10 rounded-lg inline-block max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Education</h1>
            <p className="text-lg md:text-xl text-gray-700">
              Subheading that sets up context, shares more info about the author, or generally gets people psyched to keep reading
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 py-12 md:py-16 max-w-4xl">
        {/* Education List */}
        <div className="mb-12 md:mb-16">
          <ul className="space-y-3">
            {educationData.map((edu, index) => (
              <li key={index} className="text-lg text-gray-700 list-disc list-inside ml-4">
                <span className="font-semibold">{edu.degree}</span> | {edu.institution} | {edu.year}
              </li>
            ))}
          </ul>
        </div>

        {/* Skills Sections */}
        <div className="space-y-12 md:space-y-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Languages and Frameworks</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skillsData.languagesAndFrameworks.map((skill) => (
                <SkillTag key={skill.name} name={skill.name} years={skill.years} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Techniques and Roles</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skillsData.techniquesAndRoles.map((skill) => (
                <SkillTag key={skill.name} name={skill.name} years={skill.years} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Tools</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skillsData.tools.map((skill) => (
                <SkillTag key={skill.name} name={skill.name} years={skill.years} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationAndSkills;
