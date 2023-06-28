import React from "react";

import styles from "./mobilemenu.module.css";

import { LinksContainerMobile, AuthLinks, Link } from "@app/components";

interface MobileMenuProps {
  links: any;
  className?: string;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ links, className }) => {
  return (
    <div className={`${styles.lumi__menu} ${className}`}>
      <LinksContainerMobile links={links} />
      <div className={styles.lumi__sign_container}>
        <Link link={{ path: "#", label: "sign in" }} />
        <span>or</span>
        <Link link={{ path: "#", label: "register" }} />
      </div>
    </div>
  );
};

export default MobileMenu;
