import React from "react";
import Image from "next/image";
import img from "../public/homeimg.jpg";

import styles from "./homeLanding.module.css";

function homeLanding() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.headers}>
          <h1>Mark Topping</h1>
          <h2>Media and Design</h2>
        </div>
      </div>
      <Image src={img} alt="Picture of the author" className={styles.img} />
    </div>
  );
}

export default homeLanding;
