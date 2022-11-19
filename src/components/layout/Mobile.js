import React from "react";
import Navbar from "../mobile/Navbar";
import Seo from "../Seo";

export function Mobile({ title, description, image, children }) {
  return (
    <div>
      <Seo title={title} description={description} image={image} />
      <Navbar />
      <div>{children}</div>
    </div>
  );
}
export default Mobile;
