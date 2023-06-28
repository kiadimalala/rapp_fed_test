import React from "react";

import Image, { StaticImageData } from "next/image";

import styles from "./picture.module.css";

import { smallBanner, largeBanner } from "@app/images";

interface PictureProps {
  className?: string; // Optional prop: CSS class for the picture
  imgSrc: StaticImageData; // Required prop: the image source for small screens
  largeImgSrc?: any; // Optional prop: the image source for large screens
}

const Pictures: React.FC<PictureProps> = ({
  className,
  imgSrc,
  largeImgSrc,
}) => {
  return (
    <picture className={`${styles.banner__picture}`}>
      <Image
        className={styles.banner__picture_large}
        sizes="(min-width:1024px)"
        alt="lumi__banner"
        src={largeImgSrc}
      />
      <Image
        className={styles.banner__picture_small}
        sizes="(min-width:425px)"
        src={imgSrc}
        alt="lumi__banner"
      />
    </picture>
  );
};

export default Pictures;
