import { useState } from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Wishlist from "./pages/wislist/Wishlist";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Single from "./components/single/Single";
import Cart from "./components/cart/Cart";
import CheckOut from "./components/checkOut/CheckOut.jsx";
import LogIn from "./components/logIn/LogIn.jsx";
import SignUp from "./components/signUp/SignUp.jsx";
import "./sass/global.scss";
import Account from "./pages/account/Account";
import Contact from "./pages/contact/Contact";
import NavbarTop from "./components/navbar/NavbarTop.jsx";
function App() {

  return (
    <div>
      <NavbarTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/single/:id" element={<Single />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkOut" element={<CheckOut />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/account" element={<Account />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
