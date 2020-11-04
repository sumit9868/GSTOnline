import React from 'react'
import '../CSS/Menu.css'
import { Link } from 'react-router-dom'

function Menu() {
    return (
        <div className="menu">
            <div className="header__second">
                <Link className="second__links" to="/fssai">
                    <span className="second__links">
                        FSSAI
                    </span >
                </Link>

                <Link className="second__links" to="/Licence-Registrations">
                    <span className="second__links">
                        Licence/Registrations
                    </span >
                </Link>

                <Link className="second__links" to="/gst-filing">
                    <span className="second__links">
                        GST & Taxes
                    </span >
                </Link>

                <Link className="second__links" to="/FreeBusinessTools">
                    <span className="second__links">
                        Free Business Tools
                    </span >
                </Link>


                <Link className="second__links" to="/LegalDrafts">
                    <span className="second__links">
                        Legal Drafts
                    </span >
                </Link>

                <Link className="second__links" to="/Personal-Property">
                    <span className="second__links">
                        Personal/Property
                    </span >
                </Link>

                <Link className="second__links" to="/How-to">
                    <span className="second__links">
                        How to
                    </span >
                </Link>


            </div>
        </div>
    )
}

export default Menu
