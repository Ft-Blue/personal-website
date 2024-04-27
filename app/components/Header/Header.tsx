"use client";
import Image from "next/image";

import { MobileMenu } from "./MobileMenu";
import { StyledLink } from "./StyledLink";

export const Header: React.FC = () => {
  const menuItems = [
    { href: "#summary", text: "Summary" },
    { href: "#experience", text: "Experience" },
    { href: "#projects", text: "Projects" },
    { href: "#contact", text: "Contact" },
  ];

  return (
    <header className="absolute inset-x-8 top-0 text-center text-sm md:inset-x-8">
      <div className="flex justify-between py-4">
        <div className="flex content-center">
          <Image
            src="/logo-light.png"
            alt="Moad Fethallah"
            width={64}
            height={64}
          />
        </div>

        <div className="flex justify-center">
          <div className="hidden content-center gap-4  md:flex">
            {menuItems.map((item) => (
              <StyledLink key={item.href} menuItem={item} />
            ))}
          </div>
          <MobileMenu menuItems={menuItems} />
        </div>
      </div>

      <div className={`md:hidden`}></div>
    </header>
  );
};
