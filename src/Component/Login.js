import { useState } from "react";
import Flag from "../images/india.png";

const Login = () => {
  const [show, setShow] = useState(false);

  const showOtp = () => {
    setShow(true);
  };

  return (
    <div className="col-md-4 mx-auto" style={{ marginTop: "150px" }}>
      <h1>Sign In</h1>

      {!show && (
        <>
          <p>
            Please enter your mobile number to login. We will send an OTP to
            verify your number.
          </p>
          <div class="input-group mb-3 mt-4">
            <span class="input-group-text" id="basic-addon1">
              <img src={Flag} />
              <span className="ms-2">+91</span>
            </span>
            <input
              type="text"
              class="form-control p-2"
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
      )}
      {show && (
        <>
          <p>
            We have sent and OTP to +919889898989. Please enter the code
            received to verify.
          </p>
          <div class="otp_input text-start mt-4 mb-2">
            <div class="d-flex align-items-center justify-content-between mt-2 gap-4">
              <input type="text" className="form-control p-2" placeholder="" />
              <input type="text" className="form-control p-2" placeholder="" />
              <input type="text" className="form-control p-2" placeholder="" />
              <input type="text" className="form-control p-2" placeholder="" />
            </div>
          </div>
          <button
            type="button"
            className="btn text-white col-md-12 p-2 fw-bold mt-4"
            style={{ backgroundColor: "#552583" }}
          >
            Verify
          </button>
        </>
      )}
    </div>
  );
};

export default Login;
