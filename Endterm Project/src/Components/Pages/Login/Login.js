import React from "react";
import "./Login.css";
function Login() {
  return (
    <div id="Mcontainer">
      <div id="Icontainer">
        <h3>LOGIN</h3>
        <div id="Uname">
          <label htmlFor="userName">Username</label>
          <input
            type="text"
            id="userName"
            placeholder="Type your username"
          ></input>
        </div>
        <div id="passw">
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            id="Password"
            placeholder="Type your password"
          ></input>
        </div>
        <div id="btn">
          <button type="submit" id="lbtn">LOGIN</button>
        </div>
      </div>
    </div>
  );
}
export default Login;