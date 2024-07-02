import React, { useEffect } from "react";
import { SALE } from "../../static/index";
import { FaRegHeart, FaCartPlus } from "react-icons/fa";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Sale = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, [])

  let card = SALE?.map((el) => (
    <div data-aos="fade-up" key={el.id} className="card border-none" title={el.title}>
      <div className="h-[160px]">
        <img src={el.img} alt="" />
      </div>
      <h2 className="line-clamp-1" title={el.title}>{el.title}</h2>
      <h3>
        {el.price} <span>{el.oldPrice}</span>
      </h3>
      <div className="star text-start">
        <img src={el.star} alt="" />
        <img src={el.star} alt="" />
        <img src={el.star} alt="" />
        <img src={el.star} alt="" />
        <img src={el.star} alt="" />
        <p>{el.num}</p>
      </div>
      <div className="sales">{el.sale}</div>
      <button className="btn2">
        <FaRegHeart />
      </button>
      <button className="btn3">
        <FaCartPlus />
      </button>
    </div>
  ));
  return (
    <div className="kontainer sale">
      <div className="lines">
        <div className="line"></div>
        <span>Today’s</span>
      </div>
      <h1>Flash Sales</h1>
      <div className="cards">{card}</div>
      <button data-aos="fade-up">View All Products</button>
    </div>
  );
};

export default Sale;
