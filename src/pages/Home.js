import React from "react";
import Header from "../components/Header";
import Foodbox from "../components/Foodbox";
import Service from "../components/Service";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <div>
      <Header />
      <Foodbox />
      <Service />
      <Testimonial />
    </div>
  );
};

export default Home;
