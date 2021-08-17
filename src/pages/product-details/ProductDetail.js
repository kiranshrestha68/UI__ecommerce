import React from "react";
import "./productdetail.css";
import Topbar from "../../component/Topbar/Topbar";
import Location from "../../component/location/Location";
// import jersey from "../../assests/images/jersey.jpg";
import jersey1 from "../../assests/images/jersey1.jpg";
import jersey2 from "../../assests/images/jersey2.jpeg";
import jersey3 from "../../assests/images/jersey3.jpeg";
import jacket from "../../assests/images/jacket.jpg";
import StarIcon from "@material-ui/icons/Star";
import ProductDetailCard from "../../component/productDetail-card/ProductDetailCard";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import actions from "../home/redux/actions";

const ProductDetail = () => {
  // const [counter, setCounter] = useState(1);
  // const incrementCounter = () => setCounter(counter + 1);
  // let decrementCounter = () => setCounter(counter - 1);

  // if (counter <= 1) {
  //   decrementCounter = () => setCounter(1);
  // }

  const { id } = useParams();
  console.log(id);
  const productdetail = useSelector(
    (state) => state.productlisting.allproducts
  );
  const loading = useSelector((state) => state.productlisting.loading);
  const error = useSelector((state) => state.productlisting.error);
  // console.log(moviedetail, "ok");
  const singledata = productdetail?.filter((x) => x.id == id);
  // console.log(singledata, "singledata ok");

  // if (!singledata) {
  //   return (
  //     <h2 style={{ position: "absolute", top: "600px" }}>
  //       {" "}
  //       no product found id no {id}{" "}
  //     </h2>
  //   );
  // }

  const dispatch = useDispatch();

  const addToCart = (ids) => {
    dispatch(actions.addToCart(ids));
  };

  // const adjustQty = (id, value) => {
  //   dispatch(actions.adjustItemQty(id, value));
  // };

  const cart = useSelector((state) => state.productlisting.cart);
  const CartId = cart.map((cId) => cId.id);

  return (
    <>
      <Topbar />
      <Location />

      <div className="product__details">
        <div className="row">
          <div className="row__1">
            {singledata.loading && <p> loading... </p>}

            {singledata.length > 0 &&
              singledata?.map((m) => (
                <div className="productDetails__row">
                  <div className="productDetails__row--1">
                    {" "}
                    <div className="productDetails__row1">
                      <img
                        className="productDetail__images"
                        src={m.image}
                        alt=""
                      />
                    </div>
                    <div className="productDetails__row2">
                      <div className="rating__reviews">
                        <StarIcon className="starIcon" />
                        <span className="products__rating"> 4.5</span>
                        <span className="products__reviews">
                          {" "}
                          (23 Reviews){" "}
                        </span>
                      </div>
                      <div className="products__title"> {m.title} </div>
                      <div className="products__price"> Rs.{m.price}/- </div>
                      <div className="products__brands" style={{fontSize: "17px"}}> {m.category} </div>

                      <div className="products__brands"> fabric </div>
                      <div className="products__type">
                        <div className="products__typeStyle1">
                          {" "}
                          comded cotton{" "}
                        </div>
                        <div className="products__typeStyle2">
                          {" "}
                          supima cotton{" "}
                        </div>
                      </div>
                      <div className="addtobuttom__quantity">
                        {CartId.includes(m.id) ? (
                          <button className="addtocart"> Added to Cart </button>
                        ) : (
                          <button
                            className="addtocart"
                            onClick={(e) => addToCart(m.id)}
                          >
                            {" "}
                            Add to cart{" "}
                          </button>
                        )}

                        {/* <div className="quantity__control">
                          <button
                            className="quantity__controlItems"
                            onClick={(e) => {incrementCounter();
                              adjustQty(m.id, e.target.valu);
                            
                            } }     

                          >
                            {" "}
                            +{" "}
                          </button>



                          
                          <span className="quantity__number" valu={counter}> {counter} </span>
                          <button
                            className="quantity__controlItems"
                            onClick={decrementCounter}
                          >
                            {" "}
                            -{" "}
                          </button>
                        </div> */}
                      </div>
                    </div>
                  </div>

                  {m.category === "men's clothing" ? (
                    <div className="details">
                      <div className="productDetails__size">
                        <div className="size__title">Size</div>
                        <div className="sizes">
                          <div className="size1">m</div>
                          <div className="size">s</div>
                          <div className="size">l</div>
                          <div className="size">xl</div>
                          <div className="size">xxl</div>
                        </div>
                      </div>

                      <div className="productDetails__colors">
                        <div className="color__title">Colors</div>
                        <div className="colors">
                          <div className="white"></div>
                          <div className="black"></div>
                          <div className="dark__red"></div>
                          <div className="fikka__blue"></div>
                          <div className="fikka__green"></div>
                          <div className="sky__blue"></div>
                          <div className="pink"></div>
                        </div>
                      </div>

                      <div className="desc__rev">
                        <span className="desc"> Description</span>
                        <span className="rev">
                          {" "}
                          Reviews <span className="rev__23"> 23 </span>
                        </span>
                        <div className="measurement" style={{paddingTop: "20px", fontSize: "18px"}}>
                            {" "}
                            &emsp; &emsp; {m.description}
                          </div>
                      </div>

                      <div className="size__measurement">
                        <div className="sizeMeasurement__title">
                          Size Measurement (in inch):
                        </div>

                        <div className="measurements">
                          <div className="measurement">
                            {" "}
                            - M (medium):&emsp;Chest 37, Height 27
                          </div>
                          <div className="measurement">
                            {" "}
                            - L (large):&emsp;Chest 39, Height 28
                          </div>

                          <div className="measurement">
                            {" "}
                            - XL (Extra large):&emsp;Chest 41, Height 29
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : m.category === "women's clothing" ? (
                    <div className="details">
                      <div className="productDetails__size">
                        <div className="size__title">Size</div>
                        <div className="sizes">
                          <div className="size1">m</div>
                          <div className="size">s</div>
                          <div className="size">l</div>
                          <div className="size">xl</div>
                          {/* <div className="size">xxl</div> */}
                        </div>
                      </div>

                      <div className="productDetails__colors">
                        <div className="color__title">Colors</div>
                        <div className="colors">
                          <div className="white"></div>
                          <div className="black"></div>
                          <div className="dark__red"></div>
                          <div className="fikka__blue"></div>
                          <div className="fikka__green"></div>
                          <div className="sky__blue"></div>
                          <div className="pink"></div>
                        </div>
                      </div>

                      <div className="desc__rev">
                        <span className="desc"> Description</span>
                        <span className="rev">
                          {" "}
                          Reviews <span className="rev__23"> 59 </span>
                        </span>
                       
                        <div className="measurement" style={{paddingTop: "20px", fontSize: "18px"}}>
                            {" "}
                            &emsp; &emsp; {m.description}
                          </div>
                      </div>

                      <div className="size__measurement">
                        <div className="sizeMeasurement__title">
                          Size Measurement (in inch):
                        </div>

                        <div className="measurements">
                          <div className="measurement">
                            {" "}
                            - M (medium):&emsp;Chest 30, Height 15
                          </div>
                          <div className="measurement">
                            {" "}
                            - L (large):&emsp;Chest 39, Height 20
                          </div>

                          {/* <div className="measurement">
                            {" "}
                            - XL (Extra large):&emsp;Chest 41, Height 29
                          </div> */}
                        </div>
                      </div>
                    </div>
                  ) : m.category === "electronics" ? (
                    <div className="details">
                      <div className="productDetails__size">
                        <div className="size__title">Size</div>
                        <div className="sizes">
                          <div className="size1">HD</div>
                          <div className="size">SXGA</div>

                          <div className="size">HD+</div>
                          <div className="size">FHD</div>
                          <div className="size">WUXGA</div>
                          <div className="size">QHD</div>
                          <div className="size">WQHD</div>

                        </div>
                      </div>

                      <div className="productDetails__colors">
                        <div className="color__title">Colors</div>
                        <div className="colors">
                          <div className="white"></div>
                          <div className="black"></div>
                          <div className="dark__red"></div>
                          <div className="fikka__blue"></div>
                   
                        </div>
                      </div>

                      <div className="desc__rev">
                        <span className="desc"> Description</span>
                        <span className="rev">
                          {" "}
                          Reviews <span className="rev__23"> 23 </span>
                        </span>
                      </div>

                      <div className="size__measurement">
                        {/* <div className="sizeMeasurement__title">
                          Size Measurement (in inch):
                        </div> */}

                        <div className="measurements">
                          <div className="measurement">
                            {" "}
                            &emsp; &emsp; {m.description}
                          </div>
                          {/* <div className="measurement">
                            {" "}
                            - L (large):&emsp;Chest 39, Height 28
                          </div>

                          <div className="measurement">
                            {" "}
                            - XL (Extra large):&emsp;Chest 41, Height 29
                          </div> */}
                        </div>
                      </div>
                    </div>
                  ) :  (
                    <div> {undefined}</div>
                    
                  )}
                </div>
              ))}

            {singledata.length === 0 && !loading && (
              <p
                style={{ textAlign: "center", color: "grey", fontSize: "18px" }}
              >
                {" "}
                Opps!... No products found!{" "}
              </p>
            )}
            {error && !loading && <p> {error} </p>}
          </div>

          <div className="row__2">
            {" "}
            <div className="row2__title"> Similar Products </div>
            <div className="row2__body">
              <ProductDetailCard
                title="w111 t-shirt"
                images={jersey1}
                price="Rs. 4000"
                type1="combed cotton"
                type2="supma cotton"
              />
              <ProductDetailCard
                title="w521 jacket"
                images={jacket}
                price="Rs. 12,000"
                type1="pure leather"
                type2="brown leather"
              />

              <ProductDetailCard
                title="w122 jersey"
                images={jersey2}
                price="Rs. 2,000"
                type1="combed leather"
                type2="pure leather"
              />

              <ProductDetailCard
                title="w132 vest"
                images={jersey3}
                price="Rs. 500"
                type1="thin cotton"
                type2="brown cotton"
              />
            </div>
            <button className="see__more">See More...</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;

// {links.map((item, i) => (
//   <li key={i}>
//     <Link to={item.link}>{item.name}</Link>
//   </li>
//   ))}
