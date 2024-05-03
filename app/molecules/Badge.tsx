import { ReactNode } from "react";

export const Badge: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <span className="rounded-md bg-secondary-700 px-2 py-1 text-primary-100">
      {children}
    </span>
  );
};
