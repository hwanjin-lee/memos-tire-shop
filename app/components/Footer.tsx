import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>
        <div>Trusted by Locals with</div>
        <div>Over 15 Years of Experience</div>
        <div>Check us out on our Social</div>
        <div className={styles.socialMediaLinks}>
          <div className={styles.imageContainer}>
            <a
              href="https://www.google.com/maps/place/Memo's+Tires+Shop/@33.4519871,-112.1972504,18.89z/data=!4m15!1m8!3m7!1s0x872b15b21da50b03:0xf0b7800cde9d9d01!2s6330+W+Van+Buren+St,+Phoenix,+AZ+85043!3b1!8m2!3d33.4519045!4d-112.1966036!16s%2Fg%2F11c5df_svn!3m5!1s0x872b15b21d235d8d:0x4886fa55b2aca602!8m2!3d33.4520283!4d-112.19672!16s%2Fg%2F1tg9t4gh?entry=ttu"
              target="_blank"
            >
              <Image
                src="/social/google.png"
                width={30}
                height={30}
                alt="Google Logo"
              />
            </a>
          </div>
          <div className={styles.imageContainer}>
            <a href="https://www.facebook.com/" target="_blank">
              <Image
                src="/social/facebook.png"
                width={30}
                height={30}
                alt="Facebook Logo"
              />
            </a>
          </div>
          <div className={styles.imageContainer}>
            <a href="https://www.instagram.com/" target="_blank">
              <Image
                src="/social/instagram.png"
                width={30}
                height={30}
                alt="Instagram Logo"
              />
            </a>
          </div>
          <div className={styles.imageContainer}>
            <a href="https://www.yelp.com/" target="_blank">
              <Image
                src="/social/yelp.png"
                width={30}
                height={30}
                alt="Yelp Logo"
              />
            </a>
          </div>
          <div className={styles.imageContainer}>
            <a href="https://offerup.com/" target="_blank">
              <Image
                src="/social/offerUp.png"
                width={30}
                height={30}
                alt="Offer Up Logo"
              />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.locationContainer}>
        <div className={styles.locationTitle}>Location</div>
        <div className={styles.locationInfo}>
          <a
            href="https://www.google.com/maps/place/Memo's+Tires+Shop/@33.4519871,-112.1972504,18.89z/data=!4m15!1m8!3m7!1s0x872b15b21da50b03:0xf0b7800cde9d9d01!2s6330+W+Van+Buren+St,+Phoenix,+AZ+85043!3b1!8m2!3d33.4519045!4d-112.1966036!16s%2Fg%2F11c5df_svn!3m5!1s0x872b15b21d235d8d:0x4886fa55b2aca602!8m2!3d33.4520283!4d-112.19672!16s%2Fg%2F1tg9t4gh?entry=ttu"
            target="_blank"
          >
            6330 W. Van Buren St Phoenix, AZ 85043
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
