import React from "react";
import styles from "./index.module.css";

export const Form = ({ children, ...props }) => {
  return (
    <form noValidate {...props} className={styles.root}>
      {children}
    </form>
  );
};
