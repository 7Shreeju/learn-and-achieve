import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Notfound, noModule, welldone } from "../constants/images";
import { Link } from "react-router-dom";
import FroalaEditor from "react-froala-wysiwyg";
import "froala-editor/css/froala_editor.pkgd.min.css";
import {
  Delete,
  Edit,
  ButtonPlus,
  ArrowLeft,
  ButtonArrowRight,
  UploadFile,
} from "../components/SvgIcons";

const AddStudyMaterial = () => {
  // Add files
  const [files, setFiles] = useState([]);
  const handleFileChange = (event) => {
    const newFiles = Array.from(event.target.files);
    setFiles([...files, ...newFiles]);
  };
  const handleDelete = (fileName) => {
    const updatedFiles = files.filter((file) => file.name !== fileName);
    setFiles(updatedFiles);
  };

  // Add links
  const [links, setLinks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddLink = () => {
    if (inputValue.trim() !== "") {
      setLinks([...links, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleDeleteLink = (index) => {
    const updatedFiles = links.filter((_, i) => i !== index);
    setLinks(updatedFiles);
  };
  return (
    <>
      <div className="dashboard">
        <Sidebar />
        <div className="db-body">
          <Navbar />

          {/* ****************** Section start****************/}
          <div className="addstudy">
            <div className="container-fluid  px-lg-4">
              <div className="db-head">
                <h4>Class master</h4>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">Dashboard</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Study Material
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="white-bg">
                <div className="section-title">
                  <h2>Add Study Material</h2>
                </div>
                <div className="tabcontent">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#home"
                        type="button"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        1
                      </button>
                    </li>
                    <li className="nav-item line" role="presentation">
                      <button
                        className="nav-link"
                        id="profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#profile"
                        type="button"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        2
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="contact-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#contact"
                        type="button"
                        role="tab"
                        aria-controls="contact"
                        aria-selected="false"
                      >
                        3
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="home"
                      role="tabpanel"
                      aria-labelledby="home-tab"
                    >
                      <div className="tab">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="contant">
                              <select
                                name="class"
                                className="class select-option"
                              >
                                <option value="Select">Select</option>
                                <option value="Class 1">Class 1</option>
                                <option value="Class 2">Class 2</option>
                                <option value="Class 3">Class 3</option>
                                <option value="Class 4">Class 4</option>
                                <option value="Class 5">Class 5</option>
                                <option value="Class 6">Class 6</option>
                                <option value="Class 7">Class 7</option>
                              </select>
                              <label className="lable" htmlFor="class">
                                Select Class <span>*</span>
                              </label>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="contant">
                              <select
                                name="medium"
                                className="medium select-option"
                              >
                                <option value="Select">Select</option>
                                <option value="English">English</option>
                                <option value="Marathi">Marathi</option>
                                <option value="Hindi">Hindi</option>
                              </select>
                              <label className="lable" htmlFor="medium">
                                Select Medium <span>*</span>
                              </label>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="contant">
                              <select
                                name="subject"
                                className="subject select-option"
                              >
                                <option value="Select">Select</option>
                                <option value="History">History</option>
                                <option value="Math">Math</option>
                                <option value="Physics">Physics</option>
                                <option value="Electronics">Electronics</option>
                                <option value="Biology">Biology</option>
                              </select>
                              <label className="lable" htmlFor="class">
                                Select Subject <span>*</span>
                              </label>
                            </div>
                          </div>
                          <div className="col-lg-12 d-flex justify-content-end">
                            <button
                              className="svg-button"
                              data-bs-toggle="modal"
                              href="#delete-popup"
                              role="button"
                            >
                              Next Step
                              <span>
                                <svg
                                  width="15"
                                  height="9"
                                  viewBox="0 0 15 9"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M1.26088 5.12578H12.2399L10.183 7.18269C9.59218 7.7735 10.4784 8.65969 11.0692 8.06888L12.9425 6.1927L14.193 4.94023C14.4354 4.69642 14.4354 4.30267 14.193 4.05887L11.0692 0.931442C10.9504 0.809316 10.7868 0.740792 10.6163 0.742209C10.0537 0.74228 9.77761 1.42756 10.183 1.8177L12.2448 3.87461H1.22853C0.362035 3.9176 0.426733 5.16892 1.26088 5.12578Z"
                                    fill="white"
                                  />
                                </svg>
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="profile"
                      role="tabpanel"
                      aria-labelledby="profile-tab"
                    >
                      <div className="tab">
                        <div className="cards">
                          <div className="cardhead">
                            <div className="inputbar">
                              <div class="search">
                                <input
                                  type="search"
                                  placeholder="search"
                                  name=""
                                  id=""
                                />
                                <button>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                  >
                                    <path
                                      d="M13.428 12.4867L11.2659 10.3246C11.9212 9.4668 12.2805 8.42635 12.2807 7.32845C12.2807 6.00537 11.7654 4.76139 10.8297 3.82585C9.89412 2.8903 8.65031 2.375 7.32707 2.375C6.00399 2.375 4.76001 2.8903 3.82446 3.82585C1.89315 5.75732 1.89315 8.8999 3.82446 10.8311C4.76001 11.7668 6.00399 12.2821 7.32707 12.2821C8.42497 12.2819 9.46541 11.9225 10.3232 11.2673L12.4853 13.4294C12.6153 13.5596 12.7861 13.6247 12.9566 13.6247C13.1272 13.6247 13.2979 13.5596 13.428 13.4294C13.6884 13.1691 13.6884 12.7469 13.428 12.4867ZM4.76717 9.88835C3.35571 8.47689 3.35588 6.18018 4.76717 4.76855C5.45093 4.08496 6.36011 3.70833 7.32707 3.70833C8.29419 3.70833 9.20321 4.08496 9.88696 4.76855C10.5707 5.45231 10.9473 6.36149 10.9473 7.32845C10.9473 8.29557 10.5707 9.20459 9.88696 9.88835C9.20321 10.5721 8.29419 10.9487 7.32707 10.9487C6.36011 10.9487 5.45093 10.5721 4.76717 9.88835Z"
                                      fill="#5E5E5E"
                                    ></path>
                                  </svg>
                                </button>
                              </div>
                              <button
                                className="svg-button"
                                data-bs-toggle="modal"
                                href="#add-popup"
                                role="button"
                              >
                                Add Module
                                <span>
                                  <ButtonPlus />
                                </span>
                              </button>
                            </div>
                          </div>
                          <div className="card-start">
                            <div className="card-col">
                              <div className="card">
                                <div className="card-content">
                                  <div className="delete">
                                    <div className="edit">
                                      <button
                                        type="button"
                                        className="edit-btn"
                                        data-bs-toggle="modal"
                                        href="#edit-popup"
                                        role="button"
                                      >
                                        <Delete />
                                      </button>
                                      <button
                                        type="button"
                                        className="delete-btn"
                                      >
                                        <svg
                                          width="14"
                                          height="15"
                                          viewBox="0 0 14 15"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M5.28427 6.83455C5.55904 6.80708 5.80405 7.00755 5.83152 7.28235L6.16485 10.6157C6.19238 10.8904 5.99185 11.1355 5.71712 11.1629C5.44234 11.1904 5.19731 10.9899 5.16984 10.7151L4.8365 7.38181C4.80902 7.10708 5.0095 6.86201 5.28427 6.83455Z"
                                            fill="#FF3535"
                                          />
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M8.7171 6.83455C8.99183 6.86201 9.1923 7.10708 9.16483 7.38181L8.8315 10.7151C8.80403 10.9899 8.55903 11.1904 8.28423 11.1629C8.0095 11.1355 7.80903 10.8904 7.8365 10.6157L8.16983 7.28235C8.1973 7.00755 8.4423 6.80708 8.7171 6.83455Z"
                                            fill="#FF3535"
                                          />
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M5.74953 0.832044H8.00386C8.14813 0.831951 8.27379 0.831871 8.39246 0.850824C8.86133 0.925691 9.26706 1.21813 9.48633 1.63926C9.54186 1.74585 9.58153 1.8651 9.62706 2.00199L9.70146 2.22526C9.71406 2.26305 9.71766 2.27375 9.72073 2.28218C9.83746 2.60492 10.1401 2.82309 10.4833 2.83179C10.4923 2.83202 10.5033 2.83206 10.5433 2.83206H12.5433C12.8195 2.83206 13.0433 3.05591 13.0433 3.33206C13.0433 3.6082 12.8195 3.83206 12.5433 3.83206H1.20996C0.933821 3.83206 0.709961 3.6082 0.709961 3.33206C0.709961 3.05591 0.933821 2.83206 1.20996 2.83206H3.21002C3.25005 2.83206 3.26109 2.83202 3.27012 2.83179C3.61322 2.82309 3.9159 2.60494 4.03265 2.28219C4.03571 2.2737 4.03925 2.26324 4.05191 2.22526L4.12631 2.002C4.17184 1.86512 4.21151 1.74585 4.26702 1.63926C4.48631 1.21813 4.89205 0.925691 5.36091 0.850824C5.47959 0.831871 5.60527 0.831951 5.74953 0.832044ZM4.88206 2.83206C4.9164 2.76471 4.94683 2.69472 4.97301 2.62235C4.98096 2.60037 4.98876 2.57698 4.99877 2.54692L5.06531 2.34731C5.12609 2.16497 5.14009 2.12778 5.15397 2.10112C5.22707 1.96074 5.36231 1.86327 5.5186 1.83831C5.54829 1.83357 5.58798 1.83206 5.78019 1.83206H7.97319C8.16539 1.83206 8.20506 1.83357 8.23479 1.83831C8.39106 1.86327 8.52633 1.96074 8.59939 2.10112C8.61326 2.12778 8.62726 2.16496 8.68806 2.34731L8.75453 2.5468L8.78039 2.62236C8.80653 2.69473 8.83699 2.76471 8.87133 2.83206H4.88206Z"
                                            fill="#FF3535"
                                          />
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M2.41207 5.16519C2.6876 5.14682 2.92585 5.35529 2.94423 5.63082L3.25085 10.2302C3.31075 11.1288 3.35344 11.754 3.44715 12.2244C3.53805 12.6807 3.66494 12.9223 3.84722 13.0928C4.02949 13.2633 4.27893 13.3739 4.74027 13.4342C5.21587 13.4964 5.84255 13.4974 6.74309 13.4974H7.25869C8.15922 13.4974 8.78589 13.4964 9.26149 13.4342C9.72282 13.3739 9.97229 13.2633 10.1546 13.0928C10.3368 12.9223 10.4638 12.6807 10.5546 12.2244C10.6484 11.754 10.691 11.1288 10.751 10.2302L11.0576 5.63082C11.0759 5.35529 11.3142 5.14682 11.5897 5.16519C11.8652 5.18356 12.0737 5.42181 12.0554 5.69734L11.7464 10.3318C11.6894 11.187 11.6434 11.8777 11.5354 12.4198C11.4231 12.9833 11.2322 13.4541 10.8378 13.823C10.4434 14.192 9.96095 14.3512 9.39122 14.4257C8.84315 14.4974 8.15089 14.4974 7.29382 14.4974H6.70795C5.85089 14.4974 5.15859 14.4974 4.61056 14.4257C4.04079 14.3512 3.55843 14.192 3.16403 13.823C2.76963 13.4541 2.57869 12.9833 2.46643 12.4198C2.35844 11.8777 2.3124 11.187 2.25541 10.3318L1.94644 5.69734C1.92807 5.42181 2.13654 5.18356 2.41207 5.16519Z"
                                            fill="#FF3535"
                                          />
                                        </svg>
                                      </button>
                                    </div>
                                  </div>
                                  <div className="content">
                                    <h2>
                                      Chapter 1: Lorem Ipsum is simply dummy
                                    </h2>
                                  </div>
                                  <button className="svg-button-2">
                                    Add Topic
                                    <span>
                                      <svg
                                        width="15"
                                        height="9"
                                        viewBox="0 0 15 9"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M1.26088 5.12578H12.2399L10.183 7.18269C9.59218 7.7735 10.4784 8.65969 11.0692 8.06888L12.9425 6.1927L14.193 4.94023C14.4354 4.69642 14.4354 4.30267 14.193 4.05887L11.0692 0.931442C10.9504 0.809316 10.7868 0.740792 10.6163 0.742209C10.0537 0.74228 9.77761 1.42756 10.183 1.8177L12.2448 3.87461H1.22853C0.362035 3.9176 0.426733 5.16892 1.26088 5.12578Z"
                                          fill="#14489F"
                                        />
                                      </svg>
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="card-col">
                              <div className="card">
                                <div className="card-content">
                                  <div className="delete">
                                    <div className="edit">
                                      <button
                                        type="button"
                                        className="edit-btn"
                                        data-bs-toggle="modal"
                                        href="#edit-popup"
                                        role="button"
                                      >
                                        <Delete />
                                      </button>
                                      <button
                                        type="button"
                                        className="delete-btn"
                                      >
                                        <svg
                                          width="14"
                                          height="15"
                                          viewBox="0 0 14 15"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M5.28427 6.83455C5.55904 6.80708 5.80405 7.00755 5.83152 7.28235L6.16485 10.6157C6.19238 10.8904 5.99185 11.1355 5.71712 11.1629C5.44234 11.1904 5.19731 10.9899 5.16984 10.7151L4.8365 7.38181C4.80902 7.10708 5.0095 6.86201 5.28427 6.83455Z"
                                            fill="#FF3535"
                                          />
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M8.7171 6.83455C8.99183 6.86201 9.1923 7.10708 9.16483 7.38181L8.8315 10.7151C8.80403 10.9899 8.55903 11.1904 8.28423 11.1629C8.0095 11.1355 7.80903 10.8904 7.8365 10.6157L8.16983 7.28235C8.1973 7.00755 8.4423 6.80708 8.7171 6.83455Z"
                                            fill="#FF3535"
                                          />
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M5.74953 0.832044H8.00386C8.14813 0.831951 8.27379 0.831871 8.39246 0.850824C8.86133 0.925691 9.26706 1.21813 9.48633 1.63926C9.54186 1.74585 9.58153 1.8651 9.62706 2.00199L9.70146 2.22526C9.71406 2.26305 9.71766 2.27375 9.72073 2.28218C9.83746 2.60492 10.1401 2.82309 10.4833 2.83179C10.4923 2.83202 10.5033 2.83206 10.5433 2.83206H12.5433C12.8195 2.83206 13.0433 3.05591 13.0433 3.33206C13.0433 3.6082 12.8195 3.83206 12.5433 3.83206H1.20996C0.933821 3.83206 0.709961 3.6082 0.709961 3.33206C0.709961 3.05591 0.933821 2.83206 1.20996 2.83206H3.21002C3.25005 2.83206 3.26109 2.83202 3.27012 2.83179C3.61322 2.82309 3.9159 2.60494 4.03265 2.28219C4.03571 2.2737 4.03925 2.26324 4.05191 2.22526L4.12631 2.002C4.17184 1.86512 4.21151 1.74585 4.26702 1.63926C4.48631 1.21813 4.89205 0.925691 5.36091 0.850824C5.47959 0.831871 5.60527 0.831951 5.74953 0.832044ZM4.88206 2.83206C4.9164 2.76471 4.94683 2.69472 4.97301 2.62235C4.98096 2.60037 4.98876 2.57698 4.99877 2.54692L5.06531 2.34731C5.12609 2.16497 5.14009 2.12778 5.15397 2.10112C5.22707 1.96074 5.36231 1.86327 5.5186 1.83831C5.54829 1.83357 5.58798 1.83206 5.78019 1.83206H7.97319C8.16539 1.83206 8.20506 1.83357 8.23479 1.83831C8.39106 1.86327 8.52633 1.96074 8.59939 2.10112C8.61326 2.12778 8.62726 2.16496 8.68806 2.34731L8.75453 2.5468L8.78039 2.62236C8.80653 2.69473 8.83699 2.76471 8.87133 2.83206H4.88206Z"
                                            fill="#FF3535"
                                          />
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M2.41207 5.16519C2.6876 5.14682 2.92585 5.35529 2.94423 5.63082L3.25085 10.2302C3.31075 11.1288 3.35344 11.754 3.44715 12.2244C3.53805 12.6807 3.66494 12.9223 3.84722 13.0928C4.02949 13.2633 4.27893 13.3739 4.74027 13.4342C5.21587 13.4964 5.84255 13.4974 6.74309 13.4974H7.25869C8.15922 13.4974 8.78589 13.4964 9.26149 13.4342C9.72282 13.3739 9.97229 13.2633 10.1546 13.0928C10.3368 12.9223 10.4638 12.6807 10.5546 12.2244C10.6484 11.754 10.691 11.1288 10.751 10.2302L11.0576 5.63082C11.0759 5.35529 11.3142 5.14682 11.5897 5.16519C11.8652 5.18356 12.0737 5.42181 12.0554 5.69734L11.7464 10.3318C11.6894 11.187 11.6434 11.8777 11.5354 12.4198C11.4231 12.9833 11.2322 13.4541 10.8378 13.823C10.4434 14.192 9.96095 14.3512 9.39122 14.4257C8.84315 14.4974 8.15089 14.4974 7.29382 14.4974H6.70795C5.85089 14.4974 5.15859 14.4974 4.61056 14.4257C4.04079 14.3512 3.55843 14.192 3.16403 13.823C2.76963 13.4541 2.57869 12.9833 2.46643 12.4198C2.35844 11.8777 2.3124 11.187 2.25541 10.3318L1.94644 5.69734C1.92807 5.42181 2.13654 5.18356 2.41207 5.16519Z"
                                            fill="#FF3535"
                                          />
                                        </svg>
                                      </button>
                                    </div>
                                  </div>
                                  <div className="content">
                                    <h2>
                                      Chapter 1: Lorem Ipsum is simply dummy
                                    </h2>
                                  </div>
                                  <button className="svg-button-2">
                                    Add Topic
                                    <span>
                                      <svg
                                        width="15"
                                        height="9"
                                        viewBox="0 0 15 9"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M1.26088 5.12578H12.2399L10.183 7.18269C9.59218 7.7735 10.4784 8.65969 11.0692 8.06888L12.9425 6.1927L14.193 4.94023C14.4354 4.69642 14.4354 4.30267 14.193 4.05887L11.0692 0.931442C10.9504 0.809316 10.7868 0.740792 10.6163 0.742209C10.0537 0.74228 9.77761 1.42756 10.183 1.8177L12.2448 3.87461H1.22853C0.362035 3.9176 0.426733 5.16892 1.26088 5.12578Z"
                                          fill="#14489F"
                                        />
                                      </svg>
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="card-col">
                              <div className="card">
                                <div className="card-content">
                                  <div className="delete">
                                    <div className="edit">
                                      <button
                                        type="button"
                                        className="edit-btn"
                                        data-bs-toggle="modal"
                                        href="#edit-popup"
                                        role="button"
                                      >
                                        <Delete />
                                      </button>
                                      <button
                                        type="button"
                                        className="delete-btn"
                                      >
                                        <svg
                                          width="14"
                                          height="15"
                                          viewBox="0 0 14 15"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M5.28427 6.83455C5.55904 6.80708 5.80405 7.00755 5.83152 7.28235L6.16485 10.6157C6.19238 10.8904 5.99185 11.1355 5.71712 11.1629C5.44234 11.1904 5.19731 10.9899 5.16984 10.7151L4.8365 7.38181C4.80902 7.10708 5.0095 6.86201 5.28427 6.83455Z"
                                            fill="#FF3535"
                                          />
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M8.7171 6.83455C8.99183 6.86201 9.1923 7.10708 9.16483 7.38181L8.8315 10.7151C8.80403 10.9899 8.55903 11.1904 8.28423 11.1629C8.0095 11.1355 7.80903 10.8904 7.8365 10.6157L8.16983 7.28235C8.1973 7.00755 8.4423 6.80708 8.7171 6.83455Z"
                                            fill="#FF3535"
                                          />
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M5.74953 0.832044H8.00386C8.14813 0.831951 8.27379 0.831871 8.39246 0.850824C8.86133 0.925691 9.26706 1.21813 9.48633 1.63926C9.54186 1.74585 9.58153 1.8651 9.62706 2.00199L9.70146 2.22526C9.71406 2.26305 9.71766 2.27375 9.72073 2.28218C9.83746 2.60492 10.1401 2.82309 10.4833 2.83179C10.4923 2.83202 10.5033 2.83206 10.5433 2.83206H12.5433C12.8195 2.83206 13.0433 3.05591 13.0433 3.33206C13.0433 3.6082 12.8195 3.83206 12.5433 3.83206H1.20996C0.933821 3.83206 0.709961 3.6082 0.709961 3.33206C0.709961 3.05591 0.933821 2.83206 1.20996 2.83206H3.21002C3.25005 2.83206 3.26109 2.83202 3.27012 2.83179C3.61322 2.82309 3.9159 2.60494 4.03265 2.28219C4.03571 2.2737 4.03925 2.26324 4.05191 2.22526L4.12631 2.002C4.17184 1.86512 4.21151 1.74585 4.26702 1.63926C4.48631 1.21813 4.89205 0.925691 5.36091 0.850824C5.47959 0.831871 5.60527 0.831951 5.74953 0.832044ZM4.88206 2.83206C4.9164 2.76471 4.94683 2.69472 4.97301 2.62235C4.98096 2.60037 4.98876 2.57698 4.99877 2.54692L5.06531 2.34731C5.12609 2.16497 5.14009 2.12778 5.15397 2.10112C5.22707 1.96074 5.36231 1.86327 5.5186 1.83831C5.54829 1.83357 5.58798 1.83206 5.78019 1.83206H7.97319C8.16539 1.83206 8.20506 1.83357 8.23479 1.83831C8.39106 1.86327 8.52633 1.96074 8.59939 2.10112C8.61326 2.12778 8.62726 2.16496 8.68806 2.34731L8.75453 2.5468L8.78039 2.62236C8.80653 2.69473 8.83699 2.76471 8.87133 2.83206H4.88206Z"
                                            fill="#FF3535"
                                          />
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M2.41207 5.16519C2.6876 5.14682 2.92585 5.35529 2.94423 5.63082L3.25085 10.2302C3.31075 11.1288 3.35344 11.754 3.44715 12.2244C3.53805 12.6807 3.66494 12.9223 3.84722 13.0928C4.02949 13.2633 4.27893 13.3739 4.74027 13.4342C5.21587 13.4964 5.84255 13.4974 6.74309 13.4974H7.25869C8.15922 13.4974 8.78589 13.4964 9.26149 13.4342C9.72282 13.3739 9.97229 13.2633 10.1546 13.0928C10.3368 12.9223 10.4638 12.6807 10.5546 12.2244C10.6484 11.754 10.691 11.1288 10.751 10.2302L11.0576 5.63082C11.0759 5.35529 11.3142 5.14682 11.5897 5.16519C11.8652 5.18356 12.0737 5.42181 12.0554 5.69734L11.7464 10.3318C11.6894 11.187 11.6434 11.8777 11.5354 12.4198C11.4231 12.9833 11.2322 13.4541 10.8378 13.823C10.4434 14.192 9.96095 14.3512 9.39122 14.4257C8.84315 14.4974 8.15089 14.4974 7.29382 14.4974H6.70795C5.85089 14.4974 5.15859 14.4974 4.61056 14.4257C4.04079 14.3512 3.55843 14.192 3.16403 13.823C2.76963 13.4541 2.57869 12.9833 2.46643 12.4198C2.35844 11.8777 2.3124 11.187 2.25541 10.3318L1.94644 5.69734C1.92807 5.42181 2.13654 5.18356 2.41207 5.16519Z"
                                            fill="#FF3535"
                                          />
                                        </svg>
                                      </button>
                                    </div>
                                  </div>
                                  <div className="content">
                                    <h2>
                                      Chapter 1: Lorem Ipsum is simply dummy
                                    </h2>
                                  </div>
                                  <button className="svg-button-2">
                                    Add Topic
                                    <span>
                                      <svg
                                        width="15"
                                        height="9"
                                        viewBox="0 0 15 9"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M1.26088 5.12578H12.2399L10.183 7.18269C9.59218 7.7735 10.4784 8.65969 11.0692 8.06888L12.9425 6.1927L14.193 4.94023C14.4354 4.69642 14.4354 4.30267 14.193 4.05887L11.0692 0.931442C10.9504 0.809316 10.7868 0.740792 10.6163 0.742209C10.0537 0.74228 9.77761 1.42756 10.183 1.8177L12.2448 3.87461H1.22853C0.362035 3.9176 0.426733 5.16892 1.26088 5.12578Z"
                                          fill="#14489F"
                                        />
                                      </svg>
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="card-col">
                              <div className="card">
                                <div className="card-content">
                                  <div className="delete">
                                    <div className="edit">
                                      <button
                                        type="button"
                                        className="edit-btn"
                                        data-bs-toggle="modal"
                                        href="#edit-popup"
                                        role="button"
                                      >
                                        <Delete />
                                      </button>
                                      <button
                                        type="button"
                                        className="delete-btn"
                                      >
                                        <svg
                                          width="14"
                                          height="15"
                                          viewBox="0 0 14 15"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M5.28427 6.83455C5.55904 6.80708 5.80405 7.00755 5.83152 7.28235L6.16485 10.6157C6.19238 10.8904 5.99185 11.1355 5.71712 11.1629C5.44234 11.1904 5.19731 10.9899 5.16984 10.7151L4.8365 7.38181C4.80902 7.10708 5.0095 6.86201 5.28427 6.83455Z"
                                            fill="#FF3535"
                                          />
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M8.7171 6.83455C8.99183 6.86201 9.1923 7.10708 9.16483 7.38181L8.8315 10.7151C8.80403 10.9899 8.55903 11.1904 8.28423 11.1629C8.0095 11.1355 7.80903 10.8904 7.8365 10.6157L8.16983 7.28235C8.1973 7.00755 8.4423 6.80708 8.7171 6.83455Z"
                                            fill="#FF3535"
                                          />
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M5.74953 0.832044H8.00386C8.14813 0.831951 8.27379 0.831871 8.39246 0.850824C8.86133 0.925691 9.26706 1.21813 9.48633 1.63926C9.54186 1.74585 9.58153 1.8651 9.62706 2.00199L9.70146 2.22526C9.71406 2.26305 9.71766 2.27375 9.72073 2.28218C9.83746 2.60492 10.1401 2.82309 10.4833 2.83179C10.4923 2.83202 10.5033 2.83206 10.5433 2.83206H12.5433C12.8195 2.83206 13.0433 3.05591 13.0433 3.33206C13.0433 3.6082 12.8195 3.83206 12.5433 3.83206H1.20996C0.933821 3.83206 0.709961 3.6082 0.709961 3.33206C0.709961 3.05591 0.933821 2.83206 1.20996 2.83206H3.21002C3.25005 2.83206 3.26109 2.83202 3.27012 2.83179C3.61322 2.82309 3.9159 2.60494 4.03265 2.28219C4.03571 2.2737 4.03925 2.26324 4.05191 2.22526L4.12631 2.002C4.17184 1.86512 4.21151 1.74585 4.26702 1.63926C4.48631 1.21813 4.89205 0.925691 5.36091 0.850824C5.47959 0.831871 5.60527 0.831951 5.74953 0.832044ZM4.88206 2.83206C4.9164 2.76471 4.94683 2.69472 4.97301 2.62235C4.98096 2.60037 4.98876 2.57698 4.99877 2.54692L5.06531 2.34731C5.12609 2.16497 5.14009 2.12778 5.15397 2.10112C5.22707 1.96074 5.36231 1.86327 5.5186 1.83831C5.54829 1.83357 5.58798 1.83206 5.78019 1.83206H7.97319C8.16539 1.83206 8.20506 1.83357 8.23479 1.83831C8.39106 1.86327 8.52633 1.96074 8.59939 2.10112C8.61326 2.12778 8.62726 2.16496 8.68806 2.34731L8.75453 2.5468L8.78039 2.62236C8.80653 2.69473 8.83699 2.76471 8.87133 2.83206H4.88206Z"
                                            fill="#FF3535"
                                          />
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M2.41207 5.16519C2.6876 5.14682 2.92585 5.35529 2.94423 5.63082L3.25085 10.2302C3.31075 11.1288 3.35344 11.754 3.44715 12.2244C3.53805 12.6807 3.66494 12.9223 3.84722 13.0928C4.02949 13.2633 4.27893 13.3739 4.74027 13.4342C5.21587 13.4964 5.84255 13.4974 6.74309 13.4974H7.25869C8.15922 13.4974 8.78589 13.4964 9.26149 13.4342C9.72282 13.3739 9.97229 13.2633 10.1546 13.0928C10.3368 12.9223 10.4638 12.6807 10.5546 12.2244C10.6484 11.754 10.691 11.1288 10.751 10.2302L11.0576 5.63082C11.0759 5.35529 11.3142 5.14682 11.5897 5.16519C11.8652 5.18356 12.0737 5.42181 12.0554 5.69734L11.7464 10.3318C11.6894 11.187 11.6434 11.8777 11.5354 12.4198C11.4231 12.9833 11.2322 13.4541 10.8378 13.823C10.4434 14.192 9.96095 14.3512 9.39122 14.4257C8.84315 14.4974 8.15089 14.4974 7.29382 14.4974H6.70795C5.85089 14.4974 5.15859 14.4974 4.61056 14.4257C4.04079 14.3512 3.55843 14.192 3.16403 13.823C2.76963 13.4541 2.57869 12.9833 2.46643 12.4198C2.35844 11.8777 2.3124 11.187 2.25541 10.3318L1.94644 5.69734C1.92807 5.42181 2.13654 5.18356 2.41207 5.16519Z"
                                            fill="#FF3535"
                                          />
                                        </svg>
                                      </button>
                                    </div>
                                  </div>
                                  <div className="content">
                                    <h2>
                                      Chapter 1: Lorem Ipsum is simply dummy
                                    </h2>
                                  </div>
                                  <button className="svg-button-2">
                                    Add Topic
                                    <span>
                                      <svg
                                        width="15"
                                        height="9"
                                        viewBox="0 0 15 9"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M1.26088 5.12578H12.2399L10.183 7.18269C9.59218 7.7735 10.4784 8.65969 11.0692 8.06888L12.9425 6.1927L14.193 4.94023C14.4354 4.69642 14.4354 4.30267 14.193 4.05887L11.0692 0.931442C10.9504 0.809316 10.7868 0.740792 10.6163 0.742209C10.0537 0.74228 9.77761 1.42756 10.183 1.8177L12.2448 3.87461H1.22853C0.362035 3.9176 0.426733 5.16892 1.26088 5.12578Z"
                                          fill="#14489F"
                                        />
                                      </svg>
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="card-col">
                              <div className="card">
                                <div className="card-content">
                                  <div className="delete">
                                    <div className="edit">
                                      <button
                                        type="button"
                                        className="edit-btn"
                                        data-bs-toggle="modal"
                                        href="#edit-popup"
                                        role="button"
                                      >
                                        <Delete />
                                      </button>
                                      <button
                                        type="button"
                                        className="delete-btn"
                                      >
                                        <svg
                                          width="14"
                                          height="15"
                                          viewBox="0 0 14 15"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M5.28427 6.83455C5.55904 6.80708 5.80405 7.00755 5.83152 7.28235L6.16485 10.6157C6.19238 10.8904 5.99185 11.1355 5.71712 11.1629C5.44234 11.1904 5.19731 10.9899 5.16984 10.7151L4.8365 7.38181C4.80902 7.10708 5.0095 6.86201 5.28427 6.83455Z"
                                            fill="#FF3535"
                                          />
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M8.7171 6.83455C8.99183 6.86201 9.1923 7.10708 9.16483 7.38181L8.8315 10.7151C8.80403 10.9899 8.55903 11.1904 8.28423 11.1629C8.0095 11.1355 7.80903 10.8904 7.8365 10.6157L8.16983 7.28235C8.1973 7.00755 8.4423 6.80708 8.7171 6.83455Z"
                                            fill="#FF3535"
                                          />
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M5.74953 0.832044H8.00386C8.14813 0.831951 8.27379 0.831871 8.39246 0.850824C8.86133 0.925691 9.26706 1.21813 9.48633 1.63926C9.54186 1.74585 9.58153 1.8651 9.62706 2.00199L9.70146 2.22526C9.71406 2.26305 9.71766 2.27375 9.72073 2.28218C9.83746 2.60492 10.1401 2.82309 10.4833 2.83179C10.4923 2.83202 10.5033 2.83206 10.5433 2.83206H12.5433C12.8195 2.83206 13.0433 3.05591 13.0433 3.33206C13.0433 3.6082 12.8195 3.83206 12.5433 3.83206H1.20996C0.933821 3.83206 0.709961 3.6082 0.709961 3.33206C0.709961 3.05591 0.933821 2.83206 1.20996 2.83206H3.21002C3.25005 2.83206 3.26109 2.83202 3.27012 2.83179C3.61322 2.82309 3.9159 2.60494 4.03265 2.28219C4.03571 2.2737 4.03925 2.26324 4.05191 2.22526L4.12631 2.002C4.17184 1.86512 4.21151 1.74585 4.26702 1.63926C4.48631 1.21813 4.89205 0.925691 5.36091 0.850824C5.47959 0.831871 5.60527 0.831951 5.74953 0.832044ZM4.88206 2.83206C4.9164 2.76471 4.94683 2.69472 4.97301 2.62235C4.98096 2.60037 4.98876 2.57698 4.99877 2.54692L5.06531 2.34731C5.12609 2.16497 5.14009 2.12778 5.15397 2.10112C5.22707 1.96074 5.36231 1.86327 5.5186 1.83831C5.54829 1.83357 5.58798 1.83206 5.78019 1.83206H7.97319C8.16539 1.83206 8.20506 1.83357 8.23479 1.83831C8.39106 1.86327 8.52633 1.96074 8.59939 2.10112C8.61326 2.12778 8.62726 2.16496 8.68806 2.34731L8.75453 2.5468L8.78039 2.62236C8.80653 2.69473 8.83699 2.76471 8.87133 2.83206H4.88206Z"
                                            fill="#FF3535"
                                          />
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M2.41207 5.16519C2.6876 5.14682 2.92585 5.35529 2.94423 5.63082L3.25085 10.2302C3.31075 11.1288 3.35344 11.754 3.44715 12.2244C3.53805 12.6807 3.66494 12.9223 3.84722 13.0928C4.02949 13.2633 4.27893 13.3739 4.74027 13.4342C5.21587 13.4964 5.84255 13.4974 6.74309 13.4974H7.25869C8.15922 13.4974 8.78589 13.4964 9.26149 13.4342C9.72282 13.3739 9.97229 13.2633 10.1546 13.0928C10.3368 12.9223 10.4638 12.6807 10.5546 12.2244C10.6484 11.754 10.691 11.1288 10.751 10.2302L11.0576 5.63082C11.0759 5.35529 11.3142 5.14682 11.5897 5.16519C11.8652 5.18356 12.0737 5.42181 12.0554 5.69734L11.7464 10.3318C11.6894 11.187 11.6434 11.8777 11.5354 12.4198C11.4231 12.9833 11.2322 13.4541 10.8378 13.823C10.4434 14.192 9.96095 14.3512 9.39122 14.4257C8.84315 14.4974 8.15089 14.4974 7.29382 14.4974H6.70795C5.85089 14.4974 5.15859 14.4974 4.61056 14.4257C4.04079 14.3512 3.55843 14.192 3.16403 13.823C2.76963 13.4541 2.57869 12.9833 2.46643 12.4198C2.35844 11.8777 2.3124 11.187 2.25541 10.3318L1.94644 5.69734C1.92807 5.42181 2.13654 5.18356 2.41207 5.16519Z"
                                            fill="#FF3535"
                                          />
                                        </svg>
                                      </button>
                                    </div>
                                  </div>
                                  <div className="content">
                                    <h2>
                                      Chapter 1: Lorem Ipsum is simply dummy
                                    </h2>
                                  </div>
                                  <button className="svg-button-2">
                                    Add Topic
                                    <span>
                                      <svg
                                        width="15"
                                        height="9"
                                        viewBox="0 0 15 9"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M1.26088 5.12578H12.2399L10.183 7.18269C9.59218 7.7735 10.4784 8.65969 11.0692 8.06888L12.9425 6.1927L14.193 4.94023C14.4354 4.69642 14.4354 4.30267 14.193 4.05887L11.0692 0.931442C10.9504 0.809316 10.7868 0.740792 10.6163 0.742209C10.0537 0.74228 9.77761 1.42756 10.183 1.8177L12.2448 3.87461H1.22853C0.362035 3.9176 0.426733 5.16892 1.26088 5.12578Z"
                                          fill="#14489F"
                                        />
                                      </svg>
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="card-col">
                              <div className="card">
                                <div className="card-content">
                                  <div className="delete">
                                    <div className="edit">
                                      <button
                                        type="button"
                                        className="edit-btn"
                                        data-bs-toggle="modal"
                                        href="#edit-popup"
                                        role="button"
                                      >
                                        <Delete />
                                      </button>
                                      <button
                                        type="button"
                                        className="delete-btn"
                                      >
                                        <svg
                                          width="14"
                                          height="15"
                                          viewBox="0 0 14 15"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M5.28427 6.83455C5.55904 6.80708 5.80405 7.00755 5.83152 7.28235L6.16485 10.6157C6.19238 10.8904 5.99185 11.1355 5.71712 11.1629C5.44234 11.1904 5.19731 10.9899 5.16984 10.7151L4.8365 7.38181C4.80902 7.10708 5.0095 6.86201 5.28427 6.83455Z"
                                            fill="#FF3535"
                                          />
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M8.7171 6.83455C8.99183 6.86201 9.1923 7.10708 9.16483 7.38181L8.8315 10.7151C8.80403 10.9899 8.55903 11.1904 8.28423 11.1629C8.0095 11.1355 7.80903 10.8904 7.8365 10.6157L8.16983 7.28235C8.1973 7.00755 8.4423 6.80708 8.7171 6.83455Z"
                                            fill="#FF3535"
                                          />
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M5.74953 0.832044H8.00386C8.14813 0.831951 8.27379 0.831871 8.39246 0.850824C8.86133 0.925691 9.26706 1.21813 9.48633 1.63926C9.54186 1.74585 9.58153 1.8651 9.62706 2.00199L9.70146 2.22526C9.71406 2.26305 9.71766 2.27375 9.72073 2.28218C9.83746 2.60492 10.1401 2.82309 10.4833 2.83179C10.4923 2.83202 10.5033 2.83206 10.5433 2.83206H12.5433C12.8195 2.83206 13.0433 3.05591 13.0433 3.33206C13.0433 3.6082 12.8195 3.83206 12.5433 3.83206H1.20996C0.933821 3.83206 0.709961 3.6082 0.709961 3.33206C0.709961 3.05591 0.933821 2.83206 1.20996 2.83206H3.21002C3.25005 2.83206 3.26109 2.83202 3.27012 2.83179C3.61322 2.82309 3.9159 2.60494 4.03265 2.28219C4.03571 2.2737 4.03925 2.26324 4.05191 2.22526L4.12631 2.002C4.17184 1.86512 4.21151 1.74585 4.26702 1.63926C4.48631 1.21813 4.89205 0.925691 5.36091 0.850824C5.47959 0.831871 5.60527 0.831951 5.74953 0.832044ZM4.88206 2.83206C4.9164 2.76471 4.94683 2.69472 4.97301 2.62235C4.98096 2.60037 4.98876 2.57698 4.99877 2.54692L5.06531 2.34731C5.12609 2.16497 5.14009 2.12778 5.15397 2.10112C5.22707 1.96074 5.36231 1.86327 5.5186 1.83831C5.54829 1.83357 5.58798 1.83206 5.78019 1.83206H7.97319C8.16539 1.83206 8.20506 1.83357 8.23479 1.83831C8.39106 1.86327 8.52633 1.96074 8.59939 2.10112C8.61326 2.12778 8.62726 2.16496 8.68806 2.34731L8.75453 2.5468L8.78039 2.62236C8.80653 2.69473 8.83699 2.76471 8.87133 2.83206H4.88206Z"
                                            fill="#FF3535"
                                          />
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M2.41207 5.16519C2.6876 5.14682 2.92585 5.35529 2.94423 5.63082L3.25085 10.2302C3.31075 11.1288 3.35344 11.754 3.44715 12.2244C3.53805 12.6807 3.66494 12.9223 3.84722 13.0928C4.02949 13.2633 4.27893 13.3739 4.74027 13.4342C5.21587 13.4964 5.84255 13.4974 6.74309 13.4974H7.25869C8.15922 13.4974 8.78589 13.4964 9.26149 13.4342C9.72282 13.3739 9.97229 13.2633 10.1546 13.0928C10.3368 12.9223 10.4638 12.6807 10.5546 12.2244C10.6484 11.754 10.691 11.1288 10.751 10.2302L11.0576 5.63082C11.0759 5.35529 11.3142 5.14682 11.5897 5.16519C11.8652 5.18356 12.0737 5.42181 12.0554 5.69734L11.7464 10.3318C11.6894 11.187 11.6434 11.8777 11.5354 12.4198C11.4231 12.9833 11.2322 13.4541 10.8378 13.823C10.4434 14.192 9.96095 14.3512 9.39122 14.4257C8.84315 14.4974 8.15089 14.4974 7.29382 14.4974H6.70795C5.85089 14.4974 5.15859 14.4974 4.61056 14.4257C4.04079 14.3512 3.55843 14.192 3.16403 13.823C2.76963 13.4541 2.57869 12.9833 2.46643 12.4198C2.35844 11.8777 2.3124 11.187 2.25541 10.3318L1.94644 5.69734C1.92807 5.42181 2.13654 5.18356 2.41207 5.16519Z"
                                            fill="#FF3535"
                                          />
                                        </svg>
                                      </button>
                                    </div>
                                  </div>
                                  <div className="content">
                                    <h2>
                                      Chapter 1: Lorem Ipsum is simply dummy
                                    </h2>
                                  </div>
                                  <button className="svg-button-2">
                                    Add Topic
                                    <span>
                                      <svg
                                        width="15"
                                        height="9"
                                        viewBox="0 0 15 9"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M1.26088 5.12578H12.2399L10.183 7.18269C9.59218 7.7735 10.4784 8.65969 11.0692 8.06888L12.9425 6.1927L14.193 4.94023C14.4354 4.69642 14.4354 4.30267 14.193 4.05887L11.0692 0.931442C10.9504 0.809316 10.7868 0.740792 10.6163 0.742209C10.0537 0.74228 9.77761 1.42756 10.183 1.8177L12.2448 3.87461H1.22853C0.362035 3.9176 0.426733 5.16892 1.26088 5.12578Z"
                                          fill="#14489F"
                                        />
                                      </svg>
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="card-col">
                              <div className="card">
                                <div className="card-content">
                                  <div className="delete">
                                    <div className="edit">
                                      <button
                                        type="button"
                                        className="edit-btn"
                                        data-bs-toggle="modal"
                                        href="#edit-popup"
                                        role="button"
                                      >
                                        <Delete />
                                      </button>
                                      <button
                                        type="button"
                                        className="delete-btn"
                                      >
                                        <svg
                                          width="14"
                                          height="15"
                                          viewBox="0 0 14 15"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M5.28427 6.83455C5.55904 6.80708 5.80405 7.00755 5.83152 7.28235L6.16485 10.6157C6.19238 10.8904 5.99185 11.1355 5.71712 11.1629C5.44234 11.1904 5.19731 10.9899 5.16984 10.7151L4.8365 7.38181C4.80902 7.10708 5.0095 6.86201 5.28427 6.83455Z"
                                            fill="#FF3535"
                                          />
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M8.7171 6.83455C8.99183 6.86201 9.1923 7.10708 9.16483 7.38181L8.8315 10.7151C8.80403 10.9899 8.55903 11.1904 8.28423 11.1629C8.0095 11.1355 7.80903 10.8904 7.8365 10.6157L8.16983 7.28235C8.1973 7.00755 8.4423 6.80708 8.7171 6.83455Z"
                                            fill="#FF3535"
                                          />
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M5.74953 0.832044H8.00386C8.14813 0.831951 8.27379 0.831871 8.39246 0.850824C8.86133 0.925691 9.26706 1.21813 9.48633 1.63926C9.54186 1.74585 9.58153 1.8651 9.62706 2.00199L9.70146 2.22526C9.71406 2.26305 9.71766 2.27375 9.72073 2.28218C9.83746 2.60492 10.1401 2.82309 10.4833 2.83179C10.4923 2.83202 10.5033 2.83206 10.5433 2.83206H12.5433C12.8195 2.83206 13.0433 3.05591 13.0433 3.33206C13.0433 3.6082 12.8195 3.83206 12.5433 3.83206H1.20996C0.933821 3.83206 0.709961 3.6082 0.709961 3.33206C0.709961 3.05591 0.933821 2.83206 1.20996 2.83206H3.21002C3.25005 2.83206 3.26109 2.83202 3.27012 2.83179C3.61322 2.82309 3.9159 2.60494 4.03265 2.28219C4.03571 2.2737 4.03925 2.26324 4.05191 2.22526L4.12631 2.002C4.17184 1.86512 4.21151 1.74585 4.26702 1.63926C4.48631 1.21813 4.89205 0.925691 5.36091 0.850824C5.47959 0.831871 5.60527 0.831951 5.74953 0.832044ZM4.88206 2.83206C4.9164 2.76471 4.94683 2.69472 4.97301 2.62235C4.98096 2.60037 4.98876 2.57698 4.99877 2.54692L5.06531 2.34731C5.12609 2.16497 5.14009 2.12778 5.15397 2.10112C5.22707 1.96074 5.36231 1.86327 5.5186 1.83831C5.54829 1.83357 5.58798 1.83206 5.78019 1.83206H7.97319C8.16539 1.83206 8.20506 1.83357 8.23479 1.83831C8.39106 1.86327 8.52633 1.96074 8.59939 2.10112C8.61326 2.12778 8.62726 2.16496 8.68806 2.34731L8.75453 2.5468L8.78039 2.62236C8.80653 2.69473 8.83699 2.76471 8.87133 2.83206H4.88206Z"
                                            fill="#FF3535"
                                          />
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M2.41207 5.16519C2.6876 5.14682 2.92585 5.35529 2.94423 5.63082L3.25085 10.2302C3.31075 11.1288 3.35344 11.754 3.44715 12.2244C3.53805 12.6807 3.66494 12.9223 3.84722 13.0928C4.02949 13.2633 4.27893 13.3739 4.74027 13.4342C5.21587 13.4964 5.84255 13.4974 6.74309 13.4974H7.25869C8.15922 13.4974 8.78589 13.4964 9.26149 13.4342C9.72282 13.3739 9.97229 13.2633 10.1546 13.0928C10.3368 12.9223 10.4638 12.6807 10.5546 12.2244C10.6484 11.754 10.691 11.1288 10.751 10.2302L11.0576 5.63082C11.0759 5.35529 11.3142 5.14682 11.5897 5.16519C11.8652 5.18356 12.0737 5.42181 12.0554 5.69734L11.7464 10.3318C11.6894 11.187 11.6434 11.8777 11.5354 12.4198C11.4231 12.9833 11.2322 13.4541 10.8378 13.823C10.4434 14.192 9.96095 14.3512 9.39122 14.4257C8.84315 14.4974 8.15089 14.4974 7.29382 14.4974H6.70795C5.85089 14.4974 5.15859 14.4974 4.61056 14.4257C4.04079 14.3512 3.55843 14.192 3.16403 13.823C2.76963 13.4541 2.57869 12.9833 2.46643 12.4198C2.35844 11.8777 2.3124 11.187 2.25541 10.3318L1.94644 5.69734C1.92807 5.42181 2.13654 5.18356 2.41207 5.16519Z"
                                            fill="#FF3535"
                                          />
                                        </svg>
                                      </button>
                                    </div>
                                  </div>
                                  <div className="content">
                                    <h2>
                                      Chapter 1: Lorem Ipsum is simply dummy
                                    </h2>
                                  </div>
                                  <button className="svg-button-2">
                                    Add Topic
                                    <span>
                                      <svg
                                        width="15"
                                        height="9"
                                        viewBox="0 0 15 9"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M1.26088 5.12578H12.2399L10.183 7.18269C9.59218 7.7735 10.4784 8.65969 11.0692 8.06888L12.9425 6.1927L14.193 4.94023C14.4354 4.69642 14.4354 4.30267 14.193 4.05887L11.0692 0.931442C10.9504 0.809316 10.7868 0.740792 10.6163 0.742209C10.0537 0.74228 9.77761 1.42756 10.183 1.8177L12.2448 3.87461H1.22853C0.362035 3.9176 0.426733 5.16892 1.26088 5.12578Z"
                                          fill="#14489F"
                                        />
                                      </svg>
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="card-col">
                              <div className="card">
                                <div className="card-content">
                                  <div className="delete">
                                    <div className="edit">
                                      <button
                                        type="button"
                                        className="edit-btn"
                                        data-bs-toggle="modal"
                                        href="#edit-popup"
                                        role="button"
                                      >
                                        <Delete />
                                      </button>
                                      <button
                                        type="button"
                                        className="delete-btn"
                                      >
                                        <svg
                                          width="14"
                                          height="15"
                                          viewBox="0 0 14 15"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M5.28427 6.83455C5.55904 6.80708 5.80405 7.00755 5.83152 7.28235L6.16485 10.6157C6.19238 10.8904 5.99185 11.1355 5.71712 11.1629C5.44234 11.1904 5.19731 10.9899 5.16984 10.7151L4.8365 7.38181C4.80902 7.10708 5.0095 6.86201 5.28427 6.83455Z"
                                            fill="#FF3535"
                                          />
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M8.7171 6.83455C8.99183 6.86201 9.1923 7.10708 9.16483 7.38181L8.8315 10.7151C8.80403 10.9899 8.55903 11.1904 8.28423 11.1629C8.0095 11.1355 7.80903 10.8904 7.8365 10.6157L8.16983 7.28235C8.1973 7.00755 8.4423 6.80708 8.7171 6.83455Z"
                                            fill="#FF3535"
                                          />
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M5.74953 0.832044H8.00386C8.14813 0.831951 8.27379 0.831871 8.39246 0.850824C8.86133 0.925691 9.26706 1.21813 9.48633 1.63926C9.54186 1.74585 9.58153 1.8651 9.62706 2.00199L9.70146 2.22526C9.71406 2.26305 9.71766 2.27375 9.72073 2.28218C9.83746 2.60492 10.1401 2.82309 10.4833 2.83179C10.4923 2.83202 10.5033 2.83206 10.5433 2.83206H12.5433C12.8195 2.83206 13.0433 3.05591 13.0433 3.33206C13.0433 3.6082 12.8195 3.83206 12.5433 3.83206H1.20996C0.933821 3.83206 0.709961 3.6082 0.709961 3.33206C0.709961 3.05591 0.933821 2.83206 1.20996 2.83206H3.21002C3.25005 2.83206 3.26109 2.83202 3.27012 2.83179C3.61322 2.82309 3.9159 2.60494 4.03265 2.28219C4.03571 2.2737 4.03925 2.26324 4.05191 2.22526L4.12631 2.002C4.17184 1.86512 4.21151 1.74585 4.26702 1.63926C4.48631 1.21813 4.89205 0.925691 5.36091 0.850824C5.47959 0.831871 5.60527 0.831951 5.74953 0.832044ZM4.88206 2.83206C4.9164 2.76471 4.94683 2.69472 4.97301 2.62235C4.98096 2.60037 4.98876 2.57698 4.99877 2.54692L5.06531 2.34731C5.12609 2.16497 5.14009 2.12778 5.15397 2.10112C5.22707 1.96074 5.36231 1.86327 5.5186 1.83831C5.54829 1.83357 5.58798 1.83206 5.78019 1.83206H7.97319C8.16539 1.83206 8.20506 1.83357 8.23479 1.83831C8.39106 1.86327 8.52633 1.96074 8.59939 2.10112C8.61326 2.12778 8.62726 2.16496 8.68806 2.34731L8.75453 2.5468L8.78039 2.62236C8.80653 2.69473 8.83699 2.76471 8.87133 2.83206H4.88206Z"
                                            fill="#FF3535"
                                          />
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M2.41207 5.16519C2.6876 5.14682 2.92585 5.35529 2.94423 5.63082L3.25085 10.2302C3.31075 11.1288 3.35344 11.754 3.44715 12.2244C3.53805 12.6807 3.66494 12.9223 3.84722 13.0928C4.02949 13.2633 4.27893 13.3739 4.74027 13.4342C5.21587 13.4964 5.84255 13.4974 6.74309 13.4974H7.25869C8.15922 13.4974 8.78589 13.4964 9.26149 13.4342C9.72282 13.3739 9.97229 13.2633 10.1546 13.0928C10.3368 12.9223 10.4638 12.6807 10.5546 12.2244C10.6484 11.754 10.691 11.1288 10.751 10.2302L11.0576 5.63082C11.0759 5.35529 11.3142 5.14682 11.5897 5.16519C11.8652 5.18356 12.0737 5.42181 12.0554 5.69734L11.7464 10.3318C11.6894 11.187 11.6434 11.8777 11.5354 12.4198C11.4231 12.9833 11.2322 13.4541 10.8378 13.823C10.4434 14.192 9.96095 14.3512 9.39122 14.4257C8.84315 14.4974 8.15089 14.4974 7.29382 14.4974H6.70795C5.85089 14.4974 5.15859 14.4974 4.61056 14.4257C4.04079 14.3512 3.55843 14.192 3.16403 13.823C2.76963 13.4541 2.57869 12.9833 2.46643 12.4198C2.35844 11.8777 2.3124 11.187 2.25541 10.3318L1.94644 5.69734C1.92807 5.42181 2.13654 5.18356 2.41207 5.16519Z"
                                            fill="#FF3535"
                                          />
                                        </svg>
                                      </button>
                                    </div>
                                  </div>
                                  <div className="content">
                                    <h2>
                                      Chapter 1: Lorem Ipsum is simply dummy
                                    </h2>
                                  </div>
                                  <button className="svg-button-2">
                                    Add Topic
                                    <span>
                                      <svg
                                        width="15"
                                        height="9"
                                        viewBox="0 0 15 9"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M1.26088 5.12578H12.2399L10.183 7.18269C9.59218 7.7735 10.4784 8.65969 11.0692 8.06888L12.9425 6.1927L14.193 4.94023C14.4354 4.69642 14.4354 4.30267 14.193 4.05887L11.0692 0.931442C10.9504 0.809316 10.7868 0.740792 10.6163 0.742209C10.0537 0.74228 9.77761 1.42756 10.183 1.8177L12.2448 3.87461H1.22853C0.362035 3.9176 0.426733 5.16892 1.26088 5.12578Z"
                                          fill="#14489F"
                                        />
                                      </svg>
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="card-col">
                              <div className="card">
                                <div className="card-content">
                                  <div className="delete">
                                    <div className="edit">
                                      <button
                                        type="button"
                                        className="edit-btn"
                                        data-bs-toggle="modal"
                                        href="#edit-popup"
                                        role="button"
                                      >
                                        <Delete />
                                      </button>
                                      <button
                                        type="button"
                                        className="delete-btn"
                                      >
                                        <svg
                                          width="14"
                                          height="15"
                                          viewBox="0 0 14 15"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M5.28427 6.83455C5.55904 6.80708 5.80405 7.00755 5.83152 7.28235L6.16485 10.6157C6.19238 10.8904 5.99185 11.1355 5.71712 11.1629C5.44234 11.1904 5.19731 10.9899 5.16984 10.7151L4.8365 7.38181C4.80902 7.10708 5.0095 6.86201 5.28427 6.83455Z"
                                            fill="#FF3535"
                                          />
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M8.7171 6.83455C8.99183 6.86201 9.1923 7.10708 9.16483 7.38181L8.8315 10.7151C8.80403 10.9899 8.55903 11.1904 8.28423 11.1629C8.0095 11.1355 7.80903 10.8904 7.8365 10.6157L8.16983 7.28235C8.1973 7.00755 8.4423 6.80708 8.7171 6.83455Z"
                                            fill="#FF3535"
                                          />
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M5.74953 0.832044H8.00386C8.14813 0.831951 8.27379 0.831871 8.39246 0.850824C8.86133 0.925691 9.26706 1.21813 9.48633 1.63926C9.54186 1.74585 9.58153 1.8651 9.62706 2.00199L9.70146 2.22526C9.71406 2.26305 9.71766 2.27375 9.72073 2.28218C9.83746 2.60492 10.1401 2.82309 10.4833 2.83179C10.4923 2.83202 10.5033 2.83206 10.5433 2.83206H12.5433C12.8195 2.83206 13.0433 3.05591 13.0433 3.33206C13.0433 3.6082 12.8195 3.83206 12.5433 3.83206H1.20996C0.933821 3.83206 0.709961 3.6082 0.709961 3.33206C0.709961 3.05591 0.933821 2.83206 1.20996 2.83206H3.21002C3.25005 2.83206 3.26109 2.83202 3.27012 2.83179C3.61322 2.82309 3.9159 2.60494 4.03265 2.28219C4.03571 2.2737 4.03925 2.26324 4.05191 2.22526L4.12631 2.002C4.17184 1.86512 4.21151 1.74585 4.26702 1.63926C4.48631 1.21813 4.89205 0.925691 5.36091 0.850824C5.47959 0.831871 5.60527 0.831951 5.74953 0.832044ZM4.88206 2.83206C4.9164 2.76471 4.94683 2.69472 4.97301 2.62235C4.98096 2.60037 4.98876 2.57698 4.99877 2.54692L5.06531 2.34731C5.12609 2.16497 5.14009 2.12778 5.15397 2.10112C5.22707 1.96074 5.36231 1.86327 5.5186 1.83831C5.54829 1.83357 5.58798 1.83206 5.78019 1.83206H7.97319C8.16539 1.83206 8.20506 1.83357 8.23479 1.83831C8.39106 1.86327 8.52633 1.96074 8.59939 2.10112C8.61326 2.12778 8.62726 2.16496 8.68806 2.34731L8.75453 2.5468L8.78039 2.62236C8.80653 2.69473 8.83699 2.76471 8.87133 2.83206H4.88206Z"
                                            fill="#FF3535"
                                          />
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M2.41207 5.16519C2.6876 5.14682 2.92585 5.35529 2.94423 5.63082L3.25085 10.2302C3.31075 11.1288 3.35344 11.754 3.44715 12.2244C3.53805 12.6807 3.66494 12.9223 3.84722 13.0928C4.02949 13.2633 4.27893 13.3739 4.74027 13.4342C5.21587 13.4964 5.84255 13.4974 6.74309 13.4974H7.25869C8.15922 13.4974 8.78589 13.4964 9.26149 13.4342C9.72282 13.3739 9.97229 13.2633 10.1546 13.0928C10.3368 12.9223 10.4638 12.6807 10.5546 12.2244C10.6484 11.754 10.691 11.1288 10.751 10.2302L11.0576 5.63082C11.0759 5.35529 11.3142 5.14682 11.5897 5.16519C11.8652 5.18356 12.0737 5.42181 12.0554 5.69734L11.7464 10.3318C11.6894 11.187 11.6434 11.8777 11.5354 12.4198C11.4231 12.9833 11.2322 13.4541 10.8378 13.823C10.4434 14.192 9.96095 14.3512 9.39122 14.4257C8.84315 14.4974 8.15089 14.4974 7.29382 14.4974H6.70795C5.85089 14.4974 5.15859 14.4974 4.61056 14.4257C4.04079 14.3512 3.55843 14.192 3.16403 13.823C2.76963 13.4541 2.57869 12.9833 2.46643 12.4198C2.35844 11.8777 2.3124 11.187 2.25541 10.3318L1.94644 5.69734C1.92807 5.42181 2.13654 5.18356 2.41207 5.16519Z"
                                            fill="#FF3535"
                                          />
                                        </svg>
                                      </button>
                                    </div>
                                  </div>
                                  <div className="content">
                                    <h2>
                                      Chapter 1: Lorem Ipsum is simply dummy
                                    </h2>
                                  </div>
                                  <button className="svg-button-2">
                                    Add Topic
                                    <span>
                                      <svg
                                        width="15"
                                        height="9"
                                        viewBox="0 0 15 9"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M1.26088 5.12578H12.2399L10.183 7.18269C9.59218 7.7735 10.4784 8.65969 11.0692 8.06888L12.9425 6.1927L14.193 4.94023C14.4354 4.69642 14.4354 4.30267 14.193 4.05887L11.0692 0.931442C10.9504 0.809316 10.7868 0.740792 10.6163 0.742209C10.0537 0.74228 9.77761 1.42756 10.183 1.8177L12.2448 3.87461H1.22853C0.362035 3.9176 0.426733 5.16892 1.26088 5.12578Z"
                                          fill="#14489F"
                                        />
                                      </svg>
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="add-topic">
                            <div className="row">
                              <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="mb-3">
                                  <label htmlFor="">
                                    Topic<span className="required">*</span>
                                  </label>
                                  <input type="text" className="form-control" />
                                </div>
                                <div className="text-editor">
                                  <label htmlFor="">
                                    Details<span className="required">*</span>
                                  </label>
                                  <FroalaEditor
                                    tag="textarea"
                                    config={
                                      {
                                        // Froala Editor options and configurations
                                      }
                                    }
                                  />
                                </div>
                                <div className="mb-3">
                                  <label htmlFor="">
                                    Upload Pdf, Docs, PPT
                                  </label>
                                  <input
                                    type="text"
                                    class="form-control"
                                    value={
                                      "Tracing Changes Through a Thousand Years"
                                    }
                                  />
                                </div>
                                <div className="mb-3" class="type-file">
                                  <input
                                    type="file"
                                    id="files"
                                    onChange={handleFileChange}
                                    multiple
                                    style={{ display: "none" }}
                                  />
                                  <label htmlFor="files">
                                    <span>
                                      <UploadFile />
                                    </span>
                                    <span>Upload File</span>
                                  </label>
                                  <ul className="file-link-list">
                                    {files.map((file, index) => (
                                      <li key={index}>
                                        <span>{file.name}</span>
                                        <button
                                          onClick={() =>
                                            handleDelete(file.name)
                                          }
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                          >
                                            <path
                                              fill-rule="evenodd"
                                              clip-rule="evenodd"
                                              d="M6.28329 6.83455C6.55807 6.80708 6.80307 7.00755 6.83054 7.28235L7.16387 10.6157C7.19141 10.8904 6.99087 11.1355 6.71614 11.1629C6.44136 11.1904 6.19633 10.9899 6.16886 10.7151L5.83553 7.38181C5.80805 7.10708 6.00852 6.86201 6.28329 6.83455Z"
                                              fill="#FF3535"
                                            />
                                            <path
                                              fill-rule="evenodd"
                                              clip-rule="evenodd"
                                              d="M9.71612 6.83455C9.99086 6.86201 10.1913 7.10708 10.1639 7.38181L9.83052 10.7151C9.80306 10.9899 9.55806 11.1904 9.28326 11.1629C9.00852 11.1355 8.80806 10.8904 8.83552 10.6157L9.16886 7.28235C9.19632 7.00755 9.44132 6.80708 9.71612 6.83455Z"
                                              fill="#FF3535"
                                            />
                                            <path
                                              fill-rule="evenodd"
                                              clip-rule="evenodd"
                                              d="M6.74855 0.832044H9.00288C9.14715 0.831951 9.27282 0.831871 9.39148 0.850824C9.86035 0.925691 10.2661 1.21813 10.4854 1.63926C10.5409 1.74585 10.5806 1.8651 10.6261 2.00199L10.7005 2.22526C10.7131 2.26305 10.7167 2.27375 10.7198 2.28218C10.8365 2.60492 11.1391 2.82309 11.4823 2.83179C11.4913 2.83202 11.5024 2.83206 11.5424 2.83206H13.5424C13.8186 2.83206 14.0424 3.05591 14.0424 3.33206C14.0424 3.6082 13.8186 3.83206 13.5424 3.83206H2.20898C1.93284 3.83206 1.70898 3.6082 1.70898 3.33206C1.70898 3.05591 1.93284 2.83206 2.20898 2.83206H4.20904C4.24907 2.83206 4.26012 2.83202 4.26914 2.83179C4.61224 2.82309 4.91492 2.60494 5.03167 2.28219C5.03474 2.2737 5.03827 2.26324 5.05093 2.22526L5.12533 2.002C5.17086 1.86512 5.21054 1.74585 5.26604 1.63926C5.48534 1.21813 5.89107 0.925691 6.35994 0.850824C6.47862 0.831871 6.6043 0.831951 6.74855 0.832044ZM5.88108 2.83206C5.91542 2.76471 5.94586 2.69472 5.97204 2.62235C5.97998 2.60037 5.98778 2.57698 5.9978 2.54692L6.06434 2.34731C6.12512 2.16497 6.13911 2.12778 6.15299 2.10112C6.22609 1.96074 6.36134 1.86327 6.51762 1.83831C6.54731 1.83357 6.587 1.83206 6.77922 1.83206H8.97222C9.16442 1.83206 9.20408 1.83357 9.23382 1.83831C9.39008 1.86327 9.52535 1.96074 9.59842 2.10112C9.61228 2.12778 9.62628 2.16496 9.68708 2.34731L9.75355 2.5468L9.77942 2.62236C9.80555 2.69473 9.83602 2.76471 9.87035 2.83206H5.88108Z"
                                              fill="#FF3535"
                                            />
                                            <path
                                              fill-rule="evenodd"
                                              clip-rule="evenodd"
                                              d="M3.41012 5.16519C3.68565 5.14682 3.9239 5.35529 3.94227 5.63082L4.2489 10.2302C4.3088 11.1288 4.35149 11.754 4.4452 12.2244C4.5361 12.6807 4.66299 12.9223 4.84527 13.0928C5.02754 13.2633 5.27698 13.3739 5.73831 13.4342C6.21391 13.4964 6.8406 13.4974 7.74113 13.4974H8.25673C9.15727 13.4974 9.78393 13.4964 10.2595 13.4342C10.7209 13.3739 10.9703 13.2633 11.1526 13.0928C11.3349 12.9223 11.4618 12.6807 11.5527 12.2244C11.6464 11.754 11.6891 11.1288 11.749 10.2302L12.0556 5.63082C12.0739 5.35529 12.3122 5.14682 12.5877 5.16519C12.8633 5.18356 13.0717 5.42181 13.0534 5.69734L12.7444 10.3318C12.6874 11.187 12.6414 11.8777 12.5334 12.4198C12.4211 12.9833 12.2302 13.4541 11.8358 13.823C11.4414 14.192 10.959 14.3512 10.3893 14.4257C9.8412 14.4974 9.14893 14.4974 8.29187 14.4974H7.706C6.84893 14.4974 6.15663 14.4974 5.60861 14.4257C5.03884 14.3512 4.55647 14.192 4.16208 13.823C3.76768 13.4541 3.57673 12.9833 3.46447 12.4198C3.35649 11.8777 3.31045 11.187 3.25345 10.3318L2.94449 5.69734C2.92611 5.42181 3.13459 5.18356 3.41012 5.16519Z"
                                              fill="#FF3535"
                                            />
                                          </svg>
                                        </button>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div className="mb-3">
                                  <label htmlFor="">Youtube Link</label>
                                  <div className="add-links mb-3">
                                    <input
                                      type="text"
                                      className="form-control"
                                      value={inputValue}
                                      onChange={handleInputChange}
                                    />
                                    <button
                                      className="add"
                                      onClick={handleAddLink}
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="21"
                                        height="21"
                                        viewBox="0 0 21 21"
                                        fill="none"
                                      >
                                        <path
                                          d="M11.1562 7.875C11.1562 7.51257 10.8624 7.21875 10.5 7.21875C10.1376 7.21875 9.84375 7.51257 9.84375 7.875V9.84375H7.875C7.51257 9.84375 7.21875 10.1376 7.21875 10.5C7.21875 10.8624 7.51257 11.1562 7.875 11.1562H9.84375V13.125C9.84375 13.4874 10.1376 13.7812 10.5 13.7812C10.8624 13.7812 11.1562 13.4874 11.1562 13.125V11.1562H13.125C13.4874 11.1562 13.7812 10.8624 13.7812 10.5C13.7812 10.1376 13.4874 9.84375 13.125 9.84375H11.1562V7.875Z"
                                          fill="white"
                                        />
                                        <path
                                          fill-rule="evenodd"
                                          clip-rule="evenodd"
                                          d="M14.4056 2.07701C13.4062 1.96874 12.1466 1.96874 10.5396 1.96875H10.4604C8.85342 1.96874 7.59378 1.96874 6.59442 2.07701C5.57457 2.18751 4.74824 2.41703 4.04271 2.92963C3.61558 3.23996 3.23996 3.61558 2.92963 4.04271C2.41703 4.74824 2.18751 5.57457 2.07701 6.59442C1.96874 7.59378 1.96874 8.85342 1.96875 10.4604V10.5396C1.96874 12.1466 1.96874 13.4062 2.07701 14.4056C2.18751 15.4255 2.41703 16.2517 2.92963 16.9573C3.23996 17.3844 3.61558 17.76 4.04271 18.0703C4.74824 18.583 5.57457 18.8125 6.59442 18.923C7.59377 19.0312 8.85343 19.0312 10.4604 19.0312H10.5396C12.1466 19.0312 13.4062 19.0312 14.4056 18.923C15.4255 18.8125 16.2517 18.583 16.9573 18.0703C17.3844 17.76 17.76 17.3844 18.0703 16.9573C18.583 16.2517 18.8125 15.4255 18.923 14.4056C19.0312 13.4062 19.0312 12.1466 19.0312 10.5396V10.4604C19.0312 8.85343 19.0312 7.59377 18.923 6.59442C18.8125 5.57457 18.583 4.74824 18.0703 4.04271C17.76 3.61558 17.3844 3.23996 16.9573 2.92963C16.2517 2.41703 15.4255 2.18751 14.4056 2.07701ZM4.81417 3.99147C5.25868 3.66852 5.82761 3.48027 6.73579 3.38188C7.65624 3.28215 8.84485 3.28125 10.5 3.28125C12.1552 3.28125 13.3438 3.28215 14.2642 3.38188C15.1724 3.48027 15.7413 3.66852 16.1858 3.99147C16.5015 4.22084 16.7792 4.49847 17.0085 4.81417C17.3315 5.25868 17.5197 5.82761 17.6181 6.73579C17.7179 7.65624 17.7188 8.84485 17.7188 10.5C17.7188 12.1552 17.7179 13.3438 17.6181 14.2642C17.5197 15.1724 17.3315 15.7413 17.0085 16.1858C16.7792 16.5015 16.5015 16.7792 16.1858 17.0085C15.7413 17.3315 15.1724 17.5197 14.2642 17.6181C13.3438 17.7179 12.1552 17.7188 10.5 17.7188C8.84485 17.7188 7.65624 17.7179 6.73579 17.6181C5.82761 17.5197 5.25868 17.3315 4.81417 17.0085C4.49847 16.7792 4.22084 16.5015 3.99147 16.1858C3.66852 15.7413 3.48027 15.1724 3.38188 14.2642C3.28215 13.3438 3.28125 12.1552 3.28125 10.5C3.28125 8.84485 3.28215 7.65624 3.38188 6.73579C3.48027 5.82761 3.66852 5.25868 3.99147 4.81417C4.22084 4.49847 4.49847 4.22084 4.81417 3.99147Z"
                                          fill="white"
                                        />
                                      </svg>
                                    </button>
                                  </div>
                                  <ul className="file-link-list">
                                    {links.map((link, index) => (
                                      <li key={index}>
                                        <span>
                                          <a href={link} target="_blank">
                                            {link}
                                          </a>
                                        </span>
                                        <button
                                          onClick={() =>
                                            handleDeleteLink(index)
                                          }
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                          >
                                            <path
                                              fill-rule="evenodd"
                                              clip-rule="evenodd"
                                              d="M6.28329 6.83455C6.55807 6.80708 6.80307 7.00755 6.83054 7.28235L7.16387 10.6157C7.19141 10.8904 6.99087 11.1355 6.71614 11.1629C6.44136 11.1904 6.19633 10.9899 6.16886 10.7151L5.83553 7.38181C5.80805 7.10708 6.00852 6.86201 6.28329 6.83455Z"
                                              fill="#FF3535"
                                            />
                                            <path
                                              fill-rule="evenodd"
                                              clip-rule="evenodd"
                                              d="M9.71612 6.83455C9.99086 6.86201 10.1913 7.10708 10.1639 7.38181L9.83052 10.7151C9.80306 10.9899 9.55806 11.1904 9.28326 11.1629C9.00852 11.1355 8.80806 10.8904 8.83552 10.6157L9.16886 7.28235C9.19632 7.00755 9.44132 6.80708 9.71612 6.83455Z"
                                              fill="#FF3535"
                                            />
                                            <path
                                              fill-rule="evenodd"
                                              clip-rule="evenodd"
                                              d="M6.74855 0.832044H9.00288C9.14715 0.831951 9.27282 0.831871 9.39148 0.850824C9.86035 0.925691 10.2661 1.21813 10.4854 1.63926C10.5409 1.74585 10.5806 1.8651 10.6261 2.00199L10.7005 2.22526C10.7131 2.26305 10.7167 2.27375 10.7198 2.28218C10.8365 2.60492 11.1391 2.82309 11.4823 2.83179C11.4913 2.83202 11.5024 2.83206 11.5424 2.83206H13.5424C13.8186 2.83206 14.0424 3.05591 14.0424 3.33206C14.0424 3.6082 13.8186 3.83206 13.5424 3.83206H2.20898C1.93284 3.83206 1.70898 3.6082 1.70898 3.33206C1.70898 3.05591 1.93284 2.83206 2.20898 2.83206H4.20904C4.24907 2.83206 4.26012 2.83202 4.26914 2.83179C4.61224 2.82309 4.91492 2.60494 5.03167 2.28219C5.03474 2.2737 5.03827 2.26324 5.05093 2.22526L5.12533 2.002C5.17086 1.86512 5.21054 1.74585 5.26604 1.63926C5.48534 1.21813 5.89107 0.925691 6.35994 0.850824C6.47862 0.831871 6.6043 0.831951 6.74855 0.832044ZM5.88108 2.83206C5.91542 2.76471 5.94586 2.69472 5.97204 2.62235C5.97998 2.60037 5.98778 2.57698 5.9978 2.54692L6.06434 2.34731C6.12512 2.16497 6.13911 2.12778 6.15299 2.10112C6.22609 1.96074 6.36134 1.86327 6.51762 1.83831C6.54731 1.83357 6.587 1.83206 6.77922 1.83206H8.97222C9.16442 1.83206 9.20408 1.83357 9.23382 1.83831C9.39008 1.86327 9.52535 1.96074 9.59842 2.10112C9.61228 2.12778 9.62628 2.16496 9.68708 2.34731L9.75355 2.5468L9.77942 2.62236C9.80555 2.69473 9.83602 2.76471 9.87035 2.83206H5.88108Z"
                                              fill="#FF3535"
                                            />
                                            <path
                                              fill-rule="evenodd"
                                              clip-rule="evenodd"
                                              d="M3.41012 5.16519C3.68565 5.14682 3.9239 5.35529 3.94227 5.63082L4.2489 10.2302C4.3088 11.1288 4.35149 11.754 4.4452 12.2244C4.5361 12.6807 4.66299 12.9223 4.84527 13.0928C5.02754 13.2633 5.27698 13.3739 5.73831 13.4342C6.21391 13.4964 6.8406 13.4974 7.74113 13.4974H8.25673C9.15727 13.4974 9.78393 13.4964 10.2595 13.4342C10.7209 13.3739 10.9703 13.2633 11.1526 13.0928C11.3349 12.9223 11.4618 12.6807 11.5527 12.2244C11.6464 11.754 11.6891 11.1288 11.749 10.2302L12.0556 5.63082C12.0739 5.35529 12.3122 5.14682 12.5877 5.16519C12.8633 5.18356 13.0717 5.42181 13.0534 5.69734L12.7444 10.3318C12.6874 11.187 12.6414 11.8777 12.5334 12.4198C12.4211 12.9833 12.2302 13.4541 11.8358 13.823C11.4414 14.192 10.959 14.3512 10.3893 14.4257C9.8412 14.4974 9.14893 14.4974 8.29187 14.4974H7.706C6.84893 14.4974 6.15663 14.4974 5.60861 14.4257C5.03884 14.3512 4.55647 14.192 4.16208 13.823C3.76768 13.4541 3.57673 12.9833 3.46447 12.4198C3.35649 11.8777 3.31045 11.187 3.25345 10.3318L2.94449 5.69734C2.92611 5.42181 3.13459 5.18356 3.41012 5.16519Z"
                                              fill="#FF3535"
                                            />
                                          </svg>
                                        </button>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div className="mb-3 mt-4 d-flex justify-content-end">
                                  <button className="svg-button">
                                    Add
                                    <span>
                                      <ButtonPlus />
                                    </span>
                                  </button>
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="topic">
                                  <h5>Topic</h5>
                                  <div className="topic-cards">
                                    <div className="topic-card">
                                      <div className="text">
                                        <p>
                                          Tracing Changes Through a Thousand
                                          Changes Through a Thousand
                                        </p>
                                      </div>
                                      <div className="below">
                                        <div className="edit">
                                          <Edit />
                                        </div>
                                        <div className="delete">
                                          <Delete />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="topic-card">
                                      <div className="text">
                                        <p>
                                          Tracing Changes Through a Thousand
                                          Changes Through a Thousand
                                        </p>
                                      </div>
                                      <div className="below">
                                        <div className="edit">
                                          <Edit />
                                        </div>
                                        <div className="delete">
                                          <Delete />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="topic-card">
                                      <div className="text">
                                        <p>
                                          Tracing Changes Through a Thousand
                                          Changes Through a Thousand
                                        </p>
                                      </div>
                                      <div className="below">
                                        <div className="edit">
                                          <Edit />
                                        </div>
                                        <div className="delete">
                                          <Delete />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="topic-card">
                                      <div className="text">
                                        <p>
                                          Tracing Changes Through a Thousand
                                          Changes Through a Thousand
                                        </p>
                                      </div>
                                      <div className="below">
                                        <div className="edit">
                                          <Edit />
                                        </div>
                                        <div className="delete">
                                          <Delete />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="no-mudule">
                                    <img src={noModule} alt="" />
                                    <h4>No Topics Found</h4>
                                  </div>
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="d-flex justify-content-between">
                                  <a href="#" className="back">
                                    <ArrowLeft />
                                    Back
                                  </a>
                                  <button className="svg-button">
                                    Submit{" "}
                                    <span>
                                      <ButtonArrowRight />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="contact"
                      role="tabpanel"
                      aria-labelledby="contact-tab"
                    >
                      <div className="welldone">
                        <div className="img">
                          <img src={welldone} alt="" />
                        </div>
                        <h2>Well Done !</h2>
                        <p className="text-center">
                          You have successfully added Study Material
                        </p>
                        <div className="welldone-btns">
                          <a href="#" className="back">
                            <ArrowLeft />
                            Back
                          </a>
                          <button
                            className="svg-button"
                            data-bs-toggle="modal"
                            href="#add-popup"
                            role="button"
                          >
                            Add Syllabus
                            <span>
                              <ButtonPlus />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="modal fade popup-1"
              id="add-popup"
              aria-hidden="true"
              aria-labelledby="add-popupLabel"
              tabindex="-1"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                  <div className="modal-body">
                    <h2>Add Module</h2>
                    <div className="pop-content">
                      <input
                        type="text"
                        placeholder="Enter module name"
                        className="name"
                      />
                      <label htmlFor="name">
                        Module <span>*</span>
                      </label>
                    </div>
                    <div className="pop-btn">
                      <button className="svg-button">
                        Add
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="13"
                            height="13"
                            viewBox="0 0 13 13"
                            fill="none"
                          >
                            <g clip-path="url(#clip0_1_815)">
                              <path
                                d="M6.5 13C6.33165 13 6.17019 12.9331 6.05115 12.8141C5.93211 12.695 5.86523 12.5336 5.86523 12.3652V0.634766C5.86523 0.466415 5.93211 0.30496 6.05115 0.185919C6.17019 0.0668769 6.33165 0 6.5 0C6.66835 0 6.82981 0.0668769 6.94885 0.185919C7.06789 0.30496 7.13477 0.466415 7.13477 0.634766V12.3652C7.13477 12.5336 7.06789 12.695 6.94885 12.8141C6.82981 12.9331 6.66835 13 6.5 13Z"
                                fill="white"
                              />
                              <path
                                d="M12.3652 7.13672H0.634766C0.466415 7.13672 0.30496 7.06984 0.185919 6.9508C0.0668769 6.83176 0 6.6703 0 6.50195C0 6.3336 0.0668769 6.17215 0.185919 6.05311C0.30496 5.93406 0.466415 5.86719 0.634766 5.86719H12.3652C12.5336 5.86719 12.695 5.93406 12.8141 6.05311C12.9331 6.17215 13 6.3336 13 6.50195C13 6.6703 12.9331 6.83176 12.8141 6.9508C12.695 7.06984 12.5336 7.13672 12.3652 7.13672Z"
                                fill="white"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_1_815">
                                <rect width="13" height="13" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="modal fade popup-1 edit-popup-1"
              id="edit-popup"
              aria-hidden="true"
              aria-labelledby="edit-popupLabel"
              tabindex="-1"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                  <div className="modal-body">
                    <h2>Edit Module</h2>
                    <div className="pop-content">
                      <input
                        type="text"
                        placeholder="Enter module name"
                        className="Add Module"
                      />
                      <label htmlFor="Add Module">
                        Module <span>*</span>
                      </label>
                    </div>
                    <div className="pop-btn">
                      <button className="svg-button">
                        Update
                        <span>
                          <svg
                            width="15"
                            height="12"
                            viewBox="0 0 15 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.6733 0.240705C15.0763 0.589172 15.1113 1.18805 14.7515 1.57834L5.43469 11.6836C5.24908 11.8849 4.98365 12 4.70498 12C4.4263 12 4.16085 11.8849 3.97526 11.6836L0.248543 7.64148C-0.111287 7.25116 -0.0762778 6.6523 0.326739 6.3038C0.729743 5.95542 1.34816 5.98927 1.70799 6.37958L4.70498 9.63019L13.2921 0.316419C13.6518 -0.0738709 14.2702 -0.107775 14.6733 0.240705Z"
                              fill="white"
                            />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="modal fade popup-2 change-popup"
              id="change-popup"
              aria-hidden="true"
              aria-labelledby="change-popupLabel"
              tabindex="-1"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-body">
                    <div className="circle">
                      <div className="round">
                        <svg
                          width="19"
                          height="74"
                          viewBox="0 0 19 74"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g filter="url(#filter0_d_1_340)">
                            <path
                              d="M9.5 45C6.46235 45 4 42.5376 4 39.5V6.5C4 3.46235 6.46235 1 9.5 1C12.5377 1 15 3.46235 15 6.5V39.5C15 42.5376 12.5377 45 9.5 45Z"
                              fill="white"
                            />
                            <path
                              d="M9.5 67C12.5376 67 15 64.5376 15 61.5C15 58.4624 12.5376 56 9.5 56C6.46243 56 4 58.4624 4 61.5C4 64.5376 6.46243 67 9.5 67Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_d_1_340"
                              x="0"
                              y="0"
                              width="19"
                              height="74"
                              filterUnits="userSpaceOnUse"
                              color-interpolation-filters="sRGB"
                            >
                              <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                              />
                              <feOffset dy="3" />
                              <feGaussianBlur stdDeviation="2" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.27 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_1_340"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_1_340"
                                result="shape"
                              />
                            </filter>
                          </defs>
                        </svg>
                      </div>
                    </div>
                    <div className="content-body">
                      <h2>Are you sure want to change the status?</h2>

                      <div className="btn1">
                        <button
                          type="button"
                          className="no"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
                          No
                        </button>
                        <button type="button" className="yes">
                          Yes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="modal fade popup-2 delete-popup"
              id="delete-popup"
              aria-hidden="true"
              aria-labelledby="delete-popupLabel"
              tabindex="-1"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-body">
                    <div className="circle">
                      <div className="round">
                        <svg
                          width="68"
                          height="73"
                          viewBox="0 0 68 73"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g filter="url(#filter0_d_1_8046)">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M27.9584 29.0565C29.006 28.9518 29.9401 29.716 30.0448 30.7637L31.3156 43.472C31.4206 44.5195 30.6561 45.4538 29.6086 45.5585C28.561 45.6632 27.6269 44.8989 27.5221 43.8513L26.2513 31.1429C26.1465 30.0955 26.9108 29.1612 27.9584 29.0565Z"
                              fill="white"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M41.0461 29.0565C42.0935 29.1612 42.8578 30.0955 42.7531 31.1429L41.4822 43.8513C41.3775 44.8989 40.4435 45.6632 39.3958 45.5585C38.3484 45.4538 37.5841 44.5195 37.6888 43.472L38.9596 30.7637C39.0643 29.716 39.9984 28.9518 41.0461 29.0565Z"
                              fill="white"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M29.7324 6.17192H38.327C38.8771 6.17157 39.3562 6.17126 39.8086 6.24352C41.5961 6.52895 43.143 7.64388 43.9789 9.24942C44.1907 9.65581 44.3419 10.1105 44.5155 10.6323L44.7991 11.4836C44.8472 11.6276 44.8609 11.6684 44.8726 11.7006C45.3176 12.931 46.4716 13.7628 47.7797 13.796C47.8141 13.7968 47.8563 13.797 48.0088 13.797H55.6338C56.6868 13.797 57.54 14.6504 57.54 15.7032C57.54 16.756 56.6868 17.6095 55.6338 17.6095H12.4253C11.3725 17.6095 10.519 16.756 10.519 15.7032C10.519 14.6504 11.3725 13.797 12.4253 13.797H20.0505C20.2031 13.797 20.2452 13.7968 20.2797 13.796C21.5877 13.7628 22.7417 12.9311 23.1868 11.7006C23.1985 11.6683 23.2119 11.6283 23.2602 11.4836L23.5439 10.6324C23.7175 10.1105 23.8687 9.65581 24.0803 9.24942C24.9164 7.64388 26.4632 6.52895 28.2508 6.24352C28.7033 6.17126 29.1824 6.17157 29.7324 6.17192ZM26.4252 13.797C26.5561 13.5402 26.6721 13.2734 26.7719 12.9975C26.8022 12.9137 26.832 12.8245 26.8701 12.7099L27.1238 11.9489C27.3556 11.2537 27.4089 11.1119 27.4618 11.0103C27.7405 10.4751 28.2561 10.1035 28.852 10.0083C28.9652 9.99024 29.1165 9.98448 29.8493 9.98448H38.2101C38.9429 9.98448 39.0941 9.99024 39.2075 10.0083C39.8032 10.1035 40.3189 10.4751 40.5975 11.0103C40.6504 11.1119 40.7037 11.2537 40.9355 11.9489L41.189 12.7094L41.2876 12.9975C41.3872 13.2734 41.5034 13.5402 41.6343 13.797H26.4252Z"
                              fill="white"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M17.0046 22.6918C18.0551 22.6218 18.9634 23.4166 19.0335 24.467L20.2025 42.0022C20.4308 45.4281 20.5936 47.8117 20.9509 49.6051C21.2974 51.3449 21.7812 52.2657 22.4761 52.9159C23.171 53.5658 24.122 53.9874 25.8809 54.2175C27.6941 54.4546 30.0833 54.4584 33.5166 54.4584H35.4823C38.9156 54.4584 41.3048 54.4546 43.118 54.2175C44.8768 53.9874 45.8279 53.5658 46.5228 52.9159C47.2177 52.2657 47.7017 51.3449 48.0481 49.6051C48.4054 47.8117 48.5681 45.4281 48.7966 42.0022L49.9655 24.467C50.0354 23.4166 50.9438 22.6218 51.9943 22.6918C53.0447 22.7618 53.8395 23.6702 53.7696 24.7206L52.5916 42.3896C52.3743 45.65 52.1989 48.2834 51.7871 50.3501C51.3591 52.4985 50.6312 54.2932 49.1275 55.6998C47.6239 57.1066 45.7847 57.7135 43.6126 57.9977C41.5231 58.2709 38.8838 58.2709 35.6163 58.2709H33.3827C30.1151 58.2709 27.4757 58.2709 25.3864 57.9977C23.2141 57.7135 21.3751 57.1066 19.8715 55.6998C18.3678 54.2932 17.6398 52.4985 17.2118 50.3501C16.8001 48.2834 16.6246 45.65 16.4073 42.3896L15.2294 24.7206C15.1593 23.6702 15.9541 22.7618 17.0046 22.6918Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_d_1_8046"
                              x="0.519043"
                              y="0.171875"
                              width="67.021"
                              height="72.0977"
                              filterUnits="userSpaceOnUse"
                              color-interpolation-filters="sRGB"
                            >
                              <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                              />
                              <feOffset dy="4" />
                              <feGaussianBlur stdDeviation="5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.45 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_1_8046"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_1_8046"
                                result="shape"
                              />
                            </filter>
                          </defs>
                        </svg>
                      </div>
                    </div>
                    <div className="content-body">
                      <h2>Are you sure want to change the status?</h2>

                      <div className="btn1">
                        <button
                          type="button"
                          className="no"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
                          No
                        </button>
                        <button type="button" className="yes">
                          Yes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddStudyMaterial;
