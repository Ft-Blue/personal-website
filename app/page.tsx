import { ContactSection } from "./components/Contact/ContactSection";
import { ExperienceSection } from "./components/Experience/ExperienceSection";
import { ProjectsSection } from "./components/Project/ProjectsSection";
import { SummarySection } from "./components/Summary/SummarySection";

export const revalidate = 86400;

const Home: React.FC = () => {
  return (
    <>
      <SummarySection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
};

export default Home;
