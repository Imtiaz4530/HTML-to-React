import React from 'react'

import styles from '../../styles/header.module.css'
import Link from './Link';

const Header = () => {
  return (
    <header>
      <a href="#" className={styles.logo}>
        Food<span>.</span>
      </a>
      <div className={styles.menuToggle} onclick="toggleMenu();"></div>
      <ul className={styles.navigation}>
        <Link title="Home" url="#banner" />
        <Link title="About" url="#banner" />
        <Link title="Menu" url="#banner" />
        <Link title="Expert" url="#banner" />
        <Link title="Testimonial" url="#banner" />
        <Link title="Contact" url="#banner" />
      </ul>
    </header>
  );
}

export default Header