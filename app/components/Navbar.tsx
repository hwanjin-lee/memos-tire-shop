"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import ThemeSwitch from "./ThemeSwitch";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [burger, setBurger] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <div className={styles.logo}>
          <FontAwesomeIcon icon={faCar} className={styles.logoIcon} />
          <Link href="/">Memo&apos;s Tire Shop</Link>
        </div>
      </div>
      {burger ? (
        <div className={styles.mobileLinksContainer}>
          <div
            onClick={() => setBurger(false)}
            className={styles.mobileLinkExit}
          >
            <FontAwesomeIcon icon={faXmark} />
          </div>
          <div>
            <Link href="/">
              <div
                onClick={() => setBurger(false)}
                className={styles.mobileLink}
              >
                {" "}
                <FontAwesomeIcon icon={faHome} />
                <div className={styles.linkText}>Home</div>
              </div>
            </Link>
            <Link href="#about">
              <div
                onClick={() => setBurger(false)}
                className={styles.mobileLink}
              >
                {" "}
                <FontAwesomeIcon icon={faCircleInfo} />
                <div className={styles.linkText}>About</div>
              </div>
            </Link>
            <Link href="#service">
              <div
                onClick={() => setBurger(false)}
                className={styles.mobileLink}
              >
                {" "}
                <FontAwesomeIcon icon={faScrewdriverWrench} />
                <div className={styles.linkText}>Service</div>
              </div>
            </Link>
            <Link href="#gallery">
              <div
                onClick={() => setBurger(false)}
                className={styles.mobileLink}
              >
                {" "}
                <FontAwesomeIcon icon={faImage} />
                <div className={styles.linkText}>Gallery</div>
              </div>
            </Link>
            <Link href="#contact">
              <div
                onClick={() => setBurger(false)}
                className={styles.mobileLink}
              >
                {" "}
                <FontAwesomeIcon icon={faAddressCard} />
                <div className={styles.linkText}>Contact</div>
              </div>
            </Link>
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className={styles.desktopLinksContainer}>
        <div className={styles.desktopLink}>
          <Link href="#about">
            <FontAwesomeIcon icon={faCircleInfo} />
            <div className={styles.linkText}>About</div>
          </Link>
        </div>
        <div className={styles.desktopLink}>
          <Link href="#service">
            <FontAwesomeIcon icon={faScrewdriverWrench} />
            <div className={styles.linkText}>Service</div>
          </Link>
        </div>
        <div className={styles.desktopLink}>
          <Link href="#gallery">
            <FontAwesomeIcon icon={faImage} />
            <div className={styles.linkText}>Gallery</div>
          </Link>
        </div>
        <div className={styles.desktopLink}>
          <Link href="#contact">
            <FontAwesomeIcon icon={faAddressCard} />
            <div className={styles.linkText}>Contact</div>
          </Link>
        </div>
      </div>

      <div className={styles.section}>
        <ThemeSwitch />
      </div>
      <div
        onClick={() => (burger ? setBurger(false) : setBurger(true))}
        className={styles.burger}
      >
        <FontAwesomeIcon icon={faBars} />
      </div>
    </div>
  );
};

export default Navbar;
