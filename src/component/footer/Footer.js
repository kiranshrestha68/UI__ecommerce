import React from "react";
import "./footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import EmailIcon from "@material-ui/icons/Email";

const Footer = () => {
  const handleClick = () => {
    window.alert("Thanks for your subscription; ");
  }
  return (
    <>
      <div className="footer__container">
        <div className="footer__row1">
          <h3> @KStha_ </h3>
          <div className="footer__social-medias">
            {" "}
            <span className="footer__social-media" style={{ color: "blue" }}>
              {" "}
              <FacebookIcon fontSize="small" />
            </span>
            <span className="footer__social-media" style={{ color: "#fb3958" }}>
              {" "}
              <InstagramIcon fontSize="small" />
            </span>
            <span className="footer__social-media" style={{ color: "#00acee" }}>
              {" "}
              <TwitterIcon fontSize="small" />
            </span>
            <span className="footer__social-media" style={{ color: "red" }}>
              {" "}
              <YouTubeIcon fontSize="small" />
            </span>
          </div>
        </div>
        <div className="footer__row2">
          {" "}
          <p>support</p>{" "}
          <div className="footer__row2-items">
            {" "}
            <span>Contact Us</span>
            <span>FAQ</span>
            <span>Downlaods</span>
            <span>Products Registration</span>
            <span>Spare Parts</span>
          </div>
        </div>
        <div className="footer__row3">
          {" "}
          <p>KStha_</p>{" "}
          <div className="footer__row3-items">
            {" "}
            <span>About KStha</span>
            <span>KStha Design</span>
            <span>Careers</span>
            <span>Newsroom</span>
            <span>KStha Access</span>
          </div>
        </div>
        <div className="footer__row4">
          {" "}
          <div className="footer__row4-item">
            {" "}
            <EmailIcon fontSize="small" />{" "}
            <p> Stay upto date latest from the KStha_ </p>
          </div>
          <input placeholder="Enter your Email"/>
          <button onClick={handleClick}>Subscribe</button>
        </div>
        
      </div>
    </>
  );
};

export default Footer;
