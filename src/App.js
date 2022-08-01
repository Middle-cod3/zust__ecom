import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainBanner from "./components/MainBanner";
import SingleProduct from "./SingleProduct";
import Product from "./Product";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Myaccount from "./Myaccount";
import Contact from "./Contact";
import Aboutus from "./Aboutus";
import Services from "./Services";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainBanner />} />
        <Route path="/single__product" element={<SingleProduct />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/myaccount" element={<Myaccount />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/services" element={<Services />} />

      </Routes>
      <Footer />


     
    </div>
  );
}

export default App;
