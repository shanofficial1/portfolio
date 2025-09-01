import { Navbar } from "@/components/Navbar";
import { HeaderSection } from "@/components/sections/HeaderSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ActivitiesShowcase } from "@/components/sections/ActivitiesShowcase";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { CertificatesSection } from "@/components/sections/CertificatesSection";
import { GitReposSection } from "@/components/sections/GitReposSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div>
      <Navbar />
      <main>
        <HeaderSection />
        <EducationSection />
        <ProjectsSection />
        {/* <ActivitiesShowcase /> */}
        <SkillsSection />
        {/* <CertificatesSection /> */}
        {/* <GitReposSection /> */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
