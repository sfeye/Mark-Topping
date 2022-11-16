import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export const serviceImages = [
  {
    img: (
      <StaticImage
        src="../images/gen-presentation4.JPG"
        srcSet="../images/gen-presentation4.JPG"
        alt="Marketing working around a desk with a presentor"
        loading="lazy"
        placeholder="blurred"
      />
    ),
    title: "Event Planning and Management ",
  },
  {
    img: (
      <StaticImage
        src="../images/gen-presentation3.JPG"
        srcSet="../images/gen-presentation3.JPG"
        alt="Public Relations in a conference room"
        loading="lazy"
        placeholder="blurred"
      />
    ),
    title: "Media Relations and PR",
  },
  {
    img: (
      <StaticImage
        src="../images/gen-cpu2.JPG"
        srcSet="../images/gen-cpu2.JPG"
        alt="Social Media management computer and sound equipment"
        loading="lazy"
        placeholder="blurred"
      />
    ),
    title: "Digital Marketing and Social Media",
  },
  {
    img: (
      <StaticImage
        src="../images/gen-mic.JPG"
        srcSet="../images/gen-mic.JPG"
        alt="Social Media management computer and sound equipment"
        loading="lazy"
        placeholder="blurred"
      />
    ),
    title: "Video Production and Editing",
  },
];

export default serviceImages;
