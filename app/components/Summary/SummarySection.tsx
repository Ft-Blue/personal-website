import { LayoutGrid } from "@/app/layout/LayoutGrid";
import { CTA } from "@/app/molecules/CTA";

export const SummarySection: React.FC = () => {
  return (
    <section id="summary" className="flex h-screen scroll-mt-20 items-center">
      <LayoutGrid extraClasses="w-screen">
        <div className="col-span-full mb-16 flex flex-col gap-4">
          <h1 className="text-secondary-700">Hello, my name is</h1>
          <h2 className="text-4xl font-extrabold text-background-100">
            Moad Fethallah.
          </h2>
          <h3 className="text-2xl font-semibold text-background-300 md:w-2/3">
            I build software to make lives easier.
          </h3>
          <p className="text-background-300 lg:w-1/2">
            I am a passionate software engineer who loves to build digital
            products that make people&apos;s lives easier.
            <br /> I work on pieces of software that help businesses reach their
            customers better, bring structure to operations, experiment faster
            and have better control over the flow of information.
          </p>
        </div>

        <div className="col-span-full flex">
          <CTA href="#experience">Check out my work !</CTA>
        </div>
      </LayoutGrid>
    </section>
  );
};
