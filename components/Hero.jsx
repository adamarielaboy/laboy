import React from 'react';
import ImageZoom from 'react-medium-image-zoom'

const Hero = ({ heroImage, heroAlt }) => (
  <div className="row center-xs hero">
    <div className="col-xs-12 col-sm-10 col-md-8">
      <ImageZoom
        image={{
          src: heroImage,
          alt: heroAlt
        }}
      />
    </div>
  </div>
);

export default Hero;