import React from "react";

import styles from "./buttonsecondary.module.css";
import { DefaultButton } from "@app/components";
interface ButtonSecondaryProps {
  className?: string; // Optional prop: CSS class for the secondary button
  label?: string; // Optional prop: text to be displayed inside the secondary button
}

const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({
  className,
  label,
}) => {
  return <DefaultButton className={styles.btn__secondary} label={label} />;
};

export default ButtonSecondary;
