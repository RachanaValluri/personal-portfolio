import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'certifications', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card mx-4 mt-4 rounded-full">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="bg-primary/20 px-4 py-2 rounded-full border border-primary/40">
            <h2 className="text-xl font-bold text-primary glow-text">RV</h2>
          </div>
          
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className={`transition-all ${
                  activeSection === item.id
                    ? 'text-primary glow-text'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </Button>
            ))}
          </div>

          <a href="/resume.pdf" download>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 glow-border">
              Download Resume
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
