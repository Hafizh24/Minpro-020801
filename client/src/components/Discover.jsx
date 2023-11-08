import React, { useEffect, useState } from "react";
import { EventsCard } from "./Card";
import axios from "axios";
import { DIscoveryCard } from "./DIscoveryCard";

const Discover = ({ city, category }) => {
  const [data, setData] = useState([]);
  const fetchApi = async () => {
    try {
      await axios
        .get(
          `http://localhost:2000/events?city=${
            city ? city : ""
          }&category=${category}&limit=6`,
        )
        .then((response) => {
          // console.log(response.data);
          setData(response?.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApi();

    // eslint-disable-next-line
  }, [city, category]);
  return (
    <>
      <div className="flex flex-wrap">
        {data.map((item) => (
          <div key={item.id} className="">
            <DIscoveryCard>
              <DIscoveryCard.Header image={item.image_url} id={item.id} />
              <DIscoveryCard.Body
                name={item.name}
                date={item.start_date}
                price={item.Ticket?.price}
              />
              <DIscoveryCard.Footer
                name={item.User?.username}
                image={item.User?.image_url}
              />
            </DIscoveryCard>
          </div>
        ))}
      </div>
    </>
  );
};

export default Discover;
