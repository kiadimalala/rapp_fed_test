import React from "react";

import styles from "./linkswrapper.module.css";

import { Link } from "@app/components";

interface WrapperProps {
  className?: string;
  links?: any[];
}

const LinksWrapper: React.FC<WrapperProps> = ({ className, links }) => {
  return (
    <div className={styles.lumi__navigation_links}>
      <ul>
        {links?.map((link, index) => (
          <li key={link + index}>
            <Link link={link} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinksWrapper;
