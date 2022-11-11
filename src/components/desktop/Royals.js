import React from "react";
import "../../styles/desktop/royals.css";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import royalImages from "../../constants/royalImages";

const Royals = () => {
  return (
    <div className="royals-container">
      <div className="royal-text">
        <h1 className="royh1">
          <span>ROYALS</span>
          <span>ROYALS</span>
        </h1>
        <h2 className="royh2">Kansas City</h2>
      </div>
      <ImageList cols={3} gap={8} variant="masonry">
        {royalImages.map((photo) => (
          <ImageListItem>{photo}</ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default Royals;
