import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";

import serviceImages from "../../constants/serviceImages";
import ListHeader from "../ListHeader";

function Services() {
  return (
    <div style={{ paddingBottom: "200px" }}>
      <ImageList cols={2}>
        <ImageListItem key="Subheader" cols={2}>
          <ListSubheader style={{ backgroundColor: "black" }}>
            <ListHeader />
          </ListSubheader>
        </ImageListItem>
        {serviceImages.map((photo) => (
          <ImageListItem>
            {photo.img}
            <ImageListItemBar title={photo.title} />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

export default Services;
