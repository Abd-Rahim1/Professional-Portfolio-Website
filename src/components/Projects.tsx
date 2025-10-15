import React, { useState } from 'react';
import { useUserData } from '../context/UserDataContext';
import ProjectCard from './projects/ProjectCard';
import {  Search } from 'lucide-react';

const Projects: React.FC = () => {
  const { userData } = useUserData();
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Get unique domains
  const domains = Array.from(new Set(userData.projects.map(project => project.domain)));

  // Filter projects by domain and search query
  const filteredProjects = userData.projects.filter(project => {
    const matchesDomain = selectedDomain ? project.domain === selectedDomain : true;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDomain && matchesSearch;
  });

  return (
    <section className="animate-fadeIn">
      <h2 className="text-3xl font-bold text-slate-800 mb-6 border-b-2 border-blue-500 pb-2 inline-block">
        Projects
      </h2>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row justify-between mb-6 space-y-4 md:space-y-0">
          <div className="flex flex-wrap gap-2">
            <button 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors 
                ${selectedDomain === null 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              onClick={() => setSelectedDomain(null)}
            >
              All
            </button>
            
            {domains.map((domain) => (
              <button 
                key={domain}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors 
                  ${selectedDomain === domain 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                onClick={() => setSelectedDomain(domain)}
              >
                {domain}
              </button>
            ))}
          </div>
          
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Search projects..."
              className="pl-10 pr-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-slate-600">No projects found matching your criteria.</p>
            <button 
              className="mt-4 text-blue-600 hover:text-blue-800 transition-colors"
              onClick={() => {
                setSelectedDomain(null);
                setSearchQuery('');
              }}
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;