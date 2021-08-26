import * as React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Cart from "../Cart/Cart";
import { Carousal } from "../Carousal/carousal";
import { Product } from "../ProductCard/Product";
import Navbar from "../Navbar/Navbar";
import { MenuSelector } from "../MenuSelector/menuselector";
import "./home.css";
import { products as defaultProducts } from "../data";

const Home = () => {

  const [products, setProducts] = React.useState(defaultProducts)
  return (
    <div>
      <div>
        <span>Home</span>
        <div className="jz-carousal-container">
          <div className="jz-carousal-inner">
            <Carousal />
          </div>
        </div>
        <div className="jz-food-pick-container">
          <MenuSelector  setProducts={setProducts}/>
        </div>
        <div className="jx-product-container">
          <Product products={products} />
        </div>
      </div>
    </div>
  );
};
export default Home;
export { Home };
