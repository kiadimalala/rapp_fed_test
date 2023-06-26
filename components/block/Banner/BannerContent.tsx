import React from "react";

import styles from "./bannercontent.module.css";
import { Heading, Paragraphe, ButtonSecondary } from "@app/components";

const BannerContent = () => {
  return (
    <div className={styles.lumi__hero}>
      <div className={styles.lumi__hero_texts__container}>
        <Heading
          className={styles.lumi__banner__title}
          text="Your baby can be a super sleeper"
        />
        <Paragraphe text="Lumi’s app-bases sleep coaching and tracking tools will have your baby sleeping better in just 7 days" />
      </div>
      <ButtonSecondary className={""} label="get started" />
    </div>
  );
};

export default BannerContent;
