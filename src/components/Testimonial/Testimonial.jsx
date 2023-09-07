import React from 'react'

import styles from '../../styles/testimonial.module.css'
import Card from './Card';

let details = [
  `Loren insup dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod. Loren insup dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod. Loren insup dolor sit amet, consectetur
              adipisicing elit, sed do eiusmod. Loren insup dolor sit amet,
              consectetur adipisicing elit, sed do eiusmod. Loren insup dolor
              sit amet, consectetur adipisicing elit, sed do eiusmod. Loren
              insup dolor sit amet, consectetur adipisicing elit, sed do eiusmod`,
  `              Loren insup dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod. Loren insup dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod. Loren insup dolor sit amet, consectetur
              adipisicing elit, sed do eiusmod. Loren insup dolor sit amet,
              consectetur adipisicing elit, sed do eiusmod. Loren insup dolor
              sit amet, consectetur adipisicing elit, sed do eiusmod. Loren
              insup dolor sit amet, consectetur adipisicing elit, sed do eiusmod`,
  `              Loren insup dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod. Loren insup dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod. Loren insup dolor sit amet, consectetur
              adipisicing elit, sed do eiusmod. Loren insup dolor sit amet,
              consectetur adipisicing elit, sed do eiusmod. Loren insup dolor
              sit amet, consectetur adipisicing elit, sed do eiusmod. Loren
              insup dolor sit amet, consectetur adipisicing elit, sed do eiusmod`
];

const Testimonial = () => {
  return (
    <section className={styles.testimonials} id="testimonials">
      <div className={`${styles.title} white`}>
        <h2 className={styles.titleText}>
          They <span>S</span>iad About Us
        </h2>
        <p>
          Loren insup dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod.
        </p>
      </div>
      <div className={styles.content}>
        <Card details={details[0]} name="Someone Famous" imgURL="tt1" />
        <Card details={details[0]} name="Someone Famous" imgURL="tt2" />
        <Card details={details[0]} name="Someone Famous" imgURL="tt3" />
      </div>
    </section>
  );
}

export default Testimonial