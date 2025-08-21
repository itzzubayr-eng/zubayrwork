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
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
        {/* Advanced Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large floating shapes */}
          <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl animate-float" />
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse-soft" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-2xl animate-float" />
          
          {/* Geometric shapes */}
          <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-white/20 rounded-lg rotate-45 animate-float" />
          <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-white/30 rounded-full animate-pulse-soft" />
          <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-white/25 rotate-12 animate-float" />
          <div className="absolute top-1/2 right-1/4 w-10 h-10 border-2 border-white/20 rounded-full animate-pulse-soft" />
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
          </div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-slide-up in-view">
            {/* Enhanced Profile Section */}
            <div className="mb-12 flex justify-center">
              <div className="relative group">
                {/* Rotating border */}
                <div className="absolute inset-0 w-44 h-44 md:w-52 md:h-52 rounded-full bg-gradient-to-r from-white/40 via-transparent to-white/40 animate-spin [animation-duration:8s]" />
                
                {/* Main profile image */}
                <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white/30 shadow-glow hover-glow transition-all duration-500 group-hover:scale-105">
                  <img 
                    src={profileImage} 
                    alt="Zuber Balganur - UI/UX Designer"
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                {/* Floating elements around profile */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center animate-pulse-soft">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-gradient-primary rounded-full animate-float" />
                <div className="absolute top-1/2 -right-6 w-6 h-6 bg-white/30 rounded-full animate-pulse-soft" />
              </div>
            </div>

            {/* Enhanced Typography */}
            <div className="space-y-6 mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-white/80 text-sm font-medium mb-4 animate-pulse-soft">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                Available for new projects
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Hi, I'm{' '}
                <span className="relative inline-block">
                  <span className="gradient-text-hero">Zuber Balganur</span>
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-primary rounded-full animate-pulse-soft" />
                </span>
              </h1>
              
              <div className="relative">
                <p className="text-2xl md:text-3xl text-white/90 mb-4 max-w-2xl mx-auto font-medium">
                  UI/UX Designer & Creative Thinker
                </p>
                <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-1 w-24 h-0.5 bg-gradient-secondary rounded-full" />
              </div>
              
              <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                Designing meaningful digital experiences that connect people with technology. 
                Passionate about creating intuitive interfaces and delightful user journeys.
              </p>
            </div>

            {/* Enhanced CTA Section */}
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="group bg-white text-primary hover:bg-white/90 shadow-medium hover-lift px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-glow"
                  asChild
                >
                  <Link to="/portfolio">
                    <Sparkles className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                    View My Work 
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="group border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-4 rounded-full font-semibold text-lg backdrop-blur-sm transition-all duration-300"
                  asChild
                >
                  <Link to="/contact">
                    Get in Touch
                    <div className="ml-2 w-2 h-2 bg-white rounded-full group-hover:animate-pulse" />
                  </Link>
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="flex justify-center items-center space-x-8 text-white/70 text-sm">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                  CS Engineer 2025
                </div>
                <div className="w-px h-4 bg-white/30" />
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse" />
                  Figma Specialist
                </div>
                <div className="w-px h-4 bg-white/30" />
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse" />
                  Karnataka, India
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
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