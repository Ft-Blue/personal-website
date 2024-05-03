import { Project } from "./types";

export const fetchProjects = (): Project[] => [
  {
    title: "Project 1",
    description: "Description 1",
    technologies: ["Tech 1", "Tech 2"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.com",
  },
  {
    title: "Project 2",
    description: "Description 2",
    technologies: ["Tech 3", "Tech 4"],
    githubUrl: "https://github.com",
    demoUrl: undefined,
    imageUrl: "https://via.placeholder.com/300",
  },
];
