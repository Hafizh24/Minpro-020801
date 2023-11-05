import React, { useEffect } from "react";
import EventCard from "../components/EventCard";
import { EventTabs } from "../components/EventTabs";
import SimpleNavbar from "../components/SimpleNavbar";
import { Button } from "@material-tailwind/react";
import { useFormik } from "formik";
import * as Yup from "yup";

const ValidationSchema = Yup.object({
  eventName: Yup.string().required("Event Name is required"),
  ticketName: Yup.string().required("Ticket Name is required"),
  category: Yup.string().required("Category is required"),
  ticketQuantity: Yup.number()
    .min(0)
    .max(1000)
    .required("Number of Tickets is required"),
  eventStartDate: Yup.date().required("Start Date is required"),
  eventEndDate: Yup.date().required("End Date is required"),
  eventStartTime: Yup.string().required("Start Time is required"),
  eventEndTime: Yup.string().required("End Time is required"),
  venue: Yup.string().required("Place name is required"),
  city: Yup.string().required("City is required"),
  dropzoneFile: Yup.mixed().test(
    "fileSize",
    "File size must be less than 3MB",
    (value) => {
      if (value) {
        return value.size <= 3145728;
      }
      return true;
    },
  ),
});

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
      ticketQuantity: "",
      ticketPrice: "",
      ticketStartDate: "",
      ticketEndDate: "",
      dropzoneFile: "",
    },
    validationSchema: ValidationSchema,
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
