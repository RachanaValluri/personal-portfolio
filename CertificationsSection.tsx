import { Award, Trophy, Users, Palette } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      title: 'Data Preprocessing',
      issuer: 'FutureSkills Prime',
      status: 'In Progress',
      icon: Award
    },
    {
      title: 'Introduction to Cybersecurity',
      issuer: 'Cisco Networking Academy',
      status: 'Completed',
      icon: Award
    },
    {
      title: 'Cisco VIP Internship',
      issuer: 'Cisco',
      status: 'Completed',
      icon: Award
    }
  ];

  const achievements = [
    {
      title: 'Top 3 Winner',
      description: 'University Hackathon',
      icon: Trophy
    },
    {
      title: 'Secretary',
      description: 'CSI Student Chapter',
      icon: Users
    },
    {
      title: 'Figma UI/UX Workshop',
      description: 'Prototype design & user testing',
      icon: Palette
    },
    {
      title: 'Academic Excellence',
      description: 'Topper Certificate',
      icon: Award
    }
  ];

  return (
    <section id="certifications" className="min-h-screen flex items-center py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          Certifications & Achievements
        </h2>

        <div className="max-w-6xl mx-auto space-y-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary text-center">
              Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <div
                    key={index}
                    className="glass-card p-6 hover:scale-105 transition-all duration-300 text-center"
                  >
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{cert.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                    <span
                      className={`text-xs px-3 py-1 rounded-full ${
                        cert.status === 'Completed'
                          ? 'bg-accent/20 text-accent'
                          : 'bg-secondary/20 text-secondary'
                      }`}
                    >
                      {cert.status}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary text-center">
              Achievements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div
                    key={index}
                    className="glass-card p-6 hover:scale-105 transition-all duration-300 flex items-start gap-4"
                  >
                    <div className="w-12 h-12 flex-shrink-0 rounded-full bg-secondary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">{achievement.title}</h4>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
