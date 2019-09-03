import React from 'react';

const Hero = ({ heroImage, heroAlt }) => (
  <div className="row center-xs">
    <div className="col-xs-12 col-sm-10">
      <img src={heroImage} alt={heroAlt} />
    </div>
  </div>
);

export default Hero;