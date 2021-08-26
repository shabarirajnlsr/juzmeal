import React from "react";
import { cartContext } from "../App";
import "./Cart.css";
import { getProductData } from "../data";

export default function Cart() {
  return (
    <div>
      <div>
        <div className="carthead">
          <p className="cartmaincontent">
            To promote contact-less delivery, we urge you to pay online!!
          </p>
          <h3>YOUR SHOPPING CART</h3>
          <hr />
          <h5>
            <b>&nbsp;&nbsp;Your shopping cart is Empty</b>
          </h5>
          <div className="cartpagebutton">
            <button>HOME</button>
            <button>CHOOSE YOUR PLAN</button>
          </div>
          <br />
          <div className="totalcart">
            <div>
              <div
                className="calculateHeadings"
                style={{ width: "600px", height: "300px" }}
              >
                <div>
                  <h3>Product</h3>
                  <hr />
                  <p style={{ fontSize: "17px" }}>Mini combo</p>
                  <p>veg, Lavish, 1meals</p>
                </div>
                <div>
                  <h3>Price</h3>
                  <hr />
                </div>
                <div>
                  <h3>Quantity</h3>
                  <hr />
                  <span>
                    <button>-</button>
                    <span>&nbsp;&nbsp;1&nbsp;&nbsp;</span>
                    <button>+</button>
                  </span>
                </div>
                <div>
                  <h3>Total</h3>
                  <hr />
                </div>
              </div>
            </div>
            <div className="newlogincartpage">
              <h1>New User Login</h1>
              <h4>Let's get started</h4>
              <h4>Tell us your phone number</h4>
              <input type="number" placeholder="Enter a mobile number" />
              <br />
              <br />
              <button>&nbsp;GET OTP&nbsp;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const CartItem = (data, index) => {
  console.log("data sss ===>", data);
  const { name = "", mealCategory = {} } = data;

  return (
    <div className="cart-item-wrapper">
      <div className="cart-item-name">
        <div>{name}</div>
        <div>
          {mealCategory}, {}{" "}
        </div>
      </div>
      <div className="cart-item-price">
        <div> RS. {name}</div>
        <div>
          {mealCategory}, {}{" "}
        </div>
      </div>
    </div>
  );
};

const CardTable = () => {
  const { cartDetails } = React.useContext(cartContext);

  const cartProducts = getProductData(cartDetails);

  console.log("cartDetails ===>", cartProducts);

  const totalPrice = cartProducts.reduce((acc, item) => {
       console.log(item , acc)
     return acc + (item && item.priceDetail && item.priceDetail.sellingPrice);
  }, 0)

  return (
    <>
      <div className="card-table">
        <div className="card-title">
          <div className="card-name first">Product</div>
          <div className="card-price ">Price</div>
          <div className="card-quantity">Quantity</div>
          <div className="card-total ">Total</div>
        </div>
        <div className="card-details">{cartProducts.map(CartItem)}</div>
      </div>
      <div className="total-price">{totalPrice}</div>
    </>
  );
};

export const CartPage = () => {
  return (
    <div className="cart-wrapper">
      Cart Page
      <div className="cart-message">
        To promote contact-less delivery, we urge you to pay online!!
      </div>
      <div className="cart-menu-wrapper">
        <CardTable />
      </div>
    </div>
  );
};
