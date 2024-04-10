import React from 'react'
import Navbar from './Navbar'
import Leftnav from './Leftnav'
import Home from './Home'

export default function Dashboard() {
  return (
    <div>
        <div className="container-scroller">
      {/* sidebar */}
      <Leftnav/>
      <div className="container-fluid page-body-wrapper">
        <div id="theme-settings" className="settings-panel">
          <i className="settings-close mdi mdi-close"></i>
          <p className="settings-heading">SIDEBAR SKINS</p>
          <div className="sidebar-bg-options selected" id="sidebar-default-theme">
            <div className="img-ss rounded-circle bg-light border mr-3"></div> Default
          </div>
          <div className="sidebar-bg-options" id="sidebar-dark-theme">
            <div className="img-ss rounded-circle bg-dark border mr-3"></div> Dark
          </div>
          <p className="settings-heading mt-2">HEADER SKINS</p>
          <div className="color-tiles mx-0 px-4">
            <div className="tiles light"></div>
            <div className="tiles dark"></div>
          </div>
        </div>
    {/* navbar.jsx */}
    <Navbar/>
   <main  style={{padding:"0.70rem 10.25rem"}}>
   <Home/>
   </main>
   
        {/* <!-- main-panel ends --> */}
      </div>
      {/* <!-- page-body-wrapper ends --> */}
    </div>
    </div>
  )
}
