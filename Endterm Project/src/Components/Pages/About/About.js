import React from "react";
import "./About.css";
function About() {
  return (
    <div className="acontainer">
      <h1 id="aheading">About Us</h1>
      <br></br>

      <p id="apara">
        Our Mission is to provide high quality healthcare to patients regardless
        of their ability to pay and based upon available resources. Your health
        is our priority.
        <br />
        We serve a wide range of specialities including kidney transplant,
        Nephrology, plastic surgery, infertility, cathlab and many more.
        <br /> Our staff is always there to help and listen to your problems and
        ensures that your health is perfect.
      </p>
      <br></br>
      <br></br>
      <div id="ainput">
        <label htmlFor="email">Enter your Email</label>
        <input type="text" id="email" placeholder="ENTER YOUR EMAIL"></input>

        <button type="submit">Submit</button>
      </div>
    </div>
  );
}

export default About;
