import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./home.css";
import actions from "./redux/actions";
// import Header from "../../component/header/Header";
import Location from "../../component/location/Location";
import ProductListingCard from "../../component/productListing-card/ProductListingCard";
import Topbar from "../../component/Topbar/Topbar";
import countryData from "./countrydata";
// import Pagination from "../../component/pagination/CustomPagination";
// import CustomPagination from "../../component/pagination/CustomPagination";
import ReactPaginate from "react-paginate";
import Footer from "../../component/footer/Footer";
// import { Pagination } from "@material-ui/lab";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';


const Home = () => {
  const [readMore, setReadMore] = useState(false);
  const [searchTerm, setsearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 10;

  const products = useSelector((state) => state.productlisting.allproducts);

  const [product, setProduct] = useState([]);
  console.log(products);

  useEffect(() => {
    setProduct(products);
  }, [products]);

  //get current posts

  const pagesVisited = pageNumber * usersPerPage;
  const displayUsers = product.slice(pagesVisited, pagesVisited + usersPerPage);

  const pageCount = Math.ceil(product.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // const categoryTypes = [...new Set(product.map((prod) => prod.category))];
  // console.log(categoryTypes, "categories");

  const loading = useSelector((state) => state.productlisting.loading);

  const error = useSelector((state) => state.productlisting.error);

  const dispatch = useDispatch();

  useEffect((data) => {
    dispatch(actions.loadproduct(data));
  }, []);

  const linkName = readMore ? "view less " : "view more... ";

  const filterItem = (categItem) => {
    const updatedItems = products.filter((curlElem) => {
      return curlElem.category === categItem;
    });
    setProduct(updatedItems);
  };

  return (
    <div>
      <Topbar
        onChange={(e) => setsearchTerm(e.target.value)}
        onClick={() => setProduct(products)}
      />

      <Location />

      <div className="home__row">
        <div className="home__sidebarCategory">
          <h1> Categories </h1>
          <ul>
            {/* {categoryTypes.map((cat) => {
              return <li onClick={() => filterItem(cat)}>{cat}</li>;
            })} */}
            <li onClick={() => filterItem("men's clothing")}>Men's Clothing</li>
            <li onClick={() => filterItem("women's clothing")}>
              Womens Clothing
            </li>
            <li onClick={() => filterItem("jewelery")}>Jwellery</li>
            <li onClick={() => filterItem("electronics")}> Electronics</li>
          </ul>
          <div
            className="home__seeMoreContent"
            onClick={() => {
              setReadMore(!readMore);
            }}
          >
            {readMore && (
              <div className="extra__content">
                <ul>
                  <li> Showcase</li>
                  <li> packaging Bags</li>
                  <li> Excavatorss</li>
                  <li> Dining Chairs</li>
                </ul>
              </div>
            )}

            <div className="home__sidebarSeeMore">{linkName}</div>
          </div>
          <div className="home__minOrder">
            <h3> Min. Order </h3>
            <div className="home__minOrderContent">
              <input />
              <button> OK </button>
            </div>
          </div>
          <div className="home__priceRange">
            <h3>Price</h3>
            <div className="home__priceRangeContent">
              <input />
              <span>-</span>
              <input />
              <button> OK </button>
            </div>
          </div>
          <div className="home__sidebarCountries">
            <h3> Supplier District</h3>

            <div className="home__sidebarRadiobuttom-country">
              {countryData.map((c) => {
                return (
                  <div className="home__countryList">
                    <input
                      type="radio"
                      id="district"
                      name="district"
                      value=""
                      className="home__radio"
                    />
                    <label>{c} </label>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="home__productListing">
          {product.loading && <p> loading... </p>}
          {displayUsers &&
            displayUsers
              .filter((val) => {
                if (searchTerm === "") {
                  return val;
                } else if (
                  val.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  val.category.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((p) => (
                <ProductListingCard
                  key={p.id}
                  id={p.id}
                  title={p.title}
                  price={p.price}
                  desc={p.description}
                  category={p.category}
                  image={p.image}
                />
              ))}

          {product.length === 0 && !loading && <p> No products found</p>}
          {error && !loading && <p> {error} </p>}
        </div>
      </div>

   
      <ReactPaginate
        previousLabel={<KeyboardArrowLeftIcon/>}
        nextLabel={<ChevronRightIcon/>}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
      <hr />
      <Footer />
    </div>
  );
};

export default Home;
