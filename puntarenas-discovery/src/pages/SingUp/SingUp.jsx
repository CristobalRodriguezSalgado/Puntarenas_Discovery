import React from "react";
import { useNavigate } from 'react-router-dom';

function SingUp() {

  const navigate = useNavigate();

  const singClick = () => navigate('/home');

  return (
    <div>
      <div className="container">

        
      <button onClick={singClick} className="salir">
  Salir
</button>
        <div className="card">
          <a className="singup">Sing Up</a>
          <div className="inputBox1">
            <input type="text" required="required" />
            <span className="user">Full Name</span>
          </div>

          <div className="inputBox">
            <input type="text" required="required" />
            <span>Email</span>
          </div>

          <div className="inputBox">
            <input type="password" required="required" />
            <span>Password</span>
          </div>

          <div className="inputBox">
            <input type="password" required="required" />
            <span>Confirm Password</span>
          </div>

          <div className="inputBox">
            <input type="text" required="required" />
            <span>Number </span>
          </div>

          <div className="inputBox">
            <input type="password" required="required" />
            <span>Country</span>
          </div>

          <button className="enter">Enter</button>
        </div>
      </div>

    </div>
  );
}

export default SingUp;
