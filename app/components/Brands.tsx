import React from "react";
import styles from "./Brands.module.css";
import Image from "next/image";

const Brands = () => {
  return (
    <div>
      <div className="textCenter">Quality Brands We Trust</div>
      <div className="flex_justifyCenter_alignCenter">
        <div className={styles.brandContainer}>
          <Image
            src="/brand/landGoldenTires.svg"
            width={200}
            height={200}
            alt="Land Golden Tires Logo"
          />
        </div>
        <div className={styles.brandContainer}>
          <Image
            src="/brand/michelinTires.svg"
            width={200}
            height={200}
            alt="Michelin Tires Logo"
          />
        </div>
        <div className={styles.brandContainer}>
          <Image
            src="/brand/nexenTires.svg"
            width={200}
            height={200}
            alt="Nexen Tires Logo"
          />
        </div>
        <div className={styles.brandContainer}>
          <Image
            src="/brand/sierraTires.svg"
            width={200}
            height={200}
            alt="Sierra Tires Logo"
          />
        </div>
        <div className={styles.brandContainer}>
          <Image
            src="/brand/zeetexTires.svg"
            width={200}
            height={200}
            alt="Zeetex Tires Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Brands;
