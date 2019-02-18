import React from "react";

const image = ({ image }) => {
  return <img className="single-photo" src={image.urls.thumb} alt="whatevs" />;
};

export default image;
