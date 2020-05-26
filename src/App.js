import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Places from "./components/Places";
import ViewPlaces from "./components/ViewPlaces";
import EditPlaces from "./components/EditPlaces";
import Calender from "./components/Calendar";
import Booking from "./components/Bookings";
import ViewBooking from "./components/ViewBooking";
import EditBooking from "./components/EditBooking";
import Invoice from "./components/Invoice";
import Feedback from "./components/Feedback";
import Admins from "./components/Admins";
import Users from "./components/Users";
import EditAdmins from "./components/EditAdmins";
import EditUsers from "./components/EditUsers";
import ViewAdmins from "./components/ViewAdmins/ViewAdmins";
import ViewUsers from "./components/ViewUsers/ViewUsers";
import Contact from "./components/Contact";
import PlacesRequest from "./components/PlacesRequest.jsx";
import ViewPlaceRequest from "./components/ViewPlaceRequest";
import Support from "./components/Support";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/support" component={Support} />
        <Route path="/invoice" component={Invoice} />
        <Route path="/edit-booking" component={EditBooking} />
        <Route path="/view-booking" component={ViewBooking} />
        <Route path="/booking" component={Booking} />
        <Route path="/calender" component={Calender} />
        <Route path="/edit-place" component={EditPlaces} />
        <Route path="/view-place" component={ViewPlaces} />
        <Route path="/places-request" component={PlacesRequest} />
        <Route path="/view-place-request" component={ViewPlaceRequest} />
        <Route path="/places" component={Places} />
        <Route path="/edit-admins" component={EditAdmins} />
        <Route path="/view-admins" component={ViewAdmins} />
        <Route path="/users" component={Users} />
        <Route path="/edit-users" component={EditUsers} />
        <Route path="/view-users" component={ViewUsers} />
        <Route path="/admins" component={Admins} />
        <Route path="/contact" component={Contact} />
        <Route path="/feedback" component={Feedback} />
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
