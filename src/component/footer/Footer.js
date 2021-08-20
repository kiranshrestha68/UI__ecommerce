import React from "react";
import "./footer.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

const Footer = () => {
  return (
    <>
      <div className="footer__container">
        <div className="footer__row1">
          <h3> KStha_ </h3>
          <div className="footer__social-medias">
            {" "}
            <span className="footer__social-media" style={{color: "blue"}}> <FacebookIcon/></span>
            <span className="footer__social-media"  style={{color: "#fb3958"}}> <InstagramIcon/></span>

            <span className="footer__social-media"  style={{color: "#00acee"}}> <TwitterIcon/></span>
            <span className="footer__social-media"  style={{color: "red"}}> <YouTubeIcon/></span>

          </div>
        </div>
        <div className="footer__row2"> row2</div>
        <div className="footer__row3"> row3</div>
        <div className="footer__row4"> row4</div>
      </div>
    </>
  );
};

export default Footer;
