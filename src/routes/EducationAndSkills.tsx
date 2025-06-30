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
    { name: 'UML', years: '17 years' },
    
    { name: 'C#', years: '17 years' },
    { name: 'Python', years: '17 years' },
    { name: '.NET', years: '17 years' },
    { name: 'Javascript', years: '17 years' },
    { name: 'NodeJS', years: '17 years' },
    { name: 'jQuery', years: '10 years' },
    { name: 'Typescript', years: '10 years' },
    { name: 'AngularJS', years: '8 years' },
    { name: 'React', years: '8 years' },
    { name: 'Team City', years: '7 years' },
    { name: 'Miro', years: '6 years' },
    { name: 'NextJS', years: '6 years' },
    { name: 'Bootstrap', years: '5 years' },
    { name: 'LESS', years: '5 years' },
    { name: 'SASS', years: '5 years' },
    { name: 'Java', years: '6 years' },
    { name: 'BackboneJS', years: '3 years' },
    { name: 'Ruby', years: '2 years' },
    { name: 'PHP', years: '2 years' },   
    { name: 'Vite', years: '1 year' },
  ],
  techniquesAndRoles: [
    { name: 'Technical Reqs', years: '17 years' },
    { name: 'Functional Reqs', years: '17 years' },
    { name: 'Code Review', years: '17 years' },
    { name: 'Release Mgmt', years: '10 years' },
    { name: 'Integration Mgmt', years: '10 years' },
    { name: 'Annotated Specs', years: '10 years' },
    { name: 'Stakeholder Int.', years: '6 years' },
    { name: 'Dev Team Lead', years: '6 years' },
    { name: 'Wireframes', years: '6 years' },
  ],
  tools: [
    { name: 'Jenkins', years: '10 years' },
    { name: 'Confluence', years: '8 years' },
    { name: 'Redmine', years: '8 years' },
    { name: 'Jira', years: '8 years' },
    { name: 'Bamboo', years: '6 years' },
    { name: 'Omnigraffle', years: '5 years' },
    { name: 'Figma', years: '5 years' },
    { name: 'Drupal', years: '3 years' },
    { name: 'Wordpress', years: '2 years' },
    { name: 'Adobe CQS', years: '1 year' },
  ],
};

const colorMap = (years: string): string => {
  // Extract the first number from the years string (e.g., "5 years" -> 5)
  const yearsMatch = years.match(/\d+/);
  const yearsInt = yearsMatch ? parseInt(yearsMatch[0], 10) : 0;

  if (yearsInt >= 15) {
    return 'purple';      // Deepest color for most experience (15+ years)
  } else if (yearsInt >= 10) {
    return 'indigo';      // Rich color for extensive experience (10-14 years)
  } else if (yearsInt >= 5) {
    return 'blue';        // Medium color for intermediate experience (5-9 years)
  } else if (yearsInt >= 3) {
    return 'teal';        // Lighter color for some experience (3-4 years)
  } else if (yearsInt >= 1) {
    return 'emerald';     // Light color for beginner experience (1-2 years)
  } else {
    return 'gray';        // Neutral for minimal experience (<1 year)
  }
}
  


const SkillTag: React.FC<{ name: string; years: string }> = ({ name, years }) => (
  <div className={`bg-${colorMap(years)}-100 text-${colorMap(years)}-700 p-3 rounded-lg shadow hover:shadow-md transition-shadow duration-200`}>
    <div className="flex items-center">
      <span className={`bg-${colorMap(years)}-200 text-${colorMap(years)}-700 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full`}>C</span> {/* Placeholder icon/letter */}
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
