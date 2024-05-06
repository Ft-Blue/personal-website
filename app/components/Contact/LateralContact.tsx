import { FC } from "react";

import { Email, Github, LinkedIn, Resume } from "./Socials";

export const LateralContact: FC = () => {
  return (
    <div className="inset-y-0 left-0 col-span-full hidden h-screen items-center justify-center gap-8 px-8 md:fixed md:flex md:flex-col">
      <Email />
      <LinkedIn />
      <Github />
      <Resume />
    </div>
  );
};
