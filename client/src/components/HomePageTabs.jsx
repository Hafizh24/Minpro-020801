import React from "react";
import { useSelector } from "react-redux";

const HomePageTabs = () => {
  const cities = useSelector((state) => state.event.city);
  // const handleClick = (data) => {
  //   setLocation(data);
  // };
  return (
    <>
      <section className="mt-32">
        <div className="flex justify-center gap-x-4">
          {cities.map((item, index) => (
            <button
              key={index}
              className={`rounded-3xl border border-blue-gray-100  px-6 py-2 font-roboto text-sm shadow hover:bg-primary-500`}
            >
              {item}
            </button>
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePageTabs;
