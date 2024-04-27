import Link from "next/link";

export const SummarySection: React.FC = () => {
  return (
    <section
      id="summary"
      className="flex h-screen w-full flex-col justify-center gap-16 px-8 md:px-32 lg:px-40"
    >
      <div className="flex flex-col gap-4">
        <h1 className="text-secondary-700">Hello, my name is</h1>
        <h2 className="text-5xl font-bold text-background-100">
          Moad Fethallah.
        </h2>
        <p className="text-background-300 md:w-1/2">
          I&apos;m a software engineer passionate about designing and building
          digital solutions for business problems.
        </p>
      </div>

      <Link
        className="w-fit rounded-md border-2 border-secondary-700 px-4 py-2 text-secondary-700 transition-colors duration-300 ease-in-out hover:bg-secondary-700 hover:text-background-100"
        href="#experience"
      >
        Check out my work !
      </Link>
    </section>
  );
};
