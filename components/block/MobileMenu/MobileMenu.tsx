import React from "react";

import styles from "./mobilemenu.module.css";

import { LinksContainerMobile, AuthLinks, Link } from "@app/components";

interface MobileMenuProps {
  links: any; // Links to be displayed in the mobile menu
  className?: string; // Optional CSS class for the MobileMenu component
}

const MobileMenu: React.FC<MobileMenuProps> = ({ links, className }) => {
  return (
    <div data-aos="fade-down" className={`${styles.lumi__menu}`}>
      <LinksContainerMobile links={links} />{" "}
      {/* Render LinksContainerMobile component with 'links' prop */}
      <div className={styles.lumi__sign_container}>
        <Link link={{ path: "#", label: "sign in" }} />{" "}
        {/* Render a Link component for signing in */}
        <span>or</span>
        <Link link={{ path: "#", label: "register" }} />{" "}
        {/* Render a Link component for registration */}
      </div>
    </div>
  );
};

export default MobileMenu;
