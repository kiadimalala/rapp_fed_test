import React from "react";

import Image from "next/image";

import { logo } from "@app/images";

import styles from "./logo.module.css";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={styles.lumi__logo_container}>
      <Image src={logo} alt="lumi_logo" />
    </div>
  );
};

export default Logo;
