import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function index({ children, isAria }) {
  return (
    <React.Fragment>
      <Navbar />
      <Sidebar isAria={isAria}/>
      <React.Fragment>
        <div class="content-page">
          <div class="content">
            <div class="container-fluid">{children}</div>
          </div>
        </div>
      </React.Fragment>
    </React.Fragment>
  );
}

export default index;
