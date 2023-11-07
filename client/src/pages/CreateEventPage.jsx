import React, { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import { EventTabs } from "../components/EventTabs";
import SimpleNavbar from "../components/SimpleNavbar";
import { Button } from "@material-tailwind/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const ValidationSchema = Yup.object({
  eventName: Yup.string().required("Event Name is required"),
  category: Yup.string().required("Category is required"),
  ticketQuantity: Yup.number()
    .min(0, "Number of Tickets must be greater than or equal to 0")
    .max(1000, "Number of Tickets must be less than or equal to 1000")
    .required("Number of Tickets is required"),
  eventStartDate: Yup.date().required("Start Date is required"),
  eventEndDate: Yup.date().required("End Date is required"),
  eventStartTime: Yup.string().required("Start Time is required"),
  eventEndTime: Yup.string().required("End Time is required"),
  venue: Yup.string().required("Place name is required"),
  // city: Yup.string().required("City is required"),
  // dropzoneFile: Yup.mixed().test(
  //   "fileSize",
  //   "File size must be less than 3MB",
  //   (value) => {
  //     if (value) {
  //       return value.size <= 3145728;
  //     }
  //     return true;
  //   },
  // ),
});

const CreateEventPage = () => {
  const [selected, setSelected] = useState();
  const formik = useFormik({
    initialValues: {
      eventName: "",
      category: "",
      eventStartDate: "",
      eventEndDate: "",
      eventStartTime: "",
      eventEndTime: "",
      venue: "",
      // city: "",
      description: "",
      ticketQuantity: 0,
      ticketPrice: "",
      promotionStartDate: "",
      promotionEndDate: "",
      discount: 0,
      quota: 0,
      file: null,
    },
    validationSchema: ValidationSchema,
    onSubmit: async (values, action) => {
      // alert(JSON.stringify(values, null, 2));
      // window.location.reload();
      try {
        const data = new FormData();
        data.append("eventName", values.eventName);
        data.append("category", values.category);
        data.append("eventStartDate", values.eventStartDate);
        data.append("eventEndDate", values.eventEndDate);
        data.append("eventStartTime", values.eventStartTime);
        data.append("eventEndTime", values.eventEndTime);
        data.append("venue", values.venue);
        // data.append("city", values.city);
        data.append("city", selected);
        data.append("description", values.description);
        data.append("ticketQuantity", values.ticketQuantity);
        data.append("ticketPrice", values.ticketPrice);
        data.append("promotionStartDate", values.promotionStartDate);
        data.append("promotionEndDate", values.promotionEndDate);
        data.append("discount", values.discount);
        data.append("quota", values.quota);
        data.append("file", values.file);

        await axios.post("http://localhost:2000/events", data);

        alert("success upload");
      } catch (error) {
        console.log(error);
      }
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
          <EventCard
            formik={formik}
            selected={selected}
            setSelected={setSelected}
          />
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
