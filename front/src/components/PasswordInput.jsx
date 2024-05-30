import React, { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const PasswordInput = ({ label, placeholder }) => {
  // const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordShow = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  // const handlePasswordChange = (e) => {
  //   e.preventDefault();
  //   setPassword(e.target.value);
  // };

  return (
    <div className="form-input mb-3">
      <label>{label}</label>
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
        <input
          type={showPassword ? "text" : "password"}
          // value={password}
          className="form-control"
          // onChange={handlePasswordChange}
          placeholder={placeholder}
          aria-label={placeholder}
        />
        <div className="eye" onClick={togglePasswordShow}>
          {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
        </div>
      </div>
    </div>
  );
};

export default PasswordInput;
