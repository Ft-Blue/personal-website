import { twMerge } from "tailwind-merge";

import { LayoutGrid } from "@/app/layout/LayoutGrid";

import { ProjectCard } from "./ProjectCard";
import { Project } from "./types";

export const ProjectsSectionContent: React.FC<{
  projects: Project[];
}> = ({ projects }) => {
  return (
    <section className="pb-20">
      <LayoutGrid>
        <h2
          id="projects"
          className="col-span-full mb-16 scroll-mt-36 text-4xl font-bold text-primary-100 md:text-center"
        >
          What I have Built On The Side
        </h2>
      </LayoutGrid>
      <LayoutGrid extraClasses="">
        {projects.map((project, index) => (
          <div
            key={index}
            className={twMerge(
              "col-span-full md:col-span-4 xl:col-span-3",
              index % 2 === 0
                ? "md:col-start-1 xl:col-start-2"
                : "md:col-start-5",
            )}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </LayoutGrid>
    </section>
  );
};
