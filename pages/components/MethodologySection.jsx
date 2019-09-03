import React from 'react';

const MethodologySection = ({ methodologyHeader, methodologyContent}) => (
  <div className="row center-xs">
    <div className="col-sm-6 col-xs-10">
      <div className="methodology-box">
          <h3>{methodologyHeader}</h3>
          <p dangerouslySetInnerHTML={{ __html: methodologyContent }} />
      </div>
    </div>
  </div>
);

export default MethodologySection;