// const path = require('path');

import React, { Fragment } from 'react';
import imageFile from "../assets/odyssey-project/citi-photo.png";

// Example: <ImageSection images={[]} header={} caption={[]} />
const ImageSection = ({ images, header, caption }) => (
  <section className="container">
  { (caption || header) && (
    <div className="row center-xs">
      <div className="col-sm-6 col-xs-10">
        { header && <h2 className="main-titles">{header}</h2>}
        { caption && caption.length > 0 && (
          <p dangerouslySetInnerHTML={{__html: caption}} />
        )}
      </div>
    </div>
  )}
  { images && images.length > 0 && (
    <div className="row center-xs">
      <div className="col-xs-12 col-sm-10">
        {
          images.map(image => {
            // const img = require("assets/odyssey-project/challenge.png");
            const img = require(`assets/odyssey-project/${image.alt}`);
            console.log(image.alt);
            
            
            return (
              <img key={image.url} src={img} alt={image.alt} />
            )
          })
        }
      </div>
    </div>
  )}
</section>
);

export default ImageSection;