import React from 'react'

import styles from "../../styles/contact.module.css";

const Input = ({ type, placeholder = "", value = "" }) => {
  return (
    <div className={styles.inputBox}>
      <input type={type} placeholder={placeholder} value={value} />
    </div>
  );
};

export default Input