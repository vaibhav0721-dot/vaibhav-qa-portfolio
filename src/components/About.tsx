import { CheckCircle } from "lucide-react";

const About = () => {
  const highlights = [
    "End-to-end Quality Assurance specialist",
    "Automated and Manual Testing expertise", 
    "Performance & API Testing proficiency",
    "Agile environment collaboration",
    "AI platform quality validation"
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-section font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-primary">Professional Summary</h3>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Detail-oriented and analytical QA Engineer with extensive experience in software testing 
                and quality assurance methodologies. I specialize in delivering high-quality software 
                through comprehensive manual and automated testing processes, with a strong focus on 
                performance optimization and API validation.
              </p>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                My experience spans across AI-driven platforms, learning management systems, and 
                enterprise applications. I thrive in Agile environments and am passionate about 
                continuous improvement and innovation in quality assurance practices.
              </p>
              
              {/* Key highlights */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold mb-4 text-accent">Key Strengths</h4>
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6 animate-slide-up">
            <div className="glass-card p-6 rounded-2xl text-center group hover:scale-105 transition-bounce">
              <div className="text-3xl font-bold gradient-text mb-2">2+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            
            <div className="glass-card p-6 rounded-2xl text-center group hover:scale-105 transition-bounce">
              <div className="text-3xl font-bold gradient-text mb-2">5+</div>
              <div className="text-muted-foreground">Technologies</div>
            </div>
            
            <div className="glass-card p-6 rounded-2xl text-center group hover:scale-105 transition-bounce">
              <div className="text-3xl font-bold gradient-text mb-2">10+</div>
              <div className="text-muted-foreground">Tools Mastered</div>
            </div>
            
            <div className="glass-card p-6 rounded-2xl text-center group hover:scale-105 transition-bounce">
              <div className="text-3xl font-bold gradient-text mb-2">100%</div>
              <div className="text-muted-foreground">Quality Focus</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;