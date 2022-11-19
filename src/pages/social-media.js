import React from "react";
import Desktop from "../components/layout/Desktop";
import Mobile from "../components/layout/Mobile";
import styled from "styled-components";
import responsive from "../constants/responsive";
import Header from "../components/common/Header";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";

const SocialMedia = () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "gen-cpu2.JPG" }) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    `
  );

  const image = getImage(placeholderImage);

  return (
    <Main>
      <MobileDiv>
        <Mobile>
          <Header
            title1="Didgital Marketing"
            title2="and Social Media"
            image={image}
            altText="Social Media management computer and sound equipment"
            desc1="Mark Topping Media was founded in 2021 after a 24-year award winning
            career in television news and professional sports. In this
            ever-changing, fast-paced world of digital media, we are your one-stop
            “Top” for public and media relations, social media, digital marketing,
            content creation, events, media training and crisis management."
            desc2="Whether you’re starting a new business in need of a marketing
            strategy, or an existing one looking to promote via social and
            electronic media, Mark Topping Media is here to provide the content
            that is right for your brand. We have built trusted relationships in
            the industry which have formed a foundation that will allow us to
            promote your brand and drive revenue for your business."
          ></Header>
        </Mobile>
      </MobileDiv>

      <DesktopDiv>
        <Desktop>
          <Header
            title1="Didgital Marketing"
            title2="and Social Media"
            image={image}
            altText="Social Media management computer and sound equipment"
            desc1="Mark Topping Media was founded in 2021 after a 24-year award winning
            career in television news and professional sports. In this
            ever-changing, fast-paced world of digital media, we are your one-stop
            “Top” for public and media relations, social media, digital marketing,
            content creation, events, media training and crisis management."
            desc2="Whether you’re starting a new business in need of a marketing
            strategy, or an existing one looking to promote via social and
            electronic media, Mark Topping Media is here to provide the content
            that is right for your brand. We have built trusted relationships in
            the industry which have formed a foundation that will allow us to
            promote your brand and drive revenue for your business."
          ></Header>
        </Desktop>
      </DesktopDiv>
    </Main>
  );
};

export default SocialMedia;

const Main = styled.main``;

const MobileDiv = styled.div`
  display: none;
  ${responsive.mobile`
    display: block;
  `};
`;

const DesktopDiv = styled.div`
  ${responsive.mobile`
    display: none;
  `};
`;
