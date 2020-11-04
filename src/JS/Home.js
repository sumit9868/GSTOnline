import React from 'react'
import '../CSS/Home.css'

import img1 from '../Media/fssai.jpg'
import img2 from '../Media/gst.jpg'
import img3 from '../Media/acounting.jpg'
import img4 from '../Media/company-incorporation.jpg'
import img5 from '../Media/msme.jpg'
import img6 from '../Media/information.png'
import img7 from '../Media/document.png'
import img8 from '../Media/home.png'



function Home() {
    return (
        <div className="home">

            <div className="home__ourservices">
                <div className="home__tagline">
                    <span> Our Services </span>
                </div>
                <div className="home__imgservices">

                    <div className="home__img">
                        <img src={img1} alt="fssai" />
                        <span className="home__tag">FSSAI</span>
                    </div>

                    <div className="home__img">
                        <img src={img2} alt="gst" />
                        <span className="home__tag">GST</span>
                    </div>

                    <div className="home__img">
                        <img src={img3} alt="PanCard" />
                        <span className="home__tag">Pan Card</span>
                    </div>

                    <div className="home__img">
                        <img src={img4} alt="DigitalSystem" />
                        <span className="home__tag">Digital System</span>
                    </div>

                    <div className="home__img">
                        <img src={img5} alt="msme" />
                        <span className="home__tag">MSME</span>
                    </div>

                </div>
            </div>
            <br />
            <br />

            <div className="home__banner">
               
                <div className="banner__material">
                    <span className="banner__text">INDIA'S MOST TRUSTED LEGAL DOCUMENTATION PORTAL</span>
                    <span className="banner__heading">How It Works</span>
                    <span className="banner__para">We provide a customized and reliable solution for your business on three fronts
                       "Starting a Business, Growth, Protection" with customer centric ML based platform</span>
                </div>

                <div className="banner__icons">

                <div className="icons1">
                        <img src={img6} alt="FreeConsultation" />
                        <span className="icons__name1">Free Consultation</span>
                        
                        <p>Our expert consultants will connect with you to understand your business need and we will provide you 
                            legal and valid solution for your business.</p>
                    </div>

                    <div className="icons2">
                        <img src={img7} alt="Documentation" />
                        <br/>
                        <span className="icons__name2">Documentation</span>
                        <p>
                        End to end online documentation, No need to visit any office!! You just sit back and relax. 
                        Our documentation team will complete the process in time.
                        </p>
                    </div>

                    <div className="icons3">
                        <img src={img8} alt="Delivery" />
                        <span className="icons__name3">Delivery</span>
                        <p>Get the document delivered at your Home!!!</p>
                    </div>



                </div>

            </div>



        </div>
    )
}

export default Home
