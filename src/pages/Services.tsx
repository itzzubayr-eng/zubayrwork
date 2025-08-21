import React from 'react';
import { Smartphone, Monitor, BarChart3, Palette, Users, Zap, ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Services = () => {
  useScrollAnimation();
  const services = [
    {
      icon: Smartphone,
      title: "Mobile App UI Design",
      description: "Create stunning, user-friendly mobile interfaces that engage users and drive conversions. From concept to final design with complete user journey mapping.",
      features: [
        "iOS & Android app designs",
        "Interactive prototypes", 
        "User flow optimization",
        "Responsive layouts",
        "Design system creation"
      ],
      popular: false,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: Monitor,
      title: "Website Design",
      description: "Modern, responsive websites that convert visitors into customers. Focus on user experience, brand consistency, and performance optimization.",
      features: [
        "Responsive web design",
        "Landing page optimization",
        "E-commerce interfaces",
        "Brand integration",
        "SEO-friendly layouts"
      ],
      popular: true,
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: BarChart3,
      title: "Dashboard Design",
      description: "Clean, data-driven dashboards that make complex information simple and actionable. Perfect for admin panels and analytics platforms.",
      features: [
        "Data visualization",
        "Admin panel design",
        "Analytics dashboards",
        "Custom chart designs",
        "User role management UI"
      ],
      popular: false,
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: Palette,
      title: "Design System Creation",
      description: "Comprehensive design systems that ensure consistency across all your digital products. Scalable, maintainable, and team-friendly.",
      features: [
        "Component libraries",
        "Style guides",
        "Color palettes",
        "Typography systems",
        "Icon sets"
      ],
      popular: false,
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: Users,
      title: "User Research & Testing",
      description: "Understand your users better with comprehensive research and testing services. Data-driven insights for better design decisions.",
      features: [
        "User interviews",
        "Usability testing",
        "User journey mapping",
        "Persona development",
        "Competitive analysis"
      ],
      popular: false,
      gradient: "from-cyan-500 to-blue-600"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Research", 
      description: "Understanding your business goals, target audience, and project requirements through detailed discussions and research."
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "Creating a comprehensive design strategy with wireframes, user flows, and information architecture."
    },
    {
      step: "03", 
      title: "Design & Prototyping",
      description: "Crafting beautiful, functional designs with interactive prototypes for testing and validation."
    },
    {
      step: "04",
      title: "Testing & Refinement", 
      description: "User testing and iterative improvements to ensure the best possible user experience."
    },
    {
      step: "05",
      title: "Delivery & Handoff",
      description: "Final designs with complete documentation, assets, and developer handoff materials."
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up in-view">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive design solutions to bring your digital vision to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden p-8 bg-gradient-card border-0 hover-lift hover-glow animate-slide-up glass ${
                service.popular ? 'ring-2 ring-primary/30' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {service.popular && (
                <Badge className="absolute top-4 right-4 bg-gradient-primary text-white shadow-medium">
                  Popular
                </Badge>
              )}

              {/* Service Icon */}
              <div className={`w-16 h-16 mb-6 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-medium`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Service Content */}
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Call to Action */}
              <div className="mt-auto">
                <Button 
                  className={`w-full bg-gradient-to-r ${service.gradient} text-white hover:shadow-glow transition-all duration-300`}
                >
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="mb-20">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My Design <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A structured approach to delivering exceptional design solutions
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center shadow-medium">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-16 w-full h-0.5 bg-gradient-primary opacity-30" />
                  )}
                </div>
                <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-slide-up">
          <Card className="p-12 bg-gradient-hero border-0 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your ideas and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-medium hover-lift"
                asChild
              >
                <a href="/contact">
                  Start a Project <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
                asChild
              >
                <a href="mailto:itzzubayr@gmail.com">
                  Send Email
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Services;