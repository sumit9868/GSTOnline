import React from "react";
import "../CSS/Home.css";
import Button from "@material-ui/core/Button";
import InputField from "./InputField";
import { db } from "./firebase.js";
import { Link, useHistory } from "react-router-dom";
import img1 from "../Media/fssai.jpg";
import img2 from "../Media/gst.jpg";
import img5 from "../Media/msme.jpg";
import img9 from "../Media/pan.jpg";
import img10 from "../Media/ewaybill.jpg";
import Keywords from "./Keywords.js"
function Home() {


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

                document.getElementById("gstform").reset();
            })

            .catch((error) => {
                alert(error.message);
            });
    }


    return (
        <>
        <div className="home">
            <div className="home__form__services">
                <div className="home__left">
                    <span className="home__tagline"> Todays Offers <br /> </span>
                    <span className="home__para">Best GST filing Package <br /></span>

                    <span className="home__newPrice"> <span className="home__oldPrice">₹1500</span>       ₹499 <br /> </span>

                    <span className="home__para">Offer valid for today only <br /></span>


                    <div className="home__outterform">
                        <form onSubmit={submitForm} id="gstform" className="home__form">

                            <h2>Hurry up!!! Register Now  </h2>
                            <InputField
                                id="field1"
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

          <div className="home__ourservices">
            <div className="home__tagline">
              <span> Our Services </span>
            </div>

            <div className="home__imgservices">
              <div className="home__imgservices__part1">
                <div className="home__img">
                  <Link className="home__img" to="/gst-filing">
                    <img src={img2} alt="gst" />
                    <span className="home__tag">GST</span>
                  </Link>
                </div>

                <div className="home__img">
                  <Link className="home__img" to="/fssai">
                    <img src={img1} alt="fssai" />
                    <span className="home__tag">FSSAI</span>
                  </Link>
                </div>

                <div className="home__img">
                  <Link className="home__img" to="/MSME">
                    <img src={img5} alt="msme" />
                    <span className="home__tag">MSME / UDYAM</span>
                  </Link>
                </div>
              </div>

              <div className="home__imgservices__part2">
                <div className="home__img">
                  <Link className="home__img" to="/E-way-bill">
                    <img src={img10} alt="E-way Bill" />
                    <span className="home__tag">E-Way Bill</span>
                  </Link>
                </div>

                <div className="home__img">
                  <Link className="home__img" to="/gst-filing">
                    <img src={img9} alt="gst" />
                    <span className="home__tag">PAN Card</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="home__banner">
          <span className="banner__text">One Stop Solution </span>
          <span className="banner__heading">
            Expertised in GST Registration & Filing{" "}
          </span>
          <span className="banner__para">
            We provide a reliable trusted long term association & services for
            your business
          </span>
        </div>
        <div className="sevices">
          <Keywords/>
          </div>
      </div>
    </>
  );
}

export default Home;
