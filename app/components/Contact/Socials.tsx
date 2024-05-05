import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { FC } from "react";

export const LinkedIn: FC = () => {
  return (
    <Link
      href="https://www.linkedin.com/in/moad-fethallah/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-4xl text-primary-100"
    >
      <FontAwesomeIcon icon={faLinkedin} />
    </Link>
  );
};

export const Github: FC = () => {
  return (
    <Link
      href="https://github.com/Ft-Blue"
      target="_blank"
      rel="noopener noreferrer"
      className="text-4xl text-primary-100"
    >
      <FontAwesomeIcon icon={faGithub} />
    </Link>
  );
};

export const Email: FC = () => {
  return (
    <Link
      href="mailto:moad.fethallah@gmail.com"
      className="text-4xl text-primary-100"
    >
      <FontAwesomeIcon icon={faEnvelope} />
    </Link>
  );
};
