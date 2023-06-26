import styles from "./page.module.css";

import { Banner, Designed, HowItWork, Mission } from "@app/components";

export default function Home() {
  return (
    <div className={styles.app}>
      <Banner />
      <HowItWork />
      <Mission />
      <Designed />
    </div>
  );
}
