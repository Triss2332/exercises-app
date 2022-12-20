import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "./sidebar.module.scss";
import GridView from "@mui/icons-material/GridView";
import Timeline from "@mui/icons-material/Timeline";

const Sidebar = () => {
  const [selected, setSelected] = useState({ id: "grid" });
  const router = useRouter();

  const handleClick = (id) => {
    setSelected({ id });
    if (id === "grid") {
      router.push("/dashboard");
    } else if (id === "timeline") {
      router.push("/timeline");
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <GridView
            className={`${styles.icon} ${
              selected.id === "grid" ? styles.selected : null
            }`}
            onClick={() => handleClick("grid")}
          />
          <Timeline
            className={`${styles.icon} ${
              selected.id === "timeline" ? styles.selected : null
            }`}
            onClick={() => handleClick("timeline")}
          />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
