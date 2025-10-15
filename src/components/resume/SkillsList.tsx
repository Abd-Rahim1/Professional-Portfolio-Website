import React from 'react';
import { useUserData } from '../../context/UserDataContext';

const SkillsList: React.FC = () => {
  const { userData } = useUserData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {userData.skills.map((skill, index) => (
        <div key={index} className="space-y-2">
          <div className="flex justify-between items-center">
            <h4 className="text-md font-medium text-slate-800">{skill.name}</h4>
            <span className="text-sm text-slate-500">{skill.level}%</span>
          </div>
          
          <div className="w-full bg-slate-200 rounded-full h-2.5">
            <div 
              className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsList;