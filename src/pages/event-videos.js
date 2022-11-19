import React from "react";
import styled from "styled-components";
import Desktop from "../components/layout/Desktop";
import Mobile from "../components/layout/Mobile";
import Youtube from "../components/common/Youtube";
import responsive from "../constants/responsive";

const EventVideos = () => {
  return (
    <Main>
      <MobileDiv>
        <Mobile>
          <Youtube />
        </Mobile>
      </MobileDiv>

      <DesktopDiv>
        <Desktop>
          <Youtube />
        </Desktop>
      </DesktopDiv>
    </Main>
  );
};

export default EventVideos;

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
