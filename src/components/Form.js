import React from "react";
import emailjs from "emailjs-com";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch"
    },
    "& .MuiTextField-root": {
      display: "flex",
      margin: theme.spacing(1),
      width: "25ch"
    }
  }
}));

export default () => {
  const classes = useStyles();

  const formEl = React.useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(formEl.current);
    console.log(formData);

    const name = formData.get("name");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const message = formData.get("message");
    console.log(name, email, message);

    const validateName = (name) => {
      if (name.length > 2) {
        return true;
      }
      alert("Name should have more than 2 characters.");
      return false;
    };

    const validatePhone = (phone) => {
      if (/^[\s()+-]*([0-9][\s()+-]*){6,20}$/.test(phone)) {
        return true;
      }
      alert("You have entered an invalid phone number.");
      return false;
    };

    const validateEmail = (email) => {
      if (
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          email
        )
      ) {
        return true;
      }
      alert("You have entered an invalid email address!");
      return false;
    };

    const validateMessage = (message) => {
      if (message.length > 10) {
        return true;
      }
      alert("Message should have more than 10 characters");
      return false;
    };

    const validateForm = () => {
      if (
        validateName(name) &&
        validatePhone(phone) &&
        validateEmail(email) &&
        validateMessage(message)
      ) {
        emailjs
          .send(
            "service_mizbg5z",
            "contact_form",
            {
              user_name: name,
              user_email: email,
              message: message
            },
            "user_zIKL5X6p3u0qt4CIOxsMR"
          )
          .then(
            (response) => {
              console.log(
                "SUCCESS!",
                response.status,
                response.text
              );
            },
            (err) => {
              console.log("FAILED...", err);
            }
          );
      } else {
        return false;
      }
    };
    validateForm();
    e.target.reset();
  };

  return (
    <form
      className={classes.root}
      ref={formEl}
      onSubmit={handleSubmit}
    >
      <TextField
        label="Name"
        name="name"
        variant="outlined"
        required
      />
      <TextField
        label="Phone"
        name="phone"
        variant="outlined"
        required
      />
      <TextField
        label="Email"
        name="email"
        variant="outlined"
        required
      />
      <TextField
        id="outlined-multiline-static"
        label="Message"
        name="message"
        multiline
        rows={4}
        variant="outlined"
        required
      />
      <Button
        type="submit"
        color="primary"
        variant="contained"
        className="header-cta"
      >
        Send
      </Button>
    </form>
  );
};
