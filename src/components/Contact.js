import React from "react";
import Form from "./Form";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="section-header">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-paragraph">
          Call or E-mail us. Let's get in touch.
        </p>
      </div>
      <div className="contact-info">
        <div className="contact-wrapper">
          <div className="address">
            <p>17 Portswood Road</p>
            <p>Plumstead</p>
            <p>Cape Town</p>
            <p>7800</p>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
