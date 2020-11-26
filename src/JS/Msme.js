import React from 'react'
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import InputField from './InputField';
import img1 from '../Media/msmeCover.webp'
import msmeposter from '../Media/MSMEPoster.webp'
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


        db.collection("MSME")
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
            Institutions offering micro finance 
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
                            Q1. What are Micro, Small and Medium Enterprise?
                            </a>
                        </span>



                        <span className="msme__info__left__link">
                            <a href="#2">
                            Q2 Benefits of MSME Registration
                </a>
                        </span>



                        <span className="msme__info__left__link">
                            <a href="#3">
                            Q3.Who is eligible for MSME registration
                </a>
                        </span>



                        <span className="msme__info__left__link">
                            <a href="#4">
                            Q4. Documents & Details required for MSME Registration
                </a>
                        </span>

                        <span className="msme__info__left__link">
                            <a href="#5">
                            Q5. Information Required for MSME Registration
                            </a>
                        </span>


                        <span className="msme__info__left__link">
                            <a href="#6">
                            Q6. Is MSME updated to Udyam Registration?
                             </a>
                        </span>

                        <span className="msme__info__left__link">
                            <a href="#7">
                            Q7. Is aadhar card compulsory?
                            </a>
                        </span>


                        <span className="msme__info__left__link">
                            <a href="#8">
                            Q8. Can existing and new businesses both apply?
                            </a>
                        </span>


                        <span className="msme__info__left__link">
                            <a href="#9">
                            Q9. What is the validity of the certificate?
                            </a>
                        </span>

                        <span className="msme__info__left__link">
                            <a href="#10">
                            Q10. Can trading companies register under MSME?
                            </a>
                        </span>

                        <span className="msme__info__left__link">
                            <a href="#11">
                            Q11. Do i want multiple registrations for manufacturing plants in several cities?
                            </a>
                        </span>




                    </div>

                    <div className="msme__info__page">

                        <div className="msme__info__header">

                            Learn more about MSME

                        </div>

                        <div className="msme__box">

                            <span id="1" className="msme__question"> Q1. What are Micro, Small and Medium Enterprise? <br /> </span>


                            <span className="msme__answer">The existing MSME classification was supported the standards of investment in plant and machinery or equipment.
                             So, to avail the MSME benefits, the MSMEs need to limit their investment to a lower limit, as mentioned below: <br/>
                              <br/>

                             <h2> Existing MSME Classification:</h2>

                                <table>
                                <tr>
                                    <th>Sector</th>
                                    <th>Criteria</th>
                                    <th>Micro</th>
                                    <th>Small</th>
                                    <th>Medium</th>
                                </tr>
                                <tr>    
                                    <td>Manufacturing</td>
                                    <td>Investment </td>
                                    <td> &lt;  Rs.25 lakh </td>
                                    <td> &lt; Rs.5 crore </td>
                                    <td> &lt; Rs.10 crore </td>
                                </tr>
                                <tr>
                                    <td>Services</td>
                                    <td>Investment </td>
                                    <td> &lt; Rs.10 lakh </td>
                                    <td> &lt; Rs.2 crore </td>
                                    <td> &lt; Rs.5 crore </td>
                                </tr>
                                </table>

                                <br/>

                                These lower limits are killing the urge to grow as they're unable to scale their businesses further. Also, there has been a long-pending demand for the revision of MSME classification in order that they will further expand their operations while continuing to avail the MSME benefits. Now, under the Aatmanirbhar Bharat Abhiyan (ABA), the govt revised the MSME classification* by inserting composite criteria of both investment and annual turnover. Also, the excellence between the manufacturing and therefore the services sectors under the MSME definition has been removed. This removal will create parity between the sectors. The following is that the revised MSME classification*,
                                where the investment and annual turnover, both are to be considered for deciding an MSME.
                                <br/>
                                Criteria Micro Small Medium*
                                <br/>

                                <h2> Revised MSME Classification:</h2>

                                <table>
                                <tr>
                                    <th>Criteria</th>
                                    <th>Micro</th>
                                    <th>Small</th>
                                    <th>Medium*</th>
                                </tr>
                                <tr>
                                    <td>Investment & Annual Turnover</td>
                                    <td> &lt; Rs.1 crore  & &lt; Rs.5 crore</td>
                                    <td> &lt; Rs.10 crore & &lt; Rs.50 crore </td>
                                    <td> &lt; Rs.50 crore & &lt; Rs.250 crore </td>
                                </tr>
                          
                                </table>
                             
                             
                             
                             </span>

                            <br /> <br />

                        </div>

                        <div className="msme__box">

                            <span id="2" className="msme__question">Q2 Benefits of MSME Registration <br /> </span>


                            <span className="msme__answer">

                                <li className="msme__info__text__points">
                                    
                                    ISO Certification Charges Reimbursement.

                                    <li>
                                    Bank Loans (Collateral Free)
                                    </li>

                                    <li>
                                    Subsidy on Patent Registration
                                    </li>

                                    <li>
                                    Overdraft Interest Rate Exemption
                                    </li>

                                    <li>
                                    Industrial Promotion Subsidy Eligibility
                                    </li>

                                    <li>
                                    Protection against Payments (Delayed Payments)
                                    </li>

                                    <li>
                                    Fewer Electricity Bills 
                                    </li>

                                
                                </li>
                                </span>

                            <br /> <br />
                        </div>


                        <div className="msme__box">

                            <span id="3" className="msme__question">Q3.Who is eligible for MSME registration<br /> </span>


                            <span className="msme__answer">

                                <li className="msme__info__text__points">
                                    
                                Proprietorships
                                    <li>
                                    Partnership Firm 
                                    </li>

                                    <li>
                                    Private Limited Company
                                    </li>

                                    <li>
                                    Public Limited Company
                                    </li>

                                    <li>
                                    Limited Liability Partnership 
                                    </li>

                                    <li>
                                    Hindu Undivided Family
                                    </li>

                                    <li>
                                    Self Help Groups
                                    </li>

                                    <li>
                                    Society / Co-Operative Society
                                    </li>

                                </li>
                            </span>
                           

                            <br /> <br />

                        </div>




                        <div className="msme__box">

                            <span id="4" className="msme__question">
                            Q4. Documents & Details required for MSME Registration
                            <br /> </span>


                            <span className="msme__answer">

                            <li className="msme__info__text__points">
                                
                               Aadhar Card of the applicant
                                <li>
                                 Photo ID proof
                                </li>

                                <li>
                                Business Name
                                </li>

                                <li>
                                Type of Business entity
                                </li>

                                <li>
                                Office/Plant Address
                                </li>

                                <li>
                                Date of commencement of Business
                                </li>

                                <li>
                                Bank Details (Account number & IFSC)
                                </li>

                                <li>
                                Business Activity details
                                </li>

                                <li>
                                Investment in plant & machinery 
                                </li>

                            </li>
                            </span>

                            <br /> <br />

                        </div>

                        <div className="msme__box">

                            <span id="5" className="msme__question">
                            Q5. Information Required for MSME Registration
                            <br /> </span>


                            <span className="msme__answer">Aadhaar Card is that the only document required for MSME registration. MSME registration is fully 
                            online and no proof of documents is required. PAN and GST linked details on investment and turnover of enterprises are going to be taken automatically by the Udyam Registration Portal from the govt databases. The Udyam Registration Portal is fully integrated with tax and GSTIN systems. PAN and GSTIN number is mandatory from 01.04.2021 for registration. Registration without PAN and GSTIN are often done now but need to be updated with PAN number and GSTIN number within 01/04/2021 for avoiding suspension of registration. Those who have EM-II or UAM registration or the other registration issued by any authority under the Ministry of MSME,
                            will need to re-register themselves during this Portal (as stated in the Registration Process heading above)</span>

                            <br /> <br />

                        </div>

                        <div className="msme__box">

                            <span id="6" className="msme__question">
                            Q6. Is MSME updated to Udyam Registration?
                            <br /> </span>


                            <span className="msme__answer">
                            Ans. Yes, MSME registration has been replaced with the Udyam Registration. If any micro, small and medium industries want to start out any business; they have to try to to the registration with MSME/Udyam Registration. This registration 
                            with MSME/Udyam Registration is completely online. This facility provides the business with tons of advantages and subsidies.
                            </span>

                            <br /> <br />

                        </div>

                        <div className="msme__box">

                            <span id="7" className="msme__question">
                            Q7. Is aadhar card compulsory?
                            <br /> </span>


                            <span className="msme__answer">
                            Ans. Yes. For registration under the Udyam registration, an Aadhaar card is compulsory. 
                            In case an applicant is aside from the proprietor, the Aadhaar card of the partner and therefore the director are going to be required
                            </span>

                            <br /> <br />

                        </div>


                        <div className="msme__box">

                            <span id="8" className="msme__question">
                            Q8. Can existing and new businesses both apply?
                            <br /> </span>


                            <span className="msme__answer">
                            Ans. Yes, an existing and new business can apply for MSME/Udyam Registration, provided the prevailing unit is
                            functioning and meets the edge limits for registration. UAM Registration has got to be re-registered for Udyam registration to avail the advantages of MSME.
                            </span>

                            <br /> <br />

                        </div>

                        <div className="msme__box">

                            <span id="8" className="msme__question">
                            Q9. What is the validity of the certificate?
                            <br /> </span>


                            <span className="msme__answer">
                            Ans. there's no expiry of the Udyam Registration Certificate. As long because the entity is moral and financially healthy 
                            there'll be no expiry of the certificate.
                            </span>

                            <br /> <br />

                        </div>

                        <div className="msme__box">

                            <span id="9" className="msme__question">
                            Q10. Can trading companies register under MSME?
                            <br /> </span>


                            <span className="msme__answer">
                            Ans. No. MSME covers only manufacturing and service industries. Trading companies are not covered by the scheme. MSME is to support startups with subsidies and benefits, trading companies are a 
                            bit like middlemen, a link between manufacturer and customer. Hence not covered under the scheme.
                            </span>

                            <br /> <br />

                        </div>


                        <div className="msme__box">

                            <span id="10" className="msme__question">
                            Q11. Do i want multiple registrations for manufacturing plants in several cities?
                            <br /> </span>


                            <span className="msme__answer">
                            Ans. No. The MSME/Udyam Registration Certificate is for one entity 
                            regardless of multiple branches or plants. However, information about multiple branches or plants must be furnished.
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


