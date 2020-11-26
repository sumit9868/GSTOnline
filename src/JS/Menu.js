import React from 'react'
import '../CSS/Menu.css'
import { Link } from 'react-router-dom'
import CallIcon from '@material-ui/icons/Call';

function Menu() {
    return (
        <nav className="menu">
            <div className="header__second">

                <Link className="second__links" to="/">
                    <span className="second__links">
                        Home
                    </span >
                </Link>


                <Link className="second__links" to="/gst-filing">
                    <span className="second__links">
                        GST
                    </span >
                </Link>

                <Link className="second__links" to="/fssai">
                    <span className="second__links">
                        FSSAI
                    </span >
                </Link>

                <Link className="second__links" to="/MSME">
                    <span className="second__links">
                        MSME / UDYAM
                    </span >
                </Link>



                <Link className="second__links" to="/E-way-Bill">
                    <span className="second__links">
                        E Way Bill
                    </span >
                </Link>

                <Link className="second__links" to="/PAN">
                    <span className="second__links">
                        PAN Card
                    </span >
                </Link>

                <div className="phone">

                    <span className="contact__icon">
                        <CallIcon className="contact__icon" />
                    </span>

                    <span className="second__links">
                        +91 9315744106
                    </span>

                </div>


            </div>
        </nav>
    )
}

export default Menu
