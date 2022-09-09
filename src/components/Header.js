import React from "react";
import "../styles/header.css";
import hero from "../assets/images/hero.png";
import { MdOutlineNavigateNext } from "react-icons/md";
import { RiEBike2Line } from "react-icons/ri";
import { FaMobileAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <section className="header-main">
      <div className="header-left-div">
        <motion.h6
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", duration: 2 }}
        >
          Easy way to make an order
        </motion.h6>
        <motion.h2
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", duration: 4 }}
        >
          <span>HUNGRY?</span> Just wait
          <br />
          food at <span>your door.</span>
        </motion.h2>
        <motion.p
          className="header-para"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", duration: 6 }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the dummy
        </motion.p>
        <motion.div
          className="header-btn-div"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", duration: 8 }}
        >
          <button className="btn-1">
            Order now <MdOutlineNavigateNext className="nxt-arrow" />
          </button>
          <button className="btn-2">See all foods</button>
        </motion.div>
        <motion.div
          className="header-shipping-div"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", duration: 9 }}
        >
          <p className="bike-icon-p">
            <span className="me-2">
              <RiEBike2Line className="bike-icon" />
            </span>
            No shipping charge
          </p>
          <p>
            <span className="me-2">
              <FaMobileAlt className="mob-icon" />
            </span>
            100% secure checkput
          </p>
        </motion.div>
      </div>
      <div className="header-right-div">
        <motion.img
          src={hero}
          alt="header-img"
          initial={{ y: "-100vw" }}
          animate={{ y: 0 }}
          transition={{ type: "spring", duration: 5 }}
        />
      </div>
    </section>
  );
};

export default Header;
