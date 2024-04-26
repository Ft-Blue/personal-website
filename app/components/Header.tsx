"use client";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import NextLink from "next/link";
import { useState } from "react";

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="text-merino">
      <div className="flex justify-between py-4 ">
        <div className="flex content-center">
          <Image
            src="/logo-light.png"
            alt="Moad Fethallah"
            width={64}
            height={64}
          />
        </div>

        <div className="flex justify-center">
          <div className="hidden content-center gap-4 text-center text-lg md:flex">
            <StyledLink href="#about">About</StyledLink>
            <StyledLink href="#experience">Experience</StyledLink>
            <StyledLink href="#projects">Projects</StyledLink>
            <StyledLink href="#contact">Contact</StyledLink>
          </div>
          <div className="block content-center self-center md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <FontAwesomeIcon icon={faBars} size="2x" />
            </button>
          </div>
        </div>
      </div>

      <div className={`${isMobileMenuOpen ? "block" : "hidden"}  md:hidden`}>
        <MobileMenu onClose={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
      </div>
    </header>
  );
};

const StyledLink = ({
  href,
  children,
  additionalClasses,
}: {
  href: string;
  children: React.ReactNode;
  additionalClasses?: string;
}) => (
  <NextLink
    href={href}
    className={`flex flex-col justify-center rounded-lg px-4 py-2 hover:text-greeny-blue ${additionalClasses}`}
  >
    {children}
  </NextLink>
);

const MobileMenu = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed right-0 top-0 flex h-screen w-[min(75vw,_400px)] flex-col justify-center bg-blue-bayoux text-center">
      <div className="flex justify-center self-end pr-16 pt-4">
        <button onClick={onClose}>
          <FontAwesomeIcon icon={faXmark} size="2x" />
        </button>
      </div>
      <div className="my-auto flex flex-col gap-6">
        <StyledLink href="#about">About</StyledLink>
        <StyledLink href="#experience">Experience</StyledLink>
        <StyledLink href="#projects">Projects</StyledLink>
        <StyledLink href="#contact">Contact</StyledLink>
      </div>
    </div>
  );
};
