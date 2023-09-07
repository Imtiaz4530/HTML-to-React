import React from 'react'

import styles from '../../styles/contact.module.css'
import Input from './Input';

const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
      <div className={`${styles.title} white`}>
        <h2 className={styles.titleText}>
          <span>C</span>ontact Us
        </h2>
        <p>
          Loren insup dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod.
        </p>
      </div>
      <div className={styles.contactform}>
        <h3>Send Massage</h3>
        <Input type="text" placeholder="Name" />
        <Input type="email" placeholder="Email" />
        <div className={styles.inputBox}>
          <textarea placeholder="Name"></textarea>
        </div>
        <Input type="submit" value='send' />
      </div>
    </section>
  );
}

export default Contact