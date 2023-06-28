import React from "react";

import styles from "./linkswrapper.module.css";

import { Link } from "@app/components";

interface WrapperProps {
  className?: string; // Optional CSS class for the Wrapper component
  links?: any[]; // An array of links to be rendered
}

const LinksWrapper: React.FC<WrapperProps> = ({ className, links }) => {
  return (
    <div className={`${styles.lumi__navigation_links}  `}>
      <ul>
        {links?.map((link, index) => (
          <li key={link + index}>
            <Link link={link} />{" "}
            {/* Render a Link component for each link in the 'links' array */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinksWrapper;
