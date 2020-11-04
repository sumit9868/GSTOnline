import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Header.css'
import logo from '../Media/logo.png'

function Header() {
    return (
        <div className="header">
            <div className="header__first">
                <div className="header__logo">
                    <Link className="header__logo" to="/home">
                        < img src={logo} alt="logo" />
                        <span className="links"> LegalDocs </span>
                    </Link>
                </div>

                <div className="header__links">

                    <Link className="links" to="/getfranchise">
                        <span className="links">
                            Get Franchise
                        </span >
                    </Link>


                    <Link className="links" to="/BCA">
                        <span className="links">
                            Business Current Account
                        </span >
                    </Link>

                    <Link className="links" to="/FBS">
                        <span className="links">
                            Free Billing Software
                        </span >
                    </Link>

                    <Link className="links" to="/Login">
                        <span className="links">
                            Login/ Register
                        </span >
                    </Link>
                </div>
            </div>


        </div>
    )
}

export default Header
