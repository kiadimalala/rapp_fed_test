"use client";
import React, { useState } from "react";
import Image from "next/image";
import { logo } from "@app/images";

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

  const handleToggleMenu = () => {
    if (isMenuOpen) {
      return setIsMenuOpen(false);
    }
    setIsMenuOpen(true);
  };

  return (
    <div className={styles.lumi__navigation}>
      <MenuButton isOpen={isMenuOpen} onClick={handleToggleMenu} />
      <Logo />
      <LinksContainer className="lumi__navigation_link" links={pageLinks} />
      <AuthLinks />
      {isMenuOpen && (
        <MobileMenu className={"slide-in-top"} links={pageLinks} />
      )}
    </div>
  );
};

export default NavigationBar;
