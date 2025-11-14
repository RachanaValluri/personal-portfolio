import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  const [text, setText] = useState('');
  const fullText = "Building the Future with Code | AI Innovator | Full Stack Creator";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, index + 1));
        setIndex(index + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="container mx-auto text-center z-10">
        <div className="animate-float mb-8">
          <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-1 glow-border">
            <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
              <span className="text-6xl font-bold gradient-text">RV</span>
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 glow-text">
          Rachana Valluri
        </h1>

        <div className="h-20 mb-6">
          <p className="text-xl md:text-2xl text-muted-foreground">
            {text}
            <span className="animate-pulse">|</span>
          </p>
        </div>

        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Passionate about creating intelligent systems and seamless user experiences.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button
            onClick={() => scrollToSection('projects')}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 glow-border"
          >
            View Projects
          </Button>
          <a href="/resume.pdf" download>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/40 hover:border-primary hover:bg-primary/10"
            >
              Download Resume
            </Button>
          </a>
        </div>

        <div className="flex gap-6 justify-center">
          <a
            href="https://github.com/VRachana2802"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/vallurirachana/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:rachanavalluri02@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
