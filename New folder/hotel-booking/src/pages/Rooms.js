import React from "react";
import { useNavigate } from "react-router-dom";

function Rooms() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Available Rooms</h2>
        
      <div className="card">
        <h3>Deluxe Room</h3>
        <p>₹2000 / night</p>
        <button onClick={() => navigate("/booking")}>Book</button>
      </div>

      <div className="card">
        <h3>AC Room</h3>
        <p>₹4000 / night</p>
        <button onClick={() => navigate("/booking")}>Book</button>
      </div>
    </div>
  );
}

export default Rooms;