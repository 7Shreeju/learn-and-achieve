import React from "react";
import { useState } from "react";
import { logo, login } from "../constants/images";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "../store/auth";



const Login = () => {
  const {isLoggedIn}= useAuth();
  const navigate = useNavigate();
  
  if( isLoggedIn ){
    navigate('/');
  }
  
 const [user, setUser] = useState({
    email:"",
    password:"",
  });

  const [showPassword, setShowPassword] = useState(false);
 
 

  const togglePasswordShow = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const [errors, setErrors] = useState({});

  const handleinput =(e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
        ...user,
        [name]:value,
    })
  };

 

  
  const handlesubmit = async (e) =>{
    e.preventDefault();
    const newErrors = validateForm(user);
    if(setErrors(newErrors )){
      setErrors(newErrors);
    }else{
      try{
        const response = await fetch(`http://localhost:5000/api/auth/login`,{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify(user),
    
        });
        const res_data = await response.json();
        
        if(response.ok == true){
          localStorage.setItem("user",JSON.stringify(res_data));
          console.log(response.ok);
          
            
             setUser({ email:"", password:""});
            

             toast.success('Otp Sent Successfully');
             
              setTimeout(() => {
                navigate('/otp');
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

    if (!data.password) {
        errors.password = 'Password is required';
    } else if (data.password.length < 8) {
        errors.password = `Password must be at 
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
                      <input type="text"  class="form-control" name="email" id="email" placeholder="Enter your email"  autoComplete="off" value={user.email} onChange={handleinput}/>
                      
                    </div>
                    {errors.email &&
                        <span className="error-message">
                            {errors.email}
                        </span>
                    }
                  </div>
                  {/* <PasswordInput
                    label="Password"
                    placeholder="Enter your password"
                  
                  /> */}
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
                         value={user.password} 
                         onChange={handleinput}
                      />
                      <div className="eye" onClick={togglePasswordShow}>
                        {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                      </div>
                    </div>
                  </div>
                  {errors.password &&
                      <span className="error-message">
                          {errors.password}
                      </span>
                  }
                  <div className="text-end for">
                  <Link to={"/forgot"}>Forgot Password</Link>
                
                  </div>
                  <div className="my-2 mt-3">
                    <button type="submit" className="w-100 button">Login</button>
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

export default Login;
