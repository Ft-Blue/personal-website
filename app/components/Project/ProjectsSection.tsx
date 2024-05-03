import { ProjectsSectionContent } from "./ProjectsSectionContent";
import { fetchProjects } from "./utils";

export const ProjectsSection: React.FC = async () => {
  const projects = await fetchProjects();

  return projects.length > 0 ? (
    <ProjectsSectionContent projects={projects} />
  ) : (
    <></>
  );
};
