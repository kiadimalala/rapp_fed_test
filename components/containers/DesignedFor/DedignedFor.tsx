import React from "react";

import { ButtonSecondary, Heading, Picture } from "@app/components";
import { designed } from "@app/images";
import styles from "./designed.module.css";

const DedignedFor = () => {
  return (
    <div className={styles.lumi__designed}>
      <div data-aos="fade-right" className={styles.lumi__designed_image}>
        <Picture imgSrc={designed} largeImgSrc={designed} />
      </div>
      <div data-aos="fade-left" className={styles.lumi__designed_content}>
        <Heading large text="Lumi is designed for" />
        <div className={styles.lumi__designed_content__text}>
          <span>
            Every parent who wants their baby to fall asleep, stay asleep, and
            wake up happy in the morning.
          </span>{" "}
          Whether you’re struggling with sleep or simply making sure you’re
          doing what’s best for your family, we have you covered.
        </div>
        <ButtonSecondary label="get started" />
      </div>
    </div>
  );
};

export default DedignedFor;
