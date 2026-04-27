import React from "react";
import { useNavigate } from "react-router-dom";

// function Booking() {
//   const navigate = useNavigate();

//   return (
//     <div>
//       <h2>Booking Page</h2>
//       <input type="date" /><br/>
//       <input type="number" placeholder="Guests" /><br/>
//       <button onClick={() => navigate("/payment")}>Proceed to Payment</button>
//     </div>
//   );
// }

function Booking() {
  const navigate = useNavigate();

  return (
    <div className="center-box">
    <div className="card">
      <h2>Booking Details</h2>
      <input type="date" /><br/>
      <input type="number" placeholder="Guests" /><br/>
      <button onClick={() => navigate("/payment")}>
        Proceed to Payment
      </button>
    </div>
    </div>
  );
}

export default Booking;