import React from 'react';
import { ExternalLink, Github, Figma, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Portfolio = () => {
  useScrollAnimation();
  const projects = [
    {
      id: 1,
      title: "Mobile Banking App UI",
      description: "A clean and secure banking app interface focusing on user trust and ease of transactions. Features include account management, quick transfers, and spending analytics.",
      tools: ["Figma", "Prototyping", "User Research"],
      category: "Mobile App",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
      color: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "E-commerce Dashboard",
      description: "Comprehensive admin dashboard for online retailers with sales analytics, inventory management, and customer insights. Designed for efficiency and clarity.",
      tools: ["Figma", "Data Visualization", "UX Research"],
      category: "Web Dashboard",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      color: "from-green-500 to-teal-600"
    },
    {
      id: 3,
      title: "Food Delivery App",
      description: "Modern food ordering app with intuitive navigation, real-time tracking, and personalized recommendations. Focus on visual hierarchy and user engagement.",
      tools: ["Figma", "Interaction Design", "Prototyping"],
      category: "Mobile App",
      image: "https://images.unsplash.com/photo-1586816001966-79b736744398?w=400&h=300&fit=crop",
      color: "from-orange-500 to-red-600"
    },
    {
      id: 4,
      title: "Healthcare Portal",
      description: "Patient management system with appointment scheduling, medical records, and telemedicine features. Prioritizing accessibility and user safety.",
      tools: ["Figma", "Accessibility Design", "User Testing"],
      category: "Web Platform",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
      color: "from-cyan-500 to-blue-600"
    },
    {
      id: 5,
      title: "Fitness Tracker App",
      description: "Comprehensive fitness tracking application with workout plans, progress monitoring, and social features. Motivational design approach.",
      tools: ["Figma", "Motion Design", "User Journey"],
      category: "Mobile App",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      color: "from-pink-500 to-purple-600"
    },
    {
      id: 6,
      title: "Learning Management System",
      description: "Educational platform for online courses with interactive lessons, progress tracking, and collaborative features. Focus on engagement and retention.",
      tools: ["Figma", "Educational UX", "Gamification"],
      category: "Web Platform",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
      color: "from-indigo-500 to-purple-600"
    }
  ];

  const categories = ["All", "Mobile App", "Web Dashboard", "Web Platform"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up in-view">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing my design process and problem-solving approach
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`${
                selectedCategory === category 
                  ? "bg-gradient-primary text-white shadow-glow" 
                  : "hover:border-primary/50"
              } transition-all duration-300`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group overflow-hidden bg-gradient-card border-0 hover-lift hover-glow animate-slide-up glass"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-90`} />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay with Actions */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button size="sm" variant="secondary" className="shadow-medium">
                    <Eye className="w-4 h-4 mr-2" />
                    View
                  </Button>
                  <Button size="sm" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                    <Figma className="w-4 h-4 mr-2" />
                    Figma
                  </Button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {project.category}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tools Used */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool, toolIndex) => (
                    <Badge 
                      key={toolIndex} 
                      variant="outline" 
                      className="text-xs border-primary/20 hover:border-primary/40 transition-colors duration-300"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 hover:border-primary/50 hover:text-primary transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Details
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-slide-up">
          <Card className="p-12 bg-gradient-hero border-0 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Interested in Working Together?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              I'm always open to discussing new projects and creative opportunities.
            </p>
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-medium hover-lift"
              asChild
            >
              <a href="/contact">
                Let's Talk <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;