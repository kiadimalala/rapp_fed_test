import styles from "./page.module.css";

import { Banner } from "@app/components";

export default function Home() {
  return (
    <div className={styles.app}>
      <Banner />
    </div>
  );
}
