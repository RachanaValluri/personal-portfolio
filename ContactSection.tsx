import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          Let's Connect
        </h2>

        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xl text-muted-foreground mb-12">
            I'm always open to exciting collaborations and opportunities. Let's build something amazing together.
          </p>

          <div className="glass-card p-8 md:p-12">
            <div className="space-y-6">
              <a
                href="mailto:rachanavalluri02@gmail.com"
                className="flex items-center justify-center gap-3 p-4 rounded-lg border border-primary/40 hover:border-primary hover:bg-primary/10 transition-all group"
              >
                <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-foreground">rachanavalluri02@gmail.com</span>
              </a>

              <a
                href="https://www.linkedin.com/in/vallurirachana/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 p-4 rounded-lg border border-primary/40 hover:border-primary hover:bg-primary/10 transition-all group"
              >
                <Linkedin className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-foreground">LinkedIn Profile</span>
              </a>

              <a
                href="https://github.com/VRachana2802"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 p-4 rounded-lg border border-primary/40 hover:border-primary hover:bg-primary/10 transition-all group"
              >
                <Github className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-foreground">GitHub Profile</span>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <a href="/resume.pdf" download>
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 glow-border"
                >
                  Download Resume
                </Button>
              </a>
              <a href="mailto:rachanavalluri02@gmail.com">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/40 hover:border-primary hover:bg-primary/10"
                >
                  Send a Message
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
