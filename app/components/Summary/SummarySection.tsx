import Link from "next/link";

import { LayoutGrid } from "@/app/layout/LayoutGrid";

export const SummarySection: React.FC = () => {
  return (
    <section id="summary" className="flex h-screen scroll-mt-20 items-center">
      <LayoutGrid extraClasses="w-screen">
        <div className="col-span-full mb-16 flex flex-col gap-4">
          <h1 className="text-secondary-700">Hello, my name is</h1>
          <h2 className="text-4xl font-bold text-background-100">
            Moad Fethallah.
          </h2>
          <p className="text-background-300 md:w-2/3">
            I&apos;m a software engineer passionate about designing and building
            digital solutions for business problems.
          </p>
        </div>

        <div className="col-span-full">
          <Link
            className="w-fit rounded-md border-2 border-secondary-700 px-4 py-2 text-secondary-700 transition-colors duration-300 ease-in-out hover:bg-secondary-700 hover:text-background-100"
            href="#experience"
          >
            Check out my work !
          </Link>
        </div>
      </LayoutGrid>
    </section>
  );
};
