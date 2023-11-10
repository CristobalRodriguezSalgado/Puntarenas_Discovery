import React from "react";

function SingIn() {
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

          <button className="enter">Enter</button>
        </div>
      </div>
    </div>
  );
}

export default SingIn;
