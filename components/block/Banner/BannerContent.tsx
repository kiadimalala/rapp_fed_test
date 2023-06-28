import React from "react";

import styles from "./bannercontent.module.css";
import { Heading, Paragraphe, ButtonSecondary } from "@app/components";

const BannerContent = () => {
  return (
    <div data-aos="fade-left" className={`${styles.lumi__hero} `}>
      <div className={styles.lumi__hero_texts__container}>
        <Heading large text="Your baby can be a super sleeper" />{" "}
        {/* Render a large-sized heading with the specified text */}
        <Paragraphe text="Lumi’s app-based sleep coaching and tracking tools will have your baby sleeping better in just 7 days" />{" "}
        {/* Render a paragraph with the specified text */}
      </div>
      <ButtonSecondary label="get started" />{" "}
      {/* Render a ButtonSecondary component with the specified label */}
    </div>
  );
};

export default BannerContent;
