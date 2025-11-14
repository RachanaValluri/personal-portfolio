import { Badge } from '@/components/ui/badge';

const AboutSection = () => {
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'Python', 'Java', 
    'Machine Learning', 'Deep Learning', 'TensorFlow', 
    'Flask', 'SQL', 'OpenCV'
  ];

  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          About Me
        </h2>

        <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-8">
            I'm Rachana Valluri, an AI and Full Stack Developer driven by curiosity and innovation. 
            As a CSE AIML student, I specialize in blending artificial intelligence with modern web 
            technologies to create smart, scalable, and user-friendly solutions. My work bridges 
            creativity and technology — building the future one line of code at a time.
          </p>

          <div className="border-t border-primary/20 my-8"></div>

          <h3 className="text-2xl font-semibold mb-6 text-primary">Skills & Technologies</h3>
          
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <Badge
                key={index}
                variant="outline"
                className="px-4 py-2 text-sm border-primary/40 hover:border-primary hover:bg-primary/10 transition-all cursor-default"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
