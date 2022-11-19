import React from "react";
import styled from "styled-components";
import responsive from "../../constants/responsive";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

const Youtube = () => {
  const data = useStaticQuery(graphql`
    query YoutubeFull {
      allYoutubeVideo(sort: { fields: [publishedAt], order: DESC }) {
        edges {
          node {
            videoId
            title
            publishedAt
          }
        }
      }
      image: file(relativePath: { eq: "youtube.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  `);
  return (
    <Container>
      <ImageDiv>
        <GatsbyImage
          image={data.image.childImageSharp.gatsbyImageData}
          alt={"Computer screen with youtube pulled up"}
          loading="eager"
        />
      </ImageDiv>

      <OffsetTitle>
        <TitleDiv>
          <Title>Youtube Videos</Title>
        </TitleDiv>
      </OffsetTitle>

      <OffsetDesc>
        <DescDiv>
          {data.allYoutubeVideo.edges.map((video) => (
            <Video
              src={`https://www.youtube.com/embed/${video.node.videoId}`}
              title={video.node.title}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ))}
        </DescDiv>
      </OffsetDesc>
    </Container>
  );
};

export default Youtube;

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
  max-height: 450px;
  overflow: scroll;

  ${responsive.mobile`
  transform: none;
  justify-self: center;
  max-height: fit-content;
  background-color: black;
`};
`;

const Video = styled.iframe`
  width: 100%;
  height: 300px;
  margin-bottom: 20px;
`;
