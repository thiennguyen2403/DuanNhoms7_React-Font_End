import React from "react";
import { Product } from "../interfaces/Product";
import Header from "../components/Header";
import Banner from "../components/Banner";
import PopularProduct from "../components/PopularProduct";
import Footer from "../components/Footer";

interface Prop {
  product: Product[];
}

const Home = ({ product }: Prop) => {
  return (
    <>
      <Banner />
      <PopularProduct />
      <Footer />
    </>
  );
};

export default Home;
