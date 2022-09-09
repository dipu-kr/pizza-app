import React, { useEffect } from "react";
import "../styles/cart.css";
import banner2 from "../assets/images/banner-02.jpeg";
import trolley from "../assets/images/trolley2.webp";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  removeFromCart,
  decreaseFromCart,
  addToCart,
  getTotals,
  clearCart,
} from "../redux/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };
  const handleDecreaseCart = (item) => {
    dispatch(decreaseFromCart(item));
  };
  const handleIncreaseCart = (item) => {
    dispatch(addToCart(item));
  };
  const handleClear = () => {
    dispatch(clearCart());
  };
  return (
    <div className="cart-main">
      <div className="cart-banner-div">
        <img src={banner2} alt="bannre-2" />
        <div className="cart-banner-layer"></div>
      </div>
      {cart.cartItems.length > 0 ? (
        <>
          <div className="cart-item-main">
            <h4 className="cart-heading">Cart Items:</h4>
            {cart.cartItems.map((item) => (
              <div className="cart-item-container" key={item.id}>
                <div className="cart-item-img">
                  <img src={item.image01} alt="cart-img" />
                  <div className="name-delete-div">
                    <p>{item.title}</p>
                    <motion.span whileTap={{ scale: 1.2 }}>
                      <RiDeleteBin6Line
                        className="delete-icon"
                        onClick={() => handleRemoveFromCart(item)}
                      />
                    </motion.span>
                  </div>
                </div>
                <div className="cart-item-price">
                  <p>${item.price}.00</p>
                </div>
                <div className="cart-item-qty">
                  <motion.span whileTap={{ scale: 1.2 }} className="plus-icon">
                    <AiOutlinePlus onClick={() => handleIncreaseCart(item)} />
                  </motion.span>
                  <span>{item.cartQuantity}</span>
                  <motion.span whileTap={{ scale: 1.2 }} className="minus-icon">
                    <AiOutlineMinus onClick={() => handleDecreaseCart(item)} />
                  </motion.span>
                </div>
                <div className="cart-item-totalPrice">
                  <p>${item.cartQuantity * item.price}.00</p>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-subtotal-div">
            <div className="clear-btn-div">
              <h5>
                Subtotal: <span>${cart.cartTotalAmount}:00</span>
              </h5>
              <button onClick={() => handleClear()}>Clear All</button>
            </div>

            <p>Taxes and shipping will calculate at checkout</p>
            <div className="cart-btn-div">
              <button onClick={() => navigate("/products")}>
                Continue Shopping
              </button>
              <button>Proceed to checkout</button>
            </div>
          </div>
        </>
      ) : (
        <div className="empty-main-div">
          <div className="empty-div">
            <h4>Your cart is empty</h4>
            <div className="trolley-img-div">
              <img src={trolley} alt="trolley-img" />
              <button onClick={() => navigate("/products")}>
                <span>
                  <BsArrowLeft />
                </span>
                Start Shopping Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
