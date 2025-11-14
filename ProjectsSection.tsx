import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Virtual Sign Language (Hand Gesture)',
      description: 'CNN that classifies single hand gestures including signs 0-9 for accessible communication.',
      tech: ['Python', 'TensorFlow', 'OpenCV', 'CNN'],
      github: 'https://github.com/RachanaValluri/Virtual-Sign-Language-Translator-Hand--gesture-'
    },
    {
      title: 'Plastic Reuse Suggestion AI',
      description: 'AI-based web app classifying plastics and suggesting creative reuse ideas for environmental impact.',
      tech: ['Python', 'Machine Learning', 'Flask']
    },
    {
      title: 'Women Safety Alert Network',
      description: 'Flask app sending live location & audio to authorities in distress situations.',
      tech: ['Flask', 'Python', 'Geolocation API']
    },
    {
      title: 'Email Classification System',
      description: 'NLP model detecting spam vs legitimate emails with high accuracy.',
      tech: ['Python', 'NLP', 'Scikit-learn']
    },
    {
      title: 'Cat vs Dog Image Classification',
      description: 'CNN achieving 95% accuracy in classifying pet images using TensorFlow.',
      tech: ['TensorFlow', 'Keras', 'Python', 'CNN']
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="glass-card group hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <CardHeader>
                <CardTitle className="text-xl text-primary group-hover:glow-text transition-all">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-primary/40 hover:border-primary hover:bg-primary/10"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View on GitHub
                    </Button>
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
