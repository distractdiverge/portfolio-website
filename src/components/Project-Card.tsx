import React from 'react';
import "./project-card.css";

type ProjectCardProps = {
    name: string,
    description: string,
};

const ProjectCardComponent : React.FC<ProjectCardProps> = ({name, description}) => {
    return (
        <div className="project-card">
            <h2 className="title">{name}</h2>
            <div className="description">{description}</div>
        </div>
    );
};

export default ProjectCardComponent;