import React from 'react';
import { useUserData } from '../../context/UserDataContext';
import { ExternalLink } from 'lucide-react';

const CertificationsList: React.FC = () => {
  const { userData } = useUserData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {userData.certifications.map((cert) => (
        <div 
          key={cert.id} 
          className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg shadow-sm"
        >
          <div className="flex justify-between items-start">
            <h4 className="text-lg font-medium text-slate-800 dark:text-white">{cert.title}</h4>
            <span className="text-sm text-slate-500 dark:text-slate-300">{cert.date}</span>
          </div>
          
          <p className="text-slate-600 dark:text-slate-200 mt-1">
            {cert.issuer}
          </p>
          
          <a 
            href={cert.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mt-2 inline-flex items-center text-sm transition-colors"
          >
            View Certificate <ExternalLink size={14} className="ml-1" />
          </a>
        </div>
      ))}
    </div>
  );
};

export default CertificationsList;
