import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Dialog,
  Input,
} from "@material-tailwind/react";

import Autocomplete from "./Autocomplete";

const ModalLocation = ({ formik, selected, setSelected }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  return (
    <>
      <Button
        variant="text"
        onClick={handleOpen}
        className=" flex items-center gap-x-2 px-0 text-gray-400"
      >
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
        Select Location
      </Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <h1 className=" mb-4 font-semibold uppercase leading-relaxed tracking-normal text-gray-900 antialiased">
              event location
            </h1>
            <Input
              onChange={formik.handleChange}
              name="venue"
              value={formik.values.venue}
              label="Place Name"
              size="lg"
              variant="static"
              type="text"
              error={formik.errors.venue}
            />
            <Autocomplete selected={selected} setSelected={setSelected} />
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              onClick={handleOpen}
              fullWidth
              className=" bg-orange-400"
              variant="filled"
            >
              Save
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
};

export default ModalLocation;
