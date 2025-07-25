import { Card, CardContent } from "@/components/ui/card";
import { Clock, Phone, MessageSquare, Zap } from "lucide-react";
import phoneIcon from "@/assets/phone-icon.png";
import aiVoiceIcon from "@/assets/ai-voice-icon.png";
import integrationIcon from "@/assets/integration-icon.png";

const Features = () => {
  const features = [
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      image: phoneIcon,
      title: "24/7 Call Handling",
      description: "Never miss a call again. Our AI agents work around the clock, taking orders and bookings even when your staff is off duty."
    },
    {
      icon: <Phone className="h-8 w-8 text-primary" />,
      image: phoneIcon,
      title: "Takes Orders & Reservations",
      description: "Handle complex orders, dietary restrictions, and reservation requests with the same care as your best human staff."
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      image: aiVoiceIcon,
      title: "Human-like Voice AI",
      description: "Natural conversations that customers love. Our AI speaks like a real person, building rapport and trust with every call."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      image: integrationIcon,
      title: "POS & CRM Integration",
      description: "Seamlessly connects with your existing systems. Orders flow directly to your kitchen, reservations to your booking system."
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Everything Your Restaurant Needs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI phone agents are designed specifically for restaurants, handling every aspect of customer communication with expertise and warmth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;