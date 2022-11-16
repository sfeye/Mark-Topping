import React from "react";
import "../../styles/mobile/mLanding.css";
import socials from "../../constants/contact";
import { graphql, useStaticQuery } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

const Landing = () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "bgm.jpg" }) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    `
  );
  const image = getImage(placeholderImage);

  return (
    <div>
      <div
        style={{
          minHeight: "100vh",
          backgroundPosition: "center",
          position: "absolute",
        }}
      >
        <GatsbyImage
          image={image}
          alt={"cameras pointing at eachother image"}
        />
      </div>
      <div className="mobile-landing-container">
        <div className="mobile-landing-header">
          Mark Topping <br /> Media
        </div>
        <div className="mobile-heading-socials">
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
