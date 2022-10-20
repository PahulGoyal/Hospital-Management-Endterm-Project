import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <div id="ccontainer">
      <div id="box">
        <h2>Contact Us</h2>
        <br></br>
        <div class="address">
          NH-64, Rajpura – Chandigarh Highway Opp – Chitkara University – 140401
        </div>
        <div class="address">+91-1762501501</div>
        <div class="address">neelamhospital@gmail.com</div>
      </div>
      <div className="map">
        <iframe
          title="gmap"
          className="rounded shadow-lg"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110050.57709364888!2d76.52221256056326!3d30.46215695008284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fdc790fd6a1d1%3A0x8a46be7d045ce72a!2sNeelam%20Hospital!5e0!3m2!1sen!2sin!4v1621341447867!5m2!1sen!2sin"
          width="1000"
          height="400"
        ></iframe>
      </div>
    </div>
  );
}
export default Contact;
