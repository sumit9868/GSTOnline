import React from 'react'
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import InputField from './InputField';
import img1 from '../Media/msmeCover.jpg'
import msmeposter from '../Media/MSMEPoster.png'
import img from '../Media/wallet.png'
import '../CSS/Msme.css'
import { db } from "./firebase.js";

function Msme() {

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
                history.replace("/");
            })
            .catch((error) => {
                alert(error.message);
            });
    }

    return (
        <div className="msme">

            <div className="msme__offers">

                <div className="msme__offers__banner__left">

                    <img src={img1} alt="msmebanner" />

                </div>

                <div className="msme__left">

                    <div className="msme__tagline">
                        <span> Today's Offer !!! </span>
                    </div>

                    <div className="msme__para">
                        <span>Best MSME Registration Package</span>

                        <div className="msme__price">
                            <span className="msme__oldPrice">₹5000</span>
                            <span className="msme__newPrice">₹1499</span>
                        </div>

                        <span>Offer valid for today only</span>
                    </div>

                    <div className="msme__outterform">
                        <form onSubmit={submitForm} className="msme__form">

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
                            <Button type="submit" className="msme__button">Submit</Button>
                        </form>
                    </div>

                </div>
            </div>

            <div className="msme__content">

                
            <div className="msme__top6">

<span className=" msme__top6__heading">MSME Registration</span>

<div className="msme__top6__part1">

    <div className="msme__top6__msme__box">

        <div className="msme__top6__img">

            <img src={img} alt="img" />

        </div>

        <span> What is the meaning of MSME? </span>

        <div className="msme__top6__para">
            <p>
            The Micro Small & Medium Enterprises (MSMEs) are defined in India under the
            MSMED Act 2006 on the basis of capital investment made in plant and machinery, excluding investments in land and building.
            </p>

        </div>

    </div>
    <div className="msme__top6__msme__box">

        <div className="msme__top6__img">

            <img src={img} alt="img" />

        </div>

        <span>What is MSME limit?</span>

        <div className="msme__top6__para">
            <p>
            For an MSME to be defined as a Small unit, its investment limit has been raised from Rs 5 crore to Rs 10 crore with a turnover of less than 50 crore. 
            This applies to all MSMEs including the Service enterprises which earlier came under investment of up to Rs 2 crore. Medium units.
            </p>

        </div>

    </div>
    <div className="msme__top6__msme__box">

        <div className="msme__top6__img">

            <img src={img} alt="img" />

        </div>

        <span> What are the benefits of MSME?</span>

        <div className="msme__top6__para">
            <p>

            Benefits of MSME Registration
            Bank Loans (Collateral Free) | 
            Subsidy on Patent Registration | 
            Overdraft Interest Rate Exemption | 
            Industrial Promotion Subsidy Eligibility | 
            Protection against Payments (Delayed Payments) |
            Fewer Electricity Bills | 
            ISO Certification Charges Reimbursement 
            
            </p>

        </div>

    </div>

</div>

<div className="msme__top6__part2">

    <div className="msme__top6__msme__box">

        <div className="msme__top6__img">

            <img src={img} alt="img" />

        </div>

        <span> Why do we need MSME registration? </span>

        <div className="msme__top6__para">
            <p>
            Registration of an MSME is not legally mandatory but registering it will help you reap several benefits from the government including credit at low interest rate, 
            incentives on products for exports, excise exemption, statutory aid such as reservations, and the interest on the payments delayed due to unavoidable
            </p>

        </div>

    </div>

    <div className="msme__top6__msme__box">

        <div className="msme__top6__img">

            <img src={img} alt="img" />

        </div>

        <span> Where can I apply for MSME loan? </span>

        <div className="msme__top6__para">
            <p>
            The loans under MUDRA scheme can be availed only through banks and lending institutions which include:
            State operated cooperative banks | 
            Public Sector Banks | 
            Rural banks from regional sector | 
            Financial companies other than banks | 
            Private Sector Banks | 
            Institutions offering micro finance | 
            </p>

        </div>

    </div>


    <div className="msme__top6__msme__box">

        <div className="msme__top6__img">

            <img src={img} alt="img" />

        </div>

        <span> Is MSME and Udyog Aadhaar same? </span>

        <div className="msme__top6__para">
            <p>
            MSME registration and Udyog Aadhar Registration both are similar but different. Udyog Aadhar is just an easy way of acquiring MSME registration. 
            Udyog Aadhar Registration is an online method by which an MSME can get the 12-digit Udyog Aadhar Number. And, later go for MSME registration
            </p>

        </div>

    </div>

</div>

</div>


                <div className="msme__FAQ">

                    <div className="msme__info__left">

                        <div className="msme__info__header">
                            FAQ
            </div>
                        <span className="msme__info__left__link">
                            <a href="#1">
                                Importance of Food License
                </a>
                        </span>



                        <span className="msme__info__left__link">
                            <a href="#2">
                                How do individuals planning on running food establishments apply for a license?

                </a>
                        </span>



                        <span className="msme__info__left__link">
                            <a href="#3">
                                List of Documents required for applying FSSAI

                </a>
                        </span>



                        <span className="msme__info__left__link">
                            <a href="#4">
                                What would the rest of the steps to make the license a possibility be?

                </a>
                        </span>

                        <span className="msme__info__left__link">
                            <a href="#5">
                                Is Fssai Licence mandatory for Trader?
                </a>
                        </span>


                        <span className="msme__info__left__link">
                            <a href="#6">
                                Is GST mandatory for Swiggy and Zomato?

                </a>
                        </span>




                    </div>

                    <div className="msme__info__page">

                        <div className="msme__info__header">

                            Learn more about FSSAI

                        </div>

                        <div className="msme__box">

                            <span id="1" className="msme__question"> Importance of Food License <br /> </span>


                            <span className="msme__answer">Food license is needed for legally running and operation of the food establishments. It is a mandatory requirement and not an option for running the business. This is made compulsory through the Delhi Police Act, if places are trying to function without the necessary paperwork; they could find themselves shut down permanently, their equipment confiscated and massive fines imposed. These licenses have to be applied for under the state of city headquarters. The registration authority concerning restaurant Licenses is
                            that the Commissioner of Police and would need to handle this in their respective state. </span>

                            <br /> <br />

                        </div>

                        <div className="msme__box">

                            <span id="2" className="msme__question">How do individuals planning on running food establishments apply for a license?  <br /> </span>


                            <span className="msme__answer"> The best a part of the licenses at the instant is that there are applications that allow people to use for them online. However, there are a couple of trips that they need to handle.
                            The entire process is two-step and needs people to register their establishment to the website before they can apply for the licenses that they would need. At some points, they need to upload supporting documents that make the method easier and therefore the entire processing and verification process would happen within the backend.
                            </span>
                            <br /> <br />
                        </div>


                        <div className="msme__box">

                            <span id="3" className="msme__question">List of Documents required for applying FSSAI  <br /> </span>


                            <span className="msme__answer">

                                <li className="msme__info__text__points">

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




                        <div className="msme__box">

                            <span id="4" className="msme__question">
                                What would the rest of the steps to make the license a possibility be?
                            <br /> </span>


                            <span className="msme__answer"> The process generally takes 30 to 90 days. After submitting all the knowledge,
                            this has got to be actively followed upon. The validity of an restaurant license does vary supported multiple factors
                            just like the sort of establishment being run, as an example , food trucks would have shorter expiration dates for their
                            licenses as compared to restaurants. Usually, however, the default for many venues is three years.
                            While approaching the expiration date of the license, the establishment would wish someone to figure on the method of renewing it. Unlike most other
                            Government documents, the restaurant license doesn't have a renewal form. It would have to be done like the process of applying for the license from
                            the get-go. This does take time so it would be better to begin a little better the actual expiration of the license.
                            </span>

                            <br /> <br />

                        </div>

                        <div className="msme__box">

                            <span id="5" className="msme__question">
                                Is Fssai Licence mandatory for Trader?
                            <br /> </span>


                            <span className="msme__answer"> Obtaining an FSSAI license is mandatory before starting any food business operation in India. All the traders, manufacturers, restaurants who are involved
                            in food business must obtain a 14-digit license number which is printed on their food products.</span>

                            <br /> <br />

                        </div>

                        <div className="msme__box">

                            <span id="6" className="msme__question">
                                Is GST mandatory for Swiggy and Zomato?
                            <br /> </span>


                            <span className="msme__answer">
                                Swiggy, Zomato and Foodpanda provide online delivery services to restaurants at a commission of around 20 per cent, which is levied an 18 per cent GST. ... Food delivery services are taxed at 18 per cent, which the restaurants have to pay.
                                But, they cannot now avail of any tax credit against input services.
                            </span>

                            <br /> <br />

                        </div>

                        <span className="msme__info_copywrtie">@Content used from Govt. website</span>
                    </div>



                    <div className="msme__info__right">
                        <img src={msmeposter} alt="msmeposter" />

                    </div>



                </div>


            </div>

        </div>
    )
}

export default Msme


