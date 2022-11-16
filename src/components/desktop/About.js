import React from "react";
import "../../styles/desktop/about.css";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const About = () => {
  const data = useStaticQuery(graphql`
    query getHomeImages {
      headshot: file(relativePath: { eq: "headshot.JPG" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  `);

  return (
    <div id="about" className="about-container">
      <div className="about-content">
        <GatsbyImage
          className="headshot"
          alt="Mark Topping owner of Mark Topping Media"
          placeholder="blurred"
          loading="eager"
          image={data.headshot.childImageSharp.gatsbyImageData}
        />
        <p className="about-text">
          Mark Topping Media was founded in 2021 after a 24-year award winning
          career in television news and professional sports. In this
          ever-changing, fast-paced world of digital media, we are your one-stop
          “Top” for public and media relations, social media, digital marketing,
          content creation, events, media training and crisis management.
          <br />
          <br />
          Whether you’re starting a new business in need of a marketing
          strategy, or an existing one looking to promote via social and
          electronic media, Mark Topping Media is here to provide the content
          that is right for your brand. We have built trusted relationships in
          the industry which have formed a foundation that will allow us to
          promote your brand and drive revenue for your business.
        </p>
      </div>
    </div>
  );
};

export default About;
