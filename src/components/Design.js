import React from "react";

export default (props) => {
  return (
    <section>
      <div className="design">
        <h3 className="design-title">{props.title}</h3>
        <figure className="design-img-container">
          <img src={props.imgUrls} alt={props.title} />
        </figure>
      </div>
    </section>
  );
};
