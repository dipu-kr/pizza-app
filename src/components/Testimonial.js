import React from "react";
import "../styles/testimonial.css";
import ava1 from "../assets/images/ava-1.jpeg";
import ava2 from "../assets/images/ava-2.jpeg";
import ava3 from "../assets/images/ava-3.jpeg";
import ava4 from "../assets/images/ava-4.jpeg";
import network from "../assets/images/network.png";
import { motion } from "framer-motion";
const Testimonial = () => {
  return (
    <div className="testimonial-main">
      <div className="testimonial-container">
        <div className="testimonial-left">
          <h5>Testimonial</h5>
          <motion.h3
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", duration: 5 }}
          >
            What our <span>customers</span> are saying
          </motion.h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. The printing and typesetting Lorem Ipsum has been the
            dummy
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. The printing and typesetting Lorem Ipsum has been the
            dummy.Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
          <div className="testimonial-img-galary">
            <div className="galary-img">
              <img src={ava1} alt="galary-img" />
              <p>John Deo</p>
            </div>
            <div className="galary-img">
              <img src={ava2} alt="galary-img" />
              <p>Brielle Deo</p>
            </div>
            <div className="galary-img">
              <img src={ava3} alt="galary-img" />
              <p>Mark John</p>
            </div>
            <div className="galary-img">
              <img src={ava4} alt="galary-img" />
              <p>Savannh</p>
            </div>
          </div>
        </div>
        <div className="testimonial-right">
          <motion.img
            src={network}
            alt="testi-img"
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", duration: 5 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
