import React from "react";
import useEventbrite from "react-eventbrite-popup-checkout";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import eventImages from "../../constants/event";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Button from "@mui/material/Button";
import "../../styles/desktop/events.css";

function Events() {
  const handleOrderCompleted = React.useCallback(() => {
    console.log("Order was completed successfully");
  }, []);
  const modalButtonCheckout = useEventbrite({
    eventId: "448555450427",
    modal: true,
    onOrderComplete: handleOrderCompleted,
  });

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
    <div className="events-container">
      <div className="events-header">Upcoming Events</div>
      <div className="event-title">
        VINCE GUARALDI’S “A Charlie Brown Christmas” performed by TJ & The
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
        Vince Guaraldi’s holiday classic, “A Charlie Brown Christmas,” will be
        performed in its entirety by TJ & The Tattletales at Mike Kelly’s
        Westsider on December 6, 13, and 20. All performances start at 7:30pm,
        followed by a set of salacious “X”-Mas favorites! Guests are encouraged
        to donate a non-perishable food item or household goods/toiletries to
        benefit Operation Breakthrough. Tickets are on sale now!
      </div>
      {modalButtonCheckout && (
        <Button
          variant="contained"
          className="event-button"
          target="_blank"
          href="https://www.eventbrite.com/e/a-charlie-brown-christmas-performed-by-tj-the-tattletales-tickets-448555450427"
          type="button"
        >
          Buy Tickets
        </Button>
      )}
      <ImageList cols={5}>
        {eventImages.map((photo) => (
          <ImageListItem>{photo}</ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

export default Events;
