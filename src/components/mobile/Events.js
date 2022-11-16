import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import eventImages from "../../constants/event";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Button from "@mui/material/Button";
import "../../styles/mobile/mEvents.css";

function Events() {
  const data = useStaticQuery(graphql`
    query getEventPoster {
      poster: file(relativePath: { eq: "poster-e1.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  `);

  return (
    <div className="mobile-events-container">
      <div className="mobile-events-header">Upcoming Events</div>
      <div className="mobile-events-title">
        Vince Guaraldi’s <br />
        “A Charlie Brown Christmas”
      </div>
      <GatsbyImage
        className="mobile-poster-image"
        alt="Vince Guaraldi’s “A Charlie Brown Christmas” performed by TJ & The
        Tattletales"
        placeholder="blurred"
        loading="eager"
        image={data.poster.childImageSharp.gatsbyImageData}
      />
      <div className="mobile-event-desc">
        Vince Guaraldi’s holiday classic, “A Charlie Brown Christmas,” will be
        performed in its entirety by TJ & The Tattletales at Mike Kelly’s
        Westsider on December 6, 13, and 20. All performances start at 7:30pm,
        followed by a set of salacious “X”-Mas favorites! Guests are encouraged
        to donate a non-perishable food item or household goods/toiletries to
        benefit Operation Breakthrough. Tickets are on sale now!
      </div>
      <Button
        variant="contained"
        className="mobile-event-button"
        target="_blank"
        href="https://www.eventbrite.com/e/a-charlie-brown-christmas-performed-by-tj-the-tattletales-tickets-448555450427"
        type="button"
      >
        Buy Tickets
      </Button>
      <ImageList
        cols={1}
        sx={{
          gridAutoFlow: "column",
          gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr)) !important",
          gridAutoColumns: "minmax(300px, 1fr)",
          paddingTop: 2,
        }}
        rowHeight={200}
      >
        {eventImages.map((photo) => (
          <ImageListItem sx={{ width: 300 }}>{photo}</ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

export default Events;
