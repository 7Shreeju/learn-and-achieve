import React, { useState, useEffect  } from "react";
import { logo, login } from "../constants/images";
import OtpInput from "react-otp-input";
import { useAuth } from "../store/auth";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";




const OTP = () => { 
  const lemail= JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
 
    useEffect(() => {
        if (lemail && lemail.email) {
            setEmail(lemail.email);
        }
    }, [email]);

  const [otp, setOtp] = useState("");

  const handlesubmit = async (e) =>{
    e.preventDefault();
 
      try{
        const response = await fetch(`http://localhost:5000/api/auth/otpverify`,{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify({ otp, email }),
        });
        const res_data = await response.json();
        
        if(response.ok == true){
          console.log(response.ok);
          storeTokenInLS(res_data.token);

             setOtp('');
             setEmail('');
          
            toast.success('Login Successfully');
              setTimeout(() => {
                navigate('/');
              }, 2000);

        }else{
            toast.error(res_data.extraDetails ? res_data.extraDetails :res_data.message);
        }
      }catch(error){
          console.log("otp",error);
      }
  
  }

  const handleresendOTP = async (e) => {
    e.preventDefault();
 
    try{
    const response = await fetch('http://localhost:5000/api/auth/resendverify', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
    });
    const res_data = await response.json();
        
        if(response.ok == true){
          console.log(response.ok);
            toast.success('Otp Sent Successfully');
        }else{
            toast.error(res_data.extraDetails ? res_data.extraDetails :res_data.message);
        }
      }catch(error){
        console.log("resendotp",error);
      }
  };
  const { Destroyotpuser, storeTokenInLS } = useAuth();
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
                
                <form onSubmit={handlesubmit} className="form w-100">
                  <div className="form-input">
                    <label>Enter OTP</label>
                    <div className="otp-inputs mb-3">
                    <OtpInput
                      value={otp}
                      onChange={setOtp}
                      shouldAutoFocus
                      numInputs={6}
                     
                      renderSeparator={<span></span>}
                      renderInput={(props) => <input {...props} />}
                    />
                    </div>
                  
                  </div>
                  
                  <div className="my-2 mt-3">
                    <button type="submit" className="w-100 button">Verify my account</button>
                  </div>
                  <div className="text-center for">
                    <p>
                      Didn’t get the code? <a href="#" onClick={handleresendOTP}>Resend OTP</a>
                    </p>
                  </div>
                  <div className="text-center for">
                  <Link to={"/login"}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M13.7784 5.92988C14.0469 6.19836 14.0469 6.63367 13.7784 6.90215L9.68129 10.9993L13.7784 15.0966C14.0469 15.3651 14.0469 15.8003 13.7784 16.0688C13.5099 16.3373 13.0747 16.3373 12.8062 16.0688L8.22285 11.4855C8.09392 11.3566 8.02148 11.1817 8.02148 10.9993C8.02148 10.817 8.09392 10.6421 8.22285 10.5132L12.8062 5.92988C13.0747 5.66139 13.5099 5.66139 13.7784 5.92988Z"
                          fill="#14489F"
                        />
                      </svg>{" "}
                      Back to login
                      </Link>
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
