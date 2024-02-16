import React from "react";
import Banner from "../Banner/Banner";
import BannerBottom from "../BannerBottom/BannerBottom";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <Banner />
      <BannerBottom />
    </div>
  );
};

export default Home;
