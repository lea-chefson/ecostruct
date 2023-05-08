import React from "react";
import "./style.css";
import Fade from "react-reveal";
import linkedin from "../../assets/icons/linkedinMini.png";
import Letter from "./Letter";
import { autocompleteClasses } from "@mui/material";
const Contact = () => {
  return (
    <main>
      <div className="contact">
        <div className="c_hero">
          <div className="overlaytop">
            <div className="cs_container3">
              <div className="c_content">
                <Fade top duration={1050} delay={1050}>
                  <h2>Contact Us</h2>
                </Fade>
                <Fade bottom duration={1050} delay={1050}>
                  <p>
                    You can leave your message or inquiry by filling the details
                    below and we’ll get back to you within 1-2 business days.
                  </p>
                </Fade>
                <Fade bottom duration={1050} delay={1050}>
                  <a href="#form" >
                  <button >Contact Us</button>
                  </a>
                </Fade>
                <ul class="social-icons2">
              
  <div class="iconz icon--linkedin">
    <a href="#">
      <span class="icon__name">LinkedIn</span>
    </a>
  </div>
 
</ul>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_container blue">
          <div className="contact_form d_flex" id="form">
            <div className="cf_left">
            <form method="post" action="mailto:info@ecostructholdings.com">
  <div className="cs_row">
    <div className="form_group">
      <label htmlFor="first_name">First Name</label>
      <input type="text" name="first_name" required />
    </div>
    <div className="form_group">
      <label htmlFor="last_name">Last Name</label>
      <input type="text" name="last_name" required />
    </div>
  </div>
  <div className="cs_row">
    <div className="form_group">
      <label htmlFor="phone_number">Phone Number</label>
      <input type="number" name="phone_number" required />
    </div>
    <div className="form_group">
      <label htmlFor="email">E-mail</label>
      <input type="email" name="email" required />
    </div>
  </div>
  <div style={{ width: "100%" }}>
    <label htmlFor="message">Message</label>
    <textarea name="message" id="message" cols="30" rows="10"></textarea>
  </div>
  <input className="submit_button" type="submit" value="Send" style={{ width: "40%", cursor: "pointer" }}></input>
</form>

            </div>
            <div className="cf_right">
              <div  className='invert'>
                <img
                  src="https://www.impactsolar.co.th/application/files/4815/2335/2016/Contact_Us-icon-email.png"
                  alt=""
                />
                <div>
                  <span>Email</span>
                  <p>info@ecostructholdings.io</p>
                </div>
              </div>
              <div className='invert'>
                <img
                  src="https://www.impactsolar.co.th/application/files/6415/2335/2018/Contact_Us-icon-tel.png"
                  alt=""
                />
                <div>
                  <span>Call</span>
                  <p></p>
                </div>
              </div>
              <div  className='invert'>
                <img
                  src="https://www.impactsolar.co.th/application/files/4815/2335/2016/Contact_Us-icon-email.png"
                  alt=""
                />
                <div>
                  <span>Address</span>
                  <p>
                  Craigmuir Chambers, Road Town, Tortola, VG 1110, British Virgin Islands
                  </p>
                </div>
              </div>
              <div className="icons_right">
                <a href=""><img  src={linkedin}></img></a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
