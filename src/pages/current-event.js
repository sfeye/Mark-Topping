import React from "react";
import Desktop from "../components/layout/Desktop";
import Mobile from "../components/layout/Mobile";
import styled from "styled-components";
import responsive from "../constants/responsive";
import Event from "../components/common/Events";
import { graphql, useStaticQuery } from "gatsby";

const CurrentEvent = () => {
  const data = useStaticQuery(
    graphql`
      query {
        poster: file(relativePath: { eq: "xmasjuly.jpeg" }) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        s1: file(relativePath: { eq: "pub-e1.jpg" }) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        s2: file(relativePath: { eq: "pub-e2.jpg" }) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        s3: file(relativePath: { eq: "pub-e4.jpg" }) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        s4: file(relativePath: { eq: "pub-e5.jpg" }) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        s5: file(relativePath: { eq: "pub-e3.jpg" }) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    `
  );

  const event = [
    {
      image: data.poster.childImageSharp.gatsbyImageData,
      altText:
        "Vince Guaraldi’s “A Charlie Brown Christmas” performed by TJ & TheTattletales",
      title:
        "Vince Guaraldi’s “A Charlie Brown Christmas” performed by TJ & TheTattletales",
      date: "Monday, July 24 at 7:30pm",
      desc: "Christmas in July at recordBar! TJ & The Tattletales will perform Vince Guaraldi’s “A Charlie Brown Christmas” on Monday, July 24 at 7:30pm. We will have a raffle and donations to benefit Operation Breakthrough. Holiday cocktails featuring Una Familia Tequila. Tickets on sale now!",
      link: "https://link.dice.fm/P34b023a45b2",
      active: true,
      sources: [
        data.s1.childImageSharp.gatsbyImageData,
        data.s2.childImageSharp.gatsbyImageData,
        data.s3.childImageSharp.gatsbyImageData,
        data.s4.childImageSharp.gatsbyImageData,
        data.s5.childImageSharp.gatsbyImageData,
      ],
    },
  ];

  return (
    <Main>
      <MobileDiv>
        <Mobile>
          <Event header="Current Event" events={event}></Event>
        </Mobile>
      </MobileDiv>

      <DesktopDiv>
        <Desktop>
          <Event header="Current Event" events={event}></Event>
        </Desktop>
      </DesktopDiv>
    </Main>
  );
};

export default CurrentEvent;

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
