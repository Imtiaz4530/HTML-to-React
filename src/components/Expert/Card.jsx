import React from 'react'

import styles from "../../styles/expert.module.css";

const Card = ({ imgURL, item }) => {
  return (
    <div className={styles.box}>
      <div className={styles.imgBx}>
        <img src={`/picture/${imgURL}`} />
      </div>
      <div className={styles.text}>
              <h3>{item}</h3>
      </div>
    </div>
  );
};

export default Card

