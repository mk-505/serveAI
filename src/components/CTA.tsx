import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Restaurant's Phone Service?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join hundreds of restaurants already using ServeAI to increase revenue, improve customer satisfaction, and never miss another call. Get started today with a free demo.
          </p>
          
          <div className="flex justify-center mb-8">
            <Button variant="secondary" size="lg" className="px-8 py-4 text-lg bg-white text-primary hover:bg-white/90" asChild>
              <a href="https://calendly.com/shaun-arulanandam/30min" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5" />
                Book a Free Consultation
              </a>
            </Button>
          </div>
          
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-white/90">
            <div>
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-sm">Calling</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">35%</div>
              <div className="text-sm">Average Revenue Increase</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">0</div>
              <div className="text-sm">Missed Calls</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Effects */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000" />
    </section>
  );
};

export default CTA;