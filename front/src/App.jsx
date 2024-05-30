import React from "react";
import Login from "./pages/Login";
import Forgot from "./pages/Forgot";
import OTP from "./pages/OTP";
import ResetPassword from "./pages/ResetPassword";
import ClassMaster from "./pages/ClassMaster";
import SubjectMaster from "./pages/SubjectMaster";
import AddStudyMaterial from "./pages/AddStudyMaterial";
import Logout from "./pages/Logout";
import { Routes, Route, useLocation } from "react-router-dom";

const App = () => {
  return (
    <>
      {/* <Login /> */}
      <Routes>
        <Route Component={Login} path="/login" element={<Login />} />
        <Route Component={Forgot} path="/forgot" element={<Forgot />} />
        <Route
          Component={ResetPassword}
          path="/reset-password"
          element={<ResetPassword />}
        />
        <Route Component={OTP} path="/otp" element={<OTP />} />
      
        <Route path="/logout" element={<Logout />} />
        <Route Component={ClassMaster} path="/" element={<ClassMaster />} />
        <Route
          Component={SubjectMaster}
          path="/subject-master"
          element={<SubjectMaster />}
        />
        <Route
          Component={AddStudyMaterial}
          path="/add-study-material"
          element={<AddStudyMaterial />}
        />
  
      </Routes>
    </>
  );
};

export default App;
