import React from 'react'
import '../CSS/Home.css'
import { Link } from 'react-router-dom'
import img1 from '../Media/fssai.png'
import img2 from '../Media/gst.png'
import img3 from '../Media/acounting.jpg'
import img4 from '../Media/company-incorporation.jpg'
import img5 from '../Media/msme.png'
import img9 from '../Media/pan.jpg'
import img10 from '../Media/ewaybill.jpg'
import img11 from '../Media/udyam.jpg'
import img12 from '../Media/digitalsign.jpg'
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

                    <div className="home__imgservices__part1">

                        <div className="home__img">
                            <Link className="home__img" to='/gst-filing' >
                                <img src={img2} alt="gst" />
                                <span className="home__tag">GST</span>
                            </Link>
                        </div>

                        <div className="home__img">
                            <Link className="home__img" to='/gst-filing' >
                                <img src={img1} alt="fssai" />
                                <span className="home__tag">FSSAI</span>
                            </Link>
                        </div>

                        <div className="home__img">
                            <Link className="home__img" to='/gst-filing' >
                                <img src={img5} alt="msme" />
                                <span className="home__tag">MSME</span>
                            </Link>
                        </div>

                        <div className="home__img">
                            <Link className="home__img" to='/gst-filing' >
                                <img src={img11} alt="PanCard" />
                                <span className="home__tag">UDYAM</span>
                            </Link>
                        </div>

                        <div className="home__img">
                            <Link className="home__img" to='/gst-filing' >
                                <img src={img10} alt="DigitalSystem" />
                                <span className="home__tag">E-Way Bill</span>
                            </Link>
                        </div>
                    </div>

                    <div className="home__imgservices__part2">

                        <div className="home__img">
                            <Link className="home__img" to='/gst-filing' >
                                <img src={img9} alt="gst" />
                                <span className="home__tag">PAN Card</span>
                            </Link>
                        </div>

                        <div className="home__img">
                            <Link className="home__img" to='/gst-filing' >
                                <img src={img12} alt="DigitalSystem" />
                                <span className="home__tag">Digital Signature</span>
                            </Link>
                        </div>

                        <div className="home__img">
                            <Link className="home__img" to='/gst-filing' >
                                <img src={img5} alt="msme" />
                                <span className="home__tag">Invoice generation</span>
                            </Link>
                        </div>

                    </div>

                </div>
            </div>
            <br />
            <br />

            <div className="home__banner">

                <div className="banner__material">
                    <span className="banner__text">One Stop Solution </span>
                    <span className="banner__heading">Expertised in GST Registration & Filing </span>
                    <span className="banner__para">We provide a reliable trusted long term association & services for your business</span>
                </div>

                {/* <div className="banner__icons">

                        <div className="icons1">
                            <img src={img6} alt="FreeConsultation" />
                            <span className="icons__name1">Free Consultation</span>

                            <p>Our expert consultants will connect with you to understand your business need and we will provide you
                            legal and valid solution for your business.</p>
                        </div>

                        <div className="icons2">
                            <img src={img7} alt="Documentation" />
                            <br />
                            <span className="icons__name2">Documentation</span>
                            <p>
                                End to end online documentation, No need to visit any office!! You just sit back and relax.
                                Our documentation team will complete the process In time.
                        </p>
                        </div>

                        <div className="icons3">
                            <img src={img8} alt="Delivery" />
                            <span className="icons__name3">Delivery</span>
                            <p>Get the document delivered at your Home!!!</p>
                        </div>
                    </div> */}
            </div>

            <div className="home__services">
                <p>
                    <br/>
                    GST Registration In Madhya Pradesh | GST Registration In Jammu | GST Registration In Dehradun | GST Registration In Rishikesh |
                    GST Registration In Mizoram | GST Registration In Nagaland | GST Registration In Odisha | GST Registration In Punjab |
                    GST Registration In Assam | GST Registration In Bihar |	 GST Registration In Gujarat |	 GST Registration In Arunachal Pradesh |
                    GST Registration In Rajasthan | GST Registration In Sikkim | GST Registration In Tamilnadu |	GST Registration In Tripura |
                    GST Registration In Haryana | GST Registration In Delhi |	GST Registration In Karnataka |	GST Registration In Kerala |
                    GST Registration In West Bengal |	GST Registration In Chhattisgarh |	GST Registration In Uttarakhand |	GST Registration In Jharkhand |
                    GST Registration In Haldwani |	GST Registration In Maharashtra | GST Registration In Manipur |	GST Registration In Haridwar |
                    GST Registration In Telangana |	GST Registration In Uttar Pradesh | GST Registration In Himachal Pradesh | GST Registration In Mumbai  | 
                    GST Registration In Kolkata | GST Registration In Chennai | GST Registration In Ahmedabad | GST Registration In  Bangalore | GST Registration In  Hyderabad | GST Registration In  Jamshedpur |
                    GST Registration In  Nagpur | GST Registration In  Patna | GST Registration In  Pune | GST Registration In  Surat | GST Registration In  Vijayawada | 
                    GST Registration In  Visakhapatnam | GST Registration In Ranchi | GST Registration In Andra Pradesh | GST Registration In Bhopal | GST Registration In Srinagar | GST Registration In Aizawl
                    | GST Registration In GhandiNagar | GST Registration In Guwahati | GST Registration In Thiruvananthapuram | GST Registration In Jaipur | GST Registration In Gangtok | GST Registration In Agartala
                    | GST Registration In Chandigarh | GST Registration In Raipur  | GST Registration In Imphal | GST Registration In YamunaNagar | GST Registration In Lucknow | GST Registration In Kanpur | GST Registration In Indore
                    | GST Registration In Thane | GST Registration In Pimpri-Chinchwad | GST Registration In Ghaziabad | GST Registration In Ludhiana | GST Registration In Agar | GST Registration In Nashik | GST Registration In Faridhabad | GST Registration In Meerut
                    | GST Registration In Varanasi | GST Registration In Aurangabad | GST Registration In Amristsar | GST Registration In Allahabad | GST Registration In Gwalior | GST Registration In Jodhpur | GST Registration In Mysore  | GST Registration In Gurgaon | GST Registration In Janlandhar
                    | GST Registration In Noida | GST Registration In Katak | GST Registration In Kochi 

         

                </p>
            </div>

            <div className="home__services">
                <p>
                    Food license Madhya Pradesh | Food license Jammu | Food license Dehradun | Food license Rishikesh |
                    Food license Mizoram | Food license Nagaland |	 Food license Odisha | Food license Punjab |
                    Food license Assam | Food license Bihar |	 Food license Gujarat |	 Food license Arunachal Pradesh |
                    Food license Rajasthan | Food license Sikkim | Food license Tamilnadu |	Food license Tripura |
                    Food license Haryana | Food license Delhi |	Food license Karnataka |	Food license Kerala |
                    Food license West Bengal |	Food license Chhattisgarh |	Food license Uttarakhand |	Food license Jharkhand |
                    Food license Haldwani |	Food license Maharashtra | Food license Manipur |	Food license Haridwar |
                    Food license Telangana |	Food license Uttar Pradesh | Food license Himachal Pradesh | Food license Mumbai  | 
                    Food license Kolkata | Food license Chennai | Food license Ahmedabad | Food license  Bangalore | Food license  Hyderabad | Food license  Jamshedpur |
                    Food license  Nagpur | Food license  Patna | Food license  Pune | Food license  Surat | Food license  Vijayawada | 
                    Food license  Visakhapatnam | Food license Ranchi | Food license Andra Pradesh | Food license Bhopal | Food license Srinagar | Food license Aizawl
                    | Food license GhandiNagar | Food license Guwahati | Food license Thiruvananthapuram | Food license Jaipur | Food license Gangtok | Food license Agartala
                    | Food license Chandigarh | Food license Raipur  | Food license Imphal | Food license YamunaNagar | Food license Lucknow | Food license Kanpur | Food license Indore
                    | Food license Thane | Food license Pimpri-Chinchwad | Food license Ghaziabad | Food license Ludhiana | Food license Agar | Food license Nashik | Food license Faridhabad | Food license Meerut
                    | Food license Varanasi | Food license Aurangabad | Food license Amristsar | Food license Allahabad | Food license Gwalior | Food license Jodhpur | Food license Mysore  | Food license Gurgaon | Food license Janlandhar
                    | Food license Noida | Food license Katak | Food license In Kochi
                </p>
            </div>


            <div className="home__services">
                <p>
                    MSME Madhya Pradesh | MSME Jammu | MSME Dehradun | MSME Rishikesh |
                    MSME Mizoram | MSME Nagaland |	 MSME Odisha |	 MSME Punjab |
                    MSME Assam | MSME Bihar |	 MSME Gujarat |	 MSME Arunachal Pradesh |
                    MSME Rajasthan | MSME Sikkim | MSME Tamilnadu |	MSME Tripura |
                    MSME Haryana | MSME Delhi |	MSME Karnataka |	MSME Kerala |
                    MSME West Bengal |	MSME Chhattisgarh |	MSME Uttarakhand |	MSME Jharkhand |
                    MSME Haldwani |	MSME Maharashtra | MSME Manipur |	MSME Haridwar |
                    MSME Telangana |	MSME Uttar Pradesh | MSME Himachal Pradesh | MSME Mumbai  | 
                    MSME Kolkata | MSME Chennai | MSME Ahmedabad | MSME  Bangalore | MSME  Hyderabad | MSME  Jamshedpur |
                    MSME  Nagpur | MSME  Patna | MSME  Pune | MSME  Surat | MSME  Vijayawada | 
                    MSME  Visakhapatnam | MSME Ranchi | MSME Andra Pradesh | MSME Bhopal | MSME Srinagar | MSME Aizawl
                    | MSME GhandiNagar | MSME Guwahati | MSME Thiruvananthapuram | MSME Jaipur | MSME Gangtok | MSME Agartala
                    | MSME Chandigarh | MSME Raipur  | MSME Imphal | MSME YamunaNagar | MSME Lucknow | MSME Kanpur | MSME Indore
                    | MSME Thane | MSME Pimpri-Chinchwad | MSME Ghaziabad | MSME Ludhiana | MSME Agar | MSME Nashik | MSME Faridhabad | MSME Meerut
                    | MSME Varanasi | MSME Aurangabad | MSME Amristsar | MSME Allahabad | MSME Gwalior | MSME Jodhpur | MSME Mysore  | MSME Gurgaon | MSME Janlandhar
                    | MSME Noida | MSME Katak | MSME Kochi
                </p>
            </div>

            <div className="home__services">
                <p>

                    PAN Card In Madhya Pradesh | PAN Card In Jammu | PAN Card In Dehradun | PAN Card In Rishikesh |
                    PAN Card In Mizoram | PAN Card In Nagaland |	 PAN Card In Odisha |	 PAN Card In Punjab |
                    PAN Card In Assam | PAN Card In Bihar |	 PAN Card In Gujarat |	 PAN Card In Arunachal Pradesh |
                    PAN Card In Rajasthan | PAN Card In Sikkim | PAN Card In Tamilnadu |	PAN Card In Tripura |
                    PAN Card In Haryana | PAN Card In Delhi |	PAN Card In Karnataka |	PAN Card In Kerala |
                    PAN Card In West Bengal |	PAN Card In Chhattisgarh |	PAN Card In Uttarakhand |	PAN Card In Jharkhand |
                    PAN Card In Haldwani |	PAN Card In Maharashtra | PAN Card In Manipur |	PAN Card In Haridwar |
                    PAN Card In Telangana |	PAN Card In Uttar Pradesh | PAN Card In Himachal Pradesh | PAN Card In Mumbai  | 
                    PAN Card In Kolkata | PAN Card In Chennai | PAN Card In Ahmedabad | PAN Card In  Bangalore | PAN Card In  Hyderabad | PAN Card In  Jamshedpur |
                    PAN Card In  Nagpur | PAN Card In  Patna | PAN Card In  Pune | PAN Card In  Surat | PAN Card In  Vijayawada | 
                    PAN Card In  Visakhapatnam | PAN Card In Ranchi | PAN Card In Andra Pradesh | PAN Card In Bhopal | PAN Card In Srinagar | PAN Card In Aizawl
                    | PAN Card In GhandiNagar | PAN Card In Guwahati | PAN Card In Thiruvananthapuram | PAN Card In Jaipur | PAN Card In Gangtok | PAN Card In Agartala
                    | PAN Card In Chandigarh | PAN Card In Raipur  | PAN Card In Imphal | PAN Card In YamunaNagar | PAN Card In Lucknow | PAN Card In Kanpur | PAN Card In Indore
                    | PAN Card In Thane | PAN Card In Pimpri-Chinchwad | PAN Card In Ghaziabad | PAN Card In Ludhiana | PAN Card In Agar | PAN Card In Nashik | PAN Card In Faridhabad | PAN Card In Meerut
                    | PAN Card In Varanasi | PAN Card In Aurangabad | PAN Card In Amristsar | PAN Card In Allahabad | PAN Card In Gwalior | PAN Card In Jodhpur | PAN Card In Mysore  | PAN Card In Gurgaon | PAN Card In Janlandhar
                    | PAN Card In Noida | PAN Card In Katak | PAN Card In Kochi
                </p>
            </div>




        </div>
    )
}

export default Home
