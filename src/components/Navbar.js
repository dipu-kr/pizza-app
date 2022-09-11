import React, { useState } from "react";
import "../styles/navbar.css";
import logo from "../assets/images/res-logo.png";
import { RiShoppingBagLine } from "react-icons/ri";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  const navigate = useNavigate();

  const [menu, setMenu] = useState(false);

  const controlMenu = () => {
    setMenu(!menu);
  };
  return (
    <nav className="nav-main">
      <div className="nav-container">
        <div className="logo-main">
          <div className="logo-div">
            <img src={logo} alt="logo" />
          </div>
          <h6>tasty Treat</h6>
        </div>
        <div className="menu-div" onClick={controlMenu}>
          {menu ? (
            <AiOutlineClose className="close-icon" />
          ) : (
            <AiOutlineMenuUnfold className="open-icon" />
          )}
        </div>
        <ul
          className={menu ? "openMenu" : "openMenu closeMenu"}
          onClick={controlMenu}
        >
          <li className="li-tag">
            <NavLink to="/">Home</NavLink>
          </li>

          <li className="li-tag">
            <NavLink to="/products">Foods</NavLink>
          </li>

          <li className="li-tag">
            <NavLink to="/cart">Cart</NavLink>
          </li>
          <li className="li-tag signup-li-tag">
            <motion.button className="sign-up" whileTap={{ scale: 0.9 }}>
              Sign Up
            </motion.button>
          </li>
        </ul>
        <div className="bag-user-main-div">
          <motion.div
            className="bag-div"
            whileTap={{ scale: 1.1 }}
            onClick={() => navigate("/cart")}
          >
            <RiShoppingBagLine className="bag-icon" />
            <span className="bag-item">{cartTotalQuantity}</span>
          </motion.div>
          <motion.div className="user-icon" whileTap={{ scale: 1.2 }}>
            <BiUserCircle />
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
