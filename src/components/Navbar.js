import React from "react";

export default () => {
  return (
    <nav>
      <img
        className="brand"
        src="/images/logo2.svg"
        alt="logo"
      />
      <ul className="links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#products">Products</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
