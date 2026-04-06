import React from "react";
import { useLoaderData } from "react-router";
import PopularProducts from "./PopularProducts";

const Home = () => {
  const coffees = useLoaderData();
  console.log(coffees);
  return (
    <div className="my-10">
      <PopularProducts coffees={coffees}></PopularProducts>
    </div>
  );
};

export default Home;
