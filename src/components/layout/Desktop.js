import React from "react";
import Navbar from "../desktop/Navbar";
import Seo from "../Seo";

export function Desktop({ title, description, image, children }) {
  return (
    <div>
      <Seo title={title} description={description} image={image} />
      <Navbar />
      <div>{children}</div>
    </div>
  );
}
export default Desktop;
