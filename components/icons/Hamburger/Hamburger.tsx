import React from "react";
import Image from "next/image";
import { hamburger } from "@app/utils/images";
const Hamburger = () => {
  return <Image src={hamburger} alt="hamburger_menu" />;
};

export default Hamburger;
