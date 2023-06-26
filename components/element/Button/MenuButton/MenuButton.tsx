import React from "react";

import { DefaultButton, MenuIcon } from "@app/components";

import styles from "./menu.module.css"

interface MenuButtonProps {
  className?: string;
  isOpen?: boolean;
}

const MenuButton: React.FC<MenuButtonProps> = ({ className, isOpen }) => {
  return (
    <DefaultButton className={styles.lumi__menu}>
      <MenuIcon />
    </DefaultButton>
  );
};

export default MenuButton;
