import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import MyCarousel from "../components/Carousel";
import { EventsCard } from "../components/Card";
import axios from "axios";
import Tabs from "../components/Tabs";
import Footer from "../components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [location, setLocation] = useState("Bandung");

  const fetchApi = async () => {
    try {
      await axios.get(`http://localhost:2000/data?location=${location}`).then((response) => {
        // console.log(response.data);
        setData(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApi();
    // eslint-disable-next-line
  }, [location]);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };
  return (
    <div>
      <Navbar />
      <MyCarousel />
      <Tabs location={location} setLocation={setLocation} />
      <div className="mx-20">
        <Slider {...settings}>
          {data.map((item) => (
            <EventsCard key={item.id}>
              <EventsCard.Header image={item.url} id={item.id} />
              <EventsCard.Body
                name={item.name}
                date={item.date}
                price={item.price.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  maximumFractionDigits: 0,
                })}
              />
              <EventsCard.Footer />
            </EventsCard>
          ))}
        </Slider>
      </div>
      <Tabs />
      <div className="mx-20 ">
        <Slider {...settings}>
          {data.map((item) => (
            <EventsCard key={item.id}>
              <EventsCard.Header image={item.url} id={item.id} />
              <EventsCard.Body
                name={item.name}
                date={item.date}
                price={item.price.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  maximumFractionDigits: 0,
                })}
              />
              <EventsCard.Footer />
            </EventsCard>
          ))}
        </Slider>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;

const CustomNextArrow = (props) => {
  const { onClick } = props;

  return (
    <div
      onClick={onClick}
      className="w-5 h-5 absolute top-1/2 block right-[-25px] cursor-pointer text-gray-800 -translate-y-1/2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
        />
      </svg>
    </div>
  );
};
const CustomPrevArrow = (props) => {
  const { onClick } = props;

  return (
    <div
      onClick={onClick}
      className=" left-[-25px] w-5 h-5 absolute top-1/2 cursor-pointer -translate-y-1/2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
        />
      </svg>
    </div>
  );
};
