import React from "react";

function Payment() {
  return (
    <div className="center-box">
    <div className="card">
      <h2>Payment</h2>
      <input type="text" placeholder="Card Number" /><br/>
      <input type="text" placeholder="Expiry" /><br/>
      <button>Pay Now</button>
    </div>
    </div>
  );
}

export default Payment;