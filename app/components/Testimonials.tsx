import React from "react";
import styles from "./Testimonials.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Testimonials = () => {
  return (
    <div>
      <div className="textCenter">
        <div className="sectionTitlePrimary">Testimonials</div>
      </div>
      <div className={styles.container}>
        <div className={styles.testimonialsContainer}>
          <div className={styles.reviewStar}>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className={styles.reviewText}>
            Fast services, get a flat tire repaired in no time at all. And very
            reasonable prices.
          </div>
        </div>
        <div className={styles.testimonialsContainer}>
          <div className={styles.reviewStar}>
            {" "}
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className={styles.reviewText}>
            Had a nail punch my tire and was helped immediately, no wait he
            repaired the hole and sent me on my way I know where I’ll stop if I
            ever have any issues or need new tires cheap and quick got to love
            it.
          </div>
        </div>
        <div className={styles.testimonialsContainer}>
          <div className={styles.reviewStar}>
            {" "}
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className={styles.reviewText}>
            Fixed the nail in my tire. In and out quick. Would go again.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
