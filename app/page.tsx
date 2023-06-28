"use client";
import styles from "./page.module.css";

import { Banner, Designed, FAQs, HowItWork, Mission } from "@app/components";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    Aos.init({
      delay: 100,
      once: true,
    });
  }, []);

  return (
    <div className={styles.app}>
      <Banner />
      <HowItWork />
      <Mission />
      <Designed />
      <FAQs />
    </div>
  );
}
