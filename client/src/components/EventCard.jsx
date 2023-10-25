import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Input } from "@material-tailwind/react";
import ButtonEvent from "./ButtonEvent";

const EventCard = () => {
  return (
    <>
      <Card className="w-full max-w-[46rem] shadow-lg mt-10">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className=" rounded-md m-0 bg-event-background bg-cover bg-center h-80">
          <div className="flex flex-col pt-44 gap-y-1">
            <h1 className=" text-white text-center text-2xl">Upload Images/posters/banner</h1>
            <h6 className=" text-white text-center text-sm">
              Recommended 724 x 340px and no more than 2Mb
            </h6>
          </div>
        </CardHeader>
        <CardBody>
          <Input
            type="text"
            placeholder="Event Name"
            variant="standard"
            className=" !border-none"
            labelProps={{
              className: "hidden",
            }}
            containerProps={{ className: "min-w-[100px]" }}
          />

          {/* <Select
            variant="standard"
            name="selectField"
            id="selectField"
            label="Select Category"
            labelProps={{ className: "" }}>
            <Option sele>Select Category</Option>
            <Option>Concert</Option>
            <Option>Seminars</Option>
            <Option>Workshops</Option>
            <Option>Festivals</Option>
          </Select> */}

          <select
            defaultValue="default"
            className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
            <option value="default">Select Category</option>
            <option value="Concert">Concert</option>
            <option value="Seminars">Seminars</option>
            <option value="FWorkshopsR">Workshops</option>
            <option value="Festivals">Festivals</option>
          </select>
        </CardBody>
        <CardFooter className="pt-3">
          <div className="flex gap-x-28 justify-start">
            <div>
              <h1>Hosted by</h1>
              <div className="flex items-center justify-center w-14 h-14 rounded-full border mt-2">
                <label htmlFor="dropzone-file" className=" cursor-pointer">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                      />
                    </svg>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
                </label>
              </div>
            </div>
            <div>
              <h1>Date & Time</h1>
              <ButtonEvent
                title={"Select Date"}
                icon={
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
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                    />
                  </svg>
                }
              />
              <ButtonEvent
                title={"Select Time"}
                icon={
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
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                }
              />
            </div>
            <div className="flex flex-col">
              <h1>Location</h1>
              <ButtonEvent
                title={"Select Location"}
                icon={
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
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                }
              />
            </div>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default EventCard;
