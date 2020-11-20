import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Footer.css";
import logo from "../Media/logo2.png";
import emblem from "../Media/emblem.png";

function Footer() {
  return (
    <nav className="footer">
      <div className="footer__upper">
        <div className="footer__logo1">
          <Link className="footer__logo" to="/home">
            <img src={logo} alt=" company logo" />
            <div className="footer__logo__text">
              <span className="links"> GST Suvidha Kendra </span>
              <span className="underlinks"> An Authorised GSP</span>

              <div className="phone">
                <span className="email">services@gstinsuvidhakendra.com</span>
              </div>
            </div>
          </Link>
        </div>

        <div className="footer__middle">
          <img src={emblem} alt="emblem" />

          <span>Goods and Services Tax</span>
        </div>
      </div>

      {/* <div className="footer__links">

                <Link className="links" to="/getfranchise">
                    <span className="links">
                        Become a Partner
                        </span >
                </Link>

                <Link className="links" to="/BCA">
                    <span className="links">
                        FREE Billing Sofware
                        </span >
                </Link>
            </div> */}

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
