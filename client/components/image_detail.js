//Create our image detail component
//Import React
import React from 'react';
import ImageScore from './image_score'

//Create our component
const ImageDetail = (props) => {
//props.image => this is the image object
//props.image.title
//props.image.link

  return (
    <li className="media list-group-item">
      <div className="media-left">
        <img src={props.image.link} />
      </div>
      <div className="media-body">
        <h4 className="media-heading">
      {props.image.title}
        </h4>
        <p>{props.image.description}</p>
        <ImageScore ups={props.image.ups} downs={props.image.downs} />
      </div>
    </li>
  );
};

//Export our component
export default ImageDetail;
