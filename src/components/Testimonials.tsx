import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "ServeAI has been a game-changer for our restaurant. We've increased our order volume by 35% since implementation, and our customers can't tell the difference between our AI agent and human staff. The best part? We never miss a call anymore, even during our busiest dinner rushes.",
      author: "Maria Rodriguez",
      position: "Owner",
      restaurant: "Bella Vista Italian Kitchen",
      rating: 5
    },
    {
      quote: "I was skeptical about AI handling our customer calls, but ServeAI proved me wrong. The system learned our menu perfectly, handles complex dietary requests, and even upsells better than some of our human staff. Our reservation book is fuller than ever.",
      author: "James Chen",
      position: "General Manager", 
      restaurant: "Golden Dragon Restaurant",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Loved by Restaurant Owners
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how ServeAI is transforming restaurants across the country with AI phone agents that deliver results.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-foreground leading-relaxed mb-6 text-lg">
                  "{testimonial.quote}"
                </blockquote>
                
                <footer className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary font-semibold text-lg">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.author}
                    </div>
                    <div className="text-muted-foreground">
                      {testimonial.position}, {testimonial.restaurant}
                    </div>
                  </div>
                </footer>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;