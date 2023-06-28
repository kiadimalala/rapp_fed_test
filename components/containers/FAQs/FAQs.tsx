"use client";
import React, { useState } from "react";

import styles from "./faq.module.css";

import { Heading, ButtonSecondary, Accordion } from "@app/components";

const questions: any = [
  {
    question: "What is baby sleep training?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nisi voluptatum ad! Amet ad consequatur cumque pariatur quod numquam qui doloremque consectetur, quia nisi explicabo enim, culpa omnis laboriosam facere.",
  },
  {
    question: "Does the Lumi Smart Sleep Coach app work?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nisi voluptatum ad! Amet ad consequatur cumque pariatur quod numquam qui doloremque consectetur, quia nisi explicabo enim, culpa omnis laboriosam facere.",
  },
  {
    question: "I don’t have time to track manually, is there an alternative?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nisi voluptatum ad! Amet ad consequatur cumque pariatur quod numquam qui doloremque consectetur, quia nisi explicabo enim, culpa omnis laboriosam facere.",
  },
  {
    question: "Is sleep training safe for my baby?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nisi voluptatum ad! Amet ad consequatur cumque pariatur quod numquam qui doloremque consectetur, quia nisi explicabo enim, culpa omnis laboriosam facere.",
  },
  {
    question: "Are there multiple sleep training methods to choose from?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nisi voluptatum ad! Amet ad consequatur cumque pariatur quod numquam qui doloremque consectetur, quia nisi explicabo enim, culpa omnis laboriosam facere.",
  },
];

const FAQs = () => {
  const [selected, setSelected] = useState(null);
  const handleToggle = (i: any) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div className={styles.lumi__faq}>
      <Heading large text="We’re here to answer your questions" />
      <div className={styles.lumi_faq_accordion}>
        <div className={styles.lumi_faq_accordion__wrapper}>
          {questions.map((question: any, index: any) => (
            <Accordion
              className={selected === index ? "show" : ""}
              onClick={() => handleToggle(index)}
              key={index}
              item={question}
            />
          ))}
        </div>
      </div>
      <ButtonSecondary label="get started" />
    </div>
  );
};

export default FAQs;
