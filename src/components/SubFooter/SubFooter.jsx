import React from "react";
import logo from "../../assets/footerLogo.png";
import { getFooterLinks } from "../../utils/getFooterLinks";
import styles from "./SubFooter.module.css";

const SubFooter = () => {
  const footerLinks = getFooterLinks();
  return (
    <div className={styles.subFooter}>
      <div className={styles.logoContainer}>
        <div>
          <img src={logo} alt="leParque" />
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the <br /> printing and
          typesetting industry.
        </p>
      </div>
      <div className={styles.footerList}>
        {footerLinks.map((link, i) => (
          <p key={i}>{link}</p>
        ))}
      </div>
    </div>
  );
};

export default SubFooter;
