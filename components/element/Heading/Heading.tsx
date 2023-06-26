import React from "react";

import styles from "./heading.module.css";

interface HeadingProps {
  className?: string;
  text: string;
}

const Heading: React.FC<HeadingProps> = ({ className, text }) => {
  return <div className={className}>{text}</div>;
};

export default Heading;
