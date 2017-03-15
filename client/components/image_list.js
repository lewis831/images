//Create our image list component
//Import React
import React from 'react';
import ImageDetail from './image_detail'

//Create our component
//Note: "image" in <ImageDetail "image"={image} /> holds the value for const IMAGES. Check pass through of value to image_detail.js for referece.
const ImageList = (props) => {
  //Filters out albums to fix broken images !image.is_album
  const validImages = props.images.filter(image => !image.is_album);

  const RenderedImages = validImages.map(image => <ImageDetail key={image.title} image={image} />
);

  return (
    <ul className="media-list list-group">
      {RenderedImages}
    </ul>
  );
};

//Export our component
export default ImageList;
