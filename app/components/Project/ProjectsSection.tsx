import { ProjectsSectionContent } from "./ProjectsSectionContent";
import { fetchProjects } from "./utils";

export const revalidate = 86400;

export const ProjectsSection: React.FC = () => {
  const projects = fetchProjects();

  return projects.length > 0 ? (
    <ProjectsSectionContent projects={projects} />
  ) : (
    <></>
  );
};
