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
        placeholderImage: file(relativePath: { eq: "gen-presentation4.JPG" }) {
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
            title1="Event Planning"
            title2="and Management"
            image={image}
            altText="Marketing working around a desk with a presentor"
            desc1="One of the most effective ways to increase your brand awareness is by hosting an event. We will plan all aspects of your event, with emphasis on unique and memorable in order to make it press-worthy. From choosing the right location to the equipment rental, sound, lighting, and catering, we’ll execute all details from beginning to end."
            desc2="Our team has staged everything from fundraisers to benefit charities supported by world-class athletes to meet-and-greets and book promotions featuring local celebrities. We also specialize in producing and promoting concerts and other visual arts. Let us know what you’re hoping to accomplish and we can work with you to bring your vision to fruition."
          ></Header>
        </Mobile>
      </MobileDiv>

      <DesktopDiv>
        <Desktop>
          <Header
            title1="Event Planning"
            title2="and Management"
            image={image}
            altText="Marketing working around a desk with a presentor"
            desc1="One of the most effective ways to increase your brand awareness is by hosting an event. We will plan all aspects of your event, with emphasis on unique and memorable in order to make it press-worthy. From choosing the right location to the equipment rental, sound, lighting, and catering, we’ll execute all details from beginning to end."
            desc2="Our team has staged everything from fundraisers to benefit charities supported by world-class athletes to meet-and-greets and book promotions featuring local celebrities. We also specialize in producing and promoting concerts and other visual arts. Let us know what you’re hoping to accomplish and we can work with you to bring your vision to fruition."
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
