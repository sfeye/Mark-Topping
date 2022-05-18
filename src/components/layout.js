import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Socials from "./socials";

import styles from "./layout.module.css";

function layout({ children }) {
  return (
    <div className={styles.lay}>
      <Navbar />
      <Socials />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default layout;
