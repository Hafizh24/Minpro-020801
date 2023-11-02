import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
} from "@material-tailwind/react";
import ButtonEvent from "./ButtonEvent";

const EventCard = ({ formik }) => {
  return (
    <>
      <Card className="w-full max-w-[46rem] shadow-lg laptop:mt-10">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className=" m-0 h-52 rounded-sm bg-event-background bg-cover laptop:h-80 laptop:rounded-md laptop:bg-center"
        >
          <div className="flex flex-col items-center gap-y-4 pt-10 laptop:pt-32">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border-2">
              <label htmlFor="dropzone-file" className=" cursor-pointer">
                <div className="flex flex-col items-center justify-center pb-5 pt-5 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-10 w-10"
                  >
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
            <h1 className=" text-center text-lg text-white laptop:text-2xl">
              Upload Images/posters/banner
            </h1>
          </div>
        </CardHeader>
        <CardBody>
          <Input
            name="eventName"
            value={formik.values.eventName}
            onChange={formik.handleChange}
            required={true}
            type="text"
            placeholder="Event Name"
            variant="standard"
            className=" !border-none"
            labelProps={{
              className: "hidden",
            }}
            containerProps={{ className: "min-w-[100px]" }}
          />
          <select
            name="category"
            value={formik.values.category}
            onChange={formik.handleChange}
            defaultValue="default"
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-200 bg-transparent px-0 py-2.5 text-sm text-gray-500 focus:border-gray-200 focus:outline-none focus:ring-0 dark:border-gray-700 dark:text-gray-400"
          >
            <option value="default">Select Category</option>
            <option value="Concert">Concert</option>
            <option value="Seminars">Seminars</option>
            <option value="Workshop">Workshops</option>
            <option value="Festivals">Festivals</option>
          </select>
        </CardBody>
        <CardFooter className="pt-3">
          <div className="flex justify-start gap-x-28">
            <div>
              <h1>Hosted by</h1>
              <div className="mt-2 flex h-14 w-14 items-center justify-center rounded-full border">
                <label htmlFor="dropzone-file" className=" cursor-pointer">
                  <div className="flex flex-col items-center justify-center pb-6 pt-5 text-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-8 w-8"
                    >
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
                formik={formik}
                header={"event date"}
                type={"date"}
                value1={formik.values.eventStartDate}
                value2={formik.values.eventEndDate}
                name1="eventStartDate"
                name2="eventEndDate"
                label1={"Start Date"}
                label2={"End Date"}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                    />
                  </svg>
                }
              />
              <ButtonEvent
                formik={formik}
                title={"Select Time"}
                header={"event time"}
                type={"time"}
                value1={formik.values.eventStartTime}
                value2={formik.values.eventEndTime}
                name1="eventStartTime"
                name2="eventEndTime"
                label1={"Start Time"}
                label2={"End Time"}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
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
                formik={formik}
                title={"Select Location"}
                header={"event location"}
                type={"text"}
                value1={formik.values.venue}
                value2={formik.values.city}
                name1="venue"
                name2="city"
                label1={"Place Name"}
                label2={"City"}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
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
