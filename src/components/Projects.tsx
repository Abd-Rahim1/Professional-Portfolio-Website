import React, { useState, useEffect } from 'react';
import { useUserData } from '../context/UserDataContext';
import ProjectCard from './projects/ProjectCard';
import { Search, X, FolderX, Filter } from 'lucide-react';
import { useFilter } from '../context/FilterContext';
import { Project } from '../types';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const { userData } = useUserData();
  const { projectFilter, setProjectFilter } = useFilter();
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedProjectId, setExpandedProjectId] = useState<number | null>(null);
  const [lastSelectedDomain, setLastSelectedDomain] = useState<string | null>(null);

  // Get unique domains from projects
  const domains = Array.from(new Set(userData.projects.map((project: Project) => project.domain)));

  // Initialize filter from context
  useEffect(() => {
    if (projectFilter) {
      const matchingDomain = domains.find(domain => 
        domain.toLowerCase().includes(projectFilter.toLowerCase()) ||
        projectFilter.toLowerCase().includes(domain.toLowerCase())
      );
      
      if (matchingDomain) {
        setSelectedDomain(matchingDomain);
        setLastSelectedDomain(matchingDomain);
      }
      
      setProjectFilter(null);
    }
  }, [projectFilter, domains, setProjectFilter]);

  const filteredProjects = userData.projects.filter((project: Project) => {
    const matchesDomain = selectedDomain ? project.domain === selectedDomain : true;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((tech: string) => 
        tech.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesDomain && matchesSearch;
  });

  // Check if there are no projects for the selected domain
  const hasProjectsInDomain = (domain: string) => {
    return userData.projects.some((project: Project) => project.domain === domain);
  };

  const handleToggle = (id: number) => {
    setExpandedProjectId(expandedProjectId === id ? null : id);
  };

  const clearFilter = () => {
    setSelectedDomain(null);
    setLastSelectedDomain(null);
    setSearchQuery('');
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  const handleDomainClick = (domain: string) => {
    setSelectedDomain(domain);
    setLastSelectedDomain(domain);
    setSearchQuery('');
  };

  const handleAllProjectsClick = () => {
    setSelectedDomain(null);
    setLastSelectedDomain(null);
    setSearchQuery('');
  };

  // Get the actual domain name from the filter (for better matching)
  const getDomainDisplayName = () => {
    if (!lastSelectedDomain) return null;
    
    const exactMatch = domains.find(d => d === lastSelectedDomain);
    if (exactMatch) return exactMatch;
    
    const partialMatch = domains.find(d => 
      d.toLowerCase().includes(lastSelectedDomain.toLowerCase()) ||
      lastSelectedDomain.toLowerCase().includes(d.toLowerCase())
    );
    
    return partialMatch || lastSelectedDomain;
  };

  const domainDisplayName = getDomainDisplayName();
  const hasProjectsForSelectedDomain = selectedDomain ? hasProjectsInDomain(selectedDomain) : true;

  return (
    <section id="projects" className="animate-fadeIn min-h-screen px-4 md:px-8 lg:px-16 py-8 md:py-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-purple-300 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-blue-300 rounded-full opacity-10 blur-2xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-3 text-center">
          My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-8"></div>

        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 mb-10 border border-gray-200 dark:border-slate-700">
          {/* Filter indicator */}
          {selectedDomain && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mb-6 p-4 rounded-xl border ${
                hasProjectsForSelectedDomain 
                  ? 'bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 border-blue-200 dark:border-blue-800'
                  : 'bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border-yellow-200 dark:border-yellow-800'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${
                    hasProjectsForSelectedDomain 
                      ? 'bg-blue-100 dark:bg-blue-900' 
                      : 'bg-yellow-100 dark:bg-yellow-900'
                  }`}>
                    {hasProjectsForSelectedDomain ? (
                      <Filter className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    ) : (
                      <FolderX className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                    )}
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      {hasProjectsForSelectedDomain 
                        ? 'Showing projects filtered by:' 
                        : 'No projects found for:'}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        hasProjectsForSelectedDomain
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                          : 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white'
                      }`}>
                        {domainDisplayName}
                      </span>
                      {hasProjectsForSelectedDomain && (
                        <span className="text-sm text-slate-500 dark:text-slate-400">
                          ({filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''})
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <button
                  onClick={clearFilter}
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    hasProjectsForSelectedDomain
                      ? 'text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/30'
                      : 'text-yellow-600 dark:text-yellow-400 hover:text-yellow-800 dark:hover:text-yellow-300 hover:bg-yellow-50 dark:hover:bg-yellow-900/30'
                  }`}
                >
                  <X size={16} />
                  Clear filter
                </button>
              </div>
            </motion.div>
          )}

          {/* Special message when no projects for selected domain */}
          {selectedDomain && !hasProjectsForSelectedDomain && (
            <div className="mb-6 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/10 dark:to-orange-900/10 rounded-xl border border-yellow-200 dark:border-yellow-800">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center">
                    <FolderX className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-300 mb-1">
                    No Projects Found in "{domainDisplayName}"
                  </h3>
                  <p className="text-yellow-700 dark:text-yellow-400">
                    Currently, there are no projects available in the {domainDisplayName} category.
                    Check out my other projects below or browse all projects.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <button
                    onClick={handleAllProjectsClick}
                    className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
                  >
                    View All Projects
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Filters and Search */}
          <div className="flex flex-col md:flex-row justify-between mb-8 space-y-4 md:space-y-0">
            <div className="flex flex-wrap gap-2">
              <button
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 
                  ${selectedDomain === null
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600'
                  }`}
                onClick={handleAllProjectsClick}
              >
                All Projects
              </button>

              {domains.map((domain: string) => {
                const hasProjects = hasProjectsInDomain(domain);
                const isSelected = selectedDomain === domain;
                
                return (
                  <button
                    key={domain}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative ${
                      isSelected
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md'
                        : hasProjects
                          ? 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600'
                          : 'bg-slate-50 text-slate-400 cursor-not-allowed opacity-60 dark:bg-slate-800 dark:text-slate-500'
                    }`}
                    onClick={() => hasProjects && handleDomainClick(domain)}
                    disabled={!hasProjects}
                    title={!hasProjects ? `No projects available in ${domain}` : ''}
                  >
                    {domain}
                    {!hasProjects && (
                      <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="relative w-full md:w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-slate-400 dark:text-slate-300" />
              </div>
              <input
                type="text"
                placeholder="Search projects..."
                className="w-full pl-10 pr-10 py-2.5 border border-slate-300 dark:border-slate-600 rounded-lg
                           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                           dark:bg-slate-700 dark:text-slate-200"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  <X size={16} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200" />
                </button>
              )}
            </div>
          </div>

          {/* Show projects only if there are any for the selected domain */}
          {(selectedDomain === null || hasProjectsForSelectedDomain) ? (
            filteredProjects.length > 0 ? (
              <>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {filteredProjects.map((project: Project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      expanded={expandedProjectId === project.id}
                      onToggle={() => handleToggle(project.id)}
                    />
                  ))}
                </div>
                
                <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-700 text-center">
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Showing {filteredProjects.length} of {userData.projects.length} projects
                    {selectedDomain && ` in "${selectedDomain}"`}
                    {searchQuery && ` matching "${searchQuery}"`}
                  </p>
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                  <Search size={32} className="text-slate-400 dark:text-slate-500" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2">
                  No projects found
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-md mx-auto">
                  {selectedDomain 
                    ? `No projects found in "${selectedDomain}"${searchQuery ? ` matching "${searchQuery}"` : ''}. Try adjusting your filters.`
                    : searchQuery
                    ? `No projects found matching "${searchQuery}". Try a different search term.`
                    : "No projects available at the moment."}
                </p>
                {(selectedDomain || searchQuery) && (
                  <button
                    className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
                    onClick={clearFilter}
                  >
                    Clear all filters
                  </button>
                )}
              </div>
            )
          ) : (
            // Show alternative projects when selected domain has no projects
            userData.projects.length > 0 && (
              <div className="space-y-8">
                <div className="text-center py-6">
                  <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Check out my other projects:
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Here are some projects from different domains
                  </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {userData.projects.slice(0, 4).map((project: Project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      expanded={expandedProjectId === project.id}
                      onToggle={() => handleToggle(project.id)}
                    />
                  ))}
                </div>
                
                <div className="text-center pt-4">
                  <button
                    onClick={handleAllProjectsClick}
                    className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
                  >
                    View All Projects ({userData.projects.length})
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;