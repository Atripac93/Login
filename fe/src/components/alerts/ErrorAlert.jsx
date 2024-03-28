import React from "react";
import styles from "./error.module.css";

const ErrorAlert = () => {
  return (
    <>
      <img
        className={styles.ErrorContainer}
        src="https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg"
        alt="error"
      />
    </>
  );
};

export default ErrorAlert;
