import React from 'react';
import { Project } from '../../types';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-slate-800">{project.title}</h3>
          <span className="text-xs font-medium bg-slate-100 text-slate-700 px-2 py-1 rounded">
            {project.domain}
          </span>
        </div>
        
        <p className="text-slate-600 mt-2 text-sm line-clamp-3">
          {project.description}
        </p>
        
        <div className="mt-4 flex flex-wrap gap-1">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium"
        >
          View Project <ExternalLink size={14} className="ml-1" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;