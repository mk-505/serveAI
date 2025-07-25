import { Button } from "@/components/ui/button";
import { Phone, Sparkles, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-8 w-8 text-primary mr-3 animate-pulse" />
            <span className="text-primary font-semibold text-lg">AI-Powered Phone Agents</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Never Miss Another
            <span className="text-primary block">Restaurant Call</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            ServeAI's human-like phone agents handle orders, reservations, and customer inquiries 24/7. 
            Boost revenue while delivering exceptional service that never sleeps.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="px-8 py-4 text-lg" asChild>
              <a href="https://calendly.com/shaun-arulanandam/30min" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5" />
                Book a Free Consultation
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-4 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <a href="https://drive.google.com/file/d/1FbSwplPs0E5XHN7OxzKW_UqjQ4Iv4VkB/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </a>
            </Button>
          </div>
          
          <div className="mt-12 text-sm text-muted-foreground">
            <p>Trusted by Many • Streamlined Installation</p>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse delay-1000" />
    </section>
  );
};

export default Hero;