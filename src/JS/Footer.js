import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Footer.css";
import logo from "../Media/logo2.png";

function Footer() {
  return (
    <nav className="footer">
      <div className="footer__upper">
          <Link className="footer__logo" to="/home">
            <img src={logo} alt=" company logo" />
            <div className="footer__logo__text">
              <div className="links"> GST Suvidha Kendra </div>
              <div className="underlinks"> An Authorised GSP</div>
              <div className="phone">
                <span className="email">services@gstinsuvidhakendra.com</span>
              </div>
            </div>
          </Link>
          <div className="footer__tag__line">Goods and Services Tax</div>
      </div>

      <div className="footer__bottom">
        <Link className="bottom__link" to="/gst">
          <div>GST</div>
          <div className="bottom__services">gst registration
</div>
          <div className="bottom__services">gst cancelation</div>
          <div className="bottom__services">
            gst return filing</div>
        </Link>
        <Link className="bottom__link" to="/fssai">
          <div>FSSAI</div>
          <div className="bottom__services">fsaai registration</div>
        </Link>
        <Link className="bottom__link" to="/msme">
          <div>MSME / UDYAM</div>
          <div className="bottom__services">msme registration</div>
        </Link>
        <Link className="bottom__link" to="/e-bill">
          <div>E Way Bill</div>
          <div className="bottom__services">
            e way bill registration
</div>
        </Link>
        <Link className="bottom__link" to="/pan">
          <div>PAN Card</div>
          <div className="bottom__services">pan registration
</div>
        </Link>
      </div>
    </nav>
  );
}

export default Footer;
