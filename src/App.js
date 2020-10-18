import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProductContext from "./ProductContext";
import "./styles.css";

export default (props) => {
  return (
    <div className="App">
      <ProductContext>
        <Navbar />
        <Home />
      </ProductContext>
    </div>
  );
};
