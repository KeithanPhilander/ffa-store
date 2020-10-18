import React from "react";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";

export default () => {
  return (
    <header id="home">
      <img
        className="brand-large"
        src="/images/logo2.svg"
        alt="logo"
      />
      <div className="container">
        <div className="tagline-group">
          <h1>Faith Forever</h1>
          <p>Spiritual Apparel</p>
        </div>
        <div className="cta-group">
          <Button variant="contained" color="primary">
            <a
              style={{
                textDecoration: "none",
                color: "inherit"
              }}
              href="#products"
            >
              Products
            </a>
          </Button>
          <Button variant="contained" color="secondary">
            <a
              style={{
                textDecoration: "none",
                color: "inherit"
              }}
              href="#contact"
            >
              Contact
            </a>
          </Button>
        </div>
      </div>
      <div id="products"></div>
    </header>
  );
};
