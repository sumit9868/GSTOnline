import React, { useState } from "react";
import "../CSS/Packages.css";
import { db } from "./firebase.js";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";
import op1 from '../Media/basic.jpg'
import op2 from '../Media/standard.jpg'
import op3 from '../Media/premium.jpg'
import op4 from '../Media/business.jpg'
import op5 from '../Media/unlimited.jpg'


function Packages() {
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [number, setnumber] = useState("");
  

  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

  const classes = useStyles();

  const save1 = (event) => {
    event.preventDefault();
    if (email && name && number) {
      db.collection("Option1")
        .add({
          email: email,
          name: name,
          number: number,
          timestamp: new Date().getTime(),
        })
        .then(alert("Thank you, We'll Contact You Shortly !!"))
        .catch((error) => {
          alert(error.message);
        });

      document.getElementById("myform").reset();
      setemail("");
      setname("");
      setnumber("");
    } else {
      alert("Please fill the field properly");
    }
  };

  const save2 = (event) => {
    event.preventDefault();
    if (email && name && number) {
      db.collection("Option2")
        .add({
          email: email,
          name: name,
          number: number,
          timestamp: new Date().getTime(),
        })
        .then(alert("Thank you, We'll Contact You Shortly !!"))
        .catch((error) => {
          alert(error.message);
        });

      document.getElementById("myform").reset();
      setemail("");
      setname("");
      setnumber("");
    } else {
      alert("Please fill the field properly");
    }
  };


  const save3 = (event) => {
    event.preventDefault();
    if (email && name && number) {
      db.collection("Option3")
        .add({
          email: email,
          name: name,
          number: number,
          timestamp: new Date().getTime(),
        })
        .then(alert("Thank you, We'll Contact You Shortly !!"))
        .catch((error) => {
          alert(error.message);
        });

      document.getElementById("myform").reset();
      setemail("");
      setname("");
      setnumber("");
    } else {
      alert("Please fill the field properly");
    }
  };


  const save4 = (event) => {
    event.preventDefault();
    if (email && name && number) {
      db.collection("Option4")
        .add({
          email: email,
          name: name,
          number: number,
          timestamp: new Date().getTime(),
        })
        .then(alert("Thank you, We'll Contact You Shortly !!"))
        .catch((error) => {
          alert(error.message);
        });

      document.getElementById("myform").reset();
      setemail("");
      setname("");
      setnumber("");
    } else {
      alert("Please fill the field properly");
    }
  };

  const save5 = (event) => {
    event.preventDefault();
    if (email && name && number) {
      db.collection("Option5")
        .add({
          email: email,
          name: name,
          number: number,
          timestamp: new Date().getTime(),
        })
        .then(alert("Thank you, We'll Contact You Shortly !!"))
        .catch((error) => {
          alert(error.message);
        });

      document.getElementById("myform").reset();
      setemail("");
      setname("");
      setnumber("");
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
          <form id="myform" className="package__form"  onSubmit={save1}>
            <label className="package__label">Name</label>
            <input
              type="text"
              onChange={(e) => setname(e.target.value)}
              placeholder="Name"
            />
            <label className="package__label">Contact No.</label>
            <input
              type="text"
              onChange={(e) => setnumber(e.target.value)}
              placeholder="Contact No."
            />
            <label className="package__label">Email</label>
            <input
              type="email"
              onChange={(e) => setemail(e.target.value)}
              placeholder="E-mail"
            />
            <br/>
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
          <img className="package__img"src={op2} alt="option1" />
        </div>
        <div class="back">
          <div className="back__tagline">Register Now !!!</div>
          <form id="myform" className="package__form" onSubmit={save2}>
            <label className="package__label">Name</label>
            <input
              type="text"
              onChange={(e) => setname(e.target.value)}
              placeholder="Name"
            />
            <label className="package__label">Contact No.</label>
            <input
             type="text"
              onChange={(e) => setnumber(e.target.value)}
              placeholder="Contact No."
            />
            <label className="package__label">Email</label>
            <input
              type="email"
              onChange={(e) => setemail(e.target.value)}
              placeholder="E-mail"
            />
            <br/>
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
        <img className="package__img"src={op3} alt="option1" />
        </div>
        <div class="back">
          <div className="back__tagline">Register Now !!!</div>
          <form id="myform" className="package__form" onSubmit={save3}>
            <label className="package__label">Name</label>
            <input
              type="text"
              onChange={(e) => setname(e.target.value)}
              placeholder="Name"
            />
            <label className="package__label">Contact No.</label>
            <input
              type="text"
              onChange={(e) => setnumber(e.target.value)}
              placeholder="Contact No."
            />
            <label className="package__label">Email</label>
            <input
              type="email"
              onChange={(e) => setemail(e.target.value)}
              placeholder="E-mail"
            />
            <br/>
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
        <img className="package__img"src={op4} alt="option1" />
        </div>
        <div class="back">
          <div className="back__tagline">Register Now !!!</div>
          <form id="myform" className="package__form" onSubmit={save4}>
            <label className="package__label">Name</label>
            <input
              type="text"
              onChange={(e) => setname(e.target.value)}
              placeholder="Name"
            />
            <label className="package__label">Contact no.</label>
            <input
             type="text"
              onChange={(e) => setnumber(e.target.value)}
              placeholder="Contact No."
            />
            <label className="package__label">Email</label>
            <input
              type="email"
              onChange={(e) => setemail(e.target.value)}
              placeholder="E-mail"
            />
            <br/>
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
        <img className="package__img"src={op5} alt="option1" />
        </div>

        <div class="back">
          <div className="back__tagline">Register Now !!!</div>
          <form id="myform" className="package__form" onSubmit={save5}>
            <label className="package__label">Name</label>
            <input
              type="text"
              onChange={(e) => setname(e.target.value)}
              placeholder="Name"
            />
            <label className="package__label">Contact No.</label>
            <input
              type="text"
              onChange={(e) => setnumber(e.target.value)}
              placeholder="Contact No."
            />
            <label className="package__label">Email</label>
            <input
              type="email"
              onChange={(e) => setemail(e.target.value)}
              placeholder="E-mail"
            />
            <br/>
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
