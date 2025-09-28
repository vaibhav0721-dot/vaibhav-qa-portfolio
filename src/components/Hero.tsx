import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50 animate-pulse"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-secondary/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-accent/20 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-hero font-bold mb-6">
            <span className="gradient-text">Vaibhav Pratap Singh</span>
          </h1>
          
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-1 w-20 bg-gradient-primary rounded-full"></div>
            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">
              QA Engineer
            </h2>
            <div className="h-1 w-20 bg-gradient-primary rounded-full"></div>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Detail-oriented QA Engineer specializing in automation testing, performance optimization, 
            and quality assurance methodologies. Passionate about delivering high-quality software 
            through comprehensive testing strategies.
          </p>
          
          {/* Contact buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button 
              variant="outline" 
              size="lg" 
              className="glass-card hover:bg-primary/10 transition-smooth group"
              asChild
            >
              <a href="tel:+91-8770067658" className="flex items-center gap-2">
                <Phone className="w-5 h-5 group-hover:text-primary transition-smooth" />
                +91-8770067658
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="glass-card hover:bg-primary/10 transition-smooth group"
              asChild
            >
              <a href="mailto:vaibhavsinghofficial21@gmail.com" className="flex items-center gap-2">
                <Mail className="w-5 h-5 group-hover:text-primary transition-smooth" />
                Email Me
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="glass-card hover:bg-primary/10 transition-smooth group"
              asChild
            >
              <a href="https://linkedin.com/in/vaibhavpratapsingh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Linkedin className="w-5 h-5 group-hover:text-primary transition-smooth" />
                LinkedIn
              </a>
            </Button>
          </div>
          
          {/* CTA Button */}
          <Button 
            size="lg" 
            className="hero-glow bg-gradient-primary hover:scale-105 transition-bounce px-8 py-4 text-lg font-semibold"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;