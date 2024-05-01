"use client";
import { useState } from "react";

import { LayoutGrid } from "@/app/layout/LayoutGrid";

import { ExperienceCard } from "./ExperienceCard";
import { fetchExperiences } from "./utils";

export const ExperienceSection: React.FC = () => {
  const experiences = fetchExperiences();

  const [shownExperienceIdx, setShownExperienceIdx] = useState(0);

  return (
    <section className="pb-20">
      <LayoutGrid>
        <h2
          id="experience"
          className="col-span-full mb-16 scroll-mt-36 text-4xl font-bold text-primary-100"
        >
          What I&apos;ve Been Up To
        </h2>

        <div className="col-span-full flex gap-4 md:col-span-1 md:flex-col">
          {experiences.map((experience, idx) => (
            <button
              key={experience.startDate}
              className={`p-2 text-start hover:border-b-2 hover:border-secondary-700 hover:text-secondary-700 ${idx === shownExperienceIdx ? selectedButtonClasses : unselectedButtonClasses} transition-colors`}
              onClick={() => setShownExperienceIdx(idx)}
            >
              {`${experience.company}`}
            </button>
          ))}
        </div>
        <div className="col-span-full md:col-span-4">
          <ExperienceCard {...experiences[shownExperienceIdx]} />
        </div>
      </LayoutGrid>
    </section>
  );
};

const unselectedButtonClasses = "text-primary-100";

const selectedButtonClasses =
  "border-b-2 border-secondary-700 text-secondary-700";
