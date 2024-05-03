"use client";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

import { LayoutGrid } from "@/app/layout/LayoutGrid";

import { ExperienceCard } from "./ExperienceCard";
import { Experience } from "./types";

export const ExperienceSectionContent: React.FC<{
  experiences: Experience[];
}> = ({ experiences }) => {
  const [shownExperienceIdx, setShownExperienceIdx] = useState(0);

  return (
    <section className="pb-20">
      <LayoutGrid>
        <h2
          id="experience"
          className="col-span-full mb-16 scroll-mt-36 text-4xl font-bold text-primary-100 md:text-center"
        >
          What I&apos;ve Been Up To
        </h2>
      </LayoutGrid>

      <div className="relative md:static">
        <LayoutGrid>
          <div className="sticky top-24 col-span-full flex gap-4 overflow-auto border-b-2 border-primary-500 bg-background-900 pb-2 md:static md:col-span-2 md:flex-col md:border-none">
            {experiences.map((experience, idx) => (
              <button
                key={`${experience.company} - ${experience.startDate}`}
                className={twMerge(
                  "p-2 text-start hover:border-b-2 hover:border-secondary-700 hover:text-secondary-700",
                  idx === shownExperienceIdx
                    ? selectedButtonClasses
                    : unselectedButtonClasses,
                  "transition-colors",
                )}
                onClick={() => setShownExperienceIdx(idx)}
              >
                {`${experience.title} @${experience.company}`}
              </button>
            ))}
          </div>
          <div className="col-span-full md:col-span-6">
            {experiences.length > 0 && (
              <ExperienceCard {...experiences[shownExperienceIdx]} />
            )}
          </div>
        </LayoutGrid>
      </div>
    </section>
  );
};

const unselectedButtonClasses = "text-primary-100";

const selectedButtonClasses =
  "border-b-2 border-secondary-700 text-secondary-700";
