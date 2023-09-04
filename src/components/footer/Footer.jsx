import React from "react";
import "./footer.css";
import {
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoGithub,
  IoLogoBehance,
} from "react-icons/io5";
import { BiSend } from "react-icons/bi";
import footerLogo from "../../assets/travigoLogo.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-body">
        <div className="footer-heading">
          <div className="footer-logo">
            <img src={footerLogo} alt="footer logo" />
          </div>
          <p>
            We always make our customers happy by providing as many as choices
            as possible.
          </p>
        </div>
        <div className="footer-content">
          <div className="footer-about">
            <h2>About</h2>
            <ul className="footer-links">
              <li className="footer-link">About Us</li>
              <li className="footer-link">Features</li>
              <li className="footer-link">News</li>
              <li className="footer-link">Menu</li>
            </ul>
          </div>
          <div className="footer-company">
            <h2>Company</h2>
            <ul className="footer-links">
              <li className="footer-link">Why Travigo?</li>
              <li className="footer-link">Partner With Us</li>
              <li className="footer-link">FAQ</li>
              <li className="footer-link">Blog</li>
            </ul>
          </div>
          <div className="footer-support">
            <h2>Support</h2>
            <ul className="footer-links">
              <li className="footer-link">Account</li>
              <li className="footer-link">Support Center</li>
              <li className="footer-link">Feedback</li>
              <li className="footer-link">Contact Us</li>
              <li className="footer-link">Accessibility</li>
            </ul>
          </div>
          <div className="footer-contact">
            <h2>Get in touch</h2>
            <p>Questions or feedback?</p>
            <p>We'd love to hear from you.</p>
            <div className="footer-subscribe">
              <input type="email" placeholder="Email Address" />
              <button>
                <BiSend className="rotate-icon" size={18} color="#fff" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-end">
        <p>Copyright © 2023. Made by Aditya-150</p>
        <div className="footer-icons">
          <div className="footer-icon">
            <IoLogoLinkedin className="social-icon" size={20} />
          </div>
          <div className="footer-icon">
            <IoLogoGithub className="social-icon" size={20} />
          </div>
          <div className="footer-icon">
            <IoLogoTwitter className="social-icon" size={20} />
          </div>
          <div className="footer-icon">
            <IoLogoBehance className="social-icon" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
