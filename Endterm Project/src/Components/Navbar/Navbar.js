import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navi = useNavigate();
  const login = () => {
    navi("/login");
  };

  const signup = () => {
    navi("/signup");
  };
  const addvenue = () => {
    navi("/users/addvenues");
  };

  return (
    <nav className="Ncontainer">
      <span id="logo">
        <Link to="/">
          <img
            id="logoT"
            src={require("./myworld-logos/hospital.jpg")}
            alt="logo"
          />
        </Link>
      </span>

      <span id="options">
        <ul>
          <li>
            <Link to="/">
             <div class="hover">Home</div>
            </Link>
          </li>
          <li>
            <Link to="/about">
             <div class="hover">About Us</div>
            </Link>
          </li>
          <li>
            <Link to="/contact">
             <div class="hover">Contact Us</div>
            </Link>
          </li>

          <li>
            <Link to="/venues">
             <div class="hover">Patients</div>
            </Link>
          </li>
        </ul>
      </span>

      <span className="Buttons">
        <button onClick={login}>Login</button>
        <button onClick={signup}>Sign Up</button>
        <button onClick={addvenue}>Add Patient</button>
      </span>
    </nav>
  );
}