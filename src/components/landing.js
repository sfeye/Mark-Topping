import React from "react";

import styles from "./landing.module.css";

function landing({ children }) {
  return <div className={styles.container}>{children}</div>;
}

export default landing;
