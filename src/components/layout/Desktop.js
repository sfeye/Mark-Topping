import React from "react";
import Seo from "../Seo";

export function Desktop({ title, description, image, children }) {
  return (
    <div>
      <Seo title={title} description={description} image={image} />
      <div>{children}</div>
    </div>
  );
}
export default Desktop;
