import { DefaultButton } from "@app/components";
import React from "react";

import styles from "./buttonsecondary.module.css";

interface ButtonSecondaryProps {
  className?: string;
  label?: string;
}

const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({
  className,
  label,
}) => {
  return <DefaultButton className={styles.btn__secondary} label={label} />;
};

export default ButtonSecondary;
