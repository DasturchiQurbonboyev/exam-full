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
import LoadingProduct from "../../components/loading/LoadingProduct.jsx";


const Home = () => {
  const { data, error, isLoading } = useGetProductQuery()

  if (isLoading) {
    return (
      <LoadingProduct />
    )
  }

  return (
    <>
      <Hero />
      <Products
        homeTitle="Flash Sales"
        homeType="Today’s"
        buttonNext=""
        allProductBtntop=""
        allProductBtnbottom="true"
        productSize={4}
      />
      <Category />
      <Sale />
      <Music />
      <Products
        homeTitle="Explore Our Products"
        homeType="Our Products"
        buttonNext=""
        allProductBtnbottom="true"
        allProductBtntop=""
        productSize={8}
      />
      <Arrival />
      <Delev />
    </>
  );
};

export default Home;
