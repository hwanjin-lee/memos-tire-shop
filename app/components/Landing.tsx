import React from "react";
import styles from "./Landing.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Landing = () => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.headingTextContainer}>
          <div className={styles.headingText}>
            <h1>Your Trusted Shop</h1>
          </div>
          <div className={styles.headingText}>
            <h1>for New & Used</h1>
            <h1 className={styles.accentText}>Tires</h1>
          </div>
          <div className={styles.headingText}>
            <h1>with Expert</h1>
            <h1 className={styles.accentText}>Auto Repair</h1>
          </div>
        </div>
        <div className={styles.LandingSecondaryText}>
          <h4>Serving Local Customers in Phoenix, AZ since 2007</h4>
        </div>

        <div className={styles.buttonsContainer}>
          <a href="tel:6037032151" target="blank">
            <div className="buttonPrimary">
              <FontAwesomeIcon icon={faPhone} className="paddingRight" />
              <div>Call us</div>
            </div>
          </a>
          <a href="https://maps.app.goo.gl/SAr7K2Q3uTzMKXTj8" target="blank">
            <div className="buttonSecondary">
              <FontAwesomeIcon icon={faLocationDot} className="paddingRight" />
              <div>Get Directions</div>
            </div>
          </a>
        </div>
      </div>
      <Image
        className={styles.heroImg}
        src="/hero.png"
        width={800}
        height={534}
        alt="hero img"
      />
    </div>
  );
};

export default Landing;
