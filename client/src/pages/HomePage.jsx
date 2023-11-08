import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import MyCarousel from "../components/Carousel";
import { EventsCard } from "../components/Card";
import axios from "axios";
import HomePageTabs from "../components/HomePageTabs";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Typography } from "@material-tailwind/react";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [city, setCity] = useState("Bandung");

  const fetchApi = async () => {
    try {
      await axios
        .get(`http://localhost:2000/events?city=${city}`)
        .then((response) => {
          console.log(response.data);
          setData(response?.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApi();

    // eslint-disable-next-line
  }, [city]);

  const fetch = async () => {
    try {
      await axios
        .get(`http://localhost:2000/events?category=festivals`)
        .then((response) => {
          // console.log(response.data);
          setCategory(response?.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div>
      <Navbar />
      <MyCarousel />
      <Typography
        variant="h3"
        color="orange"
        textGradient
        className="mb-8 mt-16 text-center"
      >
        Featured Event in
      </Typography>
      <HomePageTabs city={city} setCity={setCity} />
      <div className="mx-20">
        <Swiper
          slidesPerView={4}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <EventsCard>
                <EventsCard.Header image={item.image_url} id={item.id} />
                <EventsCard.Body
                  name={item.name}
                  date={item.start_date}
                  price={item.Ticket?.price}
                />
                <EventsCard.Footer
                  name={item.User?.username}
                  image={item.User?.image_url}
                />
              </EventsCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Typography
        variant="h3"
        color="orange"
        textGradient
        className=" mb-8 mt-16 text-center capitalize"
      >
        festival fair
      </Typography>
      <div className="mx-20 ">
        <Swiper
          slidesPerView={4}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {category.map((item) => (
            <SwiperSlide key={item.id}>
              <EventsCard>
                <EventsCard.Header image={item.image_url} id={item.id} />
                <EventsCard.Body
                  name={item.name}
                  date={item.start_date}
                  price={item.Ticket?.price}
                />
                <EventsCard.Footer />
              </EventsCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
