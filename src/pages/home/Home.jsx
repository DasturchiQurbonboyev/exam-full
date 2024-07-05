import React, { useEffect, useState } from "react";
import axios from "../../api/index";
import Products from "../../components/products/Products";
import Hero from "../../components/hero/Hero.jsx";
import Music from "../../components/music/Music.jsx";
import Category from "../../components/category/Category";
import Sale from "../../components/sale/Sale";
import Delev from "../../components/delev/Delev";
import Arrival from "../../components/arrival/Arrival.jsx";
import { useGetProductQuery } from "../../context/productApi.js";
import Loading from "../../components/loading/Loading.jsx";


const Home = () => {

  const { data, error, isLoading } = useGetProductQuery()

  { isLoading && <Loading /> }

  return (
    <>
      <Hero />
      <Products />
      <Category />
      <Sale />
      <Music />
      <Products />
      <Arrival />
      <Delev />
    </>
  );
};

export default Home;
