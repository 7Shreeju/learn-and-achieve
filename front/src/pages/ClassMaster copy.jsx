import React, { useState, useEffect, useRef } from "react";
import { logoDark, user } from "../constants/images";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import $ from "jquery";
import "datatables.net-dt/css/dataTables.dataTables.css";
import "datatables.net";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  Delete,
  Edit,
  ButtonPlus,
  ArrowLeft,
  ButtonArrowRight,
  UploadFile,
  Calender,
} from "../components/SvgIcons";


const Dashboard = () => {
  // const dataTableRef = useRef(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [classmaster, setClassmaster] = useState([]);

  
  useEffect( () => {
    async function fetchData(){
        const response = await fetch("http://localhost:5000/api/classmaster/get",{
            method:"GET",
        });
        if(response.ok){
          const data = await response.json();
            const dataSet1 = data.msg.map((classmaster, index) => ([
              '<div className="form-check"> <input className="form-check-input" type="checkbox" value="" /> </div>',
              index+1,  
              classmaster.classname,
              classmaster.endate,
              classmaster.status =='1'?'<span class="toggle" href="#change-popup" data-bs-toggle="modal"><input type="checkbox" checked id="toggle-switch" /><label for="toggle-switch"></label></span>':'<span class="toggle" href="#change-popup" data-bs-toggle="modal"><input type="checkbox" unchecked id="toggle-switch" /><label for="toggle-switch"></label></span>',
              `<div className="svg-de-icon"><button className="edit" href="#edit-class-popup" data-bs-toggle="modal">Edit</button><button onClick={() => handleDelete(classmaster._id)} className="delete"  href="#delete-popup" data-bs-toggle="modal">Delete</button></div>`,
            ]));
            setClassmaster(localStorage.setItem("classmasterData", JSON.stringify(dataSet1)));
            
        }else{
          
          console.log(data);
        }
      }
      fetchData();   
  },[]);


  const handleChange = (date) => {
    setSelectedDate(date);
  };

  

  const tableRef = useRef();

  const tableName = "table1";

  const titleSet= [
    { title :"<div className='form-check'> <input className='form-check-input' type='checkbox' value='' /> </div>" },
    { title: "Sr No."},
    { title: "Class"},
    { title: "Class End Date"},
    { title: "Status"},
    { title: "Action"}
  ]

  // useEffect(() => {
    $(document).ready(function(){
      
    
    var table = $(`#${tableName}`).DataTable(
        {
            language: {
                searchPlaceholder: "Search",
                paginate: {
                  next: "Next",
                  previous: "Prev",
                },
              },
            data: JSON.parse(localStorage.getItem("classmasterData"))==''?classmaster :JSON.parse(localStorage.getItem("classmasterData")),
                columns: titleSet,
                columnDefs: [{ orderable: false, targets: 0 }],
                destroy: true,  
        }
    )
    return function() {
        table.destroy()
    }
  });

 
  return (
    <>
      <div className="dashboard">
        <Sidebar />
        <div className="db-body">
          <Navbar />

          {/* Class Master */}
          <div className="class-master">
            <div className="container-fluid px-lg-4">
              <div className="db-head">
                
                <h4>Class master</h4>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">Dashboard</a>
                    </li>
                  </ol>
                </nav>
              </div>
              {/* Class List */}
              <div className="class-list">
                <div className="card">
                  <div className="head">
                    <h4>Class List</h4>
                    <div className="button-search">
                      <button className="svg-button" href="#add-class-popup" data-bs-toggle="modal">
                        Add Class
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="13"
                            height="13"
                            viewBox="0 0 13 13"
                            fill="none"
                            >
                            <g clipPath="url(#clip0_1_815)">
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
                  <div className="data-tables">
                    <button className="delete-button">
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
                          d="M6.28232 6.83455C6.55709 6.80708 6.8021 7.00755 6.82956 7.28235L7.1629 10.6157C7.19043 10.8904 6.9899 11.1355 6.71516 11.1629C6.44038 11.1904 6.19536 10.9899 6.16788 10.7151L5.83455 7.38181C5.80707 7.10708 6.00754 6.86201 6.28232 6.83455Z"
                          fill="white"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.71515 6.83455C9.98988 6.86201 10.1903 7.10708 10.1629 7.38181L9.82955 10.7151C9.80208 10.9899 9.55708 11.1904 9.28228 11.1629C9.00755 11.1355 8.80708 10.8904 8.83455 10.6157L9.16788 7.28235C9.19535 7.00755 9.44035 6.80708 9.71515 6.83455Z"
                          fill="white"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M6.74855 0.832044H9.00288C9.14715 0.831951 9.27282 0.831871 9.39148 0.850824C9.86035 0.925691 10.2661 1.21813 10.4854 1.63926C10.5409 1.74585 10.5806 1.8651 10.6261 2.00199L10.7005 2.22526C10.7131 2.26305 10.7167 2.27375 10.7198 2.28218C10.8365 2.60492 11.1391 2.82309 11.4823 2.83179C11.4913 2.83202 11.5024 2.83206 11.5424 2.83206H13.5424C13.8186 2.83206 14.0424 3.05591 14.0424 3.33206C14.0424 3.6082 13.8186 3.83206 13.5424 3.83206H2.20898C1.93284 3.83206 1.70898 3.6082 1.70898 3.33206C1.70898 3.05591 1.93284 2.83206 2.20898 2.83206H4.20904C4.24907 2.83206 4.26012 2.83202 4.26914 2.83179C4.61224 2.82309 4.91492 2.60494 5.03167 2.28219C5.03474 2.2737 5.03827 2.26324 5.05093 2.22526L5.12533 2.002C5.17086 1.86512 5.21054 1.74585 5.26604 1.63926C5.48534 1.21813 5.89107 0.925691 6.35994 0.850824C6.47862 0.831871 6.6043 0.831951 6.74855 0.832044ZM5.88108 2.83206C5.91542 2.76471 5.94586 2.69472 5.97204 2.62235C5.97998 2.60037 5.98778 2.57698 5.9978 2.54692L6.06434 2.34731C6.12512 2.16497 6.13911 2.12778 6.15299 2.10112C6.22609 1.96074 6.36134 1.86327 6.51762 1.83831C6.54731 1.83357 6.587 1.83206 6.77922 1.83206H8.97222C9.16442 1.83206 9.20408 1.83357 9.23382 1.83831C9.39008 1.86327 9.52535 1.96074 9.59842 2.10112C9.61228 2.12778 9.62628 2.16496 9.68708 2.34731L9.75355 2.5468L9.77942 2.62236C9.80555 2.69473 9.83602 2.76471 9.87035 2.83206H5.88108Z"
                          fill="white"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.41012 5.16519C3.68565 5.14682 3.9239 5.35529 3.94227 5.63082L4.2489 10.2302C4.3088 11.1288 4.35149 11.754 4.4452 12.2244C4.5361 12.6807 4.66299 12.9223 4.84527 13.0928C5.02754 13.2633 5.27698 13.3739 5.73831 13.4342C6.21391 13.4964 6.8406 13.4974 7.74113 13.4974H8.25673C9.15727 13.4974 9.78393 13.4964 10.2595 13.4342C10.7209 13.3739 10.9703 13.2633 11.1526 13.0928C11.3349 12.9223 11.4618 12.6807 11.5527 12.2244C11.6464 11.754 11.6891 11.1288 11.749 10.2302L12.0556 5.63082C12.0739 5.35529 12.3122 5.14682 12.5877 5.16519C12.8633 5.18356 13.0717 5.42181 13.0534 5.69734L12.7444 10.3318C12.6874 11.187 12.6414 11.8777 12.5334 12.4198C12.4211 12.9833 12.2302 13.4541 11.8358 13.823C11.4414 14.192 10.959 14.3512 10.3893 14.4257C9.8412 14.4974 9.14893 14.4974 8.29187 14.4974H7.706C6.84893 14.4974 6.15663 14.4974 5.60861 14.4257C5.03884 14.3512 4.55647 14.192 4.16208 13.823C3.76768 13.4541 3.57673 12.9833 3.46447 12.4198C3.35649 11.8777 3.31045 11.187 3.25345 10.3318L2.94449 5.69734C2.92611 5.42181 3.13459 5.18356 3.41012 5.16519Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                    <div className="table-responive">
                     <table className="display table" width="100%" id={tableName} ref={ tableRef }></table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Add Modal */}
            <div
              className="modal fade popup-1 edit-class-popup-1"
              id="edit-class-popup"
              aria-hidden="true"
              aria-labelledby="edit-class-popupLabel"
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
                    <h2>Edit Class</h2>
                    <div className="pop-content">
                      <input
                        type="text"
                        placeholder="Enter module name"
                        className="Add Module"
                      />
                      <label htmlFor="Add Module">
                        Class<span>*</span>
                      </label>
                    </div>

                    <div className="pop-content">
                      <div className="date-pick">
                        <DatePicker
                          selected={selectedDate}
                          onChange={handleChange}
                          dateFormat="dd/MM/yyyy" // You can customize the date format
                          placeholderText="dd/MM/YYYY"

                        />
                        <Calender />

                      </div>



                      <label htmlFor="Add Module">
                        Class End Date<span>*</span>
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
              className="modal fade popup-1 add-class-popup-1"
              id="add-class-popup"
              aria-hidden="true"
              aria-labelledby="add-class-popupLabel"
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
                    <h2>Add Class</h2>
                    <div className="pop-content">
                      <input
                        type="text"
                        placeholder="Enter module name"
                        className="Add Module"
                      />
                      <label htmlFor="Add Module">
                        Class<span>*</span>
                      </label>
                    </div>

                    <div className="pop-content">
                      <div className="date-pick">
                        <DatePicker
                          selected={selectedDate}
                          onChange={handleChange}
                          dateFormat="dd/MM/yyyy" // You can customize the date format
                          placeholderText="dd/MM/YYYY"

                        />
                        <Calender />

                      </div>



                      <label htmlFor="Add Module">
                        Class End Date<span>*</span>
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
                            <g clipPath="url(#clip0_1_815)">
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
                      <h2>Are you sure want to delete questions?</h2>

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

export default Dashboard;
{/* <div className="svg-de-icon"> <button className="edit" href="#edit-class-popup" data-bs-toggle="modal"><Edit /></button><button className="delete" href="#delete-popup" data-bs-toggle="modal"><svg xmlns="http://www.w3.org/2000/svg"width="16" height="16"viewBox="0 0 16 16"fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.28427 6.83455C6.55904 6.80708 6.80405 7.00755 6.83152 7.28235L7.16485 10.6157C7.19238 10.8904 6.99185 11.1355 6.71712 11.1629C6.44234 11.1904 6.19731 10.9899 6.16984 10.7151L5.8365 7.38181C5.80902 7.10708 6.0095 6.86201 6.28427 6.83455Z" fill="#FF3535"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9.7171 6.83455C9.99183 6.86201 10.1923 7.10708 10.1648 7.38181L9.8315 10.7151C9.80403 10.9899 9.55903 11.1904 9.28423 11.1629C9.0095 11.1355 8.80903 10.8904 8.8365 10.6157L9.16983 7.28235C9.1973 7.00755 9.4423 6.80708 9.7171 6.83455Z" fill="#FF3535" /><path fill-rule="evenodd" clip-rule="evenodd" d="M6.74953 0.832044H9.00386C9.14813 0.831951 9.27379 0.831871 9.39246 0.850824C9.86133 0.925691 10.2671 1.21813 10.4863 1.63926C10.5419 1.74585 10.5815 1.8651 10.6271 2.00199L10.7015 2.22526C10.7141 2.26305 10.7177 2.27375 10.7207 2.28218C10.8375 2.60492 11.1401 2.82309 11.4833 2.83179C11.4923 2.83202 11.5033 2.83206 11.5433 2.83206H13.5433C13.8195 2.83206 14.0433 3.05591 14.0433 3.33206C14.0433 3.6082 13.8195 3.83206 13.5433 3.83206H2.20996C1.93382 3.83206 1.70996 3.6082 1.70996 3.33206C1.70996 3.05591 1.93382 2.83206 2.20996 2.83206H4.21002C4.25005 2.83206 4.26109 2.83202 4.27012 2.83179C4.61322 2.82309 4.9159 2.60494 5.03265 2.28219C5.03571 2.2737 5.03925 2.26324 5.05191 2.22526L5.12631 2.002C5.17184 1.86512 5.21151 1.74585 5.26702 1.63926C5.48631 1.21813 5.89205 0.925691 6.36091 0.850824C6.47959 0.831871 6.60527 0.831951 6.74953 0.832044ZM5.88206 2.83206C5.9164 2.76471 5.94683 2.69472 5.97301 2.62235C5.98096 2.60037 5.98876 2.57698 5.99877 2.54692L6.06531 2.34731C6.12609 2.16497 6.14009 2.12778 6.15397 2.10112C6.22707 1.96074 6.36231 1.86327 6.5186 1.83831C6.54829 1.83357 6.58798 1.83206 6.78019 1.83206H8.97319C9.16539 1.83206 9.20506 1.83357 9.23479 1.83831C9.39106 1.86327 9.52633 1.96074 9.59939 2.10112C9.61326 2.12778 9.62726 2.16496 9.68806 2.34731L9.75453 2.5468L9.78039 2.62236C9.80653 2.69473 9.83699 2.76471 9.87133 2.83206H5.88206Z" fill="#FF3535"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3.4111 5.16519C3.68662 5.14682 3.92488 5.35529 3.94325 5.63082L4.24988 10.2302C4.30978 11.1288 4.35246 11.754 4.44618 12.2244C4.53708 12.6807 4.66396 12.9223 4.84624 13.0928C5.02852 13.2633 5.27796 13.3739 5.73929 13.4342C6.21489 13.4964 6.84158 13.4974 7.74211 13.4974H8.25771C9.15824 13.4974 9.78491 13.4964 10.2605 13.4342C10.7218 13.3739 10.9713 13.2633 11.1536 13.0928C11.3358 12.9223 11.4628 12.6807 11.5536 12.2244C11.6474 11.754 11.69 11.1288 11.75 10.2302L12.0566 5.63082C12.0749 5.35529 12.3132 5.14682 12.5887 5.16519C12.8642 5.18356 13.0727 5.42181 13.0544 5.69734L12.7454 10.3318C12.6884 11.187 12.6424 11.8777 12.5344 12.4198C12.4221 12.9833 12.2312 13.4541 11.8368 13.823C11.4424 14.192 10.96 14.3512 10.3902 14.4257C9.84218 14.4974 9.14991 14.4974 8.29284 14.4974H7.70698C6.84991 14.4974 6.15761 14.4974 5.60958 14.4257C5.03982 14.3512 4.55745 14.192 4.16306 13.823C3.76866 13.4541 3.57771 12.9833 3.46545 12.4198C3.35746 11.8777 3.31142 11.187 3.25443 10.3318L2.94546 5.69734C2.92709 5.42181 3.13556 5.18356 3.4111 5.16519Z"fill="#FF3535"/></svg></button></div> */}