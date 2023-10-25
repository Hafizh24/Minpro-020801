import { Avatar, Card, CardBody, CardFooter } from "@material-tailwind/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailEventPage = () => {
  const { id } = useParams();
  const [event, setEevent] = useState({});

  const fetchApi = async () => {
    try {
      await axios.get(`http://localhost:2000/data/${id}`).then((response) => {
        // console.log(response.data);
        setEevent(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, [id]);

  return (
    <div className=" container">
      <div className="content-top mt-7 mb-12 flex justify-center gap-x-12">
        <div className="banner ml-20">
          <img src={event.url} alt="" className=" h-[250px] w-[725px] rounded-md shadow-lg" />
        </div>
        <div className="detail-card">
          <Card className=" w-96 shadow-xl">
            <CardBody>
              <div className="title mb-4">
                <h1 className=" text-gray-900 text-2xl font-roboto">{event.name}</h1>
              </div>
              <div className="additional flex flex-col gap-y-2">
                <div className="date flex gap-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 fill-primary-500">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                    />
                  </svg>

                  <h3 className="text-gray-700">{event.date}</h3>
                </div>
                <div className="time flex gap-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 fill-primary-500">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3 className="text-gray-700">{event.time}</h3>
                </div>
                <div className="venue flex gap-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 fill-primary-500">
                    <path
                      fillRule="evenodd"
                      d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <h3 className="text-gray-700">{event.location}</h3>
                </div>
              </div>
            </CardBody>
            <CardFooter className="pt-6 border-t flex gap-x-5">
              <div className="avatar">
                <Avatar alt="" size="sm" className=" bg-blue-gray-200 mr-2" />
              </div>
              <div className="name">
                <span className=" text-gray-500">Hosted by</span>
                <p></p>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div className="content-main flex">
        <div className="left w-2/3 pl-32">
          <div className="description">
            <p className="title text-lg text-gray-900">Description</p>
            <p className=" mt-5 text-gray-700">{event.description}</p>
          </div>
        </div>
        <div className="right w-1/3"> </div>
      </div>
    </div>
  );
};

export default DetailEventPage;
