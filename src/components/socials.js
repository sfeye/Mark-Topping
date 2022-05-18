import React from "react";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";

import styles from "./socials.module.css";

function socials() {
  return (
    <div className={styles.socials}>
      <a
        href="https://www.facebook.com/BeMoreVenturesKCMO"
        className={styles.facebook}
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebook />
      </a>
      <a
        href="https://twitter.com/BeMoreVentures"
        className={styles.twitter}
        target="_blank"
        rel="noreferrer"
      >
        <FaTwitter />
      </a>
      <a
        href="https://www.instagram.com/bemoreventures/"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram className={styles.insta} />
      </a>
      <a
        href="https://www.youtube.com/channel/UCliaoqtn5Z75ddlq98RBnzw"
        className={styles.youtube}
        target="_blank"
        rel="noreferrer"
      >
        <FaYoutube />
      </a>
    </div>
  );
}

export default socials;
