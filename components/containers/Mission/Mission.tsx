import React from "react";

import styles from "./mission.module.css";

import { ButtonSecondary, Heading, Picture } from "@app/components";
import { mission } from "@app/images";

const Mission = () => {
  return (
    <div className={styles.lumi__mission}>
      <div data-aos="fade-left" className={styles.lumi__mission_image}>
        <Picture imgSrc={mission} largeImgSrc={mission} />
      </div>
      <div data-aos="fade-right" className={styles.lumi__mission_content}>
        <Heading large text="Our mission" />
        <div className={styles.lumi__mission_content__text}>
          <span>
            We’re on a mission to make it easy for every family to sleep better.
          </span>{" "}
          We apply state-of-the-art technology to science-based sleep
          understanding so that we can make quality, credible sleep support
          accessible to everyone – because every baby and their family deserve
          better sleep!
        </div>
        <ButtonSecondary label="I WANT BETTER SLEEP" />
      </div>
    </div>
  );
};

export default Mission;
