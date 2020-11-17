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
                        MSME
                    </span >
                </Link>


                <Link className="second__links" to="/UDYAM">
                    <span className="second__links">
                        UDYAM
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

                {/* <Link className="second__links" to="/Digital-Signature">
                    <span className="second__links">
                        Digital Signature
                    </span >
                </Link> */}

                {/* <Link className="second__links" to="/Invoice-Generation">
                    <span className="second__links">
                        Invoice generation
                    </span >
                </Link> */}
                <div className="phone">
                <CallIcon className="call" />
                <span className="second__links">9315744106</span>
                </div>

            </div>
        </nav>
    )
}

export default Menu
