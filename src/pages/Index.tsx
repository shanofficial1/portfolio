import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import CertificatesSection from "@/components/CertificatesSection";
import GitHubReposSection from "@/components/GitHubReposSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ActivitiesSection />
        <CertificatesSection />
        <GitHubReposSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
