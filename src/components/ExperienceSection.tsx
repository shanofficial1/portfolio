import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Building, Users, TrendingUp } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      type: "Full-time",
      description: "Lead development of enterprise-scale web applications serving 100K+ users. Architect and implement microservices using Node.js, React, and AWS cloud infrastructure.",
      achievements: [
        "Improved application performance by 40% through optimization",
        "Led team of 5 developers in agile development cycles",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Mentored junior developers and conducted code reviews"
      ],
      technologies: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL", "Docker"],
      teamSize: "8 developers",
      impact: "40% performance increase"
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      location: "Austin, TX",
      period: "2020 - 2022",
      type: "Full-time",
      description: "Developed and maintained customer-facing web applications for a fast-growing SaaS platform. Collaborated with product and design teams to deliver user-centric solutions.",
      achievements: [
        "Built responsive web applications from scratch",
        "Integrated third-party APIs and payment systems",
        "Implemented real-time features using WebSocket technology",
        "Contributed to 50% reduction in customer support tickets"
      ],
      technologies: ["React", "Python", "Django", "MongoDB", "Redis", "Stripe API"],
      teamSize: "4 developers",
      impact: "50% support ticket reduction"
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency Pro",
      location: "Remote",
      period: "2019 - 2020",
      type: "Contract",
      description: "Created interactive web experiences for diverse clients including e-commerce platforms, corporate websites, and web applications with focus on performance and accessibility.",
      achievements: [
        "Delivered 15+ client projects on time and within budget",
        "Achieved 95+ Lighthouse scores on all projects",
        "Implemented accessibility standards (WCAG 2.1 AA)",
        "Reduced page load times by average of 3 seconds"
      ],
      technologies: ["Vue.js", "JavaScript", "SCSS", "Webpack", "Figma"],
      teamSize: "3 developers",
      impact: "95+ Lighthouse scores"
    },
    {
      title: "Junior Web Developer",
      company: "WebDev Studios",
      location: "New York, NY",
      period: "2018 - 2019",
      type: "Full-time",
      description: "Started career developing custom WordPress themes and plugins. Gained foundation in web development best practices and modern development workflows.",
      achievements: [
        "Developed 20+ custom WordPress themes",
        "Created reusable component library",
        "Improved team workflow with Git best practices",
        "Completed advanced JavaScript certification"
      ],
      technologies: ["PHP", "WordPress", "JavaScript", "jQuery", "MySQL"],
      teamSize: "6 developers",
      impact: "20+ themes delivered"
    }
  ];

  const stats = [
    { label: "Years Experience", value: "6+", icon: CalendarDays },
    { label: "Projects Completed", value: "50+", icon: TrendingUp },
    { label: "Team Members Led", value: "12", icon: Users },
    { label: "Companies", value: "4", icon: Building }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Professional Experience
          </h2>
          <p className="text-lg text-portfolio-text-light max-w-2xl mx-auto">
            A journey through challenging roles and impactful projects that shaped my expertise
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card 
              key={stat.label} 
              className="portfolio-card text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                <div className="text-2xl font-bold text-gradient mb-1">{stat.value}</div>
                <div className="text-sm text-portfolio-text-light">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={`${exp.company}-${exp.period}`} 
              className="portfolio-card animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                    <CardDescription className="flex flex-wrap items-center gap-4 text-base">
                      <span className="flex items-center gap-1">
                        <Building className="h-4 w-4" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <CalendarDays className="h-4 w-4" />
                        {exp.period}
                      </span>
                    </CardDescription>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Badge variant="secondary">{exp.type}</Badge>
                    <Badge variant="outline">{exp.teamSize}</Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-portfolio-text-light mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Achievements */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-portfolio-text-light">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Used */}
                <div className="mb-4">
                  <h4 className="font-semibold mb-3">Technologies & Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Impact Highlight */}
                <div className="mt-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    <span className="font-semibold text-primary">Impact:</span>
                    <span className="text-foreground">{exp.impact}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Open Source & Community */}
        <div className="mt-16 animate-fade-in">
          <h3 className="text-2xl font-bold mb-8 text-center">Community Involvement</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="portfolio-card text-center">
              <CardContent className="p-6">
                <div className="text-3xl mb-3">🌟</div>
                <h4 className="font-semibold mb-2">Open Source</h4>
                <p className="text-sm text-portfolio-text-light mb-2">
                  Contributed to 15+ open source projects
                </p>
                <Badge variant="secondary">500+ GitHub stars</Badge>
              </CardContent>
            </Card>

            <Card className="portfolio-card text-center">
              <CardContent className="p-6">
                <div className="text-3xl mb-3">🎤</div>
                <h4 className="font-semibold mb-2">Speaking</h4>
                <p className="text-sm text-portfolio-text-light mb-2">
                  Presented at 5 tech conferences
                </p>
                <Badge variant="secondary">1000+ attendees</Badge>
              </CardContent>
            </Card>

            <Card className="portfolio-card text-center">
              <CardContent className="p-6">
                <div className="text-3xl mb-3">👨‍🏫</div>
                <h4 className="font-semibold mb-2">Mentoring</h4>
                <p className="text-sm text-portfolio-text-light mb-2">
                  Mentored 20+ junior developers
                </p>
                <Badge variant="secondary">4.9/5 rating</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;