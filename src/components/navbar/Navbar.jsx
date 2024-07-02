import React, { useEffect, useState } from "react";
import { FaRegHeart, FaSearch } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  const wishes = useSelector((state) => state.wishlist.value).length;
  const carts = useSelector((state) => state.cart.value).length;

  const [scroll, setScroll] = useState(false);

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
    <div className="sticky top-0 navbar-shrink">
      <div className={`shadow-md navbar_animation ${scroll ? "scroll" : ""} w-full z-20 bg-white`}>
        <div className="kontainer flex justify-between items-center">
          <h2 className="text-[24px] font-[700] leading-[24px]">
            <Link to={"/"}>Exclusive</Link>
          </h2>
          <ul className="flex gap-4">
            <li>
              <Link className="text-[16px]" to={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="text-[16px]" to={"/contact"}>
                Contact
              </Link>
            </li>
            <li>
              <Link className="text-[16px]" to={"/about"}>
                About
              </Link>
            </li>
            {/* <li>
              <Link className="text-[16px]" to={"/log-in"}>
                Sign In
              </Link>
            </li> */}
            <li>
              <Link className="text-[16px]" to={"/sign-up"}>
                Sign Up
              </Link>
            </li>
            {/* <li>
              <Link className="text-[16px]" to={"/account"}>
                Account
              </Link>
            </li> */}
          </ul>
          <div className="flex gap-6 items-center">
            <div className="bg-[#F5F5F5] flex items-center gap-[34px] px-[20px] py-[10px] rounded">
              <input
                className="bg-transparent outline-none"
                placeholder="What are you looking for?"
                type="text"
                name=""
                id=""
              />
              <FaSearch className="cursor-pointer size-5 " />
            </div>
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
      </div>
    </div>
  );
};

export default Navbar;
