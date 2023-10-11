import React from "react";
import styles from "./Gallery.module.css";
import Image from "next/image";

const Gallery = () => {
  return (
    <div id="gallery">
      <div className={styles.container}>
        <div className="textCenter">
          <div className="sectionTitleAccent">Our Work</div>
        </div>
        <div className={styles.flexImagesContainer}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.galleryImg}
              src={"/example.png"}
              alt="example gallery picture"
              width={230}
              height={230}
            />
          </div>
          <div className={styles.imageContainer}>
            <Image
              className={styles.galleryImg}
              src={"/example.png"}
              alt="example gallery picture"
              width={230}
              height={230}
            />
          </div>
          <div className={styles.imageContainer}>
            <Image
              className={styles.galleryImg}
              src={"/example.png"}
              alt="example gallery picture"
              width={230}
              height={230}
            />
          </div>
          <div className={styles.imageContainer}>
            <Image
              className={styles.galleryImg}
              src={"/example.png"}
              alt="example gallery picture"
              width={230}
              height={230}
            />
          </div>
          <div className={styles.imageContainer}>
            <Image
              className={styles.galleryImg}
              src={"/example.png"}
              alt="example gallery picture"
              width={230}
              height={230}
            />
          </div>
          <div className={styles.imageContainer}>
            <Image
              className={styles.galleryImg}
              src={"/example.png"}
              alt="example gallery picture"
              width={230}
              height={230}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
