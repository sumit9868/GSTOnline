import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Header.css'
import logo from '../Media/logo2.png'
import emblem from '../Media/emblem.png'

function Header() {
    return (
        <nav className="header">
                <div className="header__logo1">
                    <Link className="header__logo" to="/home">
                        < img src={logo} alt="logo" />
                        <div className="header__logo__text">
                        <span className="links"> GST Suvidha Kendra </span>
                        <span className="underlinks"> An Authorised GSP</span>
                        </div>
                    </Link>
                </div>

                <div className="header__middle">
                    
                    <img src={emblem} />
                    
                    <span>
                    Goods and Services Tax
                    </span>

                </div>

                <div className="header__links">

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

                    

                </div>
        </nav>
    )
}

export default Header
