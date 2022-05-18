import React from "react";
import Image from "next/image";
import Landing from "../components/landing";
import HomeLanding from "../custom/homeLanding";
import img from "../public/headshot.jpg";

import styles from "./index.module.css";
function index() {
  return (
    <div className={styles.container}>
      <Landing>
        <HomeLanding />
      </Landing>
      <div className={styles.content}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Image src={img} alt="Picture of the author" className={styles.img} />
      </div>
    </div>
  );
}

export default index;
