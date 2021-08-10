import React, { useEffect, useState } from "react";
import Location from "../../component/location/Location";
import Topbar from "../../component/Topbar/Topbar";
import "./shoppingCart.css";
import DeleteIcon from "@material-ui/icons/Delete";
// import jacket from "../../assests/images/jacket.jpg";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import esewa from "./images/esewa1.png";
import khalti from "./images/khalti1.png";
import { useDispatch, useSelector } from "react-redux";
import actions from "../home/redux/actions";

const ShopppingCart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const cart = useSelector((state) => state.productlisting.cart);
  // const CartId = cart.map((cId) => cId.id);
  // const qtyy = cart.map((q) => q.qty);
  // console.log(qtyy, "qty")

  // console.log(CartId, "ok hello");

  const id = cart.map((cId) => cId.id);

  const singledata = cart.length;

  const dispatch = useDispatch();

  const adjustQty = (id, value) => {
    dispatch(actions.adjustItemQty(id, value));
  };

  const removeFromCart = (id) => {
    dispatch(actions.removeFromCart(id));
  };

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  const [count, setCount] = useState(1);

  // if (count <= 1) {
  //   decrementCounterr = () => setCount(1);
  // }
  //  if (!singledata) {
  //      return (
  //        <h2 style={{marginTop: "200px"}} >
  //          {" "}
  //          no product found id no {id}{" "}
  //        </h2>
  //      );
  //    }

  return (
    <>
      <Topbar />
      <Location />
      <div className="shoppingCart__container">
        {singledata !== 0 && (
          <div>
            <h1 className="shoppingCart__heading"> Shopping Cart</h1>
            <div
              style={{
                border: "1px solid #eee8e8",
                marginBottom: "20px",
                borderRadius: "5px",
                marginRight: "38%",
              }}
            ></div>
          </div>
        )}

        <div className="shoppingCart__row">
          <div className="shoppingCart__cart">
            {singledata !== 0 && (
              <div className="shoppingCart__titles">
                <div className="shoppingCart__productDetails">
                  Product Details
                </div>
                <div className="shoppingCart__quantityTitle"> Quantity </div>
                <div className="shoppingCart__total"> TOTAL </div>
              </div>
            )}

            <div className="shoppingCart__card">
              {singledata > 0 ? (
                cart?.map((item) => (
                  <div className="shoppingCart__cardContainer">
                    <div className="shoppingCart__images-details">
                      <img src={item.image} alt="jacket" />
                      <div className="shoppingCart__productCartdetails">
                        <h1> {item.title} </h1>
                        <h4> {item.price} </h4>
                        <p> Color: black</p>
                        <p2> Size: M {item.qty}</p2>
                      </div>
                    </div>
                    <div className="shoppingCart__quantity-remove">
                      <div className="shoppingCart__quantity">
                        <div
                          className="shoppingCart__quantityMinus"
                          onClick={(e) => {
                            setCount(count + 1);
                            adjustQty(item.id, e.target.value);
                          }}
                        >
                          {" "}
                          +{" "}
                        </div>

                        <input
                          type="number"
                          value={item.qty}
                          onChange={(e) => {
                            setCount(e.target.value);
                            adjustQty(item.id, e.target.value);
                          }}
                        />
                        <div
                          className="shoppingCart__quantityPlus"
                          onClick={(e) => {
                            setCount(count - 1);
                            adjustQty(item.id, e.target.value);
                          }}
                        >
                          {" "}
                          -{" "}
                        </div>
                      </div>

                      <div
                        className="shoppingCart__remove"
                        onClick={() => removeFromCart(item.id)}
                      >
                        {" "}
                        <DeleteIcon />{" "}
                      </div>
                    </div>
                    <div className="shoppingCart__totalss" pattern="[0-9]">
                      {" "}
                      Rs.{Math.floor(item.qty * item.price)}/-{" "}

                      
                    </div>
                  </div>
                ))
              ) : (
                <p
                  style={{
                    textAlign: "center",
                    color: "grey",
                    fontSize: "30px",
                    marginTop: "20px",
                    fontStyle: "italic",
                  }}
                >
                  {" "}
                  You haven't added any item in the cart. <br />
                  Add something in your Cart.. <br />
                  THANK YOU!!
                </p>
              )}
            </div>
          </div>

          {singledata !== 0 && (
            <div className="shoppingCart__paymentContainer">
              <div className="shoppingCart__payment">
                <div className="shoppingCart__paymentTypes">
                  {" "}
                  <div className="shoppingCart__checkout"> CHECKOUT </div>
                  <div className="shoppingCart__or"> OR </div>
                  <div className="shoppingCart__esewa">
                    {" "}
                    <img src={esewa} alt="esewa" />
                    <img src={khalti} alt="khalti" />
                  </div>
                </div>
                <div className="shoppingCart__orderSummary"> ORDER SUMMARY</div>
                <div className="shoppingCart__totalItems">
                  <div> Total Items: </div>
                  <div> {totalItems} </div>
                </div>
                <div className="shoppingCart__prices">
                  <div className="shoppingCart__subtotal"> SUBTOTAL:</div>{" "}
                  <div className="shoppingCart__price">Rs.{totalPrice}/-</div>
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
                  <div className="shoppingCart__total"> Rs.{totalPrice}/- </div>
                </div>

                <div className="shoppingCart__vatIncluded">* VAT included</div>

                <div className="shoppingCart__easyReturns"> EASY RETURNS </div>
                <div className="shoppingCart__shippingInfo">
                  {" "}
                  SHIPPING INFORMATION{" "}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ShopppingCart;
