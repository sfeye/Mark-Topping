import React from "react";
import socials from "../../constants/contact";
import { graphql, useStaticQuery } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";

import "../../styles/desktop/landing.css";

const Landing = () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "bg.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 1200
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `
  );
  const image = getImage(placeholderImage);
  const bgImage = convertToBgImage(image);

  return (
    <BackgroundImage
      Tag="section"
      // Spread bgImage into BackgroundImage:
      {...bgImage}
      preserveStackingContext
    >
      <div
        style={{
          minHeight: "100vh",
          minWidth: "100vw",
          backgroundPosition: "center",
          position: "absolute",
        }}
      >
        <GatsbyImage
          image={image}
          alt={"cameras pointing at eachother image"}
        />
      </div>
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
    </BackgroundImage>
  );
};

export default Landing;
