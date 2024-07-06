import React, { useEffect } from "react";
import about1 from "../../../assets/images/home/about1.png";
const AboutHeader = () => {


  useEffect(() => {
    scrollTo(0, 0)
  }, [])


  return (
    <div className="kontainer ">
      <div className=" grid min-[800px]:grid-cols-2  pt-[60px] min-[800px]:pt-[80px] items-center gap-[20px] min-[950px]:gap-[75px]">
        <div className="">
          <p className=" text-[40px] min-[600px]:text-[54px] font-[600] leading-[64px] pb-5 min-[600px]:pb-10   ">Our Story</p>
          <p className="text-[18px] font-[400] leading-[26px]  pb-[24px]   ">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p className="text-[18px] font-[400] leading-[26px]    ">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div className="right">
          <img src={about1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;
