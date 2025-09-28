import { Code, Wrench, Brain } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Technical Skills",
      skills: [
        "Keyword Driven Automation Testing",
        "Performance Testing", 
        "API Testing",
        "Database Testing",
        "HTML & JavaScript"
      ],
      color: "text-primary"
    },
    {
      icon: Wrench,
      title: "Tools & Platforms",
      skills: [
        "Microsoft Azure DevOps",
        "Rally",
        "SQL SSMS",
        "Visual Studio",
        "JMeter",
        "Postman",
        "Lighthouse",
        "Chrome DevTools",
        "Power BI"
      ],
      color: "text-secondary"
    },
    {
      icon: Brain,
      title: "Analytical Abilities",
      skills: [
        "Risk Assessment",
        "Data Analysis", 
        "Attention to Detail",
        "Problem-Solving Skills",
        "Pattern Recognition"
      ],
      color: "text-accent"
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-section font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Comprehensive skill set spanning technical testing, industry-leading tools, and analytical methodologies
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="animate-slide-up group" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="glass-card p-8 rounded-2xl h-full hover:scale-105 transition-bounce">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-primary/20 ${category.color}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                  
                  {/* Skills List */}
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex} 
                        className="flex items-center gap-3 p-3 rounded-lg bg-muted/20 hover:bg-muted/30 transition-smooth group/skill"
                      >
                        <div className={`w-2 h-2 rounded-full ${category.color.replace('text-', 'bg-')} group-hover/skill:scale-125 transition-smooth`}></div>
                        <span className="text-sm text-muted-foreground group-hover/skill:text-foreground transition-smooth">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Skill count badge */}
                  <div className="mt-6 pt-6 border-t border-border/20">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">Total Skills</span>
                      <div className={`px-3 py-1 rounded-full bg-gradient-primary/20 ${category.color} text-sm font-semibold`}>
                        {category.skills.length}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;