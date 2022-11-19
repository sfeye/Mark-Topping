import React from "react";
import Desktop from "../components/layout/Desktop";
import Mobile from "../components/layout/Mobile";
import styled from "styled-components";
import responsive from "../constants/responsive";
import Header from "../components/common/Header";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";

const Marketing = () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "underconst.jpg" }) {
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
            title1="Contact Form"
            image={image}
            altText="This part of the site is currently under construction"
            desc1="This form is under construction - stayed tuned for updated functionality."
            desc2="For now please refer to my social media or email me for inquiries!"
          ></Header>
        </Mobile>
      </MobileDiv>

      <DesktopDiv>
        <Desktop>
          <Header
            title1="Contact Form"
            image={image}
            altText="This part of the site is currently under construction"
            desc1="This form is under construction - stayed tuned for updated functionality."
            desc2="For now please refer to my social media or email me for inquiries!"
          ></Header>
        </Desktop>
      </DesktopDiv>
    </Main>
  );
};

export default Marketing;

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
