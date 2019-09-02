import React, { Fragment } from 'react';

const IntroSection = ({ introHeader, introCaption }) => (
  <div className="row center-xs">
    <div className="col-sm-6 col-xs-10">
      <h1>{introHeader}</h1>
      <p className="intro">{introCaption.map(c => (
        <Fragment key={c}>
          {c}
        </Fragment>
      ))}</p>
    </div>
  </div>
);

export default IntroSection;