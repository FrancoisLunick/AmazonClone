import React from "react";
import "../../styles/signup.css";

const Signup = () => {
  return (
    <div className="container">
      <div className="form">
        <h2 className="title">Create Account</h2>

        <label className="label">Your name</label>
        <input
          type="text"
          className="input"
          placeholder="First and last name"
        />

        <label className="label">Mobile number</label>
        <div style={{ display: "flex", marginBottom: "10px" }}>
          <select
            className="input"
            style={{ flex: "0 0 auto", width: "100px", marginRight: "10px" }}
          >
            <option value="IN">IN +91</option>
            <option value="US">US +1</option>
          </select>
          <input
            type="text"
            className="input"
            placeholder="Mobile number"
            style={{ flex: "1 1 auto" }}
          />
        </div>

        <label className="label">Password</label>
        <input
          type="password"
          className="input"
          placeholder="At least 6 characters"
        />
        <p className="info">Passwords must be at least 6 characters.</p>

        <p className="info">
          To verify your number, we will send you a text message with a
          temporary code. Message and data rates may apply.
        </p>

        <button className="button">Verify mobile number</button>

        <hr className="divider" />
        <p className="UncommonText">Buying for work?</p>
        <a href="#Create a free business account" className="text-link">
          Create a free business account
        </a>
        <div className="UncommonText flex">
          Already have an account ?{" "}
          <a href="#Sign in" className="text-link">
            Sign in
          </a>
        </div>

        <p className="info">
          By creating an account or logging in, you agree to Amazon's <span></span>
          <a href="#Conditions of Use" className="text-link">Conditions of Use</a> and
          <a href="#Privacy Policy" className="text-link"> Privacy Policy</a>.
        </p> 
      </div>
    </div>
  );
};

export default Signup;
