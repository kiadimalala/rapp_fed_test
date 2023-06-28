import React from "react";

import styles from "./accordion.module.css";
import { ChevronDown, ChevronUp, Heading, Paragraphe } from "@app/components";

interface AccordionProps {
  className?: string; // Optional CSS class for the accordion
  item?: any; // Optional data for the accordion item
  onClick?: () => void; // Optional function to handle click events
}

const Accordion: React.FC<AccordionProps> = ({ item, className, onClick }) => {
  return (
    <div className={`${styles.lumi__accordion_item} `} onClick={onClick}>
      <div className={styles.lumi__accordion_item__title}>
        <Heading small text={item.question} />{" "}
        {/* Render a small-sized heading with the question text */}
        {!className ? <ChevronDown /> : <ChevronUp />}{" "}
        {/* Render a ChevronDown icon if 'className' prop is not provided, otherwise render a ChevronUp icon */}
      </div>
      <div
        className={`${styles.lumi__accordion_item__body} ${
          className && styles.show
        }`}
      >
        <Paragraphe text={item.answer} />{" "}
        {/* Render a paragraph with the answer text */}
      </div>
    </div>
  );
};

export default Accordion;
