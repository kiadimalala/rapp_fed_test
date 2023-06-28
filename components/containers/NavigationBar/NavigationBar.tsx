"use client";
import React, { useState } from "react";

import {
  Logo,
  MenuButton,
  LinksContainer,
  AuthLinks,
  MobileMenu,
} from "@app/components";

import styles from "./navigation.module.css";

const pageLinks = [
  { path: "#", label: "smart sleep coach" },
  { path: "#", label: "upgrade to pro" },
  { path: "#", label: "sleep plans" },
  { path: "#", label: "reviews" },
  { path: "#", label: "FAQs" },
];

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // Function to handle toggling the menu
  const handleToggleMenu = () => {
    // Update the state of isMenuOpen to its opposite value
    setIsMenuOpen(!isMenuOpen);
  };

  // Rest of the component code

  return (
    <div className={styles.lumi__navigation}>
      <MenuButton isOpen={isMenuOpen} onClick={handleToggleMenu} />
      <Logo />
      <LinksContainer className="lumi__navigation_link" links={pageLinks} />
      <AuthLinks />
      {/* Render mobile menu if the menu is open */}
      {isMenuOpen && (
        <MobileMenu className={"slide-in-top"} links={pageLinks} />
      )}
    </div>
  );
};

export default NavigationBar;
