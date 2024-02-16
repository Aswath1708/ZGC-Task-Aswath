import React from "react";
import styles from './VisitUs.module.css';

const VisitUs = () => {
  return (
    <div className={styles.visitUs}>
      <h2>
        get in touch or <span>visit US</span>
      </h2>
      <div>
        <p>
          <span>CALL AT</span> 7069817800
        </p>
        <p>
          <span>EMAIL AT </span>perfection@galainfra.com
        </p>
      </div>

      <p>
        {" "}
        <span>SITE ADDRESS</span> Le Parque, Sanand Bavla Road, (near Reliance
        Gas Bottling / PuniskaHealth Care), Pipan – 382110
      </p>

      <p>
        {" "}
        <span>CORPORATE ADDRESS</span> Gala Group, A wing 9th floor Safal
        Profitaire, Corporate Road, Prahalad nagar, Ahmedabad – 15
      </p>
    </div>
  );
};

export default VisitUs;
