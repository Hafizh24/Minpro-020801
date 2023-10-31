import { Button, Card, CardBody, CardFooter, Dialog, Input } from "@material-tailwind/react";
import React, { useState } from "react";

const ButtonEvent = ({ title, icon }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  return (
    <>
      <Button
        variant="text"
        onClick={handleOpen}
        className=" text-gray-400 flex items-center gap-x-2 px-0">
        {icon}
        {title}
      </Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none">
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            {/* <Typography variant="h4" color="blue-gray">
              Sign In
            </Typography> */}
            <h1 className=" mb-4 antialiased tracking-normal font-semibold leading-relaxed uppercase text-gray-900">
              event date
            </h1>
            <Input label="Start Date" size="lg" variant="static" type="date" />
            <Input label="End Date" size="lg" variant="static" type="date" />
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              onClick={handleOpen}
              fullWidth
              className=" bg-deep-orange-900"
              variant="filled">
              Save
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
};

export default ButtonEvent;
