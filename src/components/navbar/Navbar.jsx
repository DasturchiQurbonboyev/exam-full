import React, { useEffect, useState } from "react";
import { FaRegHeart, FaSearch } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  const wishes = useSelector((state) => state.wishlist.value).length;
  const carts = useSelector((state) => state.cart.value).length;

  const [scroll, setScroll] = useState(false);
  const [active, setActive] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("navbar__toggler");
  const { pathname } = useLocation()

  const navToggle = () => {
    setActive(active === 'nav__menu' ? 'nav__menu nav__active' : 'nav__menu');
    setToggleIcon(toggleIcon === 'navbar__toggler' ? 'navbar__toggler toggle' : 'navbar__toggler');
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 35) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="sticky  navbar-shrink">
      <div className={`shadow-md navbar_animation ${scroll ? "scroll" : ""} w-full z-20 bg-white`}>
        <div className="kontainer flex justify-between items-center">
          <h2 className="text-[24px] font-[700] leading-[24px]">
            <Link to={"/"}>Exclusive</Link>
          </h2>
          <ul className={`${active} nav__menu`} >
            <li>
              <Link onClick={navToggle} className={`${pathname === '/' && "location"} text-[16px]  hover-underline-animation text-black`} to={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link onClick={navToggle} className={`${pathname.includes('contact') && "location"} text-[16px] hover-underline-animation`} to={"/contact"}>
                Contact
              </Link>
            </li>
            <li>
              <Link onClick={navToggle} className={`${pathname.includes('about') && "location"} text-[16px] hover-underline-animation`} to={"/about"}>
                About
              </Link>
            </li>
            <li>
              <Link onClick={navToggle} className={`${pathname.includes('sign-up') && "location"} text-[16px] hover-underline-animation`} to={"/sign-up"}>
                Sign Up
              </Link>
            </li>
          </ul>
          <div className="max-[830px]:pl-5 flex gap-6 items-center max-[830px]:flex-grow">
            <div className="flex-grow">
              <div className="search">
                <input
                  className="bg-transparent flex-grow w-full outline-none"
                  placeholder="What are you looking for?"
                  type="text"
                  name=""
                  id="#"
                />
                <FaSearch className="cursor-pointer size-5 " />
              </div>
            </div>
            <div className="flex items-center  gap-3">
              <Link className="flex" to={"/wishlist"}>
                <span>
                  <FaRegHeart className="cursor-pointer size-6" />
                </span>
                {wishes ? (
                  <sup className="bg-red-500 w-4 h-4 rounded-[50%] flex justify-center items-center text-white">
                    {wishes}
                  </sup>
                ) : null}
              </Link>
              <Link className="text-[16px] flex" to={"/cart"}>
                <span>
                  <GrCart className="cursor-pointer size-6" />
                </span>
                {carts ? (
                  <sup className="bg-red-500 w-4 h-4 rounded-[50%] flex justify-center items-center text-white">
                    {carts}
                  </sup>
                ) : null}
              </Link>
            </div>
          </div>
          <div onClick={navToggle} className={toggleIcon}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
