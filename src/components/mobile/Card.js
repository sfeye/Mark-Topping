import React, { useState } from "react";
import "../../styles/mobile/mAbout.css";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import styled, { css } from "styled-components";

const Card = () => {
  const data = useStaticQuery(graphql`
    query getHomeImages {
      headshot: file(relativePath: { eq: "headshot.JPG" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  `);

  const [flipped, setFlipped] = useState(false);

  return (
    <CardContainer>
      <CardInner className={flipped ? "flipped" : ""}>
        <CardFront onClick={() => setFlipped(true)}>
          <ImageListItem>
            <GatsbyImage
              alt="Mark Topping owner of Mark Topping Media"
              placeholder="blurred"
              loading="eager"
              image={data.headshot.childImageSharp.gatsbyImageData}
            />
            <ImageListItemBar title="About" />
          </ImageListItem>
        </CardFront>
        <CardBack onClick={() => setFlipped(false)}>
          <CardText>
            Mark Topping Media was founded in 2021 after a 24-year award winning
            career in television news and professional sports. In this
            ever-changing, fast-paced world of digital media, we are your
            one-stop “Top” for public and media relations, social media, digital
            marketing, content creation, events, media training and crisis
            management.
            <br />
            <br />
            <br />
            Whether you’re starting a new business in need of a marketing
            strategy, or an existing one looking to promote via social and
            electronic media - Mark Topping Media is here to provide the content
            that is right for your brand.
          </CardText>
        </CardBack>
      </CardInner>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: z-index 500ms, transform 500ms;
  z-index: 0;
  -webkit-perspective: 1000px;
  perspective: 1000px;
  transform-style: preserve-3d;
  padding-bottom: 50px;

  &.flipped {
    z-index: 1;
  }
`;

const CardSide = css`
  width: 100%;
  min-width: 100%;
  flex-direction: column;
  justify-content: space-between;
  -moz-backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`;

const CardFront = styled.div`
  ${CardSide}
  z-index: 0;
`;

const CardBack = styled.div`
  ${CardSide}
  z-index: 1;
  transform: rotateY(-180deg) translate(100%, 0);
  background-color: white;
  color: black;
`;

const CardText = styled.div`
  padding: 15px;
  padding-top: 20px;
  font-size: 18px;
`;

const CardInner = styled.div`
  flex: 1;
  display: flex;
  transition: transform 500ms;
  transform-style: preserve-3d;

  &.flipped {
    transform: rotateY(180deg);
  }
`;
