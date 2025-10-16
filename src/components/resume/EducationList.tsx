import React from 'react';
import { useUserData } from '../../context/UserDataContext';

const EducationList: React.FC = () => {
  const { userData } = useUserData();

  return (
    <div className="space-y-6">
      {userData.education.map((edu) => (
        <div key={edu.id} className="border-l-2 border-blue-500 pl-4 ml-2 relative">
          <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-1.5"></div>

          <div className="mb-1">
            <h4 className="text-lg font-medium text-slate-800">{edu.degree}</h4>
            <div className="flex flex-wrap justify-between items-baseline">
              <p className="text-slate-600">
                {edu.institution}, {edu.location}
              </p>
              <p className="text-sm text-slate-500">
                {edu.startDate} — {edu.endDate}
              </p>
            </div>

            {edu.description && (
              <div className="mt-2 space-y-1 text-slate-600">
                {edu.description.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationList;
