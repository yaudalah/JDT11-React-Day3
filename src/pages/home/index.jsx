import React from "react";
import { Banner, ProductCard } from "@components";

const HomePage = () => {
  return (
    <>
      <Banner />
      <div className="grid grid-cols-4 gap-10 mt-5 m-5">
        <ProductCard random={Math.random()} />
        <ProductCard random={Math.random()} />
        <ProductCard random={Math.random()} />
        <ProductCard random={Math.random()} />
      </div>
    </>
  );
};

export default HomePage;
