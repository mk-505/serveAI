import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Brain, Zap, Users } from "lucide-react";

const AboutUs = () => {
  const highlights = [
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      title: "Academic Excellence",
      description: "Our team includes researchers and engineers from top institutions like University of Toronto and Cornell University."
    },
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "AI Expertise", 
      description: "Deep specialization in machine learning, natural language processing, and conversational AI systems."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Automation Focus",
      description: "Extensive experience building AI automation solutions that seamlessly integrate into business workflows."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Industry Impact",
      description: "Proven track record of deploying AI systems that drive real business results across various industries."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ServeAI is built by a world-class team of machine learning engineers and researchers 
            from leading universities, dedicated to revolutionizing restaurant operations through AI automation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {highlights.map((highlight, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group animate-slide-up text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  {highlight.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-3 text-lg">
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center animate-fade-in" style={{ animationDelay: "400ms" }}>
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're passionate about empowering restaurants with cutting-edge AI technology. 
                Our team combines deep academic research with practical industry experience to create 
                AI phone agents that don't just answer calls—they understand your business, 
                adapt to your needs, and deliver exceptional customer experiences that drive growth.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;