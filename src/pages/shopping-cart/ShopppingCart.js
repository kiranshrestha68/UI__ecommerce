import React, { useState } from "react";
import Location from "../../component/location/Location";
import Topbar from "../../component/Topbar/Topbar";
import "./shoppingCart.css";
import DeleteIcon from "@material-ui/icons/Delete";
import jacket from "../../assests/images/jacket.jpg";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import esewa from "./images/esewa1.png";
import khalti from "./images/khalti1.png";


const ShopppingCart = () => {
  const [count, setCounter] = useState("1");
  const incrementCounter = () => setCounter(count + 1);
  let decrementCounter = () => setCounter(count - 1);

  if (count <= 1) {
    decrementCounter = () => setCounter(1);
  }
  return (
    <>
      <Topbar />
      <Location />
      <div className="shoppingCart__container">
        <h1 className="shoppingCart__heading"> Shopping Cart</h1>
        <div
          style={{
            border: "3px solid #eee8e8",
            marginBottom: "20px",
            borderRadius: "5px",
            marginRight: "38%",
          }}
        ></div>

        <div className="shoppingCart__row">
          <div className="shoppingCart__cart">
            <div className="shoppingCart__titles">
              <div className="shoppingCart__productDetails">
                Product Details
              </div>
              <div className="shoppingCart__quantityTitle"> Quantity </div>
              <div className="shoppingCart__total"> TOTAL </div>
            </div>
            <div className="shoppingCart__card">
              <div className="shoppingCart__cardContainer">
                <div className="shoppingCart__images-details">
                  <img src={jacket} alt="jacket" />
                  <div className="shoppingCart__productCartdetails">
                    <h1> Mens casual premium slim t-shirts</h1>
                    <h4> Rs.99/- </h4>
                    <p> Color: black</p>
                    <p2> Size: M</p2>
                  </div>
                </div>
                <div className="shoppingCart__quantity-remove">
                  <div className="shoppingCart__quantity">
                    <div
                      className="shoppingCart__quantityMinus"
                      onClick={incrementCounter}
                    >
                      {" "}
                      +{" "}
                    </div>
                    <input
                      value={count}
                      onChange={(e) => setCounter(e.target.value)}
                    />
                    <div
                      className="shoppingCart__quantityPlus"
                      onClick={decrementCounter}
                    >
                      {" "}
                      -{" "}
                    </div>
                  </div>

                  <div className="shoppingCart__remove">
                    {" "}
                    <DeleteIcon />{" "}
                  </div>
                </div>
                <div className="shoppingCart__totalss"> Rs. 5000/- </div>
              </div>

              <div className="shoppingCart__cardContainer">
                <div className="shoppingCart__images-details">
                  <img src={jacket} alt="jacket" />
                  <div className="shoppingCart__productCartdetails">
                    <h1> Mens casual premium slim t-shirts</h1>
                    <h4> Rs.99/- </h4>
                    <p> Color: black</p>
                    <p2> Size: M</p2>
                  </div>
                </div>
                <div className="shoppingCart__quantity-remove">
                  <div className="shoppingCart__quantity">
                    <div
                      className="shoppingCart__quantityMinus"
                      onClick={incrementCounter}
                    >
                      {" "}
                      +{" "}
                    </div>
                    <input
                      value={count}
                      onChange={(e) => setCounter(e.target.value)}
                    />
                    <div
                      className="shoppingCart__quantityPlus"
                      onClick={decrementCounter}
                    >
                      {" "}
                      -{" "}
                    </div>
                  </div>

                  <div className="shoppingCart__remove">
                    {" "}
                    <DeleteIcon />{" "}
                  </div>
                </div>
                <div className="shoppingCart__totalss"> Rs. 5000/- </div>
              </div>
            </div>
          </div>

          <div className="shoppingCart__paymentContainer">
            <div className="shoppingCart__payment">
              <div className="shoppingCart__paymentTypes">
                {" "}
                <div className="shoppingCart__checkout"> CHECKOUT </div>
                <div className="shoppingCart__or"> OR </div>
                <div className="shoppingCart__esewa">
                  {" "}
                  <img src={esewa} alt="esewa" />{" "}
                  <img src={khalti} alt="khalti" />
                </div>
              </div>
              <div className="shoppingCart__orderSummary"> ORDER SUMMARY</div>
              <div className="shoppingCart__prices">
                {" "}
                <div className="shoppingCart__subtotal"> SUBTOTAL</div>{" "}
                <div className="shoppingCart__price">Rs.2999/-</div>
              </div>
              <div className="shoppingCart__shipping-Fee">
                <div className="shoppingCart__shipping">
                  {" "}
                 * Shipping Standard{" "}
                </div>
                <div className="shoppingCart__fee"> FREE </div>
              </div>

              <div className="shoppingCart__standardFree">
                <div> Standard FREE-STATE </div>
                <KeyboardArrowDownIcon />
              </div>

              <div className="shoppingCart__grand-total">
                <div className="shoppingCart__grand">GRAND TOTAL</div>
                <div className="shoppingCart__total"> Rs.2999/- </div>
              </div>

              <div className="shoppingCart__vatIncluded">* VAT included</div>

              <div className="shoppingCart__easyReturns"> EASY RETURNS </div>
              <div className="shoppingCart__shippingInfo">
                {" "}
                SHIPPING INFORMATION{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopppingCart;
