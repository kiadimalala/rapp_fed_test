import React from "react";

import { DefaultButton, MenuIcon } from "@app/components";

import styles from "./menu.module.css";

interface MenuButtonProps {
  className?: string; // Optional prop: CSS class for the menu button
  isOpen?: boolean; // Optional prop: indicates whether the menu is open or closed
  onClick?: () => void; // Optional prop: function to be called when the menu button is clicked
}

const MenuButton: React.FC<MenuButtonProps> = ({
  className,
  isOpen,
  onClick,
}) => {
  return (
    <DefaultButton className={styles.lumi__menu} onClick={onClick}>
      <MenuIcon isOpenClassName={isOpen ? "open" : ""} />
    </DefaultButton>
  );
};

export default MenuButton;
