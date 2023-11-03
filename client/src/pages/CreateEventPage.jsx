import React, { useEffect } from "react";
import EventCard from "../components/EventCard";
import { EventTabs } from "../components/EventTabs";
import SimpleNavbar from "../components/SimpleNavbar";
import { Button } from "@material-tailwind/react";
import { useFormik } from "formik";

const CreateEventPage = () => {
  const formik = useFormik({
    initialValues: {
      eventName: "",
      category: "",
      eventStartDate: "",
      eventEndDate: "",
      eventStartTime: "",
      eventEndTime: "",
      venue: "",
      city: "",
      description: "",
      ticketName: "",
      ticketQuantity: 0,
      ticketPrice: 10000,
      ticketStartDate: "",
      ticketEndDate: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  useEffect(() => {
    console.log({ formik });
  });

  return (
    <>
      <SimpleNavbar />
      <form onSubmit={formik.handleSubmit}>
        <div className="flex  flex-col items-center">
          <EventCard formik={formik} />
          <EventTabs formik={formik} />

          <Button
            type="submit"
            ripple={false}
            color="orange"
            size="lg"
            className=" mb-2 mt-8 w-72 normal-case"
          >
            Create an Event
          </Button>
        </div>
      </form>
    </>
  );
};

export default CreateEventPage;
