import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import Rooms from "./pages/Rooms";
import Booking from "./pages/Booking";
import Payment from "./pages/Payment";
import Contact from "./pages/Contact";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />

        <div className="container">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

