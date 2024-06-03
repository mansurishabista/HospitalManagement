import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className = "home-container">
      <div className = "box-container">
        
        <div className = "text-box">

        <h1>Where Compassion Meets Excellence In Healthcare</h1>
        
        <h2> Your Health,Our Priority</h2>

        <h3>Services</h3>
        <p>" From routine check-ups to specialized treatments,We've got you covered "</p>
        
        <h3>Emergency Care</h3>
        <p>" 24/7 Emergency Services: Ready When you Need Us Most "</p>

        <h3>Contact Us</h3>
        <p> Reach out to us at " jeevandanhms@gmail.com "</p>
        </div>

        <div className="image-box">
          <img src="https://d3nn873nee648n.cloudfront.net/1200x1800-new/14232/SM523309.jpg" alt="....." className="image"/>

        </div>

      </div>
    </div>
  );
};

export default Home;
