import React from 'react';
import { GraduationCap, Award, Heart, Code2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import profileImage from '@/assets/zuber-profile.jpg';

const About = () => {
  useScrollAnimation();
  const skills = [
    'UI/UX Design', 'Figma', 'Adobe XD', 'Sketch', 'Prototyping', 
    'User Research', 'Wireframing', 'Design Systems', 'HTML/CSS', 'JavaScript'
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up in-view">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate designer crafting digital experiences with purpose and creativity
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Image and Quick Stats */}
          <div className="animate-slide-up">
            <Card className="p-8 bg-gradient-card border-0 glass hover-glow">
              <div className="text-center">
                <div className="w-48 h-48 mx-auto mb-6 rounded-3xl overflow-hidden shadow-strong">
                  <img 
                    src={profileImage} 
                    alt="Zuber Balganur"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h2 className="text-2xl font-bold mb-2">Zuber Balganur</h2>
                <p className="text-primary font-medium mb-6">UI/UX Designer</p>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 rounded-xl bg-primary/5">
                    <div className="text-2xl font-bold text-primary">2025</div>
                    <div className="text-sm text-muted-foreground">Graduate</div>
                  </div>
                  <div className="p-4 rounded-xl bg-accent/5">
                    <div className="text-2xl font-bold text-accent">10+</div>
                    <div className="text-sm text-muted-foreground">Projects</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column - Bio and Education */}
          <div className="space-y-8 animate-slide-up">
            {/* Bio */}
            <Card className="p-8 bg-gradient-card border-0 glass hover-glow">
              <div className="flex items-center mb-6">
                <Heart className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-xl font-semibold">My Story</h3>
              </div>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm Zuber Balganur, a Computer Science Engineering graduate from Seacb Engineering College (2025). 
                  I'm passionate about UI/UX design and specialize in crafting engaging mobile apps, websites, and dashboards using Figma.
                </p>
                
                <p>
                  Though I'm a fresher in the industry, I've been actively working on personal design projects 
                  to sharpen my skills and build a portfolio that showcases my dedication to creating meaningful 
                  digital experiences.
                </p>
                
                <p>
                  My approach combines technical understanding from my engineering background with creative 
                  design thinking, allowing me to bridge the gap between user needs and technical possibilities.
                </p>
              </div>
            </Card>

            {/* Education */}
            <Card className="p-8 bg-gradient-card border-0 glass hover-glow">
              <div className="flex items-center mb-6">
                <GraduationCap className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-medium">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Bachelor of Engineering</h4>
                    <p className="text-primary font-medium">Computer Science Engineering</p>
                    <p className="text-muted-foreground">Seacb Engineering College</p>
                    <p className="text-sm text-muted-foreground">2021 - 2025</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Skills */}
            <Card className="p-8 bg-gradient-card border-0 glass hover-glow">
              <div className="flex items-center mb-6">
                <Code2 className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-xl font-semibold">Skills & Tools</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="bg-gradient-primary text-white hover:shadow-glow transition-all duration-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-slide-up">
          <Card className="p-12 bg-gradient-hero border-0 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Let's Create Something Amazing Together
            </h2>
            <p className="text-xl mb-8 opacity-90">
              I'm always excited to work on new projects and collaborate with passionate teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary rounded-full font-medium hover:bg-white/90 transition-all duration-300 hover-lift shadow-medium"
              >
                Start a Project
              </a>
              <a 
                href="mailto:itzzubayr@gmail.com" 
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300"
              >
                Send Email
              </a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;