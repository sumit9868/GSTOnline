import React, { useState } from "react";
import "../CSS/Packages.css";
import { db } from "./firebase.js";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";
import op1 from '../Media/option1.jpg'

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
      <div class="flip">
        <div class="front">
        <img className="package__img" src={op1} alt="option1" />
          <h1 class="text-shadow"></h1>
        </div>
        <div class="back">
          Register Now !!!
          <form id="myform" onSubmit={save1}>
            <input
              type="text"
              onChange={(e) => setname(e.target.value)}
              placeholder="Name"
            />
            <input
              type="text"
              onChange={(e) => setnumber(e.target.value)}
              placeholder="Contact No."
            />
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
          <img className="package__img"src={op1} alt="option1" />
          <h1 class="text-shadow"></h1>
        </div>
        <div class="back">
          Register Now !!!
          <form id="myform" onSubmit={save2}>
            <input
              type="text"
              onChange={(e) => setname(e.target.value)}
              placeholder="Name"
            />
            <input
             type="text"
              onChange={(e) => setnumber(e.target.value)}
              placeholder="Contact No."
            />
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
        <img className="package__img"src={op1} alt="option1" />
          <h1 class="text-shadow"></h1>
        </div>
        <div class="back">
          Register Now !!!
          <form id="myform" onSubmit={save3}>
            <input
              type="text"
              onChange={(e) => setname(e.target.value)}
              placeholder="Name"
            />
            <input
              type="text"
              onChange={(e) => setnumber(e.target.value)}
              placeholder="Contact No."
            />
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
        <img className="package__img"src={op1} alt="option1" />
          <h1 class="text-shadow"></h1>
        </div>
        <div class="back">
          Register Now !!!
          <form id="myform" onSubmit={save4}>
            <input
              type="text"
              onChange={(e) => setname(e.target.value)}
              placeholder="Name"
            />
            <input
             type="text"
              onChange={(e) => setnumber(e.target.value)}
              placeholder="Contact No."
            />
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
        <img className="package__img"src={op1} alt="option1" />
          <h1 class="text-shadow"></h1>
        </div>

        <div class="back">
          Register Now !!!
          <form id="myform" onSubmit={save5}>
            <input
              type="text"
              onChange={(e) => setname(e.target.value)}
              placeholder="Name"
            />
            <input
              type="text"
              onChange={(e) => setnumber(e.target.value)}
              placeholder="Contact No."
            />
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
  );
}

export default Packages;
