import React from "react";
import Image from "next/image";
import { logo } from "@app/images";

import { Logo, MenuButton, LinksContainer, AuthLinks } from "@app/components";

import styles from "./navigation.module.css";

const NavigationBar = () => {
  const pageLinks = [
    { path: "#", label: "smart sleep coach" },
    { path: "#", label: "upgrade to pro" },
    { path: "#", label: "sleep plans" },
    { path: "#", label: "reviews" },
    { path: "#", label: "FAQs" },
  ];

  return (
    <div className={styles.lumi__navigation}>
      <MenuButton />
      <Logo />
      <LinksContainer links={pageLinks} />
      <AuthLinks />
    </div>
  );
};

export default NavigationBar;
