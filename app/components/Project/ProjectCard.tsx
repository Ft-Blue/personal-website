import Image from "next/image";

import { Badge } from "@/app/molecules/Badge";
import { CTA } from "@/app/molecules/CTA";

import { Project } from "./types";

export const ProjectCard: React.FC<{ project: Project }> = ({
  project: { title, description, technologies, githubUrl, demoUrl, imageUrl },
}) => {
  return (
    <div className="flex w-full flex-col gap-4 rounded-lg p-4 shadow shadow-background-700">
      <div className="relative h-80 w-full">
        <Image
          src={imageUrl ?? "/logo-light.png"}
          alt={title}
          fill
          style={{
            objectFit: "contain",
            height: "100%",
            width: "100%",
          }}
        />
      </div>

      <div className="flex flex-col gap-6">
        <div>
          <h3 className="mb-2 text-2xl">{title}</h3>
          <p className="text-primary-500">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
        <div className="flex justify-end gap-4">
          {demoUrl !== undefined && (
            <CTA
              additionalClasses="px-4 py-2"
              href={demoUrl}
              target="_blank"
              isSecondary
            >
              Demo
            </CTA>
          )}
          <CTA additionalClasses="px-4 py-2" href={githubUrl} target="_blank">
            Github
          </CTA>
        </div>
      </div>
    </div>
  );
};
