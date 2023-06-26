import React from "react";

import styles from "./mission.module.css";

interface ListProps {
  className?: string;
  type: any;
  list: any[];
}

const MissionList: React.FC<ListProps> = ({ className, type, list }) => {
  return (
    <div className={styles.lumi__mission_list}>
      <ol type={type}>
        {list.map((item, index) => (
          <li key={index}>
            <span>{item.title}</span>
            {item.text}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default MissionList;
