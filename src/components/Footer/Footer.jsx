import React from "react";
import styles from "./Footer.module.css";
import { getSocialMedia } from "../../utils/getSocialMedia";

const Footer = () => {
  const socialMedia = getSocialMedia();

  return (
    <footer className={styles.footer}>
      <div className={styles.mediaLinks}>
        {socialMedia.map((link, i) => (
          <div key={i}>
            <img src={link} alt="media" />
          </div>
        ))}
      </div>
      <p>Copyright © 2023 Le parque. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
