import React from 'react';

const IntroSection = ({ introHeader, introCaption }) => (
  <div className="row center-xs">
    <div className="col-sm-6 col-xs-10">
      <h1>{introHeader}</h1>
      <p className="intro" dangerouslySetInnerHTML={{__html: introCaption}} />
    </div>
  </div>
);

export default IntroSection;