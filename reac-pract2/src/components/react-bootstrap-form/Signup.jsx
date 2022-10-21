import React, { useState } from "react";

import {
  confirmPasswordReset,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { auth } from "../../firebase";

const Signupreact = () => {
  const countrycode = "+27";
  const [expandForm, setExpandForm] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(countrycode);
  const [otp, SetOtp] = useState();

  const generateCaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // onSignInSubmit();
        },
      },
      auth
    );
  };

  const requestOTP = (e) => {
    e.preventDefault();
    console.log(phoneNumber);
    if (phoneNumber.length >= 12) {
      setExpandForm(true);
      generateCaptcha();
      //   signInWithPhoneNumbe(auth);
      let appVerifier = window.recaptchaVerifier;
      signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
        })
        .catch((error) => {
          // Error; SMS not sent
          // ...
          console.log(error);
        });
    }
  };

  const VerifyOtp = (e) => {
    let otp = e.target.value;
    SetOtp(otp);

    if (otp.length === 6) {
      console.log(otp);

      //consfirmation Result
      let confirmationResult = window.confirmationResult;
      confirmationResult.confirm(otp).then((result) => {
        // User signed in successfully.
        const user = result.user;

        console.log(user)
        // ...
      }).catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
        alert(error)
      });
    }
  };
  return (
    <>
      <div className="formContainer">
        <form onSubmit={requestOTP}>
          <h1>Sign in with phone number</h1>
          <div className="mb-3">
            <label htmlFor="phoneNumberInput" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              className="form-control"
              id="phoneNumberInput"
              aria-describedby="emailHelp"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              maxLength={13}
            />
            <div id="phoneNumberHelp" className="form-text">
              Please Enter Your Phone Number
            </div>
          </div>

          {/* {expandForm === true ? (
            <div className="mb-3">
              <label htmlFor="phoneNumberInput" className="form-label">
                Phone Number
              </label>
              <input
                type="tel"
                className="form-control"
                id="phoneNumberInput"
                aria-describedby="emailHelp"
              />
              <div id="phoneNumberHelp" className="form-text">
                Please Enter Your Phone Number
              </div>
            </div>
          ) : null} */}

          {expandForm === true ? (
            <>
              <div className="mb-3">
                <label htmlFor="otpinput" className="form-label">
                  OTP
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="otpinput"
                  value={otp}
                  onChange={(e)=>SetOtp(e.target.value)}
                />
                <input onClick={VerifyOtp}type="submit">Verify Otp</input>
                <div id="otpHelp" className="form-text">
                  Please Enter One time Otp
                </div>
              </div>
            </>
          ) : null}

          {expandForm === false ? (
            <button type="submit" className="dark">
              Request OTP
            </button>
          ) : null}
          <div id="recaptcha-container"></div>
        </form>
      </div>
    </>
  );
};

export default Signupreact;
