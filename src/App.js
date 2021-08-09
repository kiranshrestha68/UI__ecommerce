import "./App.css";
// import Topbar from "./component/Topbar/Topbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import TheShop from "./pages/the-shop/TheShop";
import MensClothing from "./pages/mens-clothing/MensClothing";
import Womens from "./pages/women's/Womens";
import KidsandBoys from "./pages/kids-&-boys/KidsandBoys";
import ProductDetail from "./pages/product-details/ProductDetail";
import ShopppingCart from "./pages/shopping-cart/ShopppingCart";

// import Location from "./component/location/Location";

function App() {
  return (
    <>
    
      <BrowserRouter>
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/the-shop" component={TheShop} />
          <Route exact path="/mens-clothing" component={MensClothing} />
          <Route exact path="/womens" component={Womens} />
          <Route exact path="/kids-and-boys" component={KidsandBoys} />
          <Route  path="/product-detail/:id" component={ProductDetail} />
          <Route exact path="/shopping-cart" component={ShopppingCart} />


        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
