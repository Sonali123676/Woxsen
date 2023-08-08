import React, { useState } from "react";
import axios from "axios";
import "./SignInSignUp.css";

const SignInSignUpPage = ({ onLoginSuccess }) => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState("");

  const handleToggleForm = () => {
    if (showSignUp && showOtp) {
      setShowOtp(false); // If the OTP section is visible and we want to toggle the form, hide the OTP section
    } else {
      setShowSignUp(!showSignUp);
    }
    setError("");
  };

  const handleSignIn = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });
      console.log(response.data); // This should print the response from the server
      const { token, userId } = response.data;

      // Save the token and user ID in local storage or a state variable
      localStorage.setItem("token", token);
      localStorage.setItem("userId", userId);
      onLoginSuccess(); // Call the onLoginSuccess function passed as a prop
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const handleSignUp = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/signup", {
        name,
        email,
        password,
      });
      console.log(response.data); // This should print the response from the server

      // If the server sends an error message, set the error state and don't show the OTP section
      if (response.data.message !== "User registered successfully") {
        setError(response.data.message);
      } else {
        // If the server sends a "success" message after signup, show the OTP input field
        setShowOtp(true);
      }
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const handleOtpSubmit = async () => {
    try {
      // Make an API call to submit the OTP and complete the signup process
      // You need to define the endpoint and the server's behavior to handle OTP verification.
      // For this example, let's assume the endpoint is "/api/verify-otp".
      const response = await axios.post(
        "http://localhost:5000/api/verify-otp",
        {
          email,
          otp,
        }
      );

      // Handle the response accordingly, e.g., if the OTP is verified successfully, log in the user.
      // If the server sends a token and user ID, save them to local storage or a state variable.
      // For simplicity, let's assume the server sends a "success" message for verified OTP.
      if (response.data.message === "success") {
        // Save the token and user ID in local storage or a state variable
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.userId);
        onLoginSuccess(); // Call the onLoginSuccess function passed as a prop
      }
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="body">
      <div className={`cont ${showSignUp ? "s-signup" : ".cont"}`}>
        <div className="form sign-in">
          <h2>Sign In</h2>
          <br />

          <label className="label">
            <span className="span">WOXSEN Email Address</span>
            <input
              className="input"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="label">
            <span className="span">Password</span>
            <input
              className="input"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button className="submit" type="button" onClick={handleSignIn}>
            Sign In
          </button>
          <p className="forgot-pass">Forgot Password ?</p>
          {error && <p className="error">{error}</p>}
        </div>

        <div className="sub-cont">
          <div className="img">
            <div className="img-text m-up">
              <br />
              <br />
              <h2>New here?</h2>
              <p>
                Sign up if you are new here! and explore woxsen food management
              </p>
            </div>
            <div className="img-text m-in">
              <h2>Already have an Account</h2>
              <br />
              <br />
              <p>
                If you already have an account, just sign in. We've missed you!
              </p>
            </div>
            <div className="img-btn" onClick={handleToggleForm}>
              <span className="m-up">Sign Up</span>
              <span className="m-in">Sign In</span>
            </div>
          </div>
          <div className="form sign-up">
            <h2>Sign Up</h2>
            <label className="label">
              <span className="span">Name</span>
              <input
                className="input"
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label className="label">
              <span className="span">WOXSEN Mail</span>
              <input
                className="input"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className="label">
              <span className="span">Password</span>
              <input
                className="input"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <label className="label">
              <span className="span">Confirm Password</span>
              <input
                className="input"
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </label>

            <button type="button" className="submit" onClick={handleSignUp}>
              Sign Up Now
            </button>
            {error && <p className="error">{error}</p>}
            {showOtp && (
              <>
                <label className="label">
                  <span className="span">Enter OTP</span>
                  <input
                    className="input"
                    type="text"
                    name="otp"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                </label>
                <button
                  type="button"
                  className="submit"
                  onClick={handleOtpSubmit}
                >
                  Submit OTP
                </button>
                {error && <p className="error">{error}</p>}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInSignUpPage;
