import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <h3 className="contact_title">Contact Me</h3>
      <div className="footer__contact">
        <div>Phone</div>
        <div>+1 (786) 571-0027</div>

        <div>Email</div>
        <div>Felipevilla.webdev@gmail.com</div>
      </div>
      <div className="footer__copy">
        Copyright &#169; 2021 Felipe Villa. All Rights Reserved.
      </div>
    </div>
  );
}
