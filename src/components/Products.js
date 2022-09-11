import React, { useState } from "react";
import "../styles/products.css";
import banner from "../assets/images/banner.jpeg";
import { BsSearch } from "react-icons/bs";
import data from "../assets/data";
import { useDispatch } from "react-redux/es/exports";
import { addToCart, getTotals } from "../redux/cartSlice";

const Products = () => {
  const dispatch = useDispatch();
  const [searchItem, setSearchItem] = useState("");

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    dispatch(getTotals());
  };

  return (
    <div className="products-main">
      <div className="products-bg-img-div">
        <img src={banner} alt="banner-1" />
        <h1>Tasty Pizz And Burger</h1>
      </div>
      <div className="products-container">
        <div className="search-div">
          <input
            type="text"
            placeholder="Search..."
            onChange={(event) => {
              setSearchItem(event.target.value);
            }}
          />
          <button>
            <BsSearch />
          </button>
        </div>
        <div className="products-div">
          {/* ------------- */}
          {data
            .filter((item) => item.title.toLowerCase().includes(searchItem))
            .map((item) => (
              <div className="product-div" key={item.id}>
                <div className="product-img-div">
                  <img src={item.image01} alt="item-img" />
                </div>
                <p className="product-name">{item.title}</p>
                <div className="price-btn-div">
                  <span className="item-price">${item.price}</span>
                  <button
                    className="add-btn"
                    onClick={() => handleAddToCart(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
