import { ReactNode } from "react";

export type Experience = {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: ReactNode;
  technologies: string[];
};
