import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Products from "../products/Products";
import axios from "../../api/index";
import { FaHeart } from "react-icons/fa";
import { toggleWishes } from "../../context/wishlistSlice";
import { toast } from "react-toastify";
import { decCart, incCart } from "../../context/cartSlice";

const Single = () => {
  const single = useSelector((state) => state.single.value)[0];
  const carts = useSelector((state) => state.cart.value);

  const count = carts?.filter((el) => {
    if (el.id == single?.id) {
      return el;
    }
  });

  const wishes = useSelector((state) => state.wishlist.value);
  const [data, setData] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("/products")
      .then((res) => setData(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pt-24">
      <section className="relative  kontainer">
        <div className="grid grid-cols-2 items-start gap-16 mx-auto max-md:px-2 ">
          <div className="img flex gap-5">
            <div className=" mb-8 flex flex-col justify-between gap-4">
              <div className="border p-[10px] rounded-[15px] cursor-pointer   ">
                <img className="w-[100px]" src={[single].thumbnail} alt="" />
              </div>
              <div className="border p-[10px] rounded-[15px] cursor-pointer   ">
                <img className="w-[100px]" src={[single].thumbnail} alt="" />
              </div>
              <div className="border p-[10px] rounded-[15px] cursor-pointer   ">
                <img className="w-[100px]" src={[single].thumbnail} alt="" />
              </div>
              <div className="border p-[10px] rounded-[15px] cursor-pointer   ">
                <img className="w-[100px]" src={[single].thumbnail} alt="" />
              </div>
            </div>
            <div className="img-box h-full max-lg:mx-auto ">
              <img
                src={single.thumbnail}
                alt="Yellow Tropical Printed Shirt image"
                className="max-lg:mx-auto lg:ml-auto h-full"
              />
            </div>
          </div>
          <div className="data w-full lg:pr-8 pr-0 xl:justify-start justify-center flex items-center max-lg:pb-10 xl:my-2 lg:my-5 my-0">
            <div className="data w-full max-w-xl">
              <h2 className="font-manrope font-bold text-[24px] leading-10 text-gray-900  capitalize">
                {single.title}
              </h2>
              <div className="flex flex-col sm:flex-row sm:items-center ">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_12029_1640)">
                        <path
                          d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                          fill="#FBBF24"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_12029_1640">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_12029_1640)">
                        <path
                          d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                          fill="#FBBF24"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_12029_1640">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_12029_1640)">
                        <path
                          d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                          fill="#FBBF24"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_12029_1640">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_12029_1640)">
                        <path
                          d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                          fill="#FBBF24"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_12029_1640">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_8480_66029)">
                        <path
                          d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                          fill="#F3F4F6"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_8480_66029">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <span className="pl-2 font-normal leading-7 text-gray-500 text-sm ">
                    ({single.rating} Reviews)
                  </span>
                  <p className="text-[#00FF66]     "> In Stock</p>
                </div>
              </div>
              <h6 className="font-manrope font-semibold text-2xl leading-9 text-gray-900 pr-5 sm:border-r border-gray-200 mr-5">
                $ {single.price * count[0].quantity}
              </h6>
              <p className="text-gray-500 text-base font-normal  mb-4">
                {single.description}
              </p>
              <hr />
              <div className="flex gap-3 items-center justify-start mt-5">
                <h4>Colours:</h4>
                <div className="w-[20px] h-5 rounded-[50%] cursor-pointer  bg-[#A0BCE0]   "></div>
                <div className="w-[20px] h-5 rounded-[50%] cursor-pointer bg-[#E07575]   "></div>
              </div>
              <div className="flex gap-6 items-center mt-5 w-full pb-8 border-b border-gray-100 flex-wrap">
                <p className="text-gray-900 text-lg leading-8 font-medium ">
                  Size:{" "}
                </p>
                <div className="grid grid-cols-3 min-[400px]:grid-cols-5 gap-3 max-w-md">
                  <button className="bg-white text-center focus:bg-[#DB4444] focus:text-white focus:border-none  w-8 h-8 rounded-[4px] font-semibold text-lg leading-8 text-gray-900 border border-gray-200 flex items-center  justify-center transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-100 hover:border-gray-300 visited:border-gray-300 visited:bg-gray-50">
                    XS
                  </button>
                  <button className="bg-white text-center focus:bg-[#DB4444] focus:text-white focus:border-none  w-8 h-8 rounded-[4px] font-semibold text-lg leading-8 text-gray-900 border border-gray-200 flex items-center  justify-center transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-100 hover:border-gray-300 visited:border-gray-300 visited:bg-gray-50">
                    S
                  </button>
                  <button className="bg-white text-center focus:bg-[#DB4444] focus:text-white focus:border-none  w-8 h-8 rounded-[4px] font-semibold text-lg leading-8 text-gray-900 border border-gray-200 flex items-center  justify-center transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-100 hover:border-gray-300 visited:border-gray-300 visited:bg-gray-50">
                    M
                  </button>
                  <button className="bg-white text-center focus:bg-[#DB4444] focus:text-white focus:border-none  w-8 h-8 rounded-[4px] font-semibold text-lg leading-8 text-gray-900 border border-gray-200 flex items-center  justify-center transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-100 hover:border-gray-300 visited:border-gray-300 visited:bg-gray-50">
                    L
                  </button>
                  <button className="bg-white text-center focus:bg-[#DB4444] focus:text-white focus:border-none  w-8 h-8 rounded-[4px] font-semibold text-lg leading-8 text-gray-900 border border-gray-200 flex items-center  justify-center transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-100 hover:border-gray-300 visited:border-gray-300 visited:bg-gray-50">
                    XL
                  </button>
                </div>
              </div>

              <div className="flex gap-3 py-8">
                <div className="flex sm:items-center sm:justify-center w-full">
                  <button
                    disabled={count[0].quantity <= 1}
                    onClick={() => dispatch(decCart(count[0]))}
                    className="outline-none    group py-[15px] px-6 border border-gray-400 rounded-l-full bg-white transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-300"
                  >
                    -
                  </button>
                  <h2 className="font-semibold text-gray-900 cursor-pointer text-lg py-[13px] px-6 w-full sm:max-w-[118px] outline-0 border-y border-gray-400 bg-transparent placeholder:text-gray-900 text-center hover:bg-gray-50">
                    {count[0].quantity}
                  </h2>
                  <button
                    onClick={() => dispatch(incCart(count[0]))}
                    className="outline-none  group py-[15px] px-6 border border-gray-400 rounded-r-full bg-white transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-300"
                  >
                    +
                  </button>
                </div>
                <button className="outline-none  text-center w-full px-5 py-4 rounded-[100px] bg-indigo-600 flex items-center justify-center font-semibold text-lg text-white shadow-sm transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-400">
                  {" "}
                  Buy Now{" "}
                </button>
                <button
                  onClick={() => dispatch(toggleWishes(single))}
                  className="outline-none  group transition-all duration-500 p-4 rounded-full bg-indigo-50 hover:bg-indigo-100 hover:shadow-sm hover:shadow-indigo-300"
                >
                  {wishes.some((w) => w?.id === single?.id) ? (
                    <FaHeart
                      onClick={() => toast.error("Wishlistdan o'chirildi")}
                      size={25}
                      className="text-[red]"
                    />
                  ) : (
                    <FaHeart
                      onClick={() => toast.success("Wishlistga qo'shildi")}
                      size={25}
                      className=""
                    />
                  )}
                </button>
              </div>
              <div className="flex items-center gap-3"></div>
            </div>
          </div>
        </div>
      </section>
      <Products
        data={data}
        str={""}
        month={"Related Item"}
        all={4}
        hoverBtn={false}
        wishlistTitle={true}
      />
    </div>
  );
};

export default Single;
