import React from "react";
import luxurious from "../../assets/luxurious.jpg";
import styles from "./Luxurious.module.css";

const Luxurious = () => {
  return (
    <div className={styles.luxurious}>
      <div className={styles.textContainer}>
        <h2>
          Luxurious <span>villa developments</span>
        </h2>
        <p>
          Le Parque’s 300 acres are divided into several villa developments,
          each with its own distinct identity.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img src={luxurious} alt="luxurious" />
      </div>
      <p>Where every day feels like a paradisiacal escape</p>
    </div>
  );
};

export default Luxurious;
