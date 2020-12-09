import React from 'react'
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import InputField from './InputField';
import img1 from '../Media/ewaybillCover.webp'
import ewaybillposter from '../Media/ewaybillposter.webp'
import img from '../Media/wallet.png'
import '../CSS/Ewaybill.css'
import { db } from "./firebase.js";

function Ewaybill() {

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


        db.collection("Ewaybill")
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
        <div className="ewaybill">

            <div className="ewaybill__offers">

                <div className="ewaybill__offers__banner__left">

                    <img src={img1} alt="ewaybillbanner" />

                </div>

                <div className="ewaybill__left">

                    <div className="ewaybill__tagline">
                        <span> Today's Offer !!! </span>
                    </div>

                    <div className="ewaybill__para">
                        <span>Best E Way Bill Registration Package</span>

                        <div className="ewaybill__price">
                            <span className="ewaybill__oldPrice">₹5000</span>
                            <span className="ewaybill__newPrice">₹1499</span>
                        </div>

                        <span>Offer valid for today only</span>
                    </div>

                    <div className="ewaybill__outterform">
                        <form onSubmit={submitForm} className="ewaybill__form">

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
                            <Button type="submit" className="ewaybill__button">Submit</Button>
                        </form>
                    </div>

                </div>
            </div>

            <div className="ewaybill__content">

                
            <div className="ewaybill__top6">

<span className=" ewaybill__top6__heading">E Way Bill Registration</span>

<div className="ewaybill__top6__part1">

    <div className="ewaybill__top6__ewaybill__box">

        <div className="ewaybill__top6__img">

            <img src={img} alt="img" />

        </div>

        <span> What is the E Way Bill system? </span>

        <div className="ewaybill__top6__para">
            <p>
            E Way Bill is the short form of Electronic Way Bill. It is a unique document/bill, which is electronically generated for the specific consignment/movement of goods from one place to 
            another, either inter-state or intra-state and of value more than INR 50,000, required under the current GST regime.  </p>

        </div>

    </div>
    <div className="ewaybill__top6__ewaybill__box">

        <div className="ewaybill__top6__img">

            <img src={img} alt="img" />

        </div>

        <span>Is E Way Bill compulsory? </span>

        <div className="ewaybill__top6__para">
            <p>
            E Way Bill is electronically generated document required for interstate movements of goods having consignment value above INR 50,000
            in all states of India including Delhi. It is mandatory to generate E Way Bill from 1st April 2018 for transportation of goods from one state to other. </p>

        </div>

    </div>
    <div className="ewaybill__top6__ewaybill__box">

        <div className="ewaybill__top6__img">

            <img src={img} alt="img" />

        </div>

        <span> What is the validity of E Way Bill? </span>

        <div className="ewaybill__top6__para">
            <p>

            The validity of e-way bill depends on the distance to be travelled by the goods. For a distance of less than 100 Km the e-way bill will
             be valid for a day from the relevant date. For every 100 Km thereafter, the validity will be additional one day from the relevant date.
            
            </p>

        </div>

    </div>

</div>

<div className="ewaybill__top6__part2">

    <div className="ewaybill__top6__ewaybill__box">

        <div className="ewaybill__top6__img">

            <img src={img} alt="img" />

        </div>

        <span>What happens if E Way Bill is not generated? </span>

        <div className="ewaybill__top6__para">
            <p>
            goods are moved without generating a valid e-way bill, the authorities may impose a penalty of 10,000 INR or 
            amount of tax sought to be evaded, whichever is higher. </p>

        </div>

    </div>

    <div className="ewaybill__top6__ewaybill__box">

        <div className="ewaybill__top6__img">

            <img src={img} alt="img" />

        </div>

        <span>  Minimum amount for E Way Bill? </span>

        <div className="ewaybill__top6__para">
            <p>
            Rs 50,000 <br/>
            Registered Person – E Way Bill must be generated when there is a movement of goods of more than Rs 50,000 in value to or from a registered person. 
            A Registered person or the transporter may choose to generate and carry E Way Bill even if the value of goods is less than Rs 50,000
            </p>

        </div>

    </div>


    <div className="ewaybill__top6__ewaybill__box">

        <div className="ewaybill__top6__img">

            <img src={img} alt="img" />

        </div>

        <span> Types of E Way Bills are there? </span>

        <div className="ewaybill__top6__para">
            <p>
            1) Normal E Way Bill :- Normal E Way bill shall be generated when there is transportation of goods having one type of HSN.
             <br/>
            2) Bulk E Way Bill :- When there is transportation of multiple variety of Goods having multiple HSN code the bulk E Way bill shall be generated.
            </p>

        </div>

    </div>

</div>

</div>

                <div className="ewaybill__FAQ">

                    <div className="ewaybill__info__left">

                        <div className="ewaybill__info__header">
                            FAQ
                        </div>

                        <span className="ewaybill__info__left__link">
                            <a href="#1">
                            Q1.What is a E Way Bill?
                            </a>
                        </span>



                        <span className="ewaybill__info__left__link">
                            <a href="#2">
                            Q2.When is a E Way Bill be issued?
                            </a>
                        </span>



                        <span className="ewaybill__info__left__link">
                            <a href="#3">
                            Q3.Who should generate a E Way Bill?
                            </a>
                        </span>



                        <span className="ewaybill__info__left__link">
                            <a href="#4">
                            Q4. Validity of E Way Bill
                           </a>
                        </span>

                        <span className="ewaybill__info__left__link">
                            <a href="#5">
                            Q5.List of documents or Details required for E Way Bill generation
                            </a>
                        </span>


                    </div>

                    <div className="ewaybill__info__page">

                        <div className="ewaybill__info__header">

                            Learn more about E Way Bill 

                        </div>

                        <div className="ewaybill__box">

                            <span id="1" className="ewaybill__question"> Q1. What is a E Way Bill? <br /> </span>


                            <span className="ewaybill__answer">EWay Bill is an Electronic Way bill which is required for the movement of products to be generated on the E Way Bill Portal. A GST registered person is not authorized to transport goods using a vehicle if its exceeds Rs. 50,000 (Single Invoice/bill/delivery challan) without an e-way bill that's generated on ewaybillgst.gov.in.
                                Apart from this govt site, E Way Bill also can be generated or cancelled through SMS, Android App and by site-to-site integration through API for the purpose of making it easy to access. 
                                A unique Eway Bill Number (EBN) is generated and allocated to the supplier, recipient, and therefore the transporter for the easy transport of the goods.
                            </span>

                            <br /> <br />

                        </div>

                        <div className="ewaybill__box">

                            <span id="2" className="ewaybill__question">Q2 When is a E Way Bill be issued? <br /> </span>


                            <span className="ewaybill__answer">

                            When there is movement/transportation of goods or products of value exceeding Rs.50,000/- 
                            through vehicles then eWay bill are required to be generated (either each Invoice or during aggregate of all invoices 
                            in a vehicle/conveyance) –

                                <li className="ewaybill__info__text__points">
                                    
                                    In relation to a ‘supply’

                                    <li>
                                    For reasons other than a ‘supply’ ( say a return)
                                    </li>

                                    <li>
                                    Due to inward ‘supply’ from an unregistered person
                                    </li>

                                </li>

                                Here the word ‘supply’ generally refers to: 

                                <li className="ewaybill__info__text__points">
                                    
                                    Sale – when there is sale of goods and payment made
                                    <li>
                                    Transfer – For instance when there is a branch transfers
                                    </li>

                                    <li>
                                    Barter/Exchange – This means instead to money the payment is made by goods 
                                    </li>
                                    
                                </li>

                                Therefore, E Way Bills must be generated on the common portal for of these sorts of movements. For certain specified Goods, 
                                the E Way Bill must be generated mandatorily even though the worth of the consignment of products is a smaller amount than Rs. 50,000/-
                                </span>

                            <br /> <br />
                        </div>


                        <div className="ewaybill__box">

                            <span id="3" className="ewaybill__question">Q3.Who should generate a E Way Bill? <br /> </span>


                            <span className="ewaybill__answer">

                                <li className="ewaybill__info__text__points">
                                    
                                <b>Registered Person</b> - When movement of goods is made of value worth more than Rs. 50,000/- or from a 
                                registered person than in such situation E Way Bill must be generated. A Registered person or the transporter 
                                may prefer to generate and carry E Way Bill even though the worth of products is a smaller amount than Rs 50,000. 
                                    <li>
                                    <b> Unregistered Persons</b> - e Way bill generation is also required even in the case of unregistered persons.
                                    However, where a supply is formed by an unregistered person 
                                    to a registered person, the receiver will need to ensure all the compliances are met as if they were the supplier.
                                    </li>

                                    <li>
                                    <b>Transporter</b> - If the supplier of the goods has not generated the e Way
                                    bill and it needs to be generated by the transporters, who are carrying goods by road, air, rail, etc.
                                    </li>

                                </li>
                            </span>
                           

                            <br /> <br />

                        </div>




                        <div className="ewaybill__box">

                            <span id="4" className="ewaybill__question">
                            Q4. Validity of E Way Bill?
                            <br /> </span>


                            <span className="ewaybill__answer">

                            The validity of eWay bill starts getting calculated from the date and time of generation of the bill. 
                            It is based on the distance travelled by the goods.
                                <table>
                                <tr>
                                    <th>Type of conveyance</th>
                                    <th>Distance</th>
                                    <th>Validity of EWB</th>
                               
                                </tr>
                                <tr>
                                    <td>Other than Over dimensional cargo</td>
                                    <td>
                                        Less Than 100 Kms
                                        <td>
                                        For every additional 100 Kms or part thereof
                                        </td>
                                    </td>
                                    <td>
                                        1 Day
                                        <td>
                                        additional 1 Day
                                        </td>
                                    </td>
                                    
                                </tr>
                                <tr>
                                    <td>For Over dimensional cargo</td>
                                    <td>
                                    Less Than 20 Kms
                                        <td>
                                        For every additional 20 Kms or part thereof
                                        </td>
                                    </td>
                                    <td>
                                        1 Day
                                        <td>
                                        additional 1 Day
                                        </td>
                                    </td>
                                
                                </tr>
                                </table>
                                <br/>
                                Validity of E Way Bill can be extended also. The generator of such E Way Bill has got to either four
                                 hours before expiry or within four hours after its expiry can extend E Way Bill validity.


                            </span>

                            <br /> <br />

                        </div>

                        <div className="ewaybill__box">

                            <span id="5" className="ewaybill__question">
                            Q5. List of documents or Details required for E Way Bill generation ?
                            <br /> </span>


                            <span className="ewaybill__answer"><li className="ewaybill__info__text__points">
                                    
                            Invoice/ Bill of Supply/ Challan of the consignment of goods
                            <li>
                            Transport by road – Transporter ID or Vehicle number</li>
    
                                        <li>
                                        Transport by rail, air, or ship – Transporter ID, Transport document number, and date on the document</li>
    
                                    </li></span>

                            <br /> <br />

                        </div>

                       
                        

                        <span className="ewaybill__info_copywrtie">@Content used from Govt. website</span>
                    </div>



                    <div className="ewaybill__info__right">
                        <img src={ewaybillposter} alt="ewaybillposter" />

                    </div>



                </div>


            </div>

        </div>
    )
}

export default Ewaybill

