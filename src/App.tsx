import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import Projects from './components/Projects';
import { UserDataProvider } from './context/UserDataContext';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return <AboutMe />;
      case 'resume':
        return <Resume />;
      case 'projects':
        return <Projects />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <UserDataProvider>
      <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col">
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
        <main className="flex flex-col md:flex-row flex-grow">
          {/* Pass activeSection so Sidebar knows when to display */}
          <Sidebar activeSection={activeSection} />
          
          <div className="w-full md:w-3/4 p-6 animate-fadeIn">
            {renderContent()}
          </div>
        </main>
        <footer className="bg-slate-800 text-white text-center py-4 text-sm">
          <p>© {new Date().getFullYear()} - Portfolio Website</p>
        </footer>
      </div>
    </UserDataProvider>
  );
}

export default App;
