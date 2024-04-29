import Link from "next/link";
import { FC } from "react";

import { MenuItem } from "./types";

export const StyledLink: FC<{
  menuItem: MenuItem;
  additionalClasses?: string;
  onClick?: () => void;
}> = ({ menuItem, additionalClasses, onClick }) => (
  <Link
    href={menuItem.href}
    onClick={onClick}
    className={`flex flex-col justify-center rounded-lg px-4 py-2 hover:text-secondary-700 ${additionalClasses}`}
  >
    {menuItem.text}
  </Link>
);
