import * as React from "react";
import Mobile from "../components/layout/Mobile";
import Desktop from "../components/layout/Desktop";
import "../styles/index.css";
import LandingDesktop from "../components/desktop/Landing";
import LandingMobile from "../components/mobile/Landing";
import About from "../components/desktop/About";
import AboutMobile from "../components/mobile/About";
import Royals from "../components/desktop/Royals";
import Services from "../components/desktop/Services";
import ServicesMobile from "../components/mobile/Services";
import Events from "../components/desktop/Events";
import EventsMobile from "../components/mobile/Events";

// markup
const IndexPage = () => {
  return (
    <main className="index-main">
      <div className="mobile">
        <Mobile>
          <LandingMobile />
          <EventsMobile />
          <ServicesMobile />
          <AboutMobile />
        </Mobile>
      </div>
      <div className="desktop">
        <Desktop>
          <LandingDesktop />
          <Events />
          <Services />
          <About />
          <Royals />
        </Desktop>
      </div>
    </main>
  );
};

export default IndexPage;
