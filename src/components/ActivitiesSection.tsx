import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Calendar, MapPin, Users, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const ActivitiesSection = () => {
  const [selectedActivity, setSelectedActivity] = useState<any>(null);

  const activities = [
    {
      id: 1,
      title: "Tech Innovation Hackathon 2024",
      type: "Hackathon",
      date: "March 2024",
      location: "Kochi, Kerala",
      participants: "200+ developers",
      achievement: "2nd Place",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop",
      description: "48-hour hackathon focused on sustainable technology solutions. Built a carbon footprint tracker app using React and Node.js.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      details: "Developed an innovative solution for tracking personal carbon footprint with real-time analytics and gamification features."
    },
    {
      id: 2,
      title: "Google Developer Student Clubs",
      type: "Community",
      date: "2023 - 2024",
      location: "Virtual & Kannur",
      participants: "500+ members",
      achievement: "Core Team Member",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
      description: "Active member of GDSC, organizing workshops and tech talks for fellow students.",
      technologies: ["Leadership", "Event Management", "Teaching"],
      details: "Organized 12+ workshops, mentored 50+ students, and led the mobile development track."
    },
    {
      id: 3,
      title: "Open Source Contribution Week",
      type: "Open Source",
      date: "October 2023",
      location: "Remote",
      participants: "Global community",
      achievement: "15+ PRs merged",
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=300&fit=crop",
      description: "Contributed to multiple open source projects during Hacktoberfest.",
      technologies: ["JavaScript", "Python", "Documentation"],
      details: "Made significant contributions to React, Vue.js, and Python libraries, improving documentation and fixing bugs."
    }
  ];

  return (
    <section id="activities" className="py-20 px-4 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Activities & Hackathons</span>
          </h2>
          <p className="text-portfolio-text-light text-lg max-w-2xl mx-auto">
            Competitive programming, hackathons, and community involvement
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, staggerChildren: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="cursor-pointer"
              onClick={() => setSelectedActivity(activity)}
            >
              <Card className="portfolio-card overflow-hidden h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary text-primary-foreground">
                      {activity.type}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-accent text-accent-foreground">
                      {activity.achievement}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                    {activity.title}
                  </h3>
                  
                  <p className="text-portfolio-text-light text-sm mb-4 line-clamp-2">
                    {activity.description}
                  </p>
                  
                  <div className="space-y-2 text-sm text-portfolio-text-light">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{activity.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{activity.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{activity.participants}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {activity.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {activity.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs rounded bg-secondary text-secondary-foreground">
                        +{activity.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Activity Detail Modal */}
        <Dialog open={!!selectedActivity} onOpenChange={() => setSelectedActivity(null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            {selectedActivity && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl text-gradient">
                    {selectedActivity.title}
                  </DialogTitle>
                </DialogHeader>
                
                <div className="space-y-6">
                  <img
                    src={selectedActivity.image}
                    alt={selectedActivity.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{selectedActivity.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{selectedActivity.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4 text-primary" />
                      <span>{selectedActivity.participants}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Trophy className="w-4 h-4 text-primary" />
                      <span>{selectedActivity.achievement}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Description</h4>
                    <p className="text-portfolio-text-light">{selectedActivity.description}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Details</h4>
                    <p className="text-portfolio-text-light">{selectedActivity.details}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedActivity.technologies.map((tech: string) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm rounded-full bg-primary/20 text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default ActivitiesSection;