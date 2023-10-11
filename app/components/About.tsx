import Image from "next/image";
import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div id="about">
      <div className={styles.container}>
        <div className="textCenter">
          <div className="sectionTitlePrimary">
            We&apos;ll Fix You Up in a Jiffy!
          </div>
          <div>Offering you the best solution for your vehicle</div>
        </div>
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <div className={styles.imageContainer}>
              <Image
                src="/fast.svg"
                width={150}
                height={150}
                alt="Fast Service Icon"
              />
            </div>
            <div className={styles.cardTitle}>Fast Service</div>
            <div className={styles.cardContext}>
              Have a Flat? Come on in! No poointment needed, We will fix or
              replace your tires in no time, so you can get to your destination
              in time!
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.imageContainer}>
              <Image
                src="/lowPrice.svg"
                width={150}
                height={150}
                alt="Fast Service Icon"
              />
            </div>
            <div className={styles.cardTitle}>Unbeatable Prices</div>
            <div className={styles.cardContext}>
              We offer Quality Tires and Services that are cheapter than
              franchise auto shops
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.imageContainer}>
              <Image
                src="/trust.svg"
                width={150}
                height={150}
                alt="Fast Service Icon"
              />
            </div>
            <div className={styles.cardTitle}>Trusted by Locals</div>
            <div className={styles.cardContext}>
              We are Honest, and hard working professionals, dedicated to bring
              our years of experience with quality service
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
