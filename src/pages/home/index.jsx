import { Banner, Navbar, ProductCard } from "@components";
import Title from "antd/lib/typography/Title";
import React, { useEffect, useState } from "react";
import api from "../../services/api";

const HomePage = () => {
  const [cities, setCities] = useState([]);
  const [products, setProducts] = useState([]);

  const fetchCities = async () => {
    try {
      const url = "/api/v1/city";
      const response = await api.get(url);
      const payload = [...response?.data?.data?.cities];
      console.log(payload);
      setCities(payload || []);
    } catch (error) {
      alert(error);
    }
  };
  const fetchProducts = async () => {
    try {
      const url = "/api/v1/products";
      const response = await api.get(url);
      const payload = [...response?.data?.data?.products];
      console.log(payload);
      setProducts(payload || []);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchCities();
    fetchProducts();
  }, []);

  return (
    <main>
      <Navbar />
      <Banner />
      <Title level={3} className="ml-5">
        Cities
      </Title>
      <section className="bg-slate-400 text-[#fff] grid md:grid-cols-5 sm:grid-cols-2 m-5 py-5 text-center rounded-xl">
        {cities.map((item) => {
          return <span key={item?.id}> {item?.name}</span>;
        })}
      </section>

      <Title className="text-center">Products</Title>
      <section className="card__container">
        {products.map((item) => (
          <ProductCard
            key={item?.id}
            productName={item?.name}
            productCategory={item?.categoryId?.name}
            productPrice={item?.price}
            onClick={item.id}
          />
        ))}
      </section>
    </main>
  );
};

export default HomePage;
