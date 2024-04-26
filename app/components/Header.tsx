import Image from "next/image";
import NextLink from "next/link";

export const Header: React.FC = () => {
  return (
    <header className="flex justify-between py-4">
      <div className="flex content-center">
        <Image
          src="/logo-light.png"
          alt="Moad Fethallah"
          width={64}
          height={64}
        />
      </div>

      <nav className="flex content-center gap-4 text-center text-lg">
        <StyledLink href="#about">About</StyledLink>
        <StyledLink href="#experience">Experience</StyledLink>
        <StyledLink href="#projects">Projects</StyledLink>
        <StyledLink href="#contact">Contact</StyledLink>
      </nav>
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
    className={`flex flex-col justify-center rounded-lg px-4 py-2 text-merino hover:text-greeny-blue ${additionalClasses}`}
  >
    {children}
  </NextLink>
);
