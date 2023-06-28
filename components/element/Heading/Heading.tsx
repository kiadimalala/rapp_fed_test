import React from "react";

import styles from "./heading.module.css";

interface HeadingProps {
  className?: string;
  text: string;
  large?: boolean;
  medium?: boolean;
  small?: boolean;
}

const Heading: React.FC<HeadingProps> = ({
  className,
  text,
  large,
  medium,
  small,
}) => {
  if (large) return <h1 className={className}> {text} </h1>;
  if (medium) return <h2 className={className}> {text} </h2>;
  if (small) return <h3 className={className}> {text} </h3>;
  return null;
};

export default Heading;
