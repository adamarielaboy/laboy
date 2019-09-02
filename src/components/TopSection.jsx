import React, { Fragment } from 'react';
import Hero from './Hero';
import IntroSection from './IntroSection';
import MethodologySection from './MethodologySection';

const TopSection = ({ heroImage, heroAlt, introHeader, introCaption, methodologyHeader, methodologyContent, description }) => (
  <Fragment>
    { console.log(heroImage) }
    <Hero heroImage={heroImage} heroAlt={heroAlt} />
    <IntroSection introHeader={introHeader} introCaption={introCaption} />
    <MethodologySection methodologyHeader={methodologyHeader} methodologyContent={methodologyContent}/>
    { description && (
      <div className="row center-xs">
        <div className="col-sm-6 col-xs-10">
          <p dangerouslySetInnerHTML={{ __html: description  }} />
        </div>
      </div>
    )}
  </Fragment>
);

export default TopSection;