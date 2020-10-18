import React from "react";
// import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
// import { Button } from "@material-ui/core";

export default (props) => {
  return (
    <div className="product">
      <h3>{props.title}</h3>
      <figure>
        <img src={props.imgUrls[0]} alt="product" />
      </figure>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod.
      </p>
      <div className="product-cart">
        <p>R {props.price}</p>
        {/* <Button variant="contained" color="primary">
          <ShoppingCartOutlinedIcon />
        </Button> */}
      </div>
    </div>
  );
};
