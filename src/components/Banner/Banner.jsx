import React from "react";
import NavBar from "../NavBar/NavBar";
import styles from "./Banner.module.css";
import burger from "../../assets/burger.png";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <NavBar />
      <div className={styles.burger}>
        <img src={burger} alt="burger" />
      </div>
    </div>
  );
};

export default Banner;
