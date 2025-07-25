const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src="/lovable-uploads/55eb075a-a165-4523-8124-41603b379284.png"
                alt="ServeAI Logo"
                className="h-8"
              />
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Revolutionizing restaurant phone service with AI agents that sound human, work 24/7, and never miss a call.
            </p>
          </div>
          {/* Removed Product and Support sections as requested */}
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 ServeAI. All rights reserved. Built with AI that cares about your customers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;