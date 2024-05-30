import React from "react";
import { useState } from "react";
import { logo, login } from "../constants/images";
import { toast } from 'react-toastify';
import { useAuth } from "../store/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";



const Forgot = () => {
  const [forgot, setForgot] = useState({
    email:"",
  });

  const handleinput =(e) => {
    let name = e.target.name;
    let value = e.target.value;

    setForgot({
        ...forgot,
        [name]:value,
    })
  };

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  
  const handlesubmit = async (e) =>{
    e.preventDefault();
    const newErrors = validateForm(forgot);
    if(setErrors(newErrors)){
      setErrors(newErrors);
    }else{
      try{
        const response = await fetch(`http://localhost:5000/api/auth/forgot`,{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify(forgot),
    
        });
        const res_data = await response.json();
        
        if(response.ok == true){
          console.log(response.ok);
            
              storeTokenInLS(res_data.token);
            // localStorage.setItem("token", res_data.token);
             setForgot({ email:""});

             toast.success('Email Verified Successfully');
             setTimeout(() => {
               navigate('/reset-password');
             }, 2000);
       
        }else{
            toast.error(res_data.extraDetails ? res_data.extraDetails :res_data.message);
        }
      }catch(error){
          console.log("login",error);
      }
    }
  }

  const validateForm = (data) => {
    const errors = {};

    if (!data.email.trim()) {
        errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = 'Email is invalid';
    }
    return errors;
  };

  const {storeTokenInLS} = useAuth();

  return (
    <div className="login forgot">
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
                <h3>Forgot your password?</h3>
                <p className="text-dark">
                  Please provide your email for verification
                </p>
                <form onSubmit={handlesubmit} className="form w-100">
                  <div className="form-input mb-3">
                    <label>Email Id</label>
                    <div class="input-group">
                      <span class="input-group-text" id="basic-addon1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M9.99935 4.47775C8.11232 4.47775 5.54208 4.63952 3.90992 4.75847C3.36787 4.79797 2.94807 5.22706 2.94807 5.75114V6.34336L9.48052 9.77454C9.80318 9.94404 10.1955 9.94404 10.5182 9.77454L17.0506 6.34336V5.75113C17.0506 5.22706 16.6308 4.79797 16.0888 4.75847C14.4566 4.63952 11.8863 4.47775 9.99935 4.47775ZM17.0506 7.72997L11.1408 10.8341C10.4309 11.207 9.56777 11.207 8.85785 10.8341L2.94807 7.72997V14.1135C2.94807 14.6375 3.36787 15.0666 3.90992 15.1061C5.54208 15.225 8.11232 15.3869 9.99935 15.3869C11.8863 15.3869 14.4566 15.225 16.0888 15.1061C16.6308 15.0666 17.0506 14.6375 17.0506 14.1135V7.72997ZM3.81138 3.54993C5.44452 3.43091 8.05825 3.26562 9.99935 3.26562C11.9404 3.26562 14.5542 3.43091 16.1873 3.54993C17.4078 3.63888 18.3327 4.60386 18.3327 5.75113V14.1135C18.3327 15.2607 17.4078 16.2257 16.1873 16.3146C14.5542 16.4337 11.9404 16.599 9.99935 16.599C8.05825 16.599 5.44452 16.4337 3.81138 16.3146C2.59087 16.2257 1.66602 15.2607 1.66602 14.1135V5.75114C1.66602 4.60387 2.59087 3.63888 3.81138 3.54993Z"
                            fill="#959595"
                          />
                        </svg>
                      </span>
                      <input type="text"  class="form-control" name="email" id="email" placeholder="Enter your email"  autoComplete="off" value={forgot.email} onChange={handleinput}/>

                    </div>
                    {errors.email &&
                        <span className="error-message">
                            {errors.email}
                        </span>
                    }
                  </div>
                  <div className="my-2 mt-3">
                    <button type="submit" className="w-100 button">Send</button>
                    
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

export default Forgot;
