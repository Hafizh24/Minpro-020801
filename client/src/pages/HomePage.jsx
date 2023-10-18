import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import MyCarousel from "../components/Carousel";
import { EventsCard } from "../components/Card";
import axios from "axios";
import Category from "../components/Category";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("");
  // console.log(category);
  const fetchApi = async () => {
    try {
      await axios
        .get(`http://localhost:2000/data?location=${category}&_limit=4`)
        .then((response) => {
          // console.log(response.data);
          setData(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, [category]);
  return (
    <div>
      <Navbar />
      <MyCarousel />
      <Category setCategory={setCategory} />
      <div className="flex gap-x-5 flex-wrap justify-center">
        {data.map((item) => (
          <EventsCard key={item.id}>
            <EventsCard.Header image={item.url} />
            <EventsCard.Body
              name={item.name}
              date={item.date}
              price={item.price.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}
            />
            <EventsCard.Footer />
          </EventsCard>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
