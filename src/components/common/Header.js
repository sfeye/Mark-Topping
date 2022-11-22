import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import responsive from "../../constants/responsive";

const Header = ({ title1, title2, image, altText, desc1, desc2 }) => {
  return (
    <Container>
      <ImageDiv>
        <GatsbyImage image={image} alt={altText} loading="eager" />
      </ImageDiv>

      <OffsetTitle>
        <TitleDiv>
          <Title>{title1}</Title>
          {title2 ? <Title>{title2}</Title> : <React.Fragment></React.Fragment>}
        </TitleDiv>
      </OffsetTitle>

      <OffsetDesc>
        <DescDiv>
          <Desc>{desc1}</Desc>
          {desc2 ? <Desc2>{desc2}</Desc2> : <React.Fragment />}
        </DescDiv>
      </OffsetDesc>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  background-color: black;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: row;

  ${responsive.mobile`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;
  `};
`;

const ImageDiv = styled.div`
  width: 80%;
  background-position: "center";
  position: "absolute";
  ${responsive.mobile`
    width: 100%
  `};
`;

const TitleDiv = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  transform: translateX(15px) translateY(15px);
  box-shadow: -0.5px -0.5px 10px;
`;

const OffsetTitle = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  margin-top: 50px;
  padding: 10px;
  color: black;
  background-color: #03a9f4;
  border-radius: 10px;
  align-items: center;
  justify-content: center;

  ${responsive.mobile`
  margin-left: 10px;
  position: relative;
  max-width: fit-content;
  `};
`;

const Title = styled.div`
  text-align: center;
  font-family: "Righteous";
  font-size: 50px;

  ${responsive.mobile`
  font-size: 30px;
  `};
`;

const OffsetDesc = styled.div`
  width: 50vw;
  bottom: 50px;
  right: 50px;
  position: absolute;
  display: flex;
  padding: 10px;
  color: black;
  background-color: #03a9f4;
  border-radius: 10px;
  align-items: center;
  font-family: "Courier New";

  ${responsive.mobile`
    background-color: transparent;
    position: relative;
    margin-top: 100px;
    min-width: 95vw;
    justify-self: center;
    padding: 0px;
    align-items: center;
    right: auto
  `};
`;

const DescDiv = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  transform: translateX(20px) translateY(20px);
  box-shadow: -0.5px -0.5px 10px;
  min-width: calc(100% - 45px);
  min-height: calc(100% - 45px);

  ${responsive.mobile`
    transform: none;
    justify-self: center;
  `};
`;

const Desc = styled.p`
  text-align: left;
  font-size: 18px;
  color: black;
`;

const Desc2 = styled.p`
  text-align: left;
  font-size: 18px;
  color: black;
  margin-top: 40px;
`;
