import React, { useEffect } from "react";
import { CATEGORY } from "../../static/index";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Category = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, [])

  let card = CATEGORY?.map((el) => (
    <div data-aos="fade-up" className="flex  scales hover:shadow-md cursor-pointer  flex-col  items-center border w-[170px] rounded-md  py-[24px] " key={el.id}>
      <img className="filter brightness-0 " src={el.img} alt="" />
      <h2>{el.title}</h2>
    </div>
  ));
  return (
    <div className="category kontainer">
      <div data-aos="fade-up" className="lines">
        <div className="line"></div>
        <span>Categories</span>
      </div>
      <h1 data-aos="fade-up">Browse By Category</h1>
      <div className="flex flex-wrap gap-4 justify-between pt-[50px]">
        {card}
      </div>
    </div>
  );
};

export default Category;
