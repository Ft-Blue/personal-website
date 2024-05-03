import { LayoutGrid } from "@/app/layout/LayoutGrid";
import { CTA } from "@/app/molecules/CTA";

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
          <CTA href="#experience">Check out my work !</CTA>
        </div>
      </LayoutGrid>
    </section>
  );
};
