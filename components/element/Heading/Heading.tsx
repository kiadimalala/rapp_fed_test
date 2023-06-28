import React from "react";

import styles from "./heading.module.css";

interface HeadingProps {
  className?: string; // Optional prop: CSS class for the heading
  text: string; // Required prop: the text to be displayed in the heading
  large?: boolean; // Optional prop: indicates whether the heading should be rendered as a large heading
  medium?: boolean; // Optional prop: indicates whether the heading should be rendered as a medium heading
  small?: boolean; // Optional prop: indicates whether the heading should be rendered as a small heading
}

const Heading: React.FC<HeadingProps> = ({
  className,
  text,
  large,
  medium,
  small,
}) => {
  if (large) return <h1 className={className}> {text} </h1>; // If 'large' prop is true, render an <h1> heading with the specified className and text
  if (medium) return <h2 className={className}> {text} </h2>; // If 'medium' prop is true, render an <h2> heading with the specified className and text
  if (small) return <h3 className={className}> {text} </h3>; // If 'small' prop is true, render an <h3> heading with the specified className and text
  return null; // If none of the 'large', 'medium', or 'small' props are true, return null (no heading is rendered)
};

export default Heading;
