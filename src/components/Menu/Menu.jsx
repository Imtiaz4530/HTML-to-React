import React from 'react'

import styles from '../../styles/menu.module.css'
import Card from './Card';

const Menu = () => {
  return (
    <section className={styles.menu} id="menu">
      <div className={styles.title}>
        <h2 className={styles.titleText}>
          <span>M</span>enu
        </h2>
        <p>
          Loren insup dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod.
        </p>
      </div>
      <div className={styles.content}>
        <Card imgURL="salad" item="Special Salad" />
        <Card imgURL="soup" item="Special Soup" />
        <Card imgURL="pasta" item="Special Pasta" />
        <Card imgURL="Salad2" item="Special Salad" />
        <Card imgURL="soup2" item="Special Soup" />
        <Card imgURL="pasta2" item="Special Pasta" />
      </div>
      <div className={styles.title}>
        <a href="#Home" className={styles.btn}>
          View All
        </a>
      </div>
    </section>
  );
}

export default Menu

