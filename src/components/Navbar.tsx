import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/df347539-22da-4f12-b75d-b62cff7f9583.png" 
            alt="ServeAI Logo" 
            className="h-10"
          />
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
            How It Works
          </a>
          <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
            Testimonials
          </a>
        </div>

        <Button variant="hero" className="px-6" asChild>
          <a href="https://calendly.com/shaun-arulanandam/30min" target="_blank" rel="noopener noreferrer">
            Book a Free Consultation
          </a>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;