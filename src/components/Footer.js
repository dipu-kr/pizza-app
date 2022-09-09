import React from "react";
import "../styles/footer.css";
import logo from "../assets/images/res-logo.png";
import { BsFacebook, BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer-container">
        <div className="footer-box-1">
          <div className="footer-logo">
            <img src={logo} alt="footer-logo" />
            <h6>Tasty Treat</h6>
          </div>
          <p>Lorem Ipsum is simply dummy text printing</p>
          <p>Lorem Ipsum is simply dummy text printing</p>
        </div>
        <div className="footer-box-2">
          <div>
            <h6>Delivery Time</h6>
            <p>Sunday - Thursday</p>
            <p>10:00am - 11:00pm</p>
          </div>
          <div>
            <h6>Friday - Saturday</h6>
            <p>Off Day</p>
          </div>
        </div>
        <div className="footer-box-3">
          <h6>Contact</h6>
          <p>Location: Abcd, bylane-787024, India</p>
          <p>Phone: 01712345678</p>
          <p>Email: example@gmail.com</p>
        </div>
        <div className="footer-box-4">
          <h6>Newsletter</h6>
          <p>Subscribe our newsletter</p>
          <div className="footer-input-div">
            <input type="email" placeholder="Enter your email" />
            <button>send</button>
          </div>
        </div>
        <p></p>
      </div>
      <div className="copy-right-div">
        <p>Copyright - 2022, website made by Dipu kumar.</p>
        <div className="footer-link-div">
          <p className="footer-link">Follow: </p>
          <span>
            <BsFacebook />
          </span>
          <span>
            <BsGithub />
          </span>
          <span>
            <BsTwitter />
          </span>
          <span>
            <BsLinkedin />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
