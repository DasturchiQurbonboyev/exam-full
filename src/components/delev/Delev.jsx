import React, { useEffect } from "react";
import delevery1 from '../../assets/images/home/delivery-car.png'
import delevery2 from '../../assets/images/home/deleveriy-service.png'
import delevery3 from '../../assets/images/home/delevery-secure.png'


import AOS from 'aos';
import 'aos/dist/aos.css';

const Delev = () => {


  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, [])


  return (
    <div className="kontainer">
      <div className="delever flex gap-8 justify-center sm:justify-between py-[100px] flex-wrap ">
        <div data-aos="fade-up" className="flex flex-col items-center gap-2">
          <div className="bg-black w-[80px] mb-[16px] border-[#717172] border-[11px] h-[80px] flex justify-center items-center rounded-[50%]">
            <img src={delevery1} alt="" />
          </div>
          <p className="text-[20px] font-[600] leading-[28px]    ">FREE AND FAST DELIVERY</p>
          <p className="text-[14px] leading-[21px]      ">Free delivery for all orders over $140</p>
        </div>
        <div data-aos="fade-up" className="flex flex-col items-center gap-2">
          <div className="bg-black w-[80px] mb-[16px] border-[#717172] border-[11px] h-[80px] flex justify-center items-center rounded-[50%]">
            <img src={delevery2} alt="" />
          </div>
          <p className="text-[20px] font-[600] leading-[28px]    ">FREE AND FAST DELIVERY</p>
          <p className="text-[14px] leading-[21px]      ">Free delivery for all orders over $140</p>
        </div>
        <div data-aos="fade-up" className="flex flex-col items-center gap-2">
          <div className="bg-black w-[80px] mb-[16px] border-[#717172] border-[11px] h-[80px] flex justify-center items-center rounded-[50%]">
            <img src={delevery3} alt="" />
          </div>
          <p className="text-[20px] font-[600] leading-[28px]    ">FREE AND FAST DELIVERY</p>
          <p className="text-[14px] leading-[21px]      ">Free delivery for all orders over $140</p>
        </div>
      </div>
    </div>
  );
};

export default Delev;
