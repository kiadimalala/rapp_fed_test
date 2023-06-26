import React from "react";

import styles from "./mainbanner.module.css";
import { BannerContent, Picture } from "@app/components";

import { smallBanner, largeBanner } from "@app/images";

const MainBanner = () => {
  return (
    <div className={styles.lumi__banner}>
      <div className={styles.lumi__banner_image}>
        <Picture imgSrc={smallBanner} largeImgSrc={largeBanner} />
      </div>
      <BannerContent />
    </div>
  );
};

export default MainBanner;
