import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-primary/20">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-6">
            <a
              href="https://github.com/VRachana2802"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/vallurirachana/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:rachanavalluri02@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          
          <p className="text-sm text-muted-foreground text-center">
            © 2025 Rachana Valluri — Building the Future with Code.
          </p>
          
          <p className="text-xs text-muted-foreground/60 italic">
            "Code with logic, create with heart — Rachana Valluri"
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
