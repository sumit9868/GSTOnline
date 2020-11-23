import React from 'react'
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import InputField from './InputField';
import img1 from '../Media/pancardCover.jpg'
import panposter from '../Media/panPoster.png'
import img from '../Media/wallet.png'
import '../CSS/Pan.css'
import { db } from "./firebase.js";


function Pan() {

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


        db.collection("Pan")
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
        <div className="pan">


            <div className="pan__offers">

                <div className="pan__offers__banner__left">

                    <img src={img1} alt="panbanner" />

                </div>

                <div className="pan__left">

                    <div className="pan__tagline">
                        <span> Today's Offer !!! </span>
                    </div>

                    <div className="pan__para">
                        <span>Best PAN Registration Package</span>

                        <div className="pan__price">
                            <span className="pan__oldPrice">₹500</span>
                            <span className="pan__newPrice">₹399</span>
                        </div>

                        <span>Offer valid for today only</span>
                    </div>

                    <div className="pan__outterform">
                        <form onSubmit={submitForm} className="pan__form">

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
                            <Button type="submit" className="pan__button">Submit</Button>
                        </form>
                    </div>

                </div>
            </div>

            <div className="pan__content">


                <div className="pan__top6">

                    <span className=" pan__top6__heading">PAN Registration</span>

                    <div className="pan__top6__part1">

                        <div className="pan__top6__pan__box">

                            <div className="pan__top6__img">

                                <img src={img} alt="img" />

                            </div>

                            <span> What is Pan card used for? </span>

                            <div className="pan__top6__para">
                                <p>
                                A PAN card helps the Income-tax Authority in keeping a track of all 
                                financial transactions that may be essential in assessing an individual or companies tax liability, it helps in reducing the chances of tax evasion.
                                </p>

                            </div>

                        </div>
                        <div className="pan__top6__pan__box">

                            <div className="pan__top6__img">

                                <img src={img} alt="img" />

                            </div>

                            <span> How does a PAN card work? </span>

                            <div className="pan__top6__para">
                                <p>
                                PAN, or permanent account number, is a unique 10-digit alphanumeric identity allotted to each taxpayer by the Income 
                                Tax Department under the supervision of the Central Board of Direct Taxes. It also serves as an identity proof.
                                The PAN number remains unaffected by change of address throughout India.
                                </p>

                            </div>

                        </div>
                        <div className="pan__top6__pan__box">

                            <div className="pan__top6__img">

                                <img src={img} alt="img" />

                            </div>

                            <span> Is PAN and Aadhar card same?</span>

                            <div className="pan__top6__para">
                                <p>

                                PAN is a 10-digit alphanumeric code issued by the income tax department, Aadhaar is a 13-digit unique identity number randomly assigned to applicants by UIDAI after collecting biometric data. Interchangeability of PAN and Aadhaar cards: 
                                Taxpayers can use Aadhaar number wherever they are required to quote PAN.
                                </p>
                            </div>

                        </div>

                    </div>

                    <div className="pan__top6__part2">

                        <div className="pan__top6__pan__box">

                            <div className="pan__top6__img">

                                <img src={img} alt="img" />

                            </div>

                            <span> What is Pan under Income Tax Act? </span>

                            <div className="pan__top6__para">
                                <p>
                                PAN is a ten-digit alphanumeric number, issued in the form of a laminated card, 
                                by the Income Tax Department, to any "person" who applies for it or to whom the department allots the number without an application
                                </p>

                            </div>

                        </div>

                        <div className="pan__top6__pan__box">

                            <div className="pan__top6__img">

                                <img src={img} alt="img" />

                            </div>

                            <span> Does PAN card expire? </span>

                            <div className="pan__top6__para">
                                <p> The PAN is valid for lifetime. </p>
                            </div>

                        </div>


                        <div className="pan__top6__pan__box">

                            <div className="pan__top6__img">

                                <img src={img} alt="img" />

                            </div>

                            <span> What is Pan Card Fees? </span>

                            <div className="pan__top6__para">
                                <p>
                                The charges for applying for PAN is Rs. 93 (Excluding Goods and Services tax​) for Indian communication address and Rs. 864 (Excluding Goods and Services tax) 
                                for foreign communication address. Payment of application fee can be made through credit/debit card, demand draft or net-banking.   
                                </p>

                            </div>

                        </div>

                    </div>

                </div>


                <div className="pan__FAQ">

                    <div className="pan__info__left">

                        <div className="pan__info__header">
                            FAQ
                        </div>

                        <span className="pan__info__left__link">
                            <a href="#1">
                                Q1. Benefits of Having a PAN Card
                            </a>
                        </span>



                        <span className="pan__info__left__link">
                            <a href="#2">
                                Q2. Documents Required for PAN Card Application by HUFs and Individuals (Being Citizens of India)
                            </a>
                        </span>

                    </div>

                    <div className="pan__info__page">

                        <div className="pan__info__header">

                            Learn more about PAN

        </div>

                        <div className="pan__box">

                            <span id="1" className="pan__question"> Q1. Benefits of Having a PAN Card <br /> </span>


                            <span className="pan__answer">

                                <span className="pan__answer">

                                    <li className="pan__info__text__points">

                                    IT Returns Filing: <br />
                                        All individuals and entities who are eligible for tax are expected to file their IT returns.
                                         A PAN card is important for filing of IT returns, 
                                        and is that the primary reason individuals, also as other entities, apply for one
                                        <li>
                                        Identity Proof: <br /> 
                                        PAN card serves a valid identity proof. Other than voter card, Aadhaar card,
                                        PAN card is additionally accepted by all financial institutions and other organisations as an identity proof.
                                        </li>

                                        <li>
                                        Tax Deductions: <br /> 
                                        One of the essential reasons to urge a PAN card is for the aim of taxation.
                                        If the entity or person has not linked the PAN number together with his checking account ,
                                        and therefore the annual interest earnings on savings deposits is quite Rs. 10,000/- then the bank 
                                        would deduct 30% TDS rather than 10%.
                                        </li>

                                        <li>
                                        Claiming Income Tax Refund: <br /> 
                                        Many times, the TDS deducted from a taxpayer’s income 
                                        is quite the particular tax that he's alleged to pay. 
                                        In order to say excess tax paid, 
                                        taxpayer has got to have a PAN linked to his checking account 
                                        </li>


                                        <li>
                                        Starting a Business: <br /> 
                                        In order to start out a business, a corporation or the other 
                                        entity mandatorily must have a PAN registered within the name of 
                                        its entity.
                                        Tax license number (TRN) is required for a business which is 
                                        obtained as long as the entity features a PAN.
                                        </li>

                                        <li>
                                        Opening a Bank Account: <br /> 
                                        All public, private and co-operative banks have made it mandatory for a private or a corporation to possess a checking account in its name so as to open a savings or current account.
                                        Only under Pradhan Mantri Jan Dhan Yojana, a person can open a zero balance account by using voter card or other identity proof.</li>

                                        <li>
                                        Opening Demat Account: <br /> 
                                        PAN card is additionally mandatory for a private or entity to open a Demat Account, 
                                        which is required to carry shares in dematerialized form.
                                        </li>

                                        <li>
                                        Opening Demat Account: <br /> 
                                        PAN card is additionally mandatory for a private or entity to open a Demat Account, 
                                        which is required to carry shares in dematerialized form.
                                        </li>

                                        <li>
                                        Purchase & Sale of Immovable Asset: <br /> 
                                        One of the advantages of pan card is eligibility of a private or 
                                        entity to enter into transactions of sale or purchase of assets.
                                        PAN is required to be quoted within the deed made during sale or purchase of any immovable property valued 
                                        at 10 lakh rupees or more.
                                       </li>

                                        <li>
                                        Foreign Travel: <br /> 
                                        Cash payment related with foreign travel of an amount quite Rs. 50,000/- 
                                        inclusive of forex purchase requires PAN card</li>

                                        <li>
                                        Time Deposit: <br /> 
                                        Deposits with post office, co-operative banks, non-banking financial companies, also will need PAN, deposits adding up to
                                         Rs. 5 lakh or more per annum would require PAN</li>

                                         <li>
                                         Hotel and Restaurant Bills: <br /> 
                                         Payments more than Rs. 50,000/- for hotel and restaurant bills requires PAN to tend</li>

                                         <li>
                                         Cash Cards and Pre-Paid Instruments: <br /> 
                                         Cash payment adding up to more than Rs. 50,000/- per annum will need PAN to be furnished</li>


                                         <li>
                                         Purchase or Sale of Goods and Services: <br /> 
                                         Purchase or sale of any good or service for an amount quite Rs. 2 lakh per transaction 
                                         would require PAN to be furnished</li>


                                         <li>
                                         Bank Drafts, Pay Orders and Banker’s Cheque: <br /> 
                                         PAN card is required for Bank Drafts, Pay Orders and Banker’s Cheque with a transaction quite Rs 50000/- during a day.
                                        This implies that the transactions quite 50000/- will only need PAN card</li>

                                    </li>
                                </span>



                            </span>

                            <br /> <br />

                        </div>

                        <div className="pan__box">

                            <span id="2" className="pan__question">Q2 Documents Required for PAN Card Application by HUFs and Individuals (Being Citizens of India) <br /> </span>


                            <span className="pan__answer">

                                <li className="pan__info__text__points">

                                Voter's ID card

                                    <li>
                                    Passport
                                    </li>

                                    <li>
                                    Aadhar card
                                    </li>

                                    <li>
                                    Ration card having Applicant's photo.
                                    </li>

                                    <li>
                                    Driving License.
                                    </li>

                                    <li>
                                    Photo ID card which are issued by central government, 
                                    state government or any undertaking of public sector
                                    </li>


                                </li>
                            </span>

                            <br /> <br />
                        </div>

                        <span className="pan__info_copywrtie">@Content used from Govt. website</span>
                    </div>



                    <div className="pan__info__right">
                        <img src={panposter} alt="panposter" />

                    </div>



                </div>


            </div>


        </div>
    )
}

export default Pan
