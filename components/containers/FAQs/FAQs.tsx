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
  // Declare state variable 'selected' and a function to update it, 'setSelected',
  // using the 'useState' hook. Initialize 'selected' to null.
  const [selected, setSelected] = useState(null);

  // Define a function 'handleToggle' that takes a parameter 'i'.
  const handleToggle = (i: any) => {
    // Check if the value of 'selected' is equal to 'i'.
    if (selected === i) {
      // If 'selected' is equal to 'i', set 'selected' to null.
      return setSelected(null);
    }
    // If 'selected' is not equal to 'i', set 'selected' to the value of 'i'.
    setSelected(i);
  };

  return (
    <div data-aos="fade-down" className={styles.lumi__faq}>
      <Heading large text="We’re here to answer your questions" />
      {/* Render a large Heading component with the text */}
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
        {/* Render an Accordion component for each question in the 'questions' array */}
      </div>
      <ButtonSecondary label="get started" />{" "}
      {/* Render a ButtonSecondary component with label */}
    </div>
  );
};

export default FAQs;
