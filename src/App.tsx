import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import Projects from './components/Projects';
import { UserDataProvider } from './context/UserDataContext';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  // 🔹 Scroll to top whenever active section changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // smooth scroll effect
    });
  }, [activeSection]);

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
        {/* Navbar */}
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

        {/* Main layout */}
        <main className="flex flex-col md:flex-row flex-grow relative">
          {activeSection === 'about' && <Sidebar activeSection={activeSection} />}

          <div
            className={`p-6 animate-fadeIn transition-all duration-300 ${
              activeSection === 'about' ? 'w-full md:ml-[25%] md:w-3/4' : 'w-full'
            }`}
          >
            {renderContent()}
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-slate-800 text-white text-center py-4 text-sm">
          <p>© {new Date().getFullYear()} - Portfolio Website</p>
        </footer>
      </div>
    </UserDataProvider>
  );
}

export default App;
