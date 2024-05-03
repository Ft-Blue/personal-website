import { FC, ReactNode } from "react";

export const LayoutGrid: FC<{ children: ReactNode; extraClasses?: string }> = ({
  children,
  extraClasses,
}) => {
  return (
    <div
      className={`mx-8 grid grid-cols-1 grid-rows-layout gap-4 md:mx-32 md:grid-cols-8 lg:mx-40 ${extraClasses ?? ""}`}
    >
      {children}
    </div>
  );
};
