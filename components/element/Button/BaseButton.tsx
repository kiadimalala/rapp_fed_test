import React from "react";

interface ButtonProps {
  className?: string;
  label?: string;
  children?: React.ReactNode;
}

import styles from "./basebutton.module.css";

const Button: React.FC<ButtonProps> = ({ className, label, children }) => {
  return (
    <button className={`${styles.btn} ${className ? className : ""}`}>
      {label && <span> {label} </span>}
      {children && children}
    </button>
  );
};

export default Button;
