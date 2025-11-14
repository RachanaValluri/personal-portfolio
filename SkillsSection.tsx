const SkillsSection = () => {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['Java', 'Python', 'JavaScript', 'SQL']
    },
    {
      category: 'AI/ML',
      skills: ['TensorFlow', 'Keras', 'OpenCV', 'Scikit-learn', 'NLP']
    },
    {
      category: 'Web Development',
      skills: ['Flask', 'HTML', 'CSS', 'REST APIs']
    },
    {
      category: 'Databases',
      skills: ['MySQL', 'SQLite']
    },
    {
      category: 'Tools',
      skills: ['GitHub', 'VS Code', 'Jupyter Notebook']
    }
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          Skills & Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass-card p-6 hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                    <span className="text-foreground/90">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8 gradient-text">
            Research Interests
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 text-center">
              <h4 className="text-lg font-semibold mb-2 text-secondary">
                Fairness in Generative AI
              </h4>
              <p className="text-sm text-muted-foreground">
                Ethical challenges and bias in AI systems
              </p>
            </div>
            <div className="glass-card p-6 text-center">
              <h4 className="text-lg font-semibold mb-2 text-secondary">
                Impact of AI on Employment
              </h4>
              <p className="text-sm text-muted-foreground">
                Automation vs human augmentation
              </p>
            </div>
            <div className="glass-card p-6 text-center">
              <h4 className="text-lg font-semibold mb-2 text-secondary">
                Transparent Machine Learning
              </h4>
              <p className="text-sm text-muted-foreground">
                Risks of black box models
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
