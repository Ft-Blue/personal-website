import { ReactNode } from "react";

type ExperienceCardProps = {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: ReactNode;
  technologies: string[];
};

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  location,
  startDate,
  endDate,
  description,
  technologies,
}) => {
  return (
    <div className="flex flex-col gap-4 border-l-2 border-primary-500 py-2 pl-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-secondary-700">{title}</h3>
        <h4 className="text-primary-100">{company}</h4>
        <h4 className="text-primary-500">{location}</h4>
        <h4 className="text-primary-500">
          {startDate} - {endDate}
        </h4>
      </div>
      <>{description}</>
      <div className="flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-md bg-secondary-700 px-2 py-1 text-primary-100"
          >
            {technology}
          </span>
        ))}
      </div>
    </div>
  );
};
