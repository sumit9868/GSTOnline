import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Footer.css";
import logo from "../Media/logo2.png";

function Footer() {
  return (
    <nav className="footer">
      <div className="footer__upper">
        <Link className="footer__logo" to="/">
          <img src={logo} alt=" company logo" />
          <div className="footer__logo__text">
            <div className="footer__links"> GST Suvidha Kendra </div>
            <div className="footer__underlinks"> An Authorised GSP</div>
            <div className="footer__phone">
              <span className="footer__email">services@gstinsuvidhakendra.com</span>
            </div>
          </div>
        </Link>
        <div className="footer__tag__line">Goods and Services Tax</div>
      </div>

      <div className="footer__bottom">
        <Link className="bottom__link" to="/gst-filing">
          <div className="bottom__services">GST registration
</div>
          <div className="bottom__services">GST cancelation</div>
          <div className="bottom__services">
            gst return filing</div>
        </Link>
        <Link className="bottom__link" to="/fssai">
          <div className="bottom__services">FSSAI registration</div>
        </Link>
        <Link className="bottom__link" to="/msme">
          <div className="bottom__services">MSME registration</div>
        </Link>
        <Link className="bottom__link" to="/E-way-bill">
          <div className="bottom__services">
            e way bill registration
</div>
        </Link>
        <Link className="bottom__link" to="/pan">
          <div className="bottom__services">pan registration
</div>
        </Link>
      </div>
    </nav>
  );
}

export default Footer;
