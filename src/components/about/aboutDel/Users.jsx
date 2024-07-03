import React, { useEffect, useState } from "react";
import { USERS } from "../../../static/index";
import twitter from '../../../assets/images/Icons/twitter.png';
import instagram from '../../../assets/images/Icons/instagram.png';
import linkedin from '../../../assets/images/Icons/linkedin.png';
import './User.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules'

const Users = () => {


  const [windowWidth, setWindowWidth] = useState(window.innerWidth);



  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);


  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const cards = USERS.map((el) => (
    <SwiperSlide key={el.id}>
      <div data-aos="fade-up" className="arrival__box">
        <div>
          <img src={el.img} alt="" />
        </div>
        <div className="user__content flex-col">
          <p className="text-[32px] font-[500] leading-[32px] pt-8">{el.title}</p>
          <p className="text-[16px] font-[400] leading-[24px] pt-2">{el.job}</p>
          <div className="flex items-center justify-center gap-4 pt-4">
            <div>
              <img src={twitter} alt="" />
            </div>
            <div>
              <img src={instagram} alt="" />
            </div>
            <div>
              <img src={linkedin} alt="" />
            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>
  ));

  return (
    <div className="kontainer">
      <div className="flex justify-between gap-4">
        <Swiper
          slidesPerView={(windowWidth > 0 && windowWidth < 550) ? 1 : ((windowWidth >= 550 && windowWidth < 850) ? 2 : 3)}
          spaceBetween={30}
          freeMode={true}
          modules={[Pagination, FreeMode]}
          className="mySwiper"
          pagination={{ clickable: true }}
        >
          {cards}
        </Swiper>
      </div>
    </div >
  );
};

export default Users;
