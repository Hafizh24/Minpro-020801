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

const HomePage = () => {
  const [data, setData] = useState([]);
  const [city, setCity] = useState("Bandung");

  const fetchApi = async () => {
    try {
      await axios
        .get(`http://localhost:2000/events?city=${city}`)
        .then((response) => {
          console.log(response.data);
          setData(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApi();
    // console.log(data[0].Ticket.price);
    // eslint-disable-next-line
  }, [city]);

  return (
    <div>
      <Navbar />
      <MyCarousel />
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
                <EventsCard.Footer />
              </EventsCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* <HomePageTabs />
      <div className="mx-20 ">
        <Swiper
          slidesPerView={4}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <EventsCard>
                <EventsCard.Header image={item.url} id={item.id} />
                <EventsCard.Body
                  name={item.name}
                  date={item.date}
                  price={item.price}
                />
                <EventsCard.Footer />
              </EventsCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div> */}
      <Footer />
    </div>
  );
};

export default HomePage;
