import React from "react";
import { useNavigate } from 'react-router-dom';
function SingIn() {
  const navigate = useNavigate();
  const enterClick = () => navigate('/home')
  return (
    <div>
      <div className="container">
        <div className="card">
          <a className="singup">Sing In</a>
          <div className="inputBox1">
            <input type="text" required="required" />
            <span className="user">Email</span>
          </div>


          <div className="inputBox">
            <input type="password" required="required" />
            <span>Password</span>
          </div>

          <button onClick={enterClick} className="enter">Enter</button>
        </div>
      </div>
    </div>
  );
}

export default SingIn;
