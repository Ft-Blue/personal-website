import { getEntriesByType } from "@/app/services/contentful";
import { TypeSide__projectSkeleton } from "@/app/types/contentful";

import { Project } from "./types";

export const fetchProjects = async (): Promise<Project[]> => {
  const projects =
    await getEntriesByType<TypeSide__projectSkeleton>("side-project");

  return projects.items.map((project) => ({
    title: project.fields.title,
    description: project.fields.description,
    technologies: project.fields.technologies,
    githubUrl: project.fields.repositoryUrl,
    demoUrl: project.fields.demoUrl,
    imageUrl: getImageUrl(project.fields.image?.fields.file?.url),
  }));
};

const getImageUrl = (url?: string) =>
  undefined !== url ? `https:${url}` : undefined;
