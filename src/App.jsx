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
import Auth from './components/auth/Auth.jsx'
import YouTube from "./components/loading/LoadingProduct.jsx";
import AdminPage from './pages/admin/AdminPage.jsx'
import CreateProductPage from './pages/admin/create-product/CreateProductPage.jsx'
import CreateCategoryPage from './pages/admin/create-category/CreateCategoryPage.jsx'
import ManageProductPage from './pages/admin/manage-product/ManageProductPage.jsx'
import ManageCategoryPage from './pages/admin/manage-category/ManageCategoryPage.jsx'

function App() {

  return (
    <div>
      <NavbarTop />
      <Navbar />
      <Routes>
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/loading" element={<YouTube />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Auth />}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/account" element={<Account />} />
          <Route path="/about" element={<About />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/single/:id" element={<Single />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkOut" element={<CheckOut />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path='/admin' element={<AdminPage />} >
            <Route path='create-product' element={<CreateProductPage />} />
            <Route path='create-category' element={<CreateCategoryPage />} />
            <Route path='manage-product' element={<ManageProductPage />} />
            <Route path='manage-category' element={<ManageCategoryPage />} />
          </Route>
        </Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
