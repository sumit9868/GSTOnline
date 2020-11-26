import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import HomeIcon from "@material-ui/icons/Home";
import { makeStyles } from "@material-ui/core/styles";
import "../CSS/Thankyou.css";

function Thankyou() {
  
  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));
  const classes = useStyles();

  return (
    <div>
      <h1>Thank you for Registering!! We'll Contact you shortly !!</h1>

      <Link to="/">
        <Button
          variant="contained"
          color="primary"
          size="small"
          className={classes.button}
          startIcon={<HomeIcon />}
        >
          <span className="gotohome__button">
          Go To Home
          </span>
          
        </Button>
      </Link>
    </div>
  );
}

export default Thankyou;
