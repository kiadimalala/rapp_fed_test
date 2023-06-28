import React from "react";

interface ButtonProps {
  className?: string; // Optional prop: CSS class for the button
  label?: string; // Optional prop: text to be displayed inside the button
  children?: React.ReactNode; // Optional prop: child elements to be rendered inside the button
  onClick?: () => void; // Optional prop: function to be called when the button is clicked
}

import styles from "./basebutton.module.css";

const Button: React.FC<ButtonProps> = ({
  className,
  label,
  children,
  onClick,
}) => {
  return (
    <button
      className={`${styles.btn} ${className ? className : ""}`}
      onClick={onClick}
    >
      {/* If 'label' prop is provided, render it inside a span element */}
      {label && <span> {label} </span>}
      {/* If 'children' prop is provided, render the child elements */}
      {children && children}
    </button>
  );
};

export default Button;
