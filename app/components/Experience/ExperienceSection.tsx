import { ExperienceSectionContent } from "./ExperienceSectionContent";
import { fetchExperiences } from "./utils";

export const ExperienceSection: React.FC = async () => {
  const experiences = await fetchExperiences();

  return <ExperienceSectionContent experiences={experiences} />;
};
