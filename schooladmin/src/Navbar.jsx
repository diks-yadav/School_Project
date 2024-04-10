import React, {useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import {UserOutlined} from "@ant-design/icons"
import axios from "axios";
export default function Navbar() {
  const navigate=useNavigate();
  const [name,setName]=useState();
  const email=localStorage.getItem("email");
  console.log("email",email);
  const handleLogout=() => {
    localStorage.removeItem("email");
    // window.location.reload();
    navigate("/");
  }

  const getSpecificUserDetails=()=>{
    axios.get(`http://localhost:9090/api/get-usersbyemail/${email}`).then((res)=>{
      console.log('Backend response Success:', res);
      if(res.data.status==1){
        console.log("user details",res.data.users.firstname);
        setName(res.data.users.firstname+res.data.users.lastname);
        // setName(res.data.data.name);        
      }
      else{
          alert(`${res.data.message}`)
      }
    }).catch((err) => {
      console.log('Backend response failes:', err.message);
    });
  }
useEffect(()=>{
getSpecificUserDetails();
},[email]);

  return (
    <div>
      {" "}
      <nav className="navbar col-lg-12 col-12 p-lg-0 fixed-top d-flex flex-row">
        <div className="navbar-menu-wrapper d-flex align-items-stretch justify-content-between">
          <a
            className="navbar-brand brand-logo-mini align-self-center d-lg-none"
            href="index.html"
          >
            <img src="/assets/images/logo-mini.svg" alt="logo" />
          </a>
          <button
            className="navbar-toggler navbar-toggler align-self-center mr-2"
            type="button"
            data-toggle="minimize"
          >
            <i className="mdi mdi-menu"></i>
          </button>
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link count-indicator dropdown-toggle"
                id="notificationDropdown"
                href="#"
                data-toggle="dropdown"
              >
                <i className="mdi mdi-bell-outline"></i>
                <span className="count count-varient1">7</span>
              </a>
              <div
                className="dropdown-menu navbar-dropdown navbar-dropdown-large preview-list"
                aria-labelledby="notificationDropdown"
              >
                <h6 className="p-3 mb-0">Notifications</h6>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <img
                      src="/assets/images/faces/face4.jpg"
                      alt=""
                      className="profile-pic"
                    />
                  </div>
                  <div className="preview-item-content">
                    <p className="mb-0">
                      {" "}
                      Dany Miles{" "}
                      <span className="text-small text-muted">
                        commented on your photo
                      </span>
                    </p>
                  </div>
                </a>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <img
                      src="/assets/images/faces/face3.jpg"
                      alt=""
                      className="profile-pic"
                    />
                  </div>
                  <div className="preview-item-content">
                    <p className="mb-0">
                      {" "}
                      James{" "}
                      <span className="text-small text-muted">
                        posted a photo on your wall
                      </span>
                    </p>
                  </div>
                </a>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <img
                      src="/assets/images/faces/face2.jpg"
                      alt=""
                      className="profile-pic"
                    />
                  </div>
                  <div className="preview-item-content">
                    <p className="mb-0">
                      {" "}
                      Alex{" "}
                      <span className="text-small text-muted">
                        just mentioned you in his post
                      </span>
                    </p>
                  </div>
                </a>
                <div className="dropdown-divider"></div>
                <p className="p-3 mb-0">View all activities</p>
              </div>
            </li>
            <li className="nav-item dropdown d-none d-sm-flex">
              <a
                className="nav-link count-indicator dropdown-toggle"
                id="messageDropdown"
                href="#"
                data-toggle="dropdown"
              >
                <i className="mdi mdi-email-outline"></i>
                <span className="count count-varient2">5</span>
              </a>
              <div
                className="dropdown-menu navbar-dropdown navbar-dropdown-large preview-list"
                aria-labelledby="messageDropdown"
              >
                <h6 className="p-3 mb-0">Messages</h6>
                <a className="dropdown-item preview-item">
                  <div className="preview-item-content flex-grow">
                    <span className="badge badge-pill badge-success">
                      Request
                    </span>
                    <p className="text-small text-muted ellipsis mb-0">
                      {" "}
                      Suport needed for user123{" "}
                    </p>
                  </div>
                  <p className="text-small text-muted align-self-start">
                    {" "}
                    4:10 PM{" "}
                  </p>
                </a>
                <a className="dropdown-item preview-item">
                  <div className="preview-item-content flex-grow">
                    <span className="badge badge-pill badge-warning">
                      Invoices
                    </span>
                    <p className="text-small text-muted ellipsis mb-0">
                      {" "}
                      Invoice for order is mailed{" "}
                    </p>
                  </div>
                  <p className="text-small text-muted align-self-start">
                    {" "}
                    4:10 PM{" "}
                  </p>
                </a>
                <a className="dropdown-item preview-item">
                  <div className="preview-item-content flex-grow">
                    <span className="badge badge-pill badge-danger">
                      Projects
                    </span>
                    <p className="text-small text-muted ellipsis mb-0">
                      {" "}
                      New project will start tomorrow{" "}
                    </p>
                  </div>
                  <p className="text-small text-muted align-self-start">
                    {" "}
                    4:10 PM{" "}
                  </p>
                </a>
                <h6 className="p-3 mb-0">See all activity</h6>
              </div>
            </li>
            <li className="nav-item nav-search border-0 ml-1 ml-md-3 ml-lg-5 d-none d-md-flex">
              <form className="nav-link form-inline mt-2 mt-md-0">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="mdi mdi-magnify"></i>
                    </span>
                  </div>
                </div>
              </form>
            </li>
          </ul>
          <ul className="navbar-nav navbar-nav-right ml-lg-auto">
        
            <li className="nav-item nav-profile dropdown border-0">
              {/* <a
                className="nav-link dropdown-toggle text-white"
                id="profileDropdown"
                href="#"
                data-toggle="dropdown"
              > */}
                {/* <img
                  className="nav-profile-img mr-2"
                  alt=""
                  src="/assets/images/faces/face1.jpg"
                /> */}
                <div className="bg-white m-2" style={{height:"40px",cursor:"pointer", width:"40px", borderRadius:"50%", padding:"3px"}}><UserOutlined className="p-2"/>
                </div>
                <span className="text-white">{email}</span>
              {/* </a> */}
              <div
                className="dropdown-menu navbar-dropdown w-100"
                aria-labelledby="profileDropdown"
              >
                <a className="dropdown-item" href="#">
                  <i className="mdi mdi-cached mr-2 text-success"></i> Activity
                  Log{" "}
                </a>
                <a className="dropdown-item" href="#">
                  <i className="mdi mdi-logout mr-2 text-primary"></i> Signout{" "}
                </a>
              </div>
            </li>
            <li className="nav-item dropdown d-none d-xl-flex border-0">
              <button
                // clbuttonssName="nav-link dropdown-toggle"
                className="p-2"
                // className="hover:bg-blue-500 hover:text-white"
                id="languageDropdown"
                href="#"
                data-toggle="dropdown"
                onClick={handleLogout}
              >
                {/* <i className="mdi mdi-earth"></i> */}
                 Log Out{" "}
              </button>
              {/* <div
                className="dropdown-menu navbar-dropdown"
                aria-labelledby="languageDropdown"
              >
                <a className="dropdown-item" href="#">
                  {" "}
                  French{" "}
                </a>
                <a className="dropdown-item" href="#">
                  {" "}
                  Spain{" "}
                </a>
                <a className="dropdown-item" href="#">
                  {" "}
                  Latin{" "}
                </a>
                <a className="dropdown-item" href="#">
                  {" "}
                  Japanese{" "}
                </a>
              </div> */}
            </li>
          </ul>
          <button
            className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
            type="button"
            data-toggle="offcanvas"
          >
            <span className="mdi mdi-menu"></span>
          </button>
        </div>
      </nav>
    </div>
  );
}
