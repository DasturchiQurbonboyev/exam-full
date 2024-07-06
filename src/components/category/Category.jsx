import React, { useEffect } from "react";
// import { CATEGORY } from "../../static/index";
import card5 from "../../assets/images/home/card5.png";
import card6 from "../../assets/images/home/card6.png";
import card7 from "../../assets/images/home/card7.png";
import card9 from "../../assets/images/home/card9.png";
import card10 from "../../assets/images/home/card10.png";
import card11 from "../../assets/images/home/card11.png";


import AOS from 'aos';
import 'aos/dist/aos.css';

const Category = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, [])

  const CATEGORY = [
    {
      id: 1,
      img: card5,
      title: "Phones",
    },
    {
      id: 2,
      img: card6,
      title: "Computers",
    },
    {
      id: 3,
      img: card7,
      title: "SmartWatch",
    },
    {
      id: 4,
      img: card9,
      title: "HeadPhones",
    },
    {
      id: 5,
      img: card10,
      title: "Gaming",
    },
    {
      id: 6,
      img: card11,
      title: "Camera",
    },
  ];

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
