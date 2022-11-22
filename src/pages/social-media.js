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
            desc1="We are all consumed by the power of social media everywhere we look. This ever-changing landscape is critically important to stay on top of. Allow us to help provide fresh, relevant content to get your message out to your consumers, via your social media channels, e-mail and advertising or influencer campaigns."
            desc2="While many larger companies have dedicated teams to handle their social media, the smaller, locally-owned business don’t always have that luxury. Mark Topping Media is here to help you engage your customers with video and other exciting content, increasing your followers and ultimately driving profits."
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
            desc1="We are all consumed by the power of social media everywhere we look. This ever-changing landscape is critically important to stay on top of. Allow us to help provide fresh, relevant content to get your message out to your consumers, via your social media channels, e-mail and advertising or influencer campaigns."
            desc2="While many larger companies have dedicated teams to handle their social media, the smaller, locally-owned business don’t always have that luxury. Mark Topping Media is here to help you engage your customers with video and other exciting content, increasing your followers and ultimately driving profits."
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
