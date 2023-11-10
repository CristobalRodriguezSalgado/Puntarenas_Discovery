import React from "react";

function SingUp() {
  return (
    <div>
      <div className="container">
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
