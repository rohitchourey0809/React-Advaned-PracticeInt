import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {" "}
      <div>
        <Link to="/otpauth">OTP-AUTH</Link>
      </div>
      <div>
        <Link to="/"></Link>
      </div>
      <div>
        <Link to="/"></Link>
      </div>
      <div>
        <Link to="/"></Link>
      </div>
      <div>
        <Link to="/"></Link>
      </div>
    </>
  );
};

export default Navbar;
