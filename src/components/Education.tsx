import { GraduationCap, Award, Trophy, Calendar } from "lucide-react";

const Education = () => {
  const education = {
    degree: "Bachelor of Technology in Computer Science Engineering",
    university: "APJ Abdul Kalam Technical University (AKTU)",
    period: "Sept 2021 - Jun 2025",
    status: "Current"
  };

  const certifications = [
    {
      title: "Google Data Analytics Certificate",
      provider: "Coursera",
      year: "2024",
      description: "Completed 8 practical case studies involving SQL, data cleaning, dashboards, and presentations.",
      icon: Award,
      color: "text-primary"
    },
    {
      title: "Code Gladiator Semi-Finalist",
      provider: "TechGig",
      year: "2024", 
      description: "Selected as a Semi-Finalist in Code Gladiators 2024, one of India's largest coding competitions, showcasing strong problem-solving and technical skills.",
      icon: Trophy,
      color: "text-secondary"
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-section font-bold mb-4">
            <span className="gradient-text">Education & Certifications</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Academic foundation and professional achievements driving continuous learning
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Education */}
          <div className="animate-slide-up">
            <div className="glass-card rounded-2xl p-8 border-2 border-primary/50 bg-primary/5 hover:scale-[1.02] transition-bounce group">
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-xl bg-gradient-primary/20 group-hover:scale-110 transition-bounce">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-smooth">
                      {education.degree}
                    </h3>
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-semibold">
                      {education.status}
                    </span>
                  </div>
                  
                  <p className="text-lg text-accent font-medium mb-2">
                    {education.university}
                  </p>
                  
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{education.period}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Certifications */}
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <div key={index} className="animate-slide-up" style={{animationDelay: `${(index + 1) * 0.2}s`}}>
                  <div className="glass-card rounded-2xl p-6 h-full hover:scale-105 transition-bounce group">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-primary/20 ${cert.color}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold mb-1 group-hover:text-primary transition-smooth">
                          {cert.title}
                        </h4>
                        <div className="flex items-center gap-2 text-sm text-accent font-medium">
                          <span>{cert.provider}</span>
                          <span className="w-1 h-1 bg-accent rounded-full"></span>
                          <span>{cert.year}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {cert.description}
                    </p>
                    
                    {/* Achievement badge */}
                    <div className="mt-4 pt-4 border-t border-border/20">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">Achievement</span>
                        <div className={`px-3 py-1 rounded-full bg-gradient-primary/20 ${cert.color} text-xs font-semibold`}>
                          Certified
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;