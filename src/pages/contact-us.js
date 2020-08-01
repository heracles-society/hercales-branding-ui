import React, { useEffect, useState } from "react"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Radio from "@material-ui/core/Radio"
import Button from "@material-ui/core/Button"
import RadioGroup from "@material-ui/core/RadioGroup"
import TextField from "@material-ui/core/TextField"
import SendIcon from "@material-ui/icons/Send"

import * as constants from "../constants.js"

export default function ContactUs() {
  const [value, setValue] = useState("")
  const [fName, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [isValidEmail, setIsValidEmail] = useState(true)
  const [isValidPhone, setIsValidPhone] = useState(true)
  const [isSendDisabled, setIsSendDisabled] = useState(true)

  useEffect(() => {
    const isValid =
      fName !== "" &&
      lname !== "" &&
      email !== "" &&
      phone !== "" &&
      message !== "" &&
      isValidEmail &&
      isValidPhone &&
      value === "terms"
    if (isValid) {
      setIsSendDisabled(false)
    } else {
      setIsSendDisabled(true)
    }
  })

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const emailValidator = (event) => {
    if (event.target.value.match(constants.EMAIL_REGEX)) {
      setEmail(event.target.value)
      setIsValidEmail(true)
    } else {
      setIsValidEmail(false)
    }
  }

  const phoneValidator = (event) => {
    if (event.target.value.match(constants.PHONE_REGEX)) {
      setPhone(event.target.value)
      setIsValidPhone(true)
    } else {
      setIsValidPhone(false)
    }
  }

  return (
    <div className="contactus">
      <div className="wrapper">
        <div className="contact">
          <div className="heading">
            <h2 className="title">
              <span className="block">
                <span className="lineContainer">
                  <span style={{ transform: "translate(0px, 0%)" }}>
                    <font style={{ verticalAlign: "inherit" }}>{constants.TITLE}</font>
                  </span>
                </span>
                <span className="lineContainer">
                  <span style={{ transform: "translate(0px, 0%)" }}>
                    <font className="fontStyle">{constants.SUB_TITILE}</font>
                  </span>
                </span>
              </span>
            </h2>
          </div>

          <div className="contactContainer">
            <div className="formContainer">
              <form className="formGen" name="contact" action="POST" data-netlify="true">
                <TextField
                  id="standard-basic"
                  label="First Name"
                  name="First Name"
                  className="inputType"
                  style={{ marginBottom: "2rem" }}
                  onChange={(e) => setFname(e.target.value)}
                />
                <TextField
                  id="standard-basic"
                  label="Last Name"
                  name="Last Name"
                  className="inputType"
                  onChange={(e) => setLname(e.target.value)}
                />
                <TextField
                  id="standard-basic"
                  label="Email"
                  className="inputType"
                  name="Email"
                  style={{ marginBottom: "2rem" }}
                  onChange={(e) => emailValidator(e)}
                  helperText={!isValidEmail ? "Incorrect Email Address" : ""}
                />
                <TextField
                  id="standard-basic"
                  label="Phone Number"
                  name="Phone"
                  className="inputType"
                  onChange={(e) => phoneValidator(e)}
                  helperText={!isValidPhone ? "Incorrect Phone Number" : ""}
                />
                <TextField
                  id="standard-basic"
                  label="Message"
                  name="Message"
                  className="inputType"
                  style={{ width: "100%", marginBottom: "2rem" }}
                  onChange={(e) => setMessage(e.target.value)}
                />

                <RadioGroup
                  aria-label="terms"
                  name="terms"
                  value={value}
                  onChange={handleChange}
                  style={{ marginTop: "2rem" }}
                >
                  <FormControlLabel
                    value="terms"
                    style={{ color: "#717171", fontFamily: "IBM Plex Sans Condensed, sans-serif" }}
                    control={<Radio />}
                    label={constants.TERMS_CONDITION}
                  />
                </RadioGroup>

                <div className="main">
                  <div className="sub-main">
                    <Button
                      variant="contained"
                      color="primary"
                      endIcon={<SendIcon />}
                      disabled={isSendDisabled}
                      style={{
                        backgroundColor: "#05a8aa",
                      }}
                    >
                      {constants.SEND}
                    </Button>
                  </div>
                </div>
              </form>
            </div>

            <div className="info">
              <ul style={{ listStyle: "none" }}>
                <h4 className="heading">{constants.INFO_HEADING}</h4>
                <li className="listStyle">
                  {constants.CONTACT}
                  <a style={{ marginLeft: ".6rem", color: "#717171" }} href="mailto:heraclesteam2020@gmail.com">
                    {constants.SUPPORT_EMAIL}
                  </a>
                </li>
              </ul>

              <ul style={{ listStyle: "none", marginTop: "2rem" }}>
                <h4 className="heading">{constants.PHONE}</h4>
                <li className="listStyle">{constants.SUPPORT_NUMBER}</li>
              </ul>

              <ul style={{ listStyle: "none", marginTop: "2rem" }}>
                <h4 className="heading">{constants.OFFICE}</h4>
                <address className="listStyle">{constants.ADDRESS_1}</address>
                <address className="listStyle">{constants.ADDRESS_2}</address>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
