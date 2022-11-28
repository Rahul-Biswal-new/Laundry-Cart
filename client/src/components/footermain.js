import React from 'react';
import './MyFooter.css';
import Facebook from '../assets/facebook.svg'
import Instagram from '../assets/instagram.svg'
import Linkedin from '../assets/linkedin.svg'
const Footer = () => {
  return <div className='footer-container'>
      <div>
          <h3>About Us</h3>
          <ul>
            <li>Doorstep wash & Dryclean service</li>
          </ul>
      </div>
      <div>
          <h3>Home</h3>
          <ul>
              <li>Sign in</li>
              <li>Register</li>
          </ul>
      </div>
      <div>
          <h3>Pricing</h3>
      </div>
      <div>
          <h3>Career</h3>
          <ul>
              <li>Blogs</li>
              <li>Create</li>
          </ul>
      </div>
      <div>
          <h3>Contact</h3>
      </div>
      <div>
          <h3>SOCIAL MEDIA</h3>
          <div className='social-icons'>
              <img src={Facebook} alt="" />
              <img src={Instagram} alt="" />
              <img src={Linkedin} alt="" />
          </div>
      </div>
  </div>;
};

export default Footer;
