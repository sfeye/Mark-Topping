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
      poster: file(relativePath: { eq: "cbcsold.jpg" }) {
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
        <b>SOLD OUT FOR 12/6, 12/13 and 12/20.</b> Due to overwhelming demand,
        we have added a new show. TJ & The Tattletales will perform Vince
        Guaraldi’s “A Charlie Brown Christmas” on Sunday 12/18 at Mike Kelly’s
        Westsider. 7:30pm all ages (Under 21 with adult). Tickets on sale now.
      </div>
      <div className="event-btns">
        <Button
          variant="contained"
          className="event-button"
          target="_blank"
          href="https://www.eventbrite.com/e/a-charlie-brown-christmas-performed-by-tj-the-tattletales-tickets-448555450427"
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
