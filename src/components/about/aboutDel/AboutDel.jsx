import React, { useEffect } from "react";

import about2 from "../../../assets/images/hero/about2.png";
import about3 from "../../../assets/images/hero/about3.png";
import about4 from "../../../assets/images/hero/about4.png";
import about5 from "../../../assets/images/hero/about5.png";


import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutDel = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, [])



  return (
    <div className="kontainer">
      <div className="delever flex gap-3 justify-center sm:justify-between py-[100px] flex-wrap ">
        <div className="flex flex-col items-center gap-2 border-[2px] border-[#0006] rounded-md py-[30px] px-[40px] max-w-[250px] w-full">
          <div className="bg-black w-[80px] mb-[16px] border-[#717172] border-[11px] h-[80px] flex justify-center items-center rounded-[50%]">
            <img className="filter brightness-100 " src={about2} alt="" />
          </div>
          <p className="text-[20px] font-[600] leading-[28px]    ">10.5k </p>
          <p className="text-[14px] leading-[21px]      ">Sallers active our site</p>
        </div>
        <div className="flex flex-col items-center gap-2 border-[2px] border-[#0006] rounded-md py-[30px] px-[40px] max-w-[250px] w-full">
          <div className="bg-black w-[80px] mb-[16px] border-[#717172] border-[11px] h-[80px] flex justify-center items-center rounded-[50%]">
            <img className="filter brightness-100  " src={about3} alt="" />
          </div>
          <p className="text-[20px] font-[600] leading-[28px]    ">33k</p>
          <p className="text-[14px] leading-[21px]      ">Mopnthly Produduct Sale</p>
        </div>
        <div className="flex flex-col items-center gap-2 border-[2px] border-[#0006] rounded-md py-[30px] px-[40px] max-w-[250px] w-full">
          <div className="bg-black w-[80px] mb-[16px] border-[#717172] border-[11px] h-[80px] flex justify-center items-center rounded-[50%]">
            <img src={about4} alt="" />
          </div>
          <p className="text-[20px] font-[600] leading-[28px]    ">45.5k</p>
          <p className="text-[14px] leading-[21px]      ">Customer active in our site</p>
        </div>
        <div className="flex flex-col items-center gap-2 border-[2px] border-[#0006] rounded-md py-[30px] px-[40px] max-w-[250px] w-full">
          <div className="bg-black w-[80px] mb-[16px] border-[#717172] border-[11px] h-[80px] flex justify-center items-center rounded-[50%]">
            <img src={about5} alt="" />
          </div>
          <p className="text-[20px] font-[600] leading-[28px]    ">25k</p>
          <p className="text-[14px] leading-[21px]      ">Anual gross sale in our site</p>
        </div>
      </div>
    </div>
  );
};

export default AboutDel;
