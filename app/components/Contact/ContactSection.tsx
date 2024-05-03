import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import { LayoutGrid } from "@/app/layout/LayoutGrid";
import { CTA } from "@/app/molecules/CTA";

export const ContactSection: React.FC = () => {
  return (
    <section className="pb-20">
      <LayoutGrid>
        <h2
          id="contact"
          className="col-span-full mb-16 scroll-mt-36 text-4xl font-bold text-primary-100 md:text-center"
        >
          Get In Touch
        </h2>
      </LayoutGrid>

      <LayoutGrid>
        <ReachOut />
        <SocialLinks />
      </LayoutGrid>
    </section>
  );
};

const SocialLinks: React.FC = () => {
  return (
    <div className="col-span-full flex items-center justify-center gap-8 text-primary-300">
      <Link
        href="mailto:moad.fethallah@gmail.com"
        className="text-4xl text-primary-100"
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </Link>
      <Link
        href="https://github.com/Ft-Blue"
        target="_blank"
        rel="noopener noreferrer"
        className="text-4xl text-primary-100"
      >
        <FontAwesomeIcon icon={faGithub} />
      </Link>
      <Link
        href="https://www.linkedin.com/in/moad-fethallah/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-4xl text-primary-100"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </Link>
    </div>
  );
};

const ReachOut: React.FC = () => {
  return (
    <>
      <div className="col-span-full mb-8 text-background-300 md:text-center">
        <p>
          I&apos;m not currently looking for new opportunities, but I&apos;m
          always open to new connections.
        </p>
        <p>
          If you have any questions or just want to say hi, feel free to send me
          an email.
        </p>
      </div>
      <div className="col-span-full mb-16 flex items-center justify-center text-primary-300">
        <CTA href="mailto:moad.fethallah@gmail.com">Reach out !</CTA>
      </div>
    </>
  );
};
