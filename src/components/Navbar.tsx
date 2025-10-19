import React from 'react';
import { Menu } from 'lucide-react';
import { useUserData } from '../context/UserDataContext';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const { userData } = useUserData();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'about', label: 'About Me' },
    { id: 'resume', label: 'Resume' },
    { id: 'projects', label: 'Projects' }
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);

    if (window.innerWidth < 768) {
      setMobileMenuOpen(false);
    }

    const sectionEl = document.getElementById(sectionId);
    if (sectionEl) {
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-slate-800 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold">{userData.name}</h1>
            <p className="ml-3 text-slate-300 hidden sm:block">| {userData.title}</p>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out
                  ${activeSection === item.id 
                    ? 'bg-slate-700 text-white' 
                    : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                onClick={() => handleSectionClick(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              className="text-slate-300 hover:text-white focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-700">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left
                  ${activeSection === item.id 
                    ? 'bg-slate-600 text-white' 
                    : 'text-slate-300 hover:bg-slate-600 hover:text-white'
                  }`}
                onClick={() => handleSectionClick(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
