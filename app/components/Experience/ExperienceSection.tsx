"use client";
import { useState } from "react";

import { ExperienceCard } from "./ExperienceCard";
import { fetchExperiences } from "./utils";

export const ExperienceSection: React.FC = () => {
  const experiences = fetchExperiences();

  const [shownExperienceIdx, setShownExperienceIdx] = useState(0);

  return (
    <section
      id="experience"
      className="flex w-full flex-col justify-center gap-16 px-8 py-16  md:px-32 lg:px-40"
    >
      <h2 className="text-5xl font-bold text-primary-100">
        What I&apos;ve Been Up To
      </h2>

      <div className="flex flex-col gap-8 md:flex-row">
        <div className="flex md:flex-col">
          {experiences.map((experience, idx) => (
            <button
              key={experience.startDate}
              className={`p-2 hover:border-b-2 hover:border-secondary-700 hover:text-secondary-700 ${idx === shownExperienceIdx ? selectedButtonClasses : unselectedButtonClasses} transition-colors`}
              onClick={() => setShownExperienceIdx(idx)}
            >
              {`${experience.company}`}
            </button>
          ))}
        </div>
        <div>
          <ExperienceCard {...experiences[shownExperienceIdx]} />
        </div>
      </div>
    </section>
  );
};

const unselectedButtonClasses = "text-primary-100";

const selectedButtonClasses =
  "border-b-2 border-secondary-700 text-secondary-700";
