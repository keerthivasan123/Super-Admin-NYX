import React from "react";
import * as Icon from "react-feather";

function Navbar() {
  return (
    <div class="navbar navbar-expand flex-column flex-md-row navbar-custom">
      <div class="container-fluid">
        <a href="index.html" class="navbar-brand mr-0 mr-md-2 logo">
          <span class="logo-lg">
            <img src="assets/images/logo.png" alt="" height="24" />
            <span class="d-inline h5 ml-1 text-logo">Shreyu</span>
          </span>
          <span class="logo-sm">
            <img src="assets/images/logo.png" alt="" height="24" />
          </span>
        </a>

        <ul class="navbar-nav bd-navbar-nav flex-row list-unstyled menu-left mb-0">
          <li class="">
            <button class="button-menu-mobile open-left disable-btn">
              <i data-feather="menu" class="menu-icon"></i>
              <i data-feather="x" class="close-icon"></i>
            </button>
          </li>
        </ul>

        <ul class="navbar-nav flex-row ml-auto d-flex list-unstyled topnav-menu float-right mb-0">
          <li class="d-none d-sm-block">
            <div class="app-search">
              <form>
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search..."
                  />
                  <Icon.Search className="pull-right" />
                </div>
              </form>
            </div>
          </li>

          <li
            class="dropdown notification-list"
            data-toggle="tooltip"
            data-placement="left"
            title="8 new unread notifications"
          >
            <a
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <Icon.Bell />
              <span class="noti-icon-badge"></span>
            </a>
            <div class="dropdown-menu dropdown-menu-right dropdown-lg">
              <div class="dropdown-item noti-title border-bottom">
                <h5 class="m-0 font-size-16">
                  <span class="float-right">
                    <a href="" class="text-dark">
                      <small>Clear All</small>
                    </a>
                  </span>
                  Notification
                </h5>
              </div>

              <div class="slimscroll noti-scroll">
                <a
                  href="javascript:void(0);"
                  class="dropdown-item notify-item border-bottom"
                >
                  <div class="notify-icon bg-primary">
                    <i class="uil uil-user-plus"></i>
                  </div>
                  <p class="notify-details">
                    New user registered.
                    <small class="text-muted">5 hours ago</small>
                  </p>
                </a>

                <a
                  href="javascript:void(0);"
                  class="dropdown-item notify-item border-bottom"
                >
                  <div class="notify-icon">
                    <img
                      src="assets/images/users/avatar-1.jpg"
                      class="img-fluid rounded-circle"
                      alt=""
                    />
                  </div>
                  <p class="notify-details">Karen Robinson</p>
                  <p class="text-muted mb-0 user-msg">
                    <small>
                      Wow ! this admin looks good and awesome design
                    </small>
                  </p>
                </a>

                <a
                  href="javascript:void(0);"
                  class="dropdown-item notify-item border-bottom"
                >
                  <div class="notify-icon">
                    <img
                      src="assets/images/users/avatar-2.jpg"
                      class="img-fluid rounded-circle"
                      alt=""
                    />
                  </div>
                  <p class="notify-details">Cristina Pride</p>
                  <p class="text-muted mb-0 user-msg">
                    <small>Hi, How are you? What about our next meeting</small>
                  </p>
                </a>

                <a
                  href="javascript:void(0);"
                  class="dropdown-item notify-item border-bottom active"
                >
                  <div class="notify-icon bg-success">
                    <i class="uil uil-comment-message"></i>{" "}
                  </div>
                  <p class="notify-details">
                    Jaclyn Brunswick commented on Dashboard
                    <small class="text-muted">1 min ago</small>
                  </p>
                </a>

                <a
                  href="javascript:void(0);"
                  class="dropdown-item notify-item border-bottom"
                >
                  <div class="notify-icon bg-danger">
                    <i class="uil uil-comment-message"></i>
                  </div>
                  <p class="notify-details">
                    Caleb Flakelar commented on Admin
                    <small class="text-muted">4 days ago</small>
                  </p>
                </a>

                <a href="javascript:void(0);" class="dropdown-item notify-item">
                  <div class="notify-icon bg-primary">
                    <i class="uil uil-heart"></i>
                  </div>
                  <p class="notify-details">
                    Carlos Crouch liked
                    <b>Admin</b>
                    <small class="text-muted">13 days ago</small>
                  </p>
                </a>
              </div>

              <a
                href="javascript:void(0);"
                class="dropdown-item text-center text-primary notify-item notify-all border-top"
              >
                View all
                <i class="fi-arrow-right"></i>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
