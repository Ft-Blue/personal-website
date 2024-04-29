import { ExperienceSection } from "./components/Experience/ExperienceSection";
import { SummarySection } from "./components/Summary/SummarySection";

const Home: React.FC = () => {
  return (
    <>
      <SummarySection />
      <ExperienceSection />
    </>
  );
};

export default Home;
