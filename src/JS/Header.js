import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Header.css'
import logo from '../Media/logo2.png'


function Header() {
    return (
        <nav className="header">
            <div className="header__logo1">
                <Link className="header__logo" to="/">
                    < img src={logo} alt=" company logo" />
                    <div className="header__logo__text">
                       
                        <span className="links"> GST Suvidha Kendra </span>
                        <span className="underlinks"> An Authorised GSP</span>
                        

                        <div className="phone">
                            <span className="email">services@gstinsuvidhakendra.com</span>
                        </div>

                    </div>
                </Link>
            </div>

            <div className="header__middle">

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
                        FREE Billing Software
                        </span >
                </Link>



            </div>
        </nav>
    )
}

export default Header
