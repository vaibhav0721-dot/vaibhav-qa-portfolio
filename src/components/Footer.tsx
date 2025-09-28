import { Heart, Code, Coffee } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center">
          {/* Main content */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Vaibhav Pratap Singh
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              QA Engineer passionate about delivering high-quality software through 
              comprehensive testing and continuous improvement.
            </p>
          </div>
          
          {/* Divider */}
          <div className="h-px bg-gradient-primary max-w-xs mx-auto mb-8"></div>
          
          {/* Made with love */}
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
            <span>Crafted with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
            <span>and</span>
            <Code className="w-4 h-4 text-primary" />
            <span>fueled by</span>
            <Coffee className="w-4 h-4 text-accent" />
          </div>
          
          {/* Copyright */}
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Vaibhav Pratap Singh. All rights reserved.
          </p>
        </div>
        
        {/* Background decoration */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-primary rounded-full opacity-50"></div>
      </div>
    </footer>
  );
};

export default Footer;