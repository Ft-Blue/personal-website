import Link from "next/link";
import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export const CTA: FC<{
  href: string;
  children: ReactNode;
  additionalClasses?: string;
}> = ({ href, children, additionalClasses }) => {
  return (
    <Link
      className={twMerge(
        "w-fit rounded-md px-8 py-4 text-secondary-700 transition-colors duration-300 ease-in-out",
        "border-2 border-secondary-700",
        "hover:bg-secondary-700 hover:text-background-100",
        additionalClasses,
      )}
      href={href}
    >
      {children}
    </Link>
  );
};
