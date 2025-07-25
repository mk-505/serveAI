import { Card, CardContent } from "@/components/ui/card";
import { Settings, Zap, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Settings className="h-12 w-12 text-primary" />,
      title: "Connect",
      description: "We integrate with your existing phone system and POS in under 24 hours. No complicated setup required."
    },
    {
      icon: <Zap className="h-12 w-12 text-primary" />,
      title: "Configure",
      description: "Customize your AI agent with your menu, pricing, and restaurant policies. Train it to speak in your brand voice."
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-primary" />,
      title: "Serve",
      description: "Your AI agent starts taking calls immediately, handling orders and reservations with professional excellence."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get Started in 3 Simple Steps
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From setup to serving customers, we make the transition to AI phone service seamless and stress-free.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="bg-background border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group animate-slide-up">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      {step.icon}
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-primary">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              
              {/* Connector Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-primary/30"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1">
                    <div className="w-0 h-0 border-l-4 border-l-primary/30 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;