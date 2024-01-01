import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Contact from "./components/Contact";
import About from "./components/About";
import MainScreen from "./components/MainScreen.jsx";
import Home from "./components/Home.jsx";
import Api from "./components/Api.jsx";
import { DataProvider } from "./components/cart_components/Context.js";
import Products from "./components/Product.jsx";
import Cart from "./components/cart_components/section/Cart.js";
import Payment from "./components/cart_components/section/Payment.js";

function App() {
  return (

    // Main App.js for all the routes
    <DataProvider>
      <div className="App">
        <Router>
          <Dashboard />
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/api" element={<Api />} />
              <Route path="/shopping" element={<Products />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/todoapp" element={<MainScreen />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/payment" element={<Payment />} />
            </Routes>
          </div>
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
