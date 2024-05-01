import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS, Document } from "@contentful/rich-text-types";
import { ReactNode } from "react";

import { getEntriesByType } from "@/app/services/contentful";
import { TypeProfessional__experienceSkeleton } from "@/app/types/contentful";

import { Experience } from "./types";

export const fetchExperiences = async (): Promise<Experience[]> => {
  const experiencesEntries =
    await getEntriesByType<TypeProfessional__experienceSkeleton>(
      "professional-experience",
    );

  // sort experiences by start date in descending order
  experiencesEntries.items.sort((a, b) => {
    const aStartDate = new Date(a.fields.startDate);
    const bStartDate = new Date(b.fields.startDate);

    return bStartDate.getTime() - aStartDate.getTime();
  });

  return experiencesEntries.items.map((item) => {
    const fields = item.fields;

    return {
      title: fields.title,
      company: fields.company,
      location: fields.location,
      startDate: formatDate(fields.startDate),
      endDate:
        undefined !== fields.endDate ? formatDate(fields.endDate) : "Present",
      technologies: fields.technologies,
      description: formatDescription(fields.description),
    };
  });
};

const formatDate = (
  date: `${number}-${number}-${number}T${number}:${number}:${number}Z`,
): string => {
  const [year, month] = date.split("T")[0].split("-");

  // return month and year in the format MMMM YYYY
  return new Date(`${year}-${month}`).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
};

const formatDescription = (description: Document): ReactNode => {
  const options: Options = {
    renderNode: {
      [BLOCKS.UL_LIST]: (node, children) => {
        return <ul className="list-disc">{children}</ul>;
      },
      [BLOCKS.LIST_ITEM]: (node, children) => {
        return <li>{children}</li>;
      },
    },
  };

  return documentToReactComponents(description, options);
};
