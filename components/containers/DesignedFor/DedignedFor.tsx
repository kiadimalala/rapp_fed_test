import React from "react";

import { ButtonSecondary, Heading, Picture } from "@app/components";
import { designed } from "@app/images";
import styles from "./designed.module.css";

const DesignedFor = () => {
  return (
    <div className={styles.lumi__designed}>
      <div data-aos="fade-right" className={styles.lumi__designed_image}>
        <Picture imgSrc={designed} largeImgSrc={designed} />{" "}
        {/* Render a Picture component with image source */}
      </div>
      <div data-aos="fade-left" className={styles.lumi__designed_content}>
        <Heading large text="Lumi is designed for" />{" "}
        {/* Render a large Heading component with text */}
        <div className={styles.lumi__designed_content__text}>
          <span>
            Every parent who wants their baby to fall asleep, stay asleep, and
            wake up happy in the morning.
          </span>{" "}
          Whether you’re struggling with sleep or simply making sure you’re
          doing what’s best for your family, we have you covered.
        </div>
        <ButtonSecondary label="get started" />{" "}
        {/* Render a ButtonSecondary component with label */}
      </div>
    </div>
  );
};

export default DesignedFor;
