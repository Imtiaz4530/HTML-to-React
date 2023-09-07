import React from 'react'

import styles from '../../styles/expert.module.css'
import Card from '../Expert/Card';

const Expert = () => {
  return (
    <section className={styles.expert} id="expert">
      <div className={styles.title}>
        <h2 className={styles.titleText}>
          Our Kitchen <span>E</span>xpert
        </h2>
      </div>
      <div className={styles.content}>
        <Card imgURL="chef1.jpg" item="Someone Famous" />
        <Card imgURL="chef2.jpg" item="Someone Famous" />
        <Card imgURL="chef3.png" item="Someone Famous" />
        <Card imgURL="chef4.jpg" item="Someone Famous" />
      </div>
    </section>
  );
}

export default Expert