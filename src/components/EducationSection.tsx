import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const EducationSection = () => {
  const education = [
    {
      id: 1,
      degree: "Master of Business Administration (MBA)",
      level: "Postgraduate",
      institution: "Dr. P.K. Rajan Memorial Campus, Kannur University",
      duration: "2025 - 2027",
      location: "Palathadam, Nileshwaram, Kerala",
      status: "In Progress"
    },
    {
      id: 2,
      degree: "Bachelor of Computer Science",
      level: "Undergraduate", 
      institution: "University of Technology",
      duration: "2020 - 2024",
      location: "Tech City, Kerala",
      status: "Completed"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0
    }
  };

  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="text-portfolio-text-light text-lg max-w-2xl mx-auto">
            Academic journey and continuous learning path
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30"></div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="space-y-12"
          >
            {education.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="relative flex items-start gap-8"
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.2 + 0.3, duration: 0.3 }}
                  className="relative z-10 flex items-center justify-center w-16 h-16 bg-primary rounded-full shadow-lg glow-effect"
                >
                  <GraduationCap className="w-8 h-8 text-primary-foreground" />
                </motion.div>

                {/* Content card */}
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="flex-1"
                >
                  <Card className="portfolio-card">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-accent/20 text-accent mb-2 sm:mb-0">
                          {item.level}
                        </span>
                        <span className={`text-sm font-medium ${
                          item.status === 'Completed' ? 'text-green-400' : 'text-yellow-400'
                        }`}>
                          {item.status}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {item.degree}
                      </h3>
                      
                      <p className="text-portfolio-text-light font-medium mb-4">
                        {item.institution}
                      </p>
                      
                      <div className="flex flex-col sm:flex-row gap-4 text-sm text-portfolio-text-light">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{item.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{item.location}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;