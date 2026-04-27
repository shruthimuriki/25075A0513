import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>HotelBooking</h2>
      <div>
        <Link to="/">Login</Link>
        <Link to="/rooms">Rooms</Link>
        <Link to="/booking">Booking</Link>
        <Link to="/payment">Payment</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;