import React from "react";
import styles from "./Service.module.css";

const Service = () => {
  return (
    <div id="service">
      <div className={styles.container}>
        <div className="sectionTitleAccent">
          <div>Services</div>
        </div>
        <div className={styles.servicesContainer}>
          <div className={styles.service}>Tune Ups</div>
          <div className={styles.service}>Oil Changes</div>
          <div className={styles.service}>Brakes Repair</div>
          <div className={styles.service}>Tires Repair, Install, Rotation</div>
          <div className={styles.service}>Mufflers and exhaust systems</div>
          <div className={styles.service}>Steering and Suspensions</div>
        </div>
      </div>
    </div>
  );
};

export default Service;
