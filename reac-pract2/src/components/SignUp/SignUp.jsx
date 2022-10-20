import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {createUserWithEmailAndPassword} from "firebase/auth"
import SignUpstyle from "./Signup.module.css";
import { auth } from "../../firebase";

const SignUp = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState("");

  const HandleSubmission = () => {
    //check all values empty or not
    if (!values.name || !values.email || !values.password) {
        setErrorMsg("Fill all the Details");
        return;
    } else {
        console.log(values)
        setErrorMsg("");
        createUserWithEmailAndPassword(auth)
    }
  };

  return (
    <>
      {" "}
      <div>
        <h2>Sign Page</h2>
        <input
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
          label="Name"
          placeholder="Enter Your Name"
        />
        <input
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          label="Email"
          placeholder="Enter Your Eamil"
        />
        <input
          onChange={(event) =>
            setValues((prev) => ({ ...prev, password: event.target.value }))
          }
          label="Password"
          placeholder="Enter Your Password"
        />
      </div>
      <div>
        <p>{errorMsg}</p>
      </div>
      <div className={SignUpstyle.footer}>
        <button onClick={HandleSubmission}>Sign Up</button>
        <span>
          <Link to="/login">Login</Link>
        </span>
      </div>
    </>
  );
};

export default SignUp;
