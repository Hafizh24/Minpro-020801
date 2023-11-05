import { Typography } from "@material-tailwind/react";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className=" mt-20 flex w-full items-center justify-center gap-x-12 gap-y-6 border-t border-blue-gray-50 bg-primary-500 py-6 text-center">
        <p className=" font-roboto text-orange-300">
          {" "}
          &copy;2023 Karcis.All rights reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;
