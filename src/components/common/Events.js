import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Button from "@mui/material/Button";
import styled from "styled-components";
import responsive from "../../constants/responsive";

const Events = ({ header, events }) => {
  return (
    <Container>
      <OffsetTitle>
        <TitleDiv>
          <Title>{header}</Title>
        </TitleDiv>
      </OffsetTitle>
      {events.map((e) => (
        <Content>
          <LeftDiv>
            <ImageDiv>
              <GatsbyImage image={e.image} alt={e.altText} loading="eager" />
            </ImageDiv>
          </LeftDiv>
          <RightDiv>
            <EventTitle>{e.title}</EventTitle>
            <EventDate>{e.date}</EventDate>
            <EventDesc>{e.desc}</EventDesc>
            {e.active ? (
              <Button
                variant="contained"
                style={{
                  marginTop: "13px",
                  marginBottom: "12px",
                  marginLeft: "50px",
                }}
                target="_blank"
                href={e.link}
                type="button"
              >
                Buy Tickets
              </Button>
            ) : (
              <React.Fragment></React.Fragment>
            )}
            {e.sources ? (
              <ImageList cols={e.sources.length}>
                {e.sources.map((src) => (
                  <ImageListItem>
                    <GatsbyImage
                      image={src}
                      alt="Phot from the event"
                      loading="lazy"
                      placeholder="blurred"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            ) : (
              <React.Fragment></React.Fragment>
            )}
          </RightDiv>
        </Content>
      ))}
    </Container>
  );
};

export default Events;

const Container = styled.div`
  background-color: black;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  ${responsive.mobile`
    flex-direction: column;
  `};
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 80px;

  ${responsive.mobile`
    width: 100%;
    flex-direction: column-reverse;
  `};
`;

const LeftDiv = styled.div`
  display: flex;
  align-content: center;
  min-width: 30vw;
  ${responsive.mobile`
    min-width: 90vw;
  `};
`;

const RightDiv = styled.div`
  max-width: 70vw;
  font-family: "Courier New";
  padding-left: 50px;
  padding-right: 50px;

  ${responsive.mobile`
  padding-left: 0px;
  padding-right: 0px;
  max-width: 100vw;
  `};
`;

const ImageDiv = styled.div`
  position: relative;
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
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-top: 20px;
  padding: 5px;
  color: black;
  background-color: #03a9f4;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  max-width: fit-content;

  ${responsive.mobile`
  margin-left: 0px;
  position: relative;
  max-width: fit-content;
  `};
`;

const Title = styled.div`
  text-align: center;
  font-family: "Righteous";
  font-size: 40px;

  ${responsive.mobile`
  font-size: 30px;
  `};
`;

const EventTitle = styled.div`
  font-size: 26px;
  text-align: center;

  ${responsive.mobile`
  font-size: 20px;
  padding-left: 0px;
  padding-right: 0px;
  `};
`;

const EventDate = styled.div`
  font-size: 18px;
  margin-top: 40px;
  text-align: left;

  ${responsive.mobile`
  font-size: 16px;
  padding-left: 5px;
  padding-right: 5px;
  `};
`;

const EventDesc = styled.div`
  font-size: 16px;
  margin-top: 10px;
  text-align: left;

  ${responsive.mobile`
  font-size: 16px;
  padding-left: 5px;
  padding-right: 5px;
  margin-bottom: 10px;
  `};
`;
