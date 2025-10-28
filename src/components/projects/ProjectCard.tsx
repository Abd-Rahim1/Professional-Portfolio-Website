import React, { useState } from 'react';
import { Project } from '../../types';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div 
      className={`bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 ${
        isExpanded ? 'ring-2 ring-blue-500 dark:ring-blue-400' : ''
      }`}
    >
      {/* Project Image - Always visible */}
      <div 
        className="h-48 overflow-hidden cursor-pointer"
        onClick={toggleExpand}
      >
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      
      {/* Project Details */}
      <div className="p-4">
        {/* Header - Always visible */}
        <div 
          className="flex justify-between items-start cursor-pointer"
          onClick={toggleExpand}
        >
          <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 pr-2">
            {project.title}
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 px-2 py-1 rounded">
              {project.domain}
            </span>
            <button 
              className="text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                toggleExpand();
              }}
            >
              {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
          </div>
        </div>

        {/* Collapsed State - Short description */}
        {!isExpanded && (
          <p className="text-slate-600 dark:text-slate-300 mt-2 text-sm line-clamp-2">
            {project.description}
          </p>
        )}

        {/* Expanded Content - Animated */}
        <div 
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="pt-4">
            {/* Full Description */}
            <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 leading-relaxed">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="mb-4">
              <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Technologies Used:
              </h4>
              <div className="flex flex-wrap gap-1">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="text-xs bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-3 pt-2 border-t border-slate-200 dark:border-slate-600">
              {project.projectLink && (
                <a 
                  href={project.projectLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors text-sm font-medium"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Project <ExternalLink size={14} className="ml-1" />
                </a>
              )}

              {project.demoLink && (
                <a 
                  href={project.demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-200 transition-colors text-sm font-medium"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Demo <ExternalLink size={14} className="ml-1" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Links in collapsed state */}
        {!isExpanded && (
          <div className="mt-3 flex gap-3">
            {project.projectLink && (
              <a 
                href={project.projectLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors text-sm font-medium"
                onClick={(e) => e.stopPropagation()}
              >
                View Project <ExternalLink size={14} className="ml-1" />
              </a>
            )}

            {project.demoLink && (
              <a 
                href={project.demoLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-200 transition-colors text-sm font-medium"
                onClick={(e) => e.stopPropagation()}
              >
                View Demo <ExternalLink size={14} className="ml-1" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;