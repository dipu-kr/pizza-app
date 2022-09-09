import React from "react";
import "../styles/foodbox.css";
import category1 from "../assets/images/category-01.png";
import category2 from "../assets/images/category-02.png";
import category3 from "../assets/images/category-03.png";
import category4 from "../assets/images/category-04.png";

const Foodbox = () => {
  return (
    <div className="foodbox-main">
      <div className="foodbox-container">
        <div className="box">
          <img src={category1} alt="" />
          <span>Fast Food</span>
        </div>
        <div className="box">
          <img src={category2} alt="" />
          <span>Pizza</span>
        </div>
        <div className="box">
          <img src={category3} alt="" />
          <span>Asian Food</span>
        </div>
        <div className="box">
          <img src={category4} alt="" />
          <span>Row Meat</span>
        </div>
      </div>
    </div>
  );
};

export default Foodbox;
