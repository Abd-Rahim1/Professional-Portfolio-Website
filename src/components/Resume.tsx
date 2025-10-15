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

  return (
    <section className="animate-fadeIn">
      <h2 className="text-3xl font-bold text-slate-800 mb-6 border-b-2 border-blue-500 pb-2 inline-block">
        Resume
      </h2>
      
      <div className="space-y-6">
        
        <ResumeSection 
          title="Experience" 
          isExpanded={expandedSection === 'experience'} 
          toggleExpand={() => toggleSection('experience')}
        >
          <ExperienceList />
        </ResumeSection>
        
        <ResumeSection 
          title="Certifications & Licenses" 
          isExpanded={expandedSection === 'certifications'} 
          toggleExpand={() => toggleSection('certifications')}
        >
          <CertificationsList />
        </ResumeSection>
        
        <ResumeSection 
          title="Education" 
          isExpanded={expandedSection === 'education'} 
          toggleExpand={() => toggleSection('education')}
        >
          <EducationList />
        </ResumeSection>
        
        <ResumeSection 
          title="Skills" 
          isExpanded={expandedSection === 'skills'} 
          toggleExpand={() => toggleSection('skills')}
        >
          <SkillsList />
        </ResumeSection>
        
      <ResumeSection 
          title="Languages" 
          isExpanded={expandedSection === 'languages'} 
          toggleExpand={() => toggleSection('languages')}
        >
          <LanguageList />
        </ResumeSection>
      </div>
    </section>
  );
};

export default Resume;