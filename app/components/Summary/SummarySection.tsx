import { LayoutGrid } from "@/app/layout/LayoutGrid";
import { CTA } from "@/app/molecules/CTA";

export const SummarySection: React.FC = () => {
  return (
    <section id="summary" className="flex h-screen scroll-mt-20 items-center">
      <LayoutGrid extraClasses="w-screen">
        <div className="col-span-full mb-16 flex flex-col items-center gap-4 text-center">
          <h1 className="text-secondary-700">Hello, my name is</h1>
          <h2 className="text-4xl font-bold text-background-100">
            Moad Fethallah.
          </h2>
          <p className="text-background-300 md:w-2/3">
            I am a passionate software engineer who loves to build digital
            products that make people&apos;s lives easier. I am always looking
            for new opportunities to learn and grow as a developer. I am a team
            player who enjoys working with others to solve complex problems. I
            am excited to work with you on your next project!
          </p>
        </div>

        <div className="col-span-full flex justify-center">
          <CTA href="#experience">Check out my work !</CTA>
        </div>
      </LayoutGrid>
    </section>
  );
};
