import Link from "next/link";
import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export const CTA: FC<{
  href: string;
  children: ReactNode;
  additionalClasses?: string;
  target?: string;
  isSecondary?: boolean;
}> = ({ href, children, additionalClasses, target, isSecondary }) => {
  const mainButtonClasses = twMerge(
    "w-fit rounded-md px-8 py-4 text-secondary-700 transition-colors duration-300 ease-in-out",
    "border-2 border-secondary-700",
    "hover:bg-secondary-700 hover:text-background-100 cursor-pointer",
    additionalClasses,
  );

  const secondaryButtonClasses = twMerge(
    "w-fit rounded-md px-8 py-4 text-background-100 transition-colors duration-300 ease-in-out",
    "bg-secondary-700",
    "hover:bg-secondary-800 cursor-pointer",
    additionalClasses,
  );

  return (
    <button
      className={
        true === isSecondary ? secondaryButtonClasses : mainButtonClasses
      }
    >
      <Link href={href} target={target ?? "_self"}>
        {children}
      </Link>
    </button>
  );
};
