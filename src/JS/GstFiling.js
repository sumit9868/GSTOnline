import React from 'react'
import { useHistory } from "react-router-dom";
import '../CSS/GstFiling.css'
import InputField from './InputField';
import Button from '@material-ui/core/Button';
// import Info from './Info';
import AOS from 'aos'
import "aos/dist/aos.css";
import { db } from "./firebase.js";
import Offers from "./Offers";
AOS.init();

function GstFiling() {
    AOS.init({
        duration: 1200,
    });
    return (
        <div className="gstfiling">

            <Offers />




            <div className="info">

                <div className="item" data-aos-duration="2000" data-aos="fade-up"> {/* First */}
                    <span className="info__header">
                        <span>WHAT IS GST RETURN FILING</span>
                    </span>
                    <div className="info__para">
                        The basic meaning of “GST Return Filing” is “maintaining financial
                        accounts” per year. Bookkeeping and GST Return Filing can be divided
                        into several fields including financial GST Return Filing, managing
                        general GST Return Filing,professional GST Return Filing, chartered
        accountant, auditing, tax GST Return Filing and cost GST Return Filing.{" "}
                        <br />
                        <span>Step 1:</span>
        Connect with an expert at LegalDocs and provide the necessary
        information to prepare your gst filing statement. <br />
                        <span>Step 2:</span>
        Our expert will prepare a GST return statement based on the information
        provided and send it to you for your approval. <br />
                        <span>Step 3:</span>
        GST return will be filed with the tax authorities once it has been
        approved by you.
      </div></div>
                <div className="item" data-aos-duration="2000" data-aos="fade-down">{/* Second */}
                    <span className="info__header">
                        <span>WHAT IS GST RETURN</span>
                    </span>
                    <div className="info__para">
                        A GST file return is a document which has details of income which a
                        taxpayer needs to file with the tax administrative authorities. This is
        used by tax authorities to calculate tax liability.. <br />
                    </div></div>
                <div className="item" data-aos-duration="2000" data-aos="fade-right">{/* Third */}
                    <span className="info__header">
                        <span>ELIGIBILITY FOR GST RETURN FILING</span>
                    </span>
                    <div className="info__para">
                        In the GST norms, any regular business has to file three monthly returns
        and one annual return.. <br />
        GST should also be filed by entities that make no sales or purchases
        during a given period (year) in the form of nil-returns (meaning no
        returns).
        <br />
        The best part in this system one has to manually enter details of one
        monthly return – GSTR-1. The other two returns – GSTR 2 & 3 will get
        auto-populated by deriving information from GSTR-1 filed by you and your
        vendors. Compounding taxpayers have to file returns quarterly which is
        for every three months and regular taxpayers such as, foreign
        non-residents, casual taxpayers and Input Service Providers (ISD) have
        to file returns monthly. <br />
                    </div></div>
                <div className="item" data-aos-duration="2000" data-aos="fade-left">{/* Forth */}
                    <span className="info__header">
                        <span>What are the different types of GST returns?</span>
                    </span>
                    <div className="info__para">
                        <span>GSTR-1:</span>
        monthly return for outward supplies <br />
                        <span>GSTR-2:</span>
        monthly return for inward supplies <br />
                        <span>GSTR-3:</span>
        monthly return containing details from other monthly returns filed by the taxpayer (GSTR-1, GSTR-2, GSTR-6, GSTR-7) <br />
                        <span>GSTR-4:</span>
        quarterly return <br />
                        <span>GSTR-5:</span>
        variable return to be filed by Non-Resident Taxpayers <br />
                        <span>GSTR-6:</span>
        monthly return to be filed by input service distributors <br />
                        <span>GSTR-7:</span>
        monthly return to be filed for Tax Deducted at Source (TDS) transactions <br />
                        <span>GSTR-8:</span>
        monthly return to be filed by e-commerce operators <br />
                        <span>GSTR-9:</span>
        annual return <br />
                        <span>GSTR-10:</span>
        final return to be filed when terminating business activities permanently <br />
                        <span>GSTR-11:</span>
        to be filed by taxpayers with a Unique Identity Number (UIN) <br />
                    </div></div>

                <div className="item" data-aos-duration="2000" data-aos="zoom-in">{/* Fifth */}
                    <span className="info__header">
                        <span>BENEFITS OF GST RETURN FILING FROM EasyGST</span>
                    </span>
                    <div className="info__para">
                        <span>Timely Submission-</span>
          The best part in this system one has to manually enter details of one
          monthly return – GSTR-1. The other two returns – GSTR 2 & 3 will get
          auto-populated by deriving information from GSTR-1 filed by you and your
          vendors. Compounding taxpayers have to file returns quarterly which is
          for every three months and regular taxpayers such as, foreign
          non-residents, casual taxpayers and Input Service Providers (ISD) have
          to file returns monthly. <br />

                        <span>Year Around Expert Consultation-</span>
          Get consultation for GST on call. There is no limit on the number of questions or time limit. <br />

                        <span>Save Money (100% ITC Guaranteed) -</span>
          We offer trusted and professional at affordable prices when compared to market standards.. <br />

                        <span> In-House Team of Professionals -</span>
          We have our professional in-house team. We do not sub-let your work to others <br />
                    </div>

                </div>
                <div className="item" data-aos-duration="2000" data-aos="zoom-out">

                    {/* Sixth */}
                    <span className="info__header">
                        <span>What is GST? All about it:</span>
                    </span>
                    <div className="info__para">
                        {/* <span>Timely Submission-</span> */}
          Goods and Services Tax (GST) is an indirect tax used on the supply of goods and services.
          GST is a value-added tax levied on goods and services sold for domestic consumption.
          It has subsumed several taxes including central excise duty, services tax, additional customs duty, surcharges and
          state-level value added tax. The GST is paid by consumers, but it is remitted to the government by the businesses
          selling the goods and services. GST provides revenue for the government and the Goods and Service Tax Act was passed
          in the Parliament in March 2017 and came into effect on July 2017. The three types of GST are Central Goods and Service
          Tax, State Goods and Service Tax, Integrated Goods and Service Tax. Since its instruction, GST has undergone many changes
          and is spearheaded by the GST Council, which has 34 members (primarily finance minister from each state) and headed by the
          on Finance Minister. The Council meets on a regular basis for revisions, clarifications, additions and enactments of rule or
          rate changes of the goods and services in India. <br />
                    </div>


                </div>

                <div className="item" data-aos-duration="2000" data-aos="slide-up">

                    {/* Seventh */}
                    <span className="info__header">
                        <span>How do I register for GST? </span>
                    </span>
                    <div className="info__para">
                        {/* <span>Timely Submission-</span> */}
          Go to the GST website, click on Register Now under Taxpayers, enter the details in Part A, add the OTP received on the email and mobile. You will receive the Temporary Reference Number (TRN) on your mail and mobile. To Register, fill all the details in Section B. Submit appropriate documents which include, proof for the place of business, bank account details, and authorization form.
          After the completion of the forms a success message and Application Reference Number (ARN) is sent to registered email and mobile.
         <br />
                    </div>
                </div>

                <div className="item" data-aos-duration="2000" data-aos="flip-up">

                    {/* Eight */}
                    <span className="info__header">
                        <span>FAQ</span>

                    </span>
                    <div className="info__para">
                        <span>Can a person operating two different companies with different names but with same PAN get two GST registrations?</span><br />
          One PAN holder gets one registration in every state, but he has the option of getting different registrations for different business verticals.
         <br />
                    </div>


                </div>
                <div className="item" data-aos-duration="2000" data-aos="flip-down">

                    {/* Nine */}
                    <span className="info__header">
                        <span>Is it compulsory to register for GST?</span>
                    </span>
                    <div className="info__para">

                        Following businesses/companies must register for GST:
        <br />
                        <ul>
                            <li>
                                Businesses with turnover above Rs 40 lakh.
          </li>

                            <li>
                                Individuals registered under the Pre-GST law.
          </li>

                            <li>
                                Companies that supply via e-commerce aggregator.
          </li>

                            <li>
                                All e-commerce aggregators
          </li>
                        </ul>
                        <br />
                    </div>
                </div>

                <div className="item" data-aos-duration="2000" data-aos="flip-right">

                    {/* 10 */}
                    <span className="info__header">
                        <span>How long does one have to wait to register?</span>

                    </span>
                    <div className="info__para">

                        An unregistered person has 30 days to complete its registration formalities from its date of liability to obtain registration
         <br />
                    </div>

                    <span className="info__header">
                        <span>What are the GST slabs?</span>
                    </span>
                    <div className="info__para">
                        Goods and services are divided in into five different tax slabs for collection of tax -5%, 12%, 18% and 28%. Petroleum products, alcoholic drinks,
                        and electricity are not taxed under GST and instead  are taxed separately by the individual state governments, as per the previous tax system.
         <br />
                    </div>


                </div>
                <div className="item" data-aos-duration="2000" data-aos="flip-left">

                    {/* 10 */}
                    <span className="info__header">
                        <span>Who decides rates for levy of GST?</span>

                    </span>
                    <div className="info__para">

                        The CGST and SGST are levied at rates jointly decided by the Centre and states. The rates are notified on the recommendations of the GST Council
         <br />
                    </div>


                </div>
            </div>
        </div>

    )

}

export default GstFiling
