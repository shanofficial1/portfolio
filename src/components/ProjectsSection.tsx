import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, Play } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, inventory management, and real-time analytics.",
      image: "/placeholder-project-1.jpg",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      liveDemo: "https://demo.example.com",
      github: "https://github.com/username/ecommerce",
      featured: true,
      metrics: {
        performance: "98% Lighthouse Score",
        users: "10K+ Active Users",
        uptime: "99.9% Uptime"
      }
    },
    {
      id: 2,
      title: "Task Management Dashboard",
      description: "Modern project management tool with real-time collaboration, drag-and-drop interface, and advanced filtering. Built with React, TypeScript, and Firebase.",
      image: "/placeholder-project-2.jpg",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      liveDemo: "https://tasks.example.com",
      github: "https://github.com/username/task-manager",
      featured: true,
      metrics: {
        performance: "95% Lighthouse Score",
        teams: "500+ Teams",
        tasks: "50K+ Tasks Managed"
      }
    },
    {
      id: 3,
      title: "AI-Powered Analytics",
      description: "Machine learning platform for data visualization and predictive analytics. Features custom ML models, interactive charts, and automated reporting.",
      image: "/placeholder-project-3.jpg",
      technologies: ["Python", "TensorFlow", "React", "D3.js", "Docker"],
      liveDemo: "https://analytics.example.com",
      github: "https://github.com/username/ai-analytics",
      featured: false,
      metrics: {
        accuracy: "92% Model Accuracy",
        data: "1TB+ Data Processed",
        insights: "10K+ Insights Generated"
      }
    },
    {
      id: 4,
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication, transaction history, and budget tracking. Built with React Native and Node.js.",
      image: "/placeholder-project-4.jpg",
      technologies: ["React Native", "Node.js", "MongoDB", "JWT"],
      liveDemo: "https://banking.example.com",
      github: "https://github.com/username/banking-app",
      featured: false,
      metrics: {
        security: "Bank-Grade Security",
        transactions: "100K+ Transactions",
        rating: "4.8/5 App Store Rating"
      }
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Featured Projects
          </h2>
          <p className="text-lg text-portfolio-text-light max-w-2xl mx-auto">
            A showcase of my technical expertise through real-world applications, 
            from concept to deployment with measurable impact.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="portfolio-card overflow-hidden group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-6xl font-bold text-primary/30">
                    {project.title.split(' ').map(word => word[0]).join('')}
                  </div>
                </div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <Button 
                    size="sm" 
                    variant="secondary" 
                    asChild
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                      <Play className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    variant="secondary" 
                    asChild
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                <CardDescription className="text-portfolio-text-light">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-4 text-xs">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-center p-2 bg-secondary/50 rounded">
                      <div className="font-semibold text-primary">{value}</div>
                      <div className="text-portfolio-text-light capitalize">{key}</div>
                    </div>
                  ))}
                </div>
                
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" asChild className="flex-1">
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="flex-1">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Source
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-8 text-center">More Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={project.id} className="portfolio-card animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="ghost" asChild>
                        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button size="sm" variant="ghost" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  <CardDescription className="text-sm text-portfolio-text-light">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* View All Projects Button */}
        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
