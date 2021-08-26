import * as React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Login from "./Login/Login";
import Home from "./Home/home";
import { CartPage } from "./Cart/Cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const cartContext = React.createContext(null);
const App = () => {


  //cart storage
  const [cartDetails, setCartDetails] = React.useState([])
  return (
    <div>
      <cartContext.Provider value={{cartDetails, setCartDetails}}>
        <Router>
          <div>
            <div>
              <Header />
              <Navbar />
            </div>
          </div>
          <Switch>
            <Route path="/" exact="true" component={Home} />
            <Route path="/Login" component={Login} />
            <Route path="/cart" component={CartPage} />
          </Switch>
          <div>
            <Footer />
          </div>
        </Router>
      </cartContext.Provider>
    </div>
  );
};
export default App;
