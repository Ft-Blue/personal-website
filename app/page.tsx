import { ContactSection } from "./components/Contact/ContactSection";
import { LateralContact } from "./components/Contact/LateralContact";
import { ExperienceSection } from "./components/Experience/ExperienceSection";
import { ProjectsSection } from "./components/Project/ProjectsSection";
import { SummarySection } from "./components/Summary/SummarySection";

export const revalidate = 86400;

const Home: React.FC = () => {
  return (
    <>
      <LateralContact />
      <SummarySection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
};

export default Home;
