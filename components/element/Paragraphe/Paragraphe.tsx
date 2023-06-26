import React from "react";

interface ParagrapheProps {
  className?: string;
  text: string;
}

const Paragraphe: React.FC<ParagrapheProps> = ({ className, text }) => {
  return <p className={className}>{text}</p>;
};

export default Paragraphe;
