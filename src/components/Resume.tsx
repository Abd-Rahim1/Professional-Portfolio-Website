import React, { useState } from 'react';
import ResumeSection from './resume/ResumeSection';
import ExperienceList from './resume/ExperienceList';
import CertificationsList from './resume/CertificationsList';
import EducationList from './resume/EducationList';
import SkillsList from './resume/SkillsList';
import LanguageList from './resume/LanguageList';

const Resume: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>('experience');
  
  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const sectionClasses = "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-4";

  return (
    <section className="animate-fadeIn">
      <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-6 border-b-2 border-blue-500 pb-2 inline-block">
        Resume
      </h2>
      
      <div className="space-y-6">
        
        <ResumeSection 
          title="Experience" 
          isExpanded={expandedSection === 'experience'} 
          toggleExpand={() => toggleSection('experience')}
          className={sectionClasses}
        >
          <ExperienceList />
        </ResumeSection>
        
        <ResumeSection 
          title="Certifications & Licenses" 
          isExpanded={expandedSection === 'certifications'} 
          toggleExpand={() => toggleSection('certifications')}
          className={sectionClasses}
        >
          <CertificationsList />
        </ResumeSection>
        
        <ResumeSection 
          title="Education" 
          isExpanded={expandedSection === 'education'} 
          toggleExpand={() => toggleSection('education')}
          className={sectionClasses}
        >
          <EducationList />
        </ResumeSection>
        
        <ResumeSection 
          title="Skills" 
          isExpanded={expandedSection === 'skills'} 
          toggleExpand={() => toggleSection('skills')}
          className={sectionClasses}
        >
          <SkillsList />
        </ResumeSection>
        
        <ResumeSection 
          title="Languages" 
          isExpanded={expandedSection === 'languages'} 
          toggleExpand={() => toggleSection('languages')}
          className={sectionClasses}
        >
          <LanguageList />
        </ResumeSection>
      </div>
    </section>
  );
};

export default Resume;
