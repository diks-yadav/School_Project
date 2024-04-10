import React from "react";

export default function Leftnav() {
  return (
    <div>
      <nav className="sidebar sidebar-offcanvas" id="sidebar" style={{position:"fixed",top:"0", height:"100%"}}>
        <div className="text-center sidebar-brand-wrapper d-flex align-items-center">
          <a className="sidebar-brand brand-logo" href="index.html">
            <img src="/assets/images/logo.svg" alt="logo" />
          </a>
          <a
            className="sidebar-brand brand-logo-mini pl-4 pt-3"
            href="index.html"
          >
            <img src="/assets/images/logo-mini.svg" alt="logo" />
          </a>
        </div>
        <ul className="nav">
          <li className="nav-item nav-profile">
            <a href="#" className="nav-link">
              <div className="nav-profile-image">
                <img src="/assets/images/faces/face1.jpg" alt="profile" />
                <span className="login-status online"></span>
                {/* <!--change to offline or busy as needed--> */}
              </div>
              <div className="nav-profile-text d-flex flex-column pr-3">
                <span className="font-weight-medium mb-2">Henry Klein</span>
                <span className="font-weight-normal">Roll No. 123</span>
              </div>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="index.html">
              <i className="mdi mdi-home menu-icon"></i>
              <span className="menu-title">Home</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-toggle="collapse"
              href="#ui-basic"
              aria-expanded="false"
              aria-controls="ui-basic"
            >
              <i className="mdi mdi-crosshairs-gps menu-icon"></i>
              <span className="menu-title">Attendance</span>
              <i className="menu-arrow"></i>
            </a>
            <div className="collapse" id="ui-basic">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <a className="nav-link" href="pages/ui-features/buttons.html">
                    Buttons
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="pages/ui-features/dropdowns.html"
                  >
                    Dropdowns
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="pages/ui-features/typography.html"
                  >
                    Typography
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="pages/icons/mdi.html">
              <i className="mdi mdi-contacts menu-icon"></i>
              <span className="menu-title">Test</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="pages/forms/basic_elements.html">
              <i className="mdi mdi-format-list-bulleted menu-icon"></i>
              <span className="menu-title">Study Materials</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="pages/charts/chartjs.html">
              <i className="mdi mdi-chart-bar menu-icon"></i>
              <span className="menu-title">Faculty Feedback</span>
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.bootstrapdash.com/demo/breeze-free/documentation/documentation.html"
            >
              <i className="mdi mdi-file-document-box menu-icon"></i>
              <span className="menu-title">Student Documentation</span>
            </a>
          </li>
          <hr />
          <li className="nav-item sidebar-actions">
            <div className="nav-link">
              <div className="mt-4">
                <div className="border-none">
                  <p className="text-black">Virtual PTM</p>
                </div>
                <ul className="mt-4 pl-0">
                  <li>Sign Out</li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
