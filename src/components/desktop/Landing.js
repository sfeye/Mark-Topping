import React from "react";
import socials from "../../constants/contact";

import "../../styles/desktop/landing.css";

const Landing = () => {
  return (
    <div className="container">
      <div className="heading">
        <div class="content">
          <h2>Mark Topping</h2>
          <h2>Mark Topping</h2>
        </div>
        <div class="content">
          <h2>Media</h2>
          <h2>Media</h2>
        </div>

        <div className="heading-socials">
          <a href={socials.TWITTER.link} target="_blank" rel="noreferrer">
            {socials.TWITTER.icon}
          </a>
          <a href={socials.FACEBOOK.link} target="_blank" rel="noreferrer">
            {socials.FACEBOOK.icon}
          </a>
          <a href={socials.INSTAGRAM.link} target="_blank" rel="noreferrer">
            {socials.INSTAGRAM.icon}
          </a>
          <a href={socials.YOUTUBE.link} target="_blank" rel="noreferrer">
            {socials.YOUTUBE.icon}
          </a>
          <a href={socials.TIKTOK.link} target="_blank" rel="noreferrer">
            {socials.TIKTOK.icon}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
