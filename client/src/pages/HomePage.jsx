import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import MyCarousel from "../components/Carousel";
import { MyCard } from "../components/Card";
import axios from "axios";
import Category from "../components/Category";

const HomePage = () => {
  const [data, setData] = useState([]);
  const fetchApi = async () => {
    try {
      await axios.get("http://localhost:2000/data").then((response) => {
        // console.log(response.data);
        setData(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <div>
      <Navbar />
      <MyCarousel />
      <Category />
      <div className="flex gap-x-5 flex-wrap justify-center">
        {data.map((item) => (
          <MyCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
