import React from "react";

import styles from "./how.module.css";

interface ListProps {
  className?: string; // Optional CSS class for the List component
  type: any; // The type of the ordered list (e.g., "1", "A", "a", "I", "i")
  list: any[]; // An array of items to render in the list
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
