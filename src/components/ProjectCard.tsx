import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type ProjectCardProps = {
  name: string;
  description: string;
  imageUrl: string;
  detailsUrl?: string;
  githubUrl?: string;
  imagePosition: 'left' | 'right';
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  imageUrl,
  detailsUrl,
  githubUrl,
  imagePosition = 'left',
}) => {
  // Base classes for the card
  const cardClasses =
    'flex flex-col md:flex-row bg-white dark:bg-gray-800 rounded-lg shadow-lg mb-10 overflow-hidden p-5 items-stretch md:items-center';

  // Image container classes
  const imageContainerBase = 'order-1 w-full md:w-2/5 flex-none mb-5 md:mb-0';
  const imageContainerPosition =
    imagePosition === 'left' ? 'md:order-1 md:mr-5' : 'md:order-2 md:ml-5';

  // Details container classes
  const detailsContainerBase = 'flex flex-col order-2 md:flex-1';
  const detailsContainerPosition =
    imagePosition === 'left' ? 'md:order-2' : 'md:order-1';

  // Button base classes
  const buttonBase =
    'py-2 px-4 rounded-md font-semibold no-underline text-center transition-colors duration-300 ease-in-out';

  return (
    <div className={cardClasses}>
      <div className={`${imageContainerBase} ${imageContainerPosition}`}>
        <div className="relative h-64 w-full md:h-64">
          <Image
            src={imageUrl}
            alt={`${name} project`}
            fill
            className="rounded object-cover"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </div>
      </div>
      <div className={`${detailsContainerBase} ${detailsContainerPosition}`}>
        <h2 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white">
          {name}
        </h2>
        <p className="mb-5 text-base leading-relaxed text-gray-700 dark:text-gray-300">
          {description}
        </p>
        <div className="mt-auto flex items-center gap-3">
          {detailsUrl && (
            <Link
              href={detailsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonBase} border border-gray-700 bg-gray-700 text-white hover:bg-gray-800`}
            >
              Details
            </Link>
          )}
          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonBase} border border-gray-300 bg-gray-100 text-gray-800 hover:bg-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600`}
            >
              GitHub Repo
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
