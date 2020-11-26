import React from 'react'
import '../CSS/Contactus.css'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

function Contactus() {
    return (
        <div className="contactus">

            <div className="contactus__address">
                <span className="address__icon" >
                    <LocationOnIcon className="address__icon" />
                </span>
                <span className="address">
                   Anoop Nagar Uttam Nagar, New Delhi 
                </span>
            </div>

            <div className="contactus__email">
                <span className="email__icon">
                <EmailIcon className="email__icon" />
                </span>
                <span className="email">
                services@gstinsuvidhakendra.com
                </span>

            </div>

            <div className="contactus__contact">
                <span className="contact__icon">
                    <CallIcon className="contact__icon" />
                </span>
                <span className="contact">
                +91 9315744106 / +91 1146592148 (Live 8AM - 8PM)
                </span>
            </div>

            <div className="contactus__whatsapp">
                <span className="whatsapp__icon">
                    <WhatsAppIcon  className="whatsapp__icon" />
                </span>
                <span className="whatsapp">
                9315744106
                </span>
            </div>



        </div>
    )
}

export default Contactus
