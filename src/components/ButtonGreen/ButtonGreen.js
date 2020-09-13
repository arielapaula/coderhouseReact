import React from "react";
import styles from "./ButtonGreen.module.scss"

const ButtonGreen = ({ children, secondaryBtn, onClickHandler }) => {
  return <div className={`${styles.ButtonGreen} ${secondaryBtn ? styles.secondaryBtn : ""}`} onClick={onClickHandler}>{children}</div>;
};

export default ButtonGreen;
