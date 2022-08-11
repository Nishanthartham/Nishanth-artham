import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>arthamnishanth123@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.linkedin.com/in/nishanth-artham-1a572b212/"><Linkedin color="white" size={"3rem"} /></a>
          <a href="https://www.instagram.com/nishanthartham/"><Insta color="white" size={"3rem"} /></a>
          <a href="https://github.com/Nishanthartham"><Gitub color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
