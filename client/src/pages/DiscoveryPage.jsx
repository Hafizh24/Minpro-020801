import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Discover from "../components/Discover";

const DiscoveryPage = () => {
  const [city, setCity] = useState("");
  const [category, setCategory] = useState("");

  console.log(city);
  console.log(category);

  return (
    <>
      <Navbar />
      <div className="flex flex-row">
        <Sidebar
          city={city}
          setCity={setCity}
          category={category}
          setCategory={setCategory}
        />
        <Discover city={city} category={category} />
      </div>
    </>
  );
};

export default DiscoveryPage;
