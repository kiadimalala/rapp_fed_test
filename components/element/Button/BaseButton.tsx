import React from "react";

interface ButtonProps {
  className?: string;
  label?: string;
  children?: React.ReactNode;
  onClick?: () => void;
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
      {label && <span> {label} </span>}
      {children && children}
    </button>
  );
};

export default Button;
