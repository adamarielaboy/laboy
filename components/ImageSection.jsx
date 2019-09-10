import React from 'react';
import ImageZoom from 'react-medium-image-zoom'

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
      <div className="col-xs-12 col-sm-10 col-md-8">
        {
          images.map(image => (
              <ImageZoom
                key={image.url}
                image={{
                  src: image.url,
                  alt: image.alt
                }}
              />
            )
          )
        }
      </div>
    </div>
  )}
</section>
);

export default ImageSection;