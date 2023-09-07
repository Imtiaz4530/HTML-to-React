import React from 'react'

import styles from '../../styles/home.module.css'

const Home = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <h2>Always Choose Good</h2>
        <p>
          Loren insup dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim vaniam, quis nostrud.
        </p>
        <a href="#" class="btn">
          Our Menu
        </a>
      </div>
    </div>
  );
}

export default Home