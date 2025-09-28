import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "QA Engineer, Apprentice",
      company: "Clifford Chance Business Services Pvt Ltd",
      location: "Gurugram, India",
      period: "March 2025 – Nov 2025",
      description: "Performed end-to-end quality assurance on the CC Assist AI platform, focusing on key modules such as document review, timesheets, and worksheets.",
      achievements: [
        "Executed both manual and automated tests to ensure functionality, UI consistency, and accuracy of AI-generated outputs",
        "Designed and executed regression and UI test scripts using Keyword Driven Framework",
        "Performed REST API testing for backend validations using Postman; validated status codes and payloads",
        "Ensured cross-browser UI consistency and layout integrity using Chrome DevTools",
        "Ran performance and load tests on critical features using JMeter, identifying system bottlenecks"
      ],
      color: "border-primary/50 bg-primary/5"
    },
    {
      role: "QA Engineer, Intern",
      company: "Cuvette Tech",
      location: "Remote",
      period: "June 2024 – Dec 2025",
      description: "Gained hands-on experience in testing web applications built with HTML, CSS, JavaScript, and React.js while strengthening skills in web application testing.",
      achievements: [
        "Designed and executed detailed manual test cases for functional, UI, and negative testing",
        "Validated user flows, edge cases, and form validations",
        "Performed exploratory testing to uncover hidden bugs and usability issues", 
        "Verified compliance with UI/UX standards and design guidelines",
        "Developed strong understanding of web design principles and responsive layouts"
      ],
      color: "border-secondary/50 bg-secondary/5"
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-section font-bold mb-4">
            <span className="gradient-text">Professional Experience</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Journey through innovative companies, delivering quality assurance excellence
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-primary"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 animate-slide-up" style={{animationDelay: `${index * 0.3}s`}}>
                {/* Timeline dot */}
                <div className="absolute left-6 w-5 h-5 bg-gradient-primary rounded-full border-4 border-background shadow-glow"></div>
                
                {/* Content card */}
                <div className={`ml-20 glass-card rounded-2xl p-8 border-2 ${exp.color} hover:scale-[1.02] transition-bounce group`}>
                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-smooth">
                      {exp.role}
                    </h3>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Building className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                  
                  {/* Achievements */}
                  <div>
                    <h4 className="font-semibold mb-4 text-accent">Key Achievements:</h4>
                    <div className="space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground leading-relaxed">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;