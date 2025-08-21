import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Palette, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import profileImage from '@/assets/zuber-profile.jpg';

const Home = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full animate-float" />
          <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-white/20 rounded-full animate-pulse-soft" />
          <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-white/15 rounded-full animate-float" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-slide-up in-view">
            {/* Profile Image */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white/30 shadow-glow hover-glow transition-all duration-500">
                  <img 
                    src={profileImage} 
                    alt="Zuber Balganur - UI/UX Designer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-2 -right-2">
                  <Sparkles className="w-8 h-8 text-white animate-pulse-soft" />
                </div>
              </div>
            </div>

            {/* Hero Text */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Hi, I'm <span className="gradient-text-hero">Zuber Balganur</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-2xl mx-auto">
              UI/UX Designer
            </p>
            
            <p className="text-lg text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Designing meaningful digital experiences that connect people with technology. 
              Passionate about creating intuitive interfaces and delightful user journeys.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-medium hover-lift"
                asChild
              >
                <Link to="/portfolio">
                  View My Work <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
                asChild
              >
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What I <span className="gradient-text">Create</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Specialized in crafting digital experiences across multiple platforms
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Smartphone,
                title: "Mobile App UI",
                description: "Beautiful and intuitive mobile interfaces that users love to interact with."
              },
              {
                icon: Palette,
                title: "Website Design",
                description: "Modern, responsive websites that convert visitors into customers."
              },
              {
                icon: Sparkles,
                title: "Dashboard Design",
                description: "Clean, data-driven dashboards that make complex information simple."
              }
            ].map((service, index) => (
              <Card 
                key={index} 
                className="p-6 bg-gradient-card border-0 hover-lift hover-glow animate-slide-up glass"
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-medium">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              className="hover-glow"
              asChild
            >
              <Link to="/services">
                Explore All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;