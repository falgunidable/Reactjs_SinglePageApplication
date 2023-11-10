import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Flag from "../images/india.png";
import FetchData from "./FetchData";

const Login = () => {
  const [show, setShow] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]); // Array to store OTP digits
  const [enteredOtp, setEnteredOtp] = useState("");

  const handleInputChange = async (e, index) => {
    const inputValue = e.target.value;

    // Check if the input is a digit or if it's an empty string (backspace)
    if (/^\d$|^$/.test(inputValue)) {
      // Update the OTP array
      const updatedOtp = [...otp];
      updatedOtp[index] = inputValue;
      setOtp(updatedOtp);

      // Move focus to the previous or next input field accordingly
      if (inputValue === "" && index > 0) {
        document.getElementById(`otpInput${index - 1}`).focus();
      } else if (index < 3) {
        document.getElementById(`otpInput${index + 1}`).focus();
      }
    }
  };

  const showOtp = () => {
    setShow(true);
  };

  const verifyOtp = () => {
    const eotp = otp.join("");
    setEnteredOtp(eotp);
  };

  return (
    <div className="col-md-4 mx-auto" style={{ marginTop: "150px" }}>
      <h1>Sign In</h1>
      {!show ? (
        <>
          <p>
            Please enter your mobile number to login. We will send an OTP to
            verify your number.
          </p>
          <div className="input-group mb-3 mt-4">
            <span className="input-group-text" id="basic-addon1">
              <img src={Flag} alt="Flag" />
              <span className="ms-2">+91</span>
            </span>
            <input
              type="text"
              className="form-control p-2"
              placeholder="Phone Number"
              aria-label="Phone Number"
            />
          </div>
          <button
            type="button"
            className="btn text-white col-md-12 p-2 fw-bold mt-2"
            style={{ backgroundColor: "#552583" }}
            onClick={showOtp}
          >
            Sign In
          </button>
        </>
      ) : (
        <>
          <p>
            We have sent an OTP to +919889898989. Please enter the code received
            to verify.
          </p>
          <div className="otp_input text-start mt-4 mb-2">
            <div className="d-flex align-items-center justify-content-between mt-2 gap-4">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  className="form-control p-2"
                  placeholder=""
                  maxLength="1"
                  id={`otpInput${index}`}
                  value={digit}
                  onChange={(e) => handleInputChange(e, index)}
                />
              ))}
            </div>
          </div>
          <button
            type="button"
            className="btn text-white col-md-12 p-2 fw-bold mt-4"
            style={{ backgroundColor: "#552583" }}
            onClick={verifyOtp}
          >
            Verify
          </button>
        </>
      )}
      {enteredOtp && <FetchData enteredOtp={enteredOtp} />}
    </div>
  );
};

export default Login;
