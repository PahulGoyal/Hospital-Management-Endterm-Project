import React from "react";
import "./SignUp.css";
function SignUp() {
  return (
    <div id="Ccontainer">
      <div id="Scontainer">
        <h3>SIGNUP</h3>
        <div id="USname">
          <label htmlFor="userName">Username</label>
          <input
            type="text"
            id="userName"
            placeholder="Type your username"
          ></input>
        </div>
        <div id="Passw">
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            id="Password"
            placeholder="Type your password"
          ></input>
        </div>

        <div id="Passwo">
          <label hrmlFor="reP">Repeat Password</label>
          <input
            type="password"
            id="reP"
            placeholder="Type your Password again"
          ></input>
        </div>

        <div id="Email">
          <label htmlFor="mail">Email</label>
          <input type="text" id="enteremail" placeholder="Enter your Email" size="21"></input>
        </div>

        <div id="btn">
          <button type="submit" id="lbtn">
            SIGNUP
          </button>
        </div>
      </div>
    </div>
  );
}
export default SignUp;