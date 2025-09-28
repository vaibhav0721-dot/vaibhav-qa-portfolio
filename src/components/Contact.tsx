import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, MapPin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91-8770067658",
      href: "tel:+91-8770067658",
      color: "text-primary"
    },
    {
      icon: Mail,
      label: "Email",
      value: "vaibhavsinghofficial21@gmail.com",
      href: "mailto:vaibhavsinghofficial21@gmail.com",
      color: "text-secondary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/vaibhavpratapsingh",
      href: "https://linkedin.com/in/vaibhavpratapsingh",
      color: "text-accent"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      href: "#",
      color: "text-primary"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-section font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Ready to collaborate on quality assurance projects or discuss opportunities? 
            Let's connect and create something amazing together.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-slide-up">
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-8 text-primary">Contact Information</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((contact, index) => {
                    const IconComponent = contact.icon;
                    return (
                      <a
                        key={index}
                        href={contact.href}
                        className="flex items-center gap-4 p-4 rounded-xl bg-muted/20 hover:bg-muted/30 transition-smooth group"
                        target={contact.href.startsWith('http') ? '_blank' : undefined}
                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        <div className={`p-3 rounded-xl bg-gradient-primary/20 ${contact.color} group-hover:scale-110 transition-bounce`}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">
                            {contact.label}
                          </div>
                          <div className="font-medium group-hover:text-primary transition-smooth">
                            {contact.value}
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
                
                {/* CTA */}
                <div className="mt-8 pt-8 border-t border-border/20">
                  <h4 className="font-semibold mb-4">Let's discuss your next project</h4>
                  <p className="text-sm text-muted-foreground mb-6">
                    Whether you need quality assurance expertise, automation solutions, 
                    or testing consultation, I'm here to help ensure your software meets 
                    the highest standards.
                  </p>
                  
                  <Button 
                    className="bg-gradient-primary hover:scale-105 transition-bounce w-full"
                    asChild
                  >
                    <a href="mailto:vaibhavsinghofficial21@gmail.com" className="flex items-center justify-center gap-2">
                      <Send className="w-4 h-4" />
                      Send Message
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Availability & Skills Summary */}
            <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="glass-card rounded-2xl p-8 h-full">
                <h3 className="text-2xl font-bold mb-8 text-secondary">Currently Available For</h3>
                
                <div className="space-y-6">
                  <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                    <h4 className="font-semibold text-primary mb-2">Full-time Opportunities</h4>
                    <p className="text-sm text-muted-foreground">
                      Seeking QA Engineer positions where I can contribute to high-quality software delivery.
                    </p>
                  </div>
                  
                  <div className="p-4 rounded-xl bg-secondary/10 border border-secondary/20">
                    <h4 className="font-semibold text-secondary mb-2">Consulting Projects</h4>
                    <p className="text-sm text-muted-foreground">
                      Available for testing consultation and automation setup projects
                    </p>
                  </div>
                  
                  <div className="p-4 rounded-xl bg-accent/10 border border-accent/20">
                    <h4 className="font-semibold text-accent mb-2">Collaboration</h4>
                    <p className="text-sm text-muted-foreground">
                      Open to collaborate on interesting QA challenges and innovative testing solutions
                    </p>
                  </div>
                </div>
                
                {/* Quick stats */}
                <div className="mt-8 pt-8 border-t border-border/20">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold gradient-text">Fast</div>
                      <div className="text-xs text-muted-foreground">Response Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold gradient-text">24/7</div>
                      <div className="text-xs text-muted-foreground">Availability</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;