import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, Variants } from "framer-motion";
import { FC, useState } from "react";

import { StyledLink } from "./StyledLink";
import { MenuItem } from "./types";

export const MobileMenu: FC<{ menuItems: MenuItem[] }> = ({ menuItems }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const variants: Variants = {
    open: { scale: 1.1, rotate: 0 },
    closed: { scale: 1, rotate: 180 },
  };

  return (
    <div className="block content-center self-center md:hidden">
      <motion.button
        initial="closed"
        animate={isMobileMenuOpen ? "open" : "closed"}
        variants={variants}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <FontAwesomeIcon icon={faXmark} size="2x" />
        ) : (
          <FontAwesomeIcon icon={faBars} size="2x" />
        )}
      </motion.button>
      <MobileMenuItems
        items={menuItems}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />
    </div>
  );
};

const MobileMenuItems = ({
  items,
  isOpen,
  onClose,
}: {
  items: MenuItem[];
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <motion.div
      initial={{ scale: 0, y: "50%" }}
      animate={{
        scale: isOpen ? 1 : 0,
        y: isOpen ? "0" : "50%",
      }}
      transition={{ duration: 0.3 }}
      className="fixed inset-x-0 bottom-0 top-24 flex flex-col gap-6 border-t-2 border-solid border-merino bg-pickled-bluewood pt-6 text-center"
    >
      {items.map((item) => (
        <StyledLink key={item.href} menuItem={item} onClick={onClose} />
      ))}
    </motion.div>
  );
};
