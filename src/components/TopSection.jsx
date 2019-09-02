import React, { Fragment } from 'react';
import Hero from './Hero';
import IntroSection from './IntroSection';
import MethodologySection from './MethodologySection';

const TopSection = ({ heroImage, heroAlt, introHeader, introCaption, methodologyHeader, methodologyContent}) => (
  <Fragment>
    { console.log(heroImage) }
    <Hero heroImage={heroImage} heroAlt={heroAlt} />
    <IntroSection introHeader={introHeader} introCaption={introCaption} />
    <MethodologySection methodologyHeader={methodologyHeader} methodologyContent={methodologyContent}/>
  </Fragment>
);

export default TopSection;