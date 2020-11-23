import React from 'react'
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import InputField from './InputField';
import img from '../Media/gstfiling1.jpg'
import '../CSS/Offers.css'
import { db } from "./firebase.js";
function Offers() {

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


        db.collection("Info")
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
        <div className="offers">

            <div className="offers__banner__left">

             <img src={img} alt="gstbanner" />

            </div>

            <div className="gst__left">

                <div className="home__tagline">
                    <span> Today's Offer !!! </span>
                </div>

                <div className="home__para">
                    <span>Best GST filing Package</span>

                    <div className="price">
                        <span className="oldPrice">₹1500</span>
                        <span className="newPrice">₹499</span>
                    </div>

                    <span>Offer valid for today only</span>
                </div>

                <div className="home__outterform">
                    <form onSubmit={submitForm} className="home__form">

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
                        <Button type="submit" className="home__button">Submit</Button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Offers
