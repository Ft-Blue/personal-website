import { ExperienceSection } from "./components/Experience/ExperienceSection";
import { SummarySection } from "./components/Summary/SummarySection";

const Home: React.FC = () => {
  return (
    <>
      <SummarySection />
      <ExperienceSection />
      <div style={{ height: "75vh" }} />
    </>
  );
};

export default Home;
