import React from 'react';
import { useUserData } from '../../context/UserDataContext';
import { ExternalLink } from 'lucide-react';

const ProjectsList: React.FC = () => {
  const { userData } = useUserData();

  return (
    <div className="space-y-6">
      {userData.projects.map((project) => (
        <div key={project.id} className="border-b border-slate-200 pb-6 last:border-b-0 last:pb-0">
          <div className="flex justify-between items-start">
            <h4 className="text-lg font-medium text-slate-800">{project.title}</h4>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 flex items-center text-sm transition-colors"
            >
              View Project <ExternalLink size={14} className="ml-1" />
            </a>
          </div>
          
          <p className="text-slate-600 mt-2">{project.description}</p>
          
          <div className="mt-3">
            <span className="text-sm font-medium text-slate-700">Domain: </span>
            <span className="text-sm text-slate-600">{project.domain}</span>
          </div>
          
          <div className="mt-3 flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span 
                key={index} 
                className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsList;