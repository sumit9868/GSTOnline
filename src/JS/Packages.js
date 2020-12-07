import React, { useState } from "react";
import "../CSS/Packages.css";
import { db } from "./firebase.js";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";
import op1 from "../Media/basic.webp";
import op2 from "../Media/standard.webp";
import op3 from "../Media/premium.webp";
import op4 from "../Media/business.webp";
import op5 from "../Media/unlimited.webp";
import { useHistory } from "react-router-dom";

function Packages() {
  const [email1, setemail1] = useState("");
  const [email2, setemail2] = useState("");
  const [email3, setemail3] = useState("");
  const [email4, setemail4] = useState("");
  const [email5, setemail5] = useState("");
  const [name1, setname1] = useState("");
  const [name2, setname2] = useState("");
  const [name3, setname3] = useState("");
  const [name4, setname4] = useState("");
  const [name5, setname5] = useState("");
  const [number1, setnumber1] = useState("");
  const [number2, setnumber2] = useState("");
  const [number3, setnumber3] = useState("");
  const [number4, setnumber4] = useState("");
  const [number5, setnumber5] = useState("");

  const history = useHistory();

  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

  const classes = useStyles();

  const save1 = (event) => {
    event.preventDefault();
    if (email1 && name1 && number1) {
      db.collection("Option1")
        .add({
          email: email1,
          name: name1,
          number: number1,
          timestamp: new Date().getTime(),
        })
        .then(() => {
        
          history.replace("/success");
        })
        .catch((error) => {
          alert(error.message);
        });

      document.getElementById("myform1").reset();
      setemail1("");
      setname1("");
      setnumber1("");
    } else {
      alert("Please fill the field properly");
    }
  };

  const save2 = (event) => {
    event.preventDefault();
    if (email2 && name2 && number2) {
      db.collection("Option2")
        .add({
          email: email2,
          name: name2,
          number: number2,
          timestamp: new Date().getTime(),
        })
        .then(() => {
          
          history.replace("/success");
        })
        .catch((error) => {
          alert(error.message);
        });

      document.getElementById("myform2").reset();
      setemail2("");
      setname2("");
      setnumber2("");
    } else {
      alert("Please fill the field properly");
    }
  };

  const save3 = (event) => {
    event.preventDefault();
    if (email3 && name3 && number3) {
      db.collection("Option3")
        .add({
          email: email3,
          name: name3,
          
          number: number3,

          timestamp: new Date().getTime(),
        })
        .then(() => {
          
          history.replace("/success");
        })
        .catch((error) => {
          alert(error.message);
        });

      document.getElementById("myform3").reset();
      setemail3("");
      setname3("");
      setnumber3("");
    } else {
      alert("Please fill the field properly");
    }
  };

  const save4 = (event) => {
    event.preventDefault();
    if (email4 && name4 && number4) {
      db.collection("Option4")
        .add({
          email: email4,
          name: name4,
          number: number4,
          timestamp: new Date().getTime(),
        })
        .then(() => {
          
          history.replace("/success");
        })
        .catch((error) => {
          alert(error.message);
        });

      document.getElementById("myform4").reset();
      setemail4("");
      setname4("");
      setnumber4("");
    } else {
      alert("Please fill the field properly");
    }
  };

  const save5 = (event) => {
    event.preventDefault();
    if (email5 && name5 && number5) {
      db.collection("Option5")
        .add({
          email: email5,
          name: name5,
          number: number5,
          timestamp: new Date().getTime(),
        })
        .then(() => {
         
          history.replace("/success");
        })
        .catch((error) => {
          alert(error.message);
        });

      document.getElementById("myform5").reset();
      setemail5("");
      setname5("");
      setnumber5("");
    } else {
      alert("Please fill the field properly");
    }
  };

  return (
    <div className="package">
      <span className="package__heading">Packages!!!</span>
      <div className="package__content">
        <div class="flip">
          <div class="front">
            <img className="package__img" src={op1} alt="option1" />
          </div>
          <div class="back">
            <div className="back__tagline">Register Now !!!</div>

            <form id="myform1" className="package__form" onSubmit={save1}>
              <label className="package__label">Name</label>
              <input
                type="text"
                onChange={(e) => setname1(e.target.value)}
                placeholder="Name"
              />
              <label className="package__label">Contact No.</label>
              <input
                type="text"
                onChange={(e) => setnumber1(e.target.value)}
                placeholder="Contact No."
              />
              <label className="package__label">Email</label>
              <input
                type="email"
                onChange={(e) => setemail1(e.target.value)}
                placeholder="E-mail"
              />
              <br />
              <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                onClick={save1}
                startIcon={<SaveIcon />}
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
        <div class="flip">
          <div class="front">
            <img className="package__img" src={op2} alt="option1" />
          </div>
          <div class="back">
            <div className="back__tagline">Register Now !!!</div>
            <form id="myform2" className="package__form" onSubmit={save2}>
              <label className="package__label">Name</label>
              <input
                type="text"
                onChange={(e) => setname2(e.target.value)}
                placeholder="Name"
              />
              <label className="package__label">Contact No.</label>
              <input
                type="text"
                onChange={(e) => setnumber2(e.target.value)}
                placeholder="Contact No."
              />
              <label className="package__label">Email</label>
              <input
                type="email"
                onChange={(e) => setemail2(e.target.value)}
                placeholder="E-mail"
              />
              <br />
              <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                onClick={save2}
                startIcon={<SaveIcon />}
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
        <div class="flip">
          <div class="front">
            <img className="package__img" src={op3} alt="option1" />
          </div>
          <div class="back">
            <div className="back__tagline">Register Now !!!</div>
            <form id="myform3" className="package__form" onSubmit={save3}>
              <label className="package__label">Name</label>
              <input
                type="text"
                onChange={(e) => setname3(e.target.value)}
                placeholder="Name"
              />
              <label className="package__label">Contact No.</label>
              <input
                type="text"
                onChange={(e) => setnumber3(e.target.value)}
                placeholder="Contact No."
              />
              <label className="package__label">Email</label>
              <input
                type="email"
                onChange={(e) => setemail3(e.target.value)}
                placeholder="E-mail"
              />
              <br />
              <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                onClick={save3}
                startIcon={<SaveIcon />}
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
        <div class="flip">
          <div class="front">
            <img className="package__img" src={op4} alt="option1" />
          </div>
          <div class="back">
            <div className="back__tagline">Register Now !!!</div>
            <form id="myform4" className="package__form" onSubmit={save4}>
              <label className="package__label">Name</label>
              <input
                type="text"
                onChange={(e) => setname4(e.target.value)}
                placeholder="Name"
              />
              <label className="package__label">Contact no.</label>
              <input
                type="text"
                onChange={(e) => setnumber4(e.target.value)}
                placeholder="Contact No."
              />
              <label className="package__label">Email</label>
              <input
                type="email"
                onChange={(e) => setemail4(e.target.value)}
                placeholder="E-mail"
              />
              <br />
              <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                onClick={save4}
                startIcon={<SaveIcon />}
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
        <div class="flip">
          <div class="front">
            <img className="package__img" src={op5} alt="option1" />
          </div>

          <div class="back">
            <div className="back__tagline">Register Now !!!</div>
            <form id="myform5" className="package__form" onSubmit={save5}>
              <label className="package__label">Name</label>
              <input
                type="text"
                onChange={(e) => setname5(e.target.value)}
                placeholder="Name"
              />
              <label className="package__label">Contact No.</label>
              <input
                type="text"
                onChange={(e) => setnumber5(e.target.value)}
                placeholder="Contact No."
              />
              <label className="package__label">Email</label>
              <input
                type="email"
                onChange={(e) => setemail5(e.target.value)}
                placeholder="E-mail"
              />
              <br />
              <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                onClick={save5}
                startIcon={<SaveIcon />}
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Packages;
