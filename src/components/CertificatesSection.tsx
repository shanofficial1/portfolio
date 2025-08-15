import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, Building, ExternalLink, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const CertificatesSection = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null);

const certificates = [
  {
    id: 1,
    title: "BCA Degree Certificate",
    issuer: "Kannur University",
    date: "2025",
    credentialId: "BCA-2025-001",
    thumbnail: "https://via.placeholder.com/400x300.png?text=BCA+Certificate",
    fullImage: "https://via.placeholder.com/800x600.png?text=BCA+Certificate",
    description: "Bachelor of Computer Applications degree validating completion of undergraduate education in computer applications and software development.",
    skills: ["Programming", "Web Development", "Database Management", "Software Engineering"],
    verificationUrl: "#"
  },
  {
    id: 2,
    title: "MERN Stack Certification",
    issuer: "Self / Online Courses",
    date: "2025",
    credentialId: "MERN-2025-002",
    thumbnail: "https://via.placeholder.com/400x300.png?text=MERN+Certificate",
    fullImage: "https://via.placeholder.com/800x600.png?text=MERN+Certificate",
    description: "Certification demonstrating expertise in full-stack web development using MongoDB, Express.js, React, and Node.js.",
    skills: ["MongoDB", "Express.js", "React", "Node.js", "REST APIs"],
    verificationUrl: "#"
  },
  {
    id: 3,
    title: "Frontend Development Certification",
    issuer: "Self / Online Courses",
    date: "2025",
    credentialId: "FRONTEND-2025-003",
    thumbnail: "https://via.placeholder.com/400x300.png?text=Frontend+Certificate",
    fullImage: "https://via.placeholder.com/800x600.png?text=Frontend+Certificate",
    description: "Certification validating skills in React, Tailwind CSS, SASS/SCSS, and responsive frontend development.",
    skills: ["React", "Tailwind CSS", "SASS/SCSS", "Responsive Design"],
    verificationUrl: "#"
  }
];

  return (
    <section id="certificates" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Certificates</span>
          </h2>
          <p className="text-portfolio-text-light text-lg max-w-2xl mx-auto">
            Professional certifications and achievements in various technologies
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="cursor-pointer"
              onClick={() => setSelectedCertificate(certificate)}
            >
              <Card className="portfolio-card overflow-hidden h-full group">
                <div className="relative overflow-hidden">
                  <img
                    src={certificate.thumbnail}
                    alt={certificate.title}
                    className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <Button size="sm" variant="secondary" className="w-full">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Certificate
                      </Button>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <Award className="w-4 h-4 text-primary-foreground" />
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <h3 className="font-bold text-foreground mb-2 text-sm line-clamp-2">
                    {certificate.title}
                  </h3>
                  
                  <div className="space-y-1 text-xs text-portfolio-text-light mb-3">
                    <div className="flex items-center gap-2">
                      <Building className="w-3 h-3" />
                      <span className="truncate">{certificate.issuer}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      <span>{certificate.date}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {certificate.skills.slice(0, 2).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 text-xs rounded bg-secondary text-secondary-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                    {certificate.skills.length > 2 && (
                      <span className="px-2 py-1 text-xs rounded bg-secondary text-secondary-foreground">
                        +{certificate.skills.length - 2}
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Certificate Detail Modal */}
        <Dialog open={!!selectedCertificate} onOpenChange={() => setSelectedCertificate(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
            {selectedCertificate && (
              <div className="relative">
                {/* Full Certificate Image */}
                <div className="relative">
                  <img
                    src={selectedCertificate.fullImage}
                    alt={selectedCertificate.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{selectedCertificate.title}</h3>
                    <p className="text-white/90 text-lg">{selectedCertificate.issuer}</p>
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Certificate Details</h4>
                      <div className="space-y-2 text-sm text-portfolio-text-light">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span>Issued: {selectedCertificate.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-primary" />
                          <span>Credential ID: {selectedCertificate.credentialId}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Building className="w-4 h-4 text-primary" />
                          <span>Issuing Organization: {selectedCertificate.issuer}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Verification</h4>
                      <Button asChild className="w-full">
                        <a href={selectedCertificate.verificationUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Verify Certificate
                        </a>
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Description</h4>
                    <p className="text-portfolio-text-light">{selectedCertificate.description}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Skills Covered</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCertificate.skills.map((skill: string) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-sm rounded-full bg-primary/20 text-primary"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default CertificatesSection;