import React from "react";
import { useState, useEffect } from "react";
import { logo, login } from "../constants/images";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
// import PasswordInput from "./PasswordInput";

import { useAuth } from "../store/auth";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";



const ResetPassword = () => {


  const { user } = useAuth(); 
  const [email, setEmail] = useState("");
  

    useEffect(() => {
        if (user && user.email) {
            setEmail(user.email);
        }
    }, [email]);

    const [reset, setReset] = useState({
      password:"",
      cpassword:"",
    });

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordShow = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const [errors, setErrors] = useState({});

  const handleinput =(e) => {
    let name = e.target.name;
    let value = e.target.value;

    setReset({
        ...reset,
        [name]:value,
    })
  };

  const handlesubmit = async (e) =>{
    e.preventDefault();
    const newErrors = validateForm(reset);
    if(setErrors(newErrors)){
      setErrors(newErrors);
    }else{
      try{
        const response = await fetch(`http://localhost:5000/api/auth/resetpassword`,{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify({ email, reset}),
    
        });
        const res_data = await response.json();
        
        if(response.ok == true){
          console.log(response.ok);
            
            setReset({ password:"", cpassword:""});

            toast.success('Password Changed Successfully');
             setTimeout(() => {
               navigate('/login');
             }, 2000);
           
        }else{
            toast.error(res_data.extraDetails ? res_data.extraDetails :res_data.message);
        }
      }catch(error){
          console.log("resetpassword",error);
      }
    }
  }
  
  const validateForm = (data) => {
    const errors = {};


    if (!data.password) {
        errors.password = 'Password is required';
    } else if (data.password.length < 8) {
        errors.password = `Password must be at 
        least 8 characters long`;
    }
    if (!data.cpassword) {
      errors.cpassword = `Password is required`;
    }else if (data.password != data.cpassword ) {
      errors.cpassword = `Password and Confirm Password is not Matching`;
    } else if (data.cpassword.length < 8) {
        errors.cpassword = `Password must be at 
        least 8 characters long`;
    }

    return errors;
  };

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
                <h3>Welcome back!</h3>
                <p className="text-dark">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                </p>
                <form onSubmit={handlesubmit} className="form w-100">
                <div className="form-input mb-3">
                    <label>Password</label>
                    <div className="input-group">
                      <span class="input-group-text">
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
                            d="M10.0001 3.125C8.3953 3.125 7.0918 4.42851 7.0918 6.03335V8.125H5.8418V6.03335C5.8418 3.73815 7.70495 1.875 10.0001 1.875C12.2953 1.875 14.1584 3.73815 14.1584 6.03335V8.125H12.9084V6.03335C12.9084 4.42851 11.6049 3.125 10.0001 3.125Z"
                            fill="#959595"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M10 12.375C10.3451 12.375 10.625 12.6548 10.625 13V14.5C10.625 14.8452 10.3451 15.125 10 15.125C9.6548 15.125 9.375 14.8452 9.375 14.5V13C9.375 12.6548 9.6548 12.375 10 12.375Z"
                            fill="#959595"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M9.99976 11.75C9.82946 11.75 9.69141 11.888 9.69141 12.0583C9.69141 12.2286 9.82946 12.3666 9.99976 12.3666C10.17 12.3666 10.3081 12.2286 10.3081 12.0583C10.3081 11.888 10.17 11.75 9.99976 11.75ZM8.44141 12.0583C8.44141 11.1977 9.13911 10.5 9.99976 10.5C10.8604 10.5 11.5581 11.1977 11.5581 12.0583C11.5581 12.9189 10.8604 13.6166 9.99976 13.6166C9.13911 13.6166 8.44141 12.9189 8.44141 12.0583Z"
                            fill="#959595"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M6.66732 8.375C5.17157 8.375 3.95898 9.58755 3.95898 11.0834V14.1666C3.95898 15.6624 5.17157 16.875 6.66732 16.875H13.334C14.8298 16.875 16.0423 15.6624 16.0423 14.1666V11.0834C16.0423 9.58755 14.8298 8.375 13.334 8.375H6.66732ZM2.70898 11.0834C2.70898 8.8972 4.48119 7.125 6.66732 7.125H13.334C15.5201 7.125 17.2923 8.8972 17.2923 11.0834V14.1666C17.2923 16.3528 15.5201 18.125 13.334 18.125H6.66732C4.48119 18.125 2.70898 16.3528 2.70898 14.1666V11.0834Z"
                            fill="#959595"
                          />
                        </svg>
                      </span>
                      <input name="password"
                        label="Password"
                        className="form-control"
                        placeholder="Enter your password"
                        type={showPassword ? "text" : "password"}
                        autoComplete="off"
                         value={reset.password} 
                         onChange={handleinput}
                      />
                      <div className="eye" onClick={togglePasswordShow}>
                        {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                      </div>
                    </div>
                    {errors.password &&
                        <span className="error-message">
                            {errors.password}
                        </span>
                    }
                  </div>
                  
                  <div className="form-input mb-3">
                    <label>Password</label>
                    <div className="input-group">
                      <span class="input-group-text">
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
                            d="M10.0001 3.125C8.3953 3.125 7.0918 4.42851 7.0918 6.03335V8.125H5.8418V6.03335C5.8418 3.73815 7.70495 1.875 10.0001 1.875C12.2953 1.875 14.1584 3.73815 14.1584 6.03335V8.125H12.9084V6.03335C12.9084 4.42851 11.6049 3.125 10.0001 3.125Z"
                            fill="#959595"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M10 12.375C10.3451 12.375 10.625 12.6548 10.625 13V14.5C10.625 14.8452 10.3451 15.125 10 15.125C9.6548 15.125 9.375 14.8452 9.375 14.5V13C9.375 12.6548 9.6548 12.375 10 12.375Z"
                            fill="#959595"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M9.99976 11.75C9.82946 11.75 9.69141 11.888 9.69141 12.0583C9.69141 12.2286 9.82946 12.3666 9.99976 12.3666C10.17 12.3666 10.3081 12.2286 10.3081 12.0583C10.3081 11.888 10.17 11.75 9.99976 11.75ZM8.44141 12.0583C8.44141 11.1977 9.13911 10.5 9.99976 10.5C10.8604 10.5 11.5581 11.1977 11.5581 12.0583C11.5581 12.9189 10.8604 13.6166 9.99976 13.6166C9.13911 13.6166 8.44141 12.9189 8.44141 12.0583Z"
                            fill="#959595"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M6.66732 8.375C5.17157 8.375 3.95898 9.58755 3.95898 11.0834V14.1666C3.95898 15.6624 5.17157 16.875 6.66732 16.875H13.334C14.8298 16.875 16.0423 15.6624 16.0423 14.1666V11.0834C16.0423 9.58755 14.8298 8.375 13.334 8.375H6.66732ZM2.70898 11.0834C2.70898 8.8972 4.48119 7.125 6.66732 7.125H13.334C15.5201 7.125 17.2923 8.8972 17.2923 11.0834V14.1666C17.2923 16.3528 15.5201 18.125 13.334 18.125H6.66732C4.48119 18.125 2.70898 16.3528 2.70898 14.1666V11.0834Z"
                            fill="#959595"
                          />
                        </svg>
                      </span>
                      <input name="cpassword"
                        label="Confirm Password"
                        className="form-control"
                        placeholder="Enter your Confirm password"
                        type={showPassword ? "text" : "password"}
                        autoComplete="off"
                         value={reset.cpassword} 
                         onChange={handleinput}
                      />
                      <div className="eye" onClick={togglePasswordShow}>
                        {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                      </div>
                    </div>
                    {errors.cpassword &&
                        <span className="error-message">
                            {errors.cpassword}
                        </span>
                    }
                  </div>
                  <div className="my-2 mt-3">
                    <button type="submit" className="w-100 button">Reset Password</button>
                  </div>
                  <div className="text-center for">
                  <Link to={'/login'}>
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

export default ResetPassword;
