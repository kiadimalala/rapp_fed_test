import React from "react";

import {
  Picture,
  Heading,
  ButtonSecondary,
  MissionList,
} from "@app/components";
import { smallHIW, largeHIW } from "@app/images";
import styles from "./howitwork.module.css";

const mission = [
  {
    title: "We coach.",
    text: " Our Pediatric sleep experts will take you step-by-step to sleep success",
  },
  {
    title: "You log.",
    text: "Record your baby’s sleeps directly within the app",
  },
  {
    title: "We analyze.",
    text: "  Daily and weekly sleep insight reports measure your baby’s progress",
  },
];

const HowIWork = () => {
  return (
    <div className={styles.lumi__how}>
      <div className={styles.lumi__how_image}>
        <Picture imgSrc={smallHIW} largeImgSrc={largeHIW} />
      </div>
      <div className={styles.lumi__how_content}>
        <Heading large text="How it works" />
        <Heading small text="Lumi’s A, B, Cs, to better Zzzzs" />
        <MissionList type="A" list={mission} />
        <Heading medium text="Zzzzz your baby sleeps!" />
        <ButtonSecondary label="get started" />
      </div>
    </div>
  );
};

export default HowIWork;
