import React from 'react';
import { useUserData } from '../../context/UserDataContext';
import TimelineCard from './TimelineCard';

interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description?: string[];
  skills?: string[];
  sartexlogo?: string;
}

const ExperienceList: React.FC = () => {
  const { userData } = useUserData();

  return (
    <div className="relative pl-4 space-y-2">
      {/* Continuous Vertical Line */}
      <div className="absolute left-[3.5px] top-6 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800"></div>

      {userData.experience.map((job: Experience, index: number) => (
        <TimelineCard
          key={job.id}
          index={index}
          title={job.role}
          subtitle={job.company}
          location={job.location}
          startDate={job.startDate}
          endDate={job.endDate}
          description={job.description}
          skills={job.skills}
          logo={job.sartexlogo}
        />
      ))}
    </div>
  );
};

export default ExperienceList;
