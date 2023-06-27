import React from "react";

import { DefaultButton, MenuIcon } from "@app/components";

import styles from "./menu.module.css";

interface MenuButtonProps {
  className?: string;
  isOpen?: boolean;
  onClick?: () => void;
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
