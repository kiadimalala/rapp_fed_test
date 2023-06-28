import React from "react";

interface ParagrapheProps {
  className?: string;    // Optional prop: CSS class for the paragraph
  text: string;          // Required prop: the text to be displayed in the paragraph
}

const Paragraphe: React.FC<ParagrapheProps> = ({ className, text }) => {
  return <p className={className}>{text}</p>;
};

export default Paragraphe;
