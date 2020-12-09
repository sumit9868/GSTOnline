import React from 'react'
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import InputField from './InputField';
import img1 from '../Media/fssaiCover4.webp'
import fssaiposter from '../Media/fssaiPoster.webp'
import img from '../Media/wallet.png'
import '../CSS/Fssai.css'
import { db } from "./firebase.js";

function Fssai() {

    const history = useHistory();
    const inputRefs = React.useRef([
        React.createRef(), React.createRef()
    ]);
    const [data, setData] = React.useState({});
    const handleChange = (name, value) => {
        setData(prev => ({ ...prev, [name]: value }))
    }
    const submitForm = (e) => {
        e.preventDefault();

        let isValid = true;

        for (let i = 0; i < inputRefs.current.length; i++) {
            const valid = inputRefs.current[i].current.validate()
            console.log(valid)
            if (!valid) {
                isValid = false
            }
        }


        if (!isValid) {
            return
        }


        db.collection("Fssai")
            .add({
                name: data.name,
                number: data.number,
                email: data.email,
                timestamp: new Date().getTime(),
            })
            .then(() => {
                alert("Info Saved");
                history.replace("/success");
            })
            .catch((error) => {
                alert(error.message);
            });
    }
 
    return (
        <div className="fssai">


            <div className="fssai__offers">

                <div className="fssai__offers__banner__left">

                    <img src={img1} alt="fssaibanner" />

                </div>

                <div className="fssai__left">

                    <div className="fssai__tagline">
                        <span> Today's Offer !!! </span>
                    </div>

                    <div className="fssai__para">
                        <span>Best FSSAI Registration Package</span>

                        <div className="fssai__price">
                            <span className="fssai__oldPrice">₹5000</span>
                            <span className="fssai__newPrice">₹1499</span>
                        </div>

                        <span>Offer valid for today only</span>
                    </div>

                    <div className="fssai__outterform">
                        <form onSubmit={submitForm} className="fssai__form">

                            <h2>Hurry up!!! Register Now  </h2>
                            <InputField
                                ref={inputRefs.current[0]}
                                name="name"
                                label="Name*:"
                                onChange={handleChange}
                                validation={"required"}
                            />

                            <InputField
                                ref={inputRefs.current[1]}
                                name="email"
                                label="Email*:"
                                validation="required"
                                onChange={handleChange}
                            />

                            <InputField
                                ref={inputRefs.current[1]}
                                name="number"
                                label="Phone Number*:"
                                validation="required|min:10|max:10"
                                onChange={handleChange}
                            />
                            <Button type="submit" className="fssai__button">Submit</Button>
                        </form>
                    </div>

                </div>
            </div>

            <div className="fssai__content">

                <div className="fssai__top6">

                    <span className=" fssai__top6__heading">Food License - FSSAI Registration</span>

                    <div className="fssai__top6__part1">

                        <div className="fssai__top6__fssai__box">

                            <div className="fssai__top6__img">

                                <img src={img} alt="img" />

                            </div>

                            <span className="fssai__top6__fssai__box__heading"> Who needs Fssai license?</span>

                            <div className="fssai__top6__para">
                                <p>
                                    Obtaining an FSSAI license is mandatory before starting any food business operation in India. All the traders,
                                    manufacturers, restaurants who are involved in food business must obtain a 14-digit license number which is printed on their food products.
                                </p>

                            </div>

                        </div>
                        <div className="fssai__top6__fssai__box">

                            <div className="fssai__top6__img">

                                <img src={img} alt="img" />

                            </div>

                            <span> Why is Fssai license required?</span>

                            <div className="fssai__top6__para">
                                <p>
                                    FSSAI registration is mandatory compliance that ensures the safety of food products supplied or manufactured by various establishments in India. All the traders, manufacturers,
                                    restaurants who are involved in the food business must obtain a 14-digit license number which is printed on their food products.
                    </p>

                            </div>

                        </div>
                        <div className="fssai__top6__fssai__box">

                            <div className="fssai__top6__img">

                                <img src={img} alt="img" />

                            </div>

                            <span> Documents required for FSSAI </span>

                            <div className="fssai__top6__para">
                                <p>
                                    Photo ID of the Food Business Operator.
                                    Identity Proof Documents such as Ration Card, Department Issued ID, PAN Card, Passport, Senior Citizen Card, Aadhar Card, Driving License, Voter ID Card.
                    </p>

                            </div>

                        </div>

                    </div>

                    <div className="fssai__top6__part2">

                        <div className="fssai__top6__fssai__box">

                            <div className="fssai__top6__img">

                                <img src={img} alt="img" />

                            </div>

                            <span> Time required to get Fssai license? </span>

                            <div className="fssai__top6__para">
                                <p>
                                    FSSAI registration is issued & approved automatically after 7 days if no observation raised by authority. <br />

                    FSSAI State & Central license is approved after 60 days if no action by authority.
                    </p>

                            </div>

                        </div>

                        <div className="fssai__top6__fssai__box">

                            <div className="fssai__top6__img">

                                <img src={img} alt="img" />

                            </div>

                            <span> Types of Fssai license are there? </span>

                            <div className="fssai__top6__para">
                                <p>
                                    Fssai licensing has 3 types depending upon Annual turnover: Fssai Central License –
                                    turnover over Rs. 20 crores. Fssai State License – turnover 12 lakhs-20 crores.
                    </p>

                            </div>

                        </div>


                        <div className="fssai__top6__fssai__box">

                            <div className="fssai__top6__img">

                                <img src={img} alt="img" />

                            </div>

                            <span> Is Fssai license mandatory? </span>

                            <div className="fssai__top6__para">
                                <p>
                                    Yes, to be able to sell food, you will require to have an FSSAI license. If it is a large scale business,
                                    then the FSSAI license is mandatory. If the food business is small scale, then just having an FSSAI registration will also work.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>


                <div className="fssai__FAQ">

                    <div className="fssai__info__left">

                        <div className="fssai__info__header">
                            FAQ
            </div>
                        <span className="fssai__info__left__link">
                            <a href="#1">
                                Importance of Food License
                </a>
                        </span>



                        <span className="fssai__info__left__link">
                            <a href="#2">
                                How do individuals planning on running food establishments apply for a license?

                </a>
                        </span>



                        <span className="fssai__info__left__link">
                            <a href="#3">
                                List of Documents required for applying FSSAI

                </a>
                        </span>



                        <span className="fssai__info__left__link">
                            <a href="#4">
                                What would the rest of the steps to make the license a possibility be?

                </a>
                        </span>

                        <span className="fssai__info__left__link">
                            <a href="#5">
                            Is Fssai Licence mandatory for Trader?
                </a>
                        </span>


                        <span className="fssai__info__left__link">
                            <a href="#6">
                            Is GST mandatory for Swiggy and Zomato?    

                </a>
                        </span>




                    </div>

                    <div className="fssai__info__page">

                        <div className="fssai__info__header">

                            Learn more about FSSAI

                        </div>

                        <div className="fssai__box">

                            <span id="1" className="fssai__question"> Importance of Food License <br /> </span>


                            <span className="fssai__answer">Food license is needed for legally running and operation of the food establishments. It is a mandatory requirement and not an option for running the business. This is made compulsory through the Delhi Police Act, if places are trying to function without the necessary paperwork; they could find themselves shut down permanently, their equipment confiscated and massive fines imposed. These licenses have to be applied for under the state of city headquarters. The registration authority concerning restaurant Licenses is
                            that the Commissioner of Police and would need to handle this in their respective state. </span>

                            <br /> <br />

                        </div>

                        <div className="fssai__box">

                            <span id="2" className="fssai__question">How do individuals planning on running food establishments apply for a license?  <br /> </span>


                            <span className="fssai__answer"> The best a part of the licenses at the instant is that there are applications that allow people to use for them online. However, there are a couple of trips that they need to handle.
                            The entire process is two-step and needs people to register their establishment to the website before they can apply for the licenses that they would need. At some points, they need to upload supporting documents that make the method easier and therefore the entire processing and verification process would happen within the backend.
                            </span>
                            <br /> <br />
                        </div>


                        <div className="fssai__box">

                            <span id="3" className="fssai__question">List of Documents required for applying FSSAI  <br /> </span>


                            <span className="fssai__answer">

                                <li className="fssai__info__text__points">

                                    Proof of identification such as PAN Card details, Passport, Voter ID, driver’s license and so on.

                                    </li>

                                    <li>
                                    Proof of residence such as Passport, Voter ID, Government bank account etc.
                                    </li>

                                    <li>
                                    Proof of ownership or lease documents if the land is being rented.
                                    </li>

                                    <li>
                                    Registration documents of the company or establishment to prove that it is valid.
                                     </li>

                                    <li>
                                    Self-attested no objection certificate (NOC) from the owner of the premise, if it is being rented out for an eatery.
                                    </li>

                                     <li>
                                    Trade License from NDMC/DCB/MCD/Airport Operator depending on the location of the establishment.
                                    </li>

                                    <li>
                                    Certification of Incorporation of the companies and LLP.
                                    </li>



                                    <li>
                                    Memorandum of Association of the eating house and LLP.
                                    </li>

                                    <li>
                                    Complete list of Director or Partner Names and the current Form 32.
                                    </li>

                                    <li>
                                    Copy of the FSSAI license/registration papers.
                                    </li>

                                    <li>
                                    Resolution of the board for conducting business.
                                    </li>


                                    <li>
                                    Updated GST registration certificate.
                                    </li>


                                    <li>
                                    Certificate of registration issued by the Labour Department, GNCT of the state.
                                        Photographs of the allocated space.
                                    </li>

                                    <li>
                                    Fire Safety Certification applicable for eating houses, seating a minimum of 50 people at a time.
                                    </li>


                                    <li>
                                        List of all employees working in the eating house including food handler details – their name, parentage, and address.
                                    </li>


                                    <li>
                                    Consent Letter from the DPCC (a provisional license provided based on the application submission proof).
                                    </li>


                                    <li>
                                    Approved site plan with Fire precautions certificates.
                                    </li>


                                    <li>
                                    Self-attested prescribed Affidavit for issuing a fresh license.
                                    </li>

                                    <li>
                                    Police Clearance Certificate (PCC).
                                    </li>

                                    <li>
                                    Permissions from the Indian Performing Right Society (IPRS), for having amusement activities like DJ, Live Band, and Discotheque.
                                    </li>

                                    <li>
                                    Proof of CCTV or surveillance systems installed along with at least 30 days of video recording having the details of installation or invoice of CCTV, etc.
                                    </li>

                                    <li>
                                    Photographs of the allocated space.
                                    </li>

                                    These are all the main documents that would be needed. If a number of the documents are submitted under one category, they can't be used again.
                                    For instance, if a passport has been used as an
                                    dentification proof, it can't be used for an address proof also and would need to be substituted with something else.

                                </span>

                            <br /> <br />

                        </div>




                        <div className="fssai__box">

                            <span id="4" className="fssai__question">
                                What would the rest of the steps to make the license a possibility be?
                            <br /> </span>


                            <span className="fssai__answer"> The process generally takes 30 to 90 days. After submitting all the knowledge,
                            this has got to be actively followed upon. The validity of an restaurant license does vary supported multiple factors
                            just like the sort of establishment being run, as an example , food trucks would have shorter expiration dates for their
                            licenses as compared to restaurants. Usually, however, the default for many venues is three years.
                            While approaching the expiration date of the license, the establishment would wish someone to figure on the method of renewing it. Unlike most other
                            Government documents, the restaurant license doesn't have a renewal form. It would have to be done like the process of applying for the license from
                            the get-go. This does take time so it would be better to begin a little better the actual expiration of the license.
                            </span>

                            <br /> <br />

                        </div>

                        <div className="fssai__box">

                            <span id="5" className="fssai__question">
                            Is Fssai Licence mandatory for Trader?
                            <br /> </span>


                            <span className="fssai__answer"> Obtaining an FSSAI license is mandatory before starting any food business operation in India. All the traders, manufacturers, restaurants who are involved
                            in food business must obtain a 14-digit license number which is printed on their food products.</span>

                            <br /> <br />

                        </div>

                        <div className="fssai__box">

                            <span id="6" className="fssai__question">
                            Is GST mandatory for Swiggy and Zomato?    
                            <br /> </span>


                            <span className="fssai__answer">
                            Swiggy, Zomato and Foodpanda provide online delivery services to restaurants at a commission of around 20 per cent, which is levied an 18 per cent GST. ... Food delivery services are taxed at 18 per cent, which the restaurants have to pay. 
                            But, they cannot now avail of any tax credit against input services.
                            </span>

                            <br /> <br />

                        </div>

                        <span className="fssai__info_copywrtie">@Content used from Govt. website</span>
                    </div>



                    <div className="fssai__info__right">
                        <img src={fssaiposter} alt="fssaiposter" />

                    </div>



                </div>


            </div>

        </div>
    )
}

export default Fssai
