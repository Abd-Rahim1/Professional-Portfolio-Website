import React from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface ResumeSectionProps {
  title: string;
  isExpanded: boolean;
  toggleExpand: () => void;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

const ResumeSection: React.FC<ResumeSectionProps> = ({
  title,
  isExpanded,
  toggleExpand,
  children,
  className = '',
  icon
}) => {
  return (
    <div className={`bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden ${className}`}>
      <div
        className="flex justify-between items-center p-4 cursor-pointer bg-slate-50 dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors"
        onClick={toggleExpand}
      >

        <div className="flex items-center gap-3">
          {icon && <span className="text-blue-600 dark:text-blue-400">{icon}</span>}
          <h3 className="text-xl font-semibold text-slate-800 dark:text-white">{title}</h3>
        </div>
        <button className="text-slate-600 dark:text-white hover:text-slate-800 dark:hover:text-slate-200 transition-colors focus:outline-none">
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>

      {isExpanded && (
        <div className="p-6 animate-expandDown text-slate-800 dark:text-white">
          {children}
        </div>
      )}
    </div>
  );
};

export default ResumeSection;
