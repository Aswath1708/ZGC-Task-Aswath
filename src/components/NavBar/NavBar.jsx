import React from "react";
import styles from "./NavBar.module.css";
import logo from "../../assets/logo.png";

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <ul>
        <li>About us</li>
        <li>Sectors</li>
        <li className={styles.logoContainer}>
          <img src={logo} alt="leParque" />
        </li>
        <li>Gallery</li>
        <li>Contact us</li>
      </ul>
    </nav>
  );
};

export default NavBar;
