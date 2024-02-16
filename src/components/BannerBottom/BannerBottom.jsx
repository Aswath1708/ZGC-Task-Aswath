import React from "react";
import styles from "./BannerBottom.module.css";

const BannerBottom = () => {
  return (
    <div className={styles.bannerBottom}>
      <p>
        A seamless blend of <span>luxury and leisure</span>
      </p>
      <p>
        Take in fresh air <br />
        amidst greenery that stretches <span> as far as the eye can see.</span>
      </p>
    </div>
  );
};

export default BannerBottom;
