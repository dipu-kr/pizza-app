import React from "react";
import "../styles/service.css";
import service1 from "../assets/images/service-01.png";
import service2 from "../assets/images/service-02.png";
import service3 from "../assets/images/service-03.png";

const Service = () => {
  return (
    <div className="service-main">
      <div className="service-container">
        <div className="service-content">
          <h5>What we serve</h5>
          <h3>
            Just sit back at home
            <br />
            we will <span>take care</span>
          </h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
            <br /> The printing and typesetting Lorem Ipsum has been the dummy
          </p>
        </div>
        <div className="service-images-div">
          <div className="service-box">
            <img src={service1} alt="servive1" />
            <h6>Quick Delivery</h6>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="service-box">
            <img src={service2} alt="service2" />
            <h6>Super Dine In</h6>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="service-box">
            <img src={service3} alt="service3" />
            <h6>Easy Pick Up</h6>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
