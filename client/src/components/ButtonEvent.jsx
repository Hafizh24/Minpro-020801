import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Dialog,
  Input,
} from "@material-tailwind/react";

import React, { useState } from "react";

const ButtonEvent = ({
  formik,
  title,
  icon,
  header,
  type,
  label1,
  label2,
  name1,
  name2,
  value1,
  value2,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <>
      <Button
        variant="text"
        onClick={handleOpen}
        className=" flex items-center gap-x-2 px-0 text-gray-400"
      >
        {icon}
        {title}
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
              {header}
            </h1>
            <Input
              onChange={formik.handleChange}
              name={name1}
              value={value1}
              label={label1}
              size="lg"
              variant="static"
              type={type}
            />
            <Input
              onChange={formik.handleChange}
              name={name2}
              value={value2}
              label={label2}
              size="lg"
              variant="static"
              type={type}
            />
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

export default ButtonEvent;
