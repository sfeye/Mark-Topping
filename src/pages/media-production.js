import React from "react";
import Desktop from "../components/layout/Desktop";
import Mobile from "../components/layout/Mobile";
import styled from "styled-components";
import responsive from "../constants/responsive";
import Header from "../components/common/Header";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";

const MediaProduction = () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "gen-mic.JPG" }) {
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
            title1="Video Production"
            title2="and Editing"
            image={image}
            altText="Microphone podcast interview editing and video production"
            desc1="When your project requires the best video content, count on Mark Topping Media and our network of award-winning videographers and editors to bring your vision to life. We have 25 years of experience in television news, freelance video production, and sports video. We know how to build your video around people and places to bring your message to your customers. No gimmicks. We don’t believe in using effects as a crutch, but will use the latest technological innovations to make your content stand out!"
          ></Header>
        </Mobile>
      </MobileDiv>

      <DesktopDiv>
        <Desktop>
          <Header
            title1="Video Production"
            title2="and Editing"
            image={image}
            altText="Microphone podcast interview editing and video production"
            desc1="When your project requires the best video content, count on Mark Topping Media and our network of award-winning videographers and editors to bring your vision to life. We have 25 years of experience in television news, freelance video production, and sports video. We know how to build your video around people and places to bring your message to your customers. No gimmicks. We don’t believe in using effects as a crutch, but will use the latest technological innovations to make your content stand out!"
          ></Header>
        </Desktop>
      </DesktopDiv>
    </Main>
  );
};

export default MediaProduction;

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
