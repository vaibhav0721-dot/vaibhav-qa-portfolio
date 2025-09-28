import { ExternalLink, Cpu, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "CC Assist",
      subtitle: "AI-driven platform",
      icon: Cpu,
      description: "Contributed to the quality assurance of an AI-driven platform focused on document analysis, timesheet automation and other features. Validated feature functionality and AI behavior through manual test execution and automation scripts.",
      achievements: [
        "Validated AI model accuracy and system performance",
        "Provided detailed feedback for continuous improvement",
        "Supported multiple deployment cycles",
        "Ensured platform reliability across features"
      ],
      technologies: ["AI Testing", "Automation Scripts", "Performance Validation", "Manual Testing"],
      color: "border-primary/50 bg-primary/5 hover:bg-primary/10"
    },
    {
      title: "E-LearnPro",
      subtitle: "Online Learning Management System (LMS)",
      icon: GraduationCap,
      description: "Worked as a QA Engineer on E-LearnPro, a web-based Learning Management System used by universities to manage courses, assessments, and student data. Ensured end-to-end quality through comprehensive testing approaches.",
      achievements: [
        "Verified user registration and authentication flows",
        "Validated course creation and content upload features",
        "Tested quiz functionality and grading systems",
        "Ensured performance tracking accuracy"
      ],
      technologies: ["Manual Testing", "API Testing", "Automation Testing", "Web Applications"],
      color: "border-secondary/50 bg-secondary/5 hover:bg-secondary/10"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-section font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Quality assurance excellence across diverse platforms and technologies
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div key={index} className="animate-slide-up group" style={{animationDelay: `${index * 0.2}s`}}>
                <div className={`glass-card rounded-2xl p-8 h-full border-2 ${project.color} transition-all duration-300 hover:scale-[1.02] hover:shadow-glow`}>
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-primary/20">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-smooth">
                        {project.title}
                      </h3>
                      <p className="text-sm text-accent font-medium">
                        {project.subtitle}
                      </p>
                    </div>
                    <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-smooth">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-sm text-foreground">Key Contributions:</h4>
                    <div className="space-y-2">
                      {project.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-3 text-sm text-foreground">Technologies & Approaches:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-muted/30 text-muted-foreground rounded-full text-xs font-medium hover:bg-primary/20 hover:text-primary transition-smooth"
                        >
                          {tech}
                        </span>
                      ))}
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

export default Projects;