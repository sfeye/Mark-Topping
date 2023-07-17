import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import eventImages from "../../constants/event";
import { graphql, useStaticQuery, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Button from "@mui/material/Button";
import "../../styles/desktop/events.css";

function Events() {
  const data = useStaticQuery(graphql`
    query getEventPoster {
      poster: file(relativePath: { eq: "xmasjuly.jpeg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  `);

  return (
    <div className="events-container">
      <div className="events-header">Upcoming Events</div>
      <div className="event-title">
        Vince Guaraldi’s “A Charlie Brown Christmas” performed by TJ & The
        Tattletales
      </div>
      <GatsbyImage
        className="poster-image"
        alt="VINCE GUARALDI’S “A Charlie Brown Christmas” performed by TJ & The
        Tattletales"
        placeholder="blurred"
        loading="eager"
        image={data.poster.childImageSharp.gatsbyImageData}
      />
      <div className="event-desc">
        <b>Monday, July 24 at 7:30pm</b> Christmas in July at recordBar! TJ &
        The Tattletales will perform Vince Guaraldi’s “A Charlie Brown
        Christmas” on Monday, July 24 at 7:30pm. We will have a raffle and
        donations to benefit{" "}
        <a href="https://operationbreakthrough.org/">Operation Breakthrough</a>.
        Holiday cocktails featuring{" "}
        <a href="https://unafamiliatequila.com/">Una Familia Tequila</a>.
        Tickets on sale now!
      </div>
      <div className="event-btns">
        <Button
          variant="contained"
          className="event-button"
          target="_blank"
          href="https://link.dice.fm/P34b023a45b2"
          type="button"
        >
          Buy Tickets
        </Button>
        <Link to="/current-event" className="nostyle">
          <Button variant="contained" className="event-button" type="button">
            More Info
          </Button>
        </Link>
      </div>
      <ImageList cols={5}>
        {eventImages.map((photo) => (
          <ImageListItem>{photo}</ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

export default Events;
