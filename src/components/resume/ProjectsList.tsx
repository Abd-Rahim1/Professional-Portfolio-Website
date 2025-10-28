import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronDown } from "lucide-react";
import { Project } from "../types";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      onClick={() => setExpanded(!expanded)}
      className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden shadow-sm 
                 hover:shadow-lg cursor-pointer transition-all duration-300"
      whileHover={{ scale: 1.02 }}
    >
      {/* Project Image */}
      <div className="h-48 overflow-hidden relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-2 right-2 bg-slate-900/70 text-white text-xs px-2 py-1 rounded-md">
          {project.domain}
        </div>
      </div>

      {/* Title + Dropdown */}
      <div className="p-4 flex justify-between items-center">
        <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
          {project.title}
        </h3>
        <ChevronDown
          size={20}
          className={`text-slate-600 dark:text-slate-300 transition-transform duration-300 ${
            expanded ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Compact Description */}
      {!expanded && (
        <p className="px-4 pb-4 text-slate-600 dark:text-slate-300 text-sm line-clamp-2">
          {project.description}
        </p>
      )}

      {/* Expanded View */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="px-4 pb-5 border-t border-slate-200 dark:border-slate-700"
          >
            <p className="text-slate-600 dark:text-slate-300 mt-3 text-sm">
              {project.description}
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="text-xs bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="mt-4 flex gap-4">
              {project.projectLink && (
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium"
                >
                  View Project
                  <ExternalLink size={14} />
                </a>
              )}
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1 text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-200 text-sm font-medium"
                >
                  View Demo
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectCard;
