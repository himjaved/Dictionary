import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        {props.photos.map(function (photo, index) {
          console.log(photo.url);
          return (
            <div>
              <img src={photo.url} key={index} alt="description" />
            </div>
          );
        })}
      </section>
    );
  } else {
    return null;
  }
}
