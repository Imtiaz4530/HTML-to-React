import React from 'react'

import styles from '../../styles/about.module.css'

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.row}>
        <div className={styles.co150}>
          <h2 className={styles.titleText}>
            <span>A</span>bout Us
          </h2>
          <p>
            Loren insup dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim vaniam, Loren insup dolor sit amet, consectetur adipisicing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim vaniam, Loren insup dolor sit amet,
            consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim vaniam.
            <br />
            <br />
            Loren insup dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim vaniam, Loren insup dolor sit amet, consectetur adipisicing
            elit, sed do eiusmod tempor incididunt tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim vaniam, Loren insup dolor
            sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            vaniam.
            <br />
            <br />
            Loren insup dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim vaniam, Loren insup dolor sit amet, consectetur adipisicing
            elit, sed do eiusmod tempor incididunt.
          </p>
        </div>
        <div className={styles.co150}>
          <div div className={styles.imgBx}>
            <img src="/picture/bg1.jpg" alt="picture" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About