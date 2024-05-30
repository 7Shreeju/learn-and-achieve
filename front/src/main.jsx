import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./assets/scss/style.scss";
import { BrowserRouter } from "react-router-dom";

import { Authprovider } from './store/auth.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <Authprovider>
    <React.StrictMode>
      <BrowserRouter> 
        <App />
        <ToastContainer/>
      </BrowserRouter>
    </React.StrictMode>
  </Authprovider>
);
