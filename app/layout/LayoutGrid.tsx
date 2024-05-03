import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export const GAP = 4;
export const MARGIN_X = { sm: 8, md: 32, lg: 40 };

export const LayoutGrid: FC<{ children: ReactNode; extraClasses?: string }> = ({
  children,
  extraClasses,
}) => {
  return (
    <div
      className={twMerge(
        "mx-8 grid grid-cols-1 grid-rows-layout gap-4 md:mx-32 md:grid-cols-8 lg:mx-40",
        extraClasses ?? "",
      )}
    >
      {children}
    </div>
  );
};
