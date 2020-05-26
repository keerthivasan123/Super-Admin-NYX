import React from "react";
import * as FeatherIcon from "react-feather";
import { Link } from "react-router-dom";
import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
} from "reactstrap";

function Sidebar() {
  return (
    <div class="left-side-menu">
      <div class="media user-profile mt-2 mb-2">
        <img
          src="assets/images/users/avatar-7.jpg"
          class="avatar-sm rounded-circle mr-2"
        />
        <img
          src="assets/images/users/avatar-7.jpg"
          class="avatar-xs rounded-circle mr-2"
          alt="Shreyu"
        />

        <div class="media-body">
          <h6 class="pro-user-name mt-0 mb-0">Admin</h6>
          <span class="pro-user-desc">Super Administrator</span>
        </div>
        <UncontrolledDropdown className="align-self-center profile-dropdown-menu">
          <DropdownToggle
            data-toggle="dropdown"
            tag="button"
            className="btn btn-link p-0 dropdown-toggle mr-0"
          >
            <FeatherIcon.ChevronDown />
          </DropdownToggle>
          <DropdownMenu
            right
            className="topbar-dropdown-menu profile-dropdown-items"
          >
            <Link to="/" className="dropdown-item notify-item">
              <FeatherIcon.User className="icon-dual icon-xs mr-2" />
              <span>My Account</span>
            </Link>

            <DropdownItem divider />
            <Link to="/login" className="dropdown-item notify-item">
              <FeatherIcon.LogOut className="icon-dual icon-xs mr-2" />
              <span>Logout</span>
            </Link>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
      <div class="sidebar-content">
        <div id="sidebar-menu" class="slimscroll-menu">
          <ul class="metismenu" id="menu-bar">
            <li class="menu-title"></li>

            <li>
              <a href="/">
                <FeatherIcon.Home />
                <span class="badge badge-success float-right">1</span>
                <span> Dashboard </span>
              </a>
            </li>
            <li class="menu-title"></li>
            <li>
              <a href="/users">
                <FeatherIcon.Users />
                <span> Users </span>
              </a>
              
            </li>
            <li>
              <a href="/admins">
                <FeatherIcon.UserPlus />
                <span> Admins </span>
              </a>
            </li>
            <li className="side-nav-item">
              <a href="/places" aria-expanded = "false">
                <FeatherIcon.Map />
                <span> Places </span>
                <span className="menu-arrow"></span>
              </a>
              <ul className="nav-second-level mm-collapse mm-show" aria-expanded = "true">
                <li>
                <a href="/places">
                  <span> List </span>
                </a>
              </li>
              <li>
                <a href="/places-request">
                  <span> View Request </span>
                </a>
              </li>
              </ul>
            </li>
            <li>
              <a href="/booking">
                <FeatherIcon.Package />
                <span> Bookings </span>
              </a>
            </li>
            <li>
              <a href="/support">
                <FeatherIcon.Smile />
                <span> Support</span>
              </a>
            </li>
            <li>
              <a href="/contact">
                <FeatherIcon.Phone />
                <span> Contact </span>
              </a>
            </li>
            <li>
              <a href="/feedback">
                <FeatherIcon.FileText />
                <span> Feedback </span>
              </a>
            </li>
          </ul>
        </div>

        <div class="clearfix"></div>
      </div>
    </div>
  );
}

export default Sidebar;
