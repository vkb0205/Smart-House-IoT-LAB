import React from "react";
import { FaSnowflake, FaFire, FaSmile, FaUser } from "react-icons/fa";
import styles from "../../../styles/ModeButtons.module.css";

const ModeButtons = () => {
  return (
    <div className={styles.modeButtonsContainer}>
      {[<FaSnowflake />, <FaFire />, <FaSmile />, <FaUser />].map((Icon, i) => (
        <button key={i} className={styles.modeButton}>
          {Icon}
        </button>
      ))}
    </div>
  );
};

export default ModeButtons;
