import React from 'react';
import { useUserData } from '../../context/UserDataContext';

const ExperienceList: React.FC = () => {
  const { userData } = useUserData();

  return (
    <div className="space-y-6">
      {userData.experience.map((job) => (
        <div key={job.id} className="border-l-2 border-blue-500 pl-4 ml-2 relative">
          <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-1.5"></div>
          
          <div className="mb-1">
            <h4 className="text-lg font-medium text-slate-800 dark:text-white">{job.role}</h4>
            <div className="flex flex-wrap justify-between items-baseline">
              <p className="text-slate-600 dark:text-slate-300">
                {job.company}, {job.location}
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {job.startDate} — {job.endDate}
              </p>
            </div>
          </div>
          
          {/* Render description as bullet points */}
          <ul className="text-slate-700 dark:text-slate-200 mt-2 list-disc list-inside space-y-1">
            {Array.isArray(job.description) ? (
              job.description.map((desc, index) => <li key={index}>{desc}</li>)
            ) : (
              <li>{job.description}</li>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ExperienceList;
