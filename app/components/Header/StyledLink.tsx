import Link from "next/link";
import { FC, Key } from "react";

import { MenuItem } from "./types";

export const StyledLink: FC<{
  menuItem: MenuItem;
  additionalClasses?: string;
  onClick?: () => void;
  key: Key;
}> = ({ menuItem, additionalClasses, onClick, key }) => (
  <Link
    key={key}
    href={menuItem.href}
    onClick={onClick}
    className={`flex flex-col justify-center rounded-lg px-4 py-2 hover:text-secondary-700 ${additionalClasses}`}
  >
    {menuItem.text}
  </Link>
);
