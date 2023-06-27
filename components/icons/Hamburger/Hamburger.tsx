import React from "react";
import Image from "next/image";
import { hamburger } from "@app/utils/images";

import styles from "./hamburger.module.css";

interface HamburgerProps {
  isOpenClassName?: string;
}

const Hamburger: React.FC<HamburgerProps> = ({ isOpenClassName }) => {
  return (
    <svg
      fill="current"
      className={`${styles.hamburger} ${isOpenClassName ? styles.open : ""} `}
      viewBox="0 0 100 100"
      width="40"
    >
      <rect
        className={`${styles.line} ${styles.top}`}
        width="80"
        height="5"
        x="10"
        rx="2.5"
      ></rect>
      <rect
        className={`${styles.line} ${styles.middle}`}
        width="80"
        height="5"
        x="10"
        rx="2.5"
      ></rect>
      <rect
        className={`${styles.line} ${styles.bottom}`}
        width="80"
        height="5"
        x="10"
        rx="2.5"
      ></rect>
    </svg>
  );
};

export default Hamburger;
