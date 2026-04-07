import React, { useState } from "react";
import { useLoaderData } from "react-router";
import PopularProducts from "./PopularProducts";

const Home = () => {
  const initialCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(initialCoffees);

  return (
    <div className="my-10">
      <PopularProducts
        coffees={coffees}
        setCoffees={setCoffees}
      ></PopularProducts>
    </div>
  );
};

export default Home;
