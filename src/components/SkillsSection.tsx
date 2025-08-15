import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
  { name: "React", level: 95, years: 1 },
  { name: "Tailwind CSS", level: 90, years: 1 },
  { name: "HTML5", level: 95, years: 1 },
  { name: "CSS3", level: 95, years: 1 },
  { name: "Responsive Design", level: 90, years: 1 },
]

    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 90, years: 4 },
        { name: "Express.js", level: 90, years: 4 },
        { name: "MongoDB", level: 80, years: 3 }
      ]
    },
    {
      title: "Tools & Others",
      icon: "🛠️",
      skills: [
        { name: "Git", level: 95, years: 5 },
    { name: "REST APIs", level: 95, years: 4 },
    { name: "Postman", level: 90, years: 3 },
    { name: "VS Code", level: 95, years: 5 },
    { name: "Chrome DevTools", level: 90, years: 4 },
    { name: "npm / Yarn", level: 90, years: 3 },
      ]
    }
  ];

  const certifications = [
    {
    name: "BCA Degree",
    issuer: "Kannur University",
    year: "2025",
    status: "Completed"
  },
  {
    name: "MERN Stack Certification",
    issuer: "Self / Online Courses",
    year: "2025",
    status: "Active"
  },
  {
    name: "Frontend Development Certification",
    issuer: "Self / Online Courses",
    year: "2025",
    status: "Active"
  }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 90) return "bg-gradient-to-r from-green-500 to-emerald-600";
    if (level >= 80) return "bg-gradient-to-r from-blue-500 to-cyan-600";
    if (level >= 70) return "bg-gradient-to-r from-yellow-500 to-orange-600";
    return "bg-gradient-to-r from-red-500 to-pink-600";
  };

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Skills & Expertise
          </h2>
          <p className="text-lg text-portfolio-text-light max-w-2xl mx-auto">
            Comprehensive technical skills developed through hands-on experience and continuous learning
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.title} 
              className="portfolio-card animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-2xl">{category.icon}</span>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-portfolio-text-light">
                            {skill.years}y
                          </span>
                          <span className="text-sm font-semibold">{skill.level}%</span>
                        </div>
                      </div>
                      <div className="relative">
                        <Progress 
                          value={skill.level} 
                          className="h-2"
                        />
                        <div 
                          className={`absolute top-0 left-0 h-2 rounded-full transition-all duration-1000 ${getSkillColor(skill.level)}`}
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 4 + skillIndex) * 0.1}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="animate-fade-in">
          <h3 className="text-2xl font-bold mb-8 text-center">Certifications</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={cert.name} 
                className="portfolio-card text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="text-3xl mb-3">🏆</div>
                  <h4 className="font-semibold mb-2">{cert.name}</h4>
                  <p className="text-sm text-portfolio-text-light mb-2">{cert.issuer}</p>
                  <div className="flex justify-between items-center text-xs">
                    <span>{cert.year}</span>
                    <Badge variant={cert.status === "Active" ? "default" : "secondary"}>
                      {cert.status}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technical Interests */}
        <div className="mt-16 text-center animate-fade-in">
          <h3 className="text-xl font-semibold mb-6">Current Learning Focus</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Machine Learning", "WebAssembly", "Blockchain", "AR/VR", 
              "Microservices", "Serverless", "Edge Computing"
            ].map((interest, index) => (
              <Badge 
                key={interest} 
                variant="outline" 
                className="px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {interest}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;