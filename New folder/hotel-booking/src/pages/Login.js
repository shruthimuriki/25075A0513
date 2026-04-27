import React from "react";
import { useNavigate } from "react-router-dom";

// function Login() {
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     navigate("/rooms");
//   };

//   return (
//     <div>
//       <h2>Login Page</h2>
//       <input type="text" placeholder="Username" /><br/>
//       <input type="password" placeholder="Password" /><br/>
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// }

function Login() {
  const navigate = useNavigate();

  return (
    <div className="center-box">
    <div className="card">
      <h2>Login</h2>
      <input type="text" placeholder="Username" /><br/>
      <input type="password" placeholder="Password" /><br/>
      <button onClick={() => navigate("/rooms")}>Login</button>
    </div>
    </div>
  );
}

export default Login;