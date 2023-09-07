import React from 'react'

import styles from "../../styles/testimonial.module.css";

const Card = ({ imgURL, details, name }) => {
  return (
    <div className={styles.box}>
      <div className={styles.imgBx}>
        <img src={`/picture/${imgURL}.jpg`} />
      </div>
      <div className={styles.text}>
        <p>{details}</p>
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default Card