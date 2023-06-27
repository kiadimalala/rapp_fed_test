import React from "react";

import styles from "./accordion.module.css";
import { ChevronDown, ChevronUp, Heading, Paragraphe } from "@app/components";

interface AccordionProps {
  className?: string;
  item?: any;
  onClick?: () => void;
}

const Accordion: React.FC<AccordionProps> = ({ item, className, onClick }) => {
  return (
    <div className={`${styles.lumi__accordion_item} `} onClick={onClick}>
      <div className={styles.lumi__accordion_item__title}>
        <Heading small text={item.question} />
        {!className ? <ChevronDown /> : <ChevronUp />}
      </div>
      <div
        className={`${styles.lumi__accordion_item__body} ${
          className && styles.show
        }`}
      >
        <Paragraphe text={item.answer} />
      </div>
    </div>
  );
};

export default Accordion;
