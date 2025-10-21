import React from 'react';
import { useUserData } from '../../context/UserDataContext';

const LanguageList: React.FC = () => {
  const { userData } = useUserData();

  return (
    <div className="bg-white dark:bg-slate-800 shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Languages</h2>
      <ul className="space-y-3">
        {userData.languages.map((lang, index) => (
          <li
            key={index}
            className="flex justify-between items-center border-b pb-2 border-gray-200 dark:border-slate-600"
          >
            <span className="text-gray-700 dark:text-white font-medium">{lang.name}</span>
            <span className="text-sm text-gray-500 dark:text-slate-300 italic">{lang.level}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageList;
