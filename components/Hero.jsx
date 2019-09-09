import React from 'react';

const Hero = ({ heroImage, heroAlt }) => (
  <div className="row center-xs hero">
    <div className="col-xs-12 col-sm-10 col-md-8">
      <img src={heroImage} alt={heroAlt} />
    </div>
  </div>
);

export default Hero;