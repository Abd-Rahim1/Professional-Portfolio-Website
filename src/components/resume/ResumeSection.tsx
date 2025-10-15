import React from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface ResumeSectionProps {
  title: string;
  isExpanded: boolean;
  toggleExpand: () => void;
  children: React.ReactNode;
}

const ResumeSection: React.FC<ResumeSectionProps> = ({ 
  title, 
  isExpanded, 
  toggleExpand, 
  children 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div 
        className="flex justify-between items-center p-4 cursor-pointer bg-slate-50 hover:bg-slate-100 transition-colors"
        onClick={toggleExpand}
      >
        <h3 className="text-xl font-semibold text-slate-800">{title}</h3>
        <button className="text-slate-600 hover:text-slate-800 transition-colors focus:outline-none">
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>
      
      {isExpanded && (
        <div className="p-6 animate-expandDown">
          {children}
        </div>
      )}
    </div>
  );
};

export default ResumeSection;