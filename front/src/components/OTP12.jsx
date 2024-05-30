import React, { useState, useRef, useEffect } from "react";
import { logo, login } from "../constants/images";
import OtpInput from "react-otp-input";

const OTP = () => {
  const [otp, setOtp] = useState("");
  const otpRef = useRef();

  useEffect(() => {
    // Focus on the first input with the cursor when the component mounts
    if (otpRef.current) {
      otpRef.current.focus();
    }
  }, []);

  return (
    <div className="login">
      <div className="row">
        <div className="col-lg-10 col-md-12 col-sm-12 mx-auto">
          <div className="row g-0">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="image-side">
                <div className="image">
                  <img src={login} alt="login" />
                </div>
                <div className="text">
                  <h4>Unlock your potential with Learn and Achieve.</h4>
                  <p className="text-light">
                    Dive deep into every subject, every chapter and unit to make
                    your way easier to success.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="text-side">
                <div className="logo">
                  <img src={logo} alt="logo" />
                </div>
                <h3>OTP Verification</h3>
                <p className="text-dark">
                  Please provide your otp verification
                </p>
                <div className="form-input">
                  <label>Enter OTP</label>
                  <div className="otp-inputs mb-3">
                    <OtpInput
                      ref={otpRef}
                      value={otp}
                      onChange={(otpValue) => setOtp(otpValue)}
                      numInputs={6}
                      separator={<span></span>}
                      inputStyle={{
                        width: "3rem",
                        height: "3rem",
                        fontSize: "2rem",
                        margin: "0 1rem",
                        borderRadius: "5px",
                        border: "1px solid #ced4da",
                      }}
                    />
                  </div>
                </div>
                <form action="" className="form w-100">
                  <div className="my-2 mt-3">
                    <a href="#" className="w-100 button">
                      Verify my account
                    </a>
                  </div>
                  <div className="text-center for">
                    <p>
                      Didn’t get the code? <a href="#">Resend OTP</a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTP;
