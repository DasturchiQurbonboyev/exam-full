import React, { useEffect, useState } from "react";
import axios from "../../api/index";
import Products from "../../components/products/Products";
import Hero from "../../components/hero/Hero.jsx";
import Music from "../../components/music/Music.jsx";
import Category from "../../components/category/Category";
import Sale from "../../components/sale/Sale";
import Delev from "../../components/delev/Delev";
import Arrival from "../../components/arrival/Arrival.jsx";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/products")
      .then((res) => setData(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Hero />
      <Products
        data={data}
        str={"Best Selling Products"}
        month={"This Month"}
        all={4}
        hoverBtn={false}
        wishlistTitle={true}
      />
      <Category />
      <Sale />
      <Music />
      <Products
        data={data}
        str={"Explore Our Products"}
        month={"Our Products"}
        all={8}
        hoverBtn={true}
        wishlistTitle={true}
      />
      <Arrival />
      <Delev />
    </div>
  );
};

export default Home;
