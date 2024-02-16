import React from "react";
import styles from "./AboutUs.module.css";
import about from "../../assets/about.png";

const AboutUs = () => {
  return (
    <div className={styles.aboutUs}>
      <div className={styles.imageContainer}>
        <img src={about} alt="about" />
      </div>
      <div className={styles.textContainer}>
        <h2>
          Every inch planned TO <span>let you live better</span>
        </h2>
        <p>
          A 300-acre vast estate, Le Parque is a self-contained haven located
          just 30 minutes from central Ahmedabad. Le Parque embraces the concept
          of exclusivity, offering a carefully curated collection of
          resort-style villas with a sprawling landscape that redefines
          opulence. Each villa is meticulously designed to embody elegance,
          combining contemporary architecture with timeless charm.
        </p>
        <p>
          Embrace the exclusivity of your own private haven, where you can
          retreat from the world and revel in the tranquillity of your
          surroundings.
        </p>
        <button>
          {" "}
          <span></span> CONTACT US
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
