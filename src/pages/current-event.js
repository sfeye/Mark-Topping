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
        poster: file(relativePath: { eq: "fullposter.PNG" }) {
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
      date: "December 6th, 13th, and 20th 2022 at 7:30pm",
      desc: "Vince Guaraldi’s holiday classic, “A Charlie Brown Christmas,” will be performed in its entirety by TJ & The Tattletales at Mike Kelly’s Westsider on December 6, 13, and 20. All performances start at 7:30pm, followed by a set of salacious “X”-Mas favorites! Guests are encouraged to donate a non-perishable food item or household goods/toiletries to benefit Operation Breakthrough. Tickets are on sale now!",
      link: "https://www.eventbrite.com/e/a-charlie-brown-christmas-performed-by-tj-the-tattletales-tickets-448555450427",
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
