import React from "react";
import styles from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div id="contact">
      <div className={styles.container}>
        <div className={styles.contact}>
          <div className={styles.contactTitle}>
            <FontAwesomeIcon icon={faPhone} />
            <div className={styles.contactTitleText}>Call Us</div>
          </div>
          <div className={styles.contactInfo}>
            <a href="tel:+16022997665">(602) 299 - 7665</a>
          </div>
        </div>
        <div className={styles.contact}>
          <div className={styles.contactTitle}>
            <FontAwesomeIcon icon={faEnvelope} />
            <div className={styles.contactTitleText}>Email Us</div>
          </div>
          <div className={styles.contactInfo}>
            <a href="mailto: abc@example.com">johndoe@email.com</a>
          </div>
        </div>
        <div className={styles.contact}>
          <div className={styles.contactTitle}>
            <FontAwesomeIcon icon={faClock} />
            <div className={styles.contactTitleText}>Opening Hours</div>
          </div>
          <div className={styles.contactInfo}>Mon-Sat 8 AM - 7 PM</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
