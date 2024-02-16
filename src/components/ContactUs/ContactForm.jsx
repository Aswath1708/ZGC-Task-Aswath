import React from "react";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <div className={styles.contactForm}>
      <h2>
        send us a message <span>CONTACT FORM</span>{" "}
      </h2>
      <form className={styles.form}>
        <div>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="FIRST NAME"
          />
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="LAST NAME"
          />
        </div>
        <input type="email" name="email" id="email" placeholder="EMAIL" />
        <input type="text" name="subject" id="subject" placeholder="SUBJECT" />
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          wrap="off"
          placeholder="MESSAGE"
        ></textarea>
        <button>
          <span></span>
          <span>SUBMIT</span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
