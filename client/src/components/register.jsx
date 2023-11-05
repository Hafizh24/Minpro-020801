import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../redux/userSlice";
import React, { useState, useRef } from "react";
import { current } from "@reduxjs/toolkit";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Verification } from "./verifikasi";

const RegisterSchema = Yup.object({
  name: Yup.string().required("name is required"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
  username: Yup.string().required("username is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Minimum 8 characters"),
});

export const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showErrorOutline, setShowErrorOutline] = useState(false);
  const [username, setUsername] = useState(""); // State untuk menyimpan nama pengguna
  const [referralCode, setReferralCode] = useState("");
  const dataReferral = useRef();

  const notify = () =>
    toast.success("Register Success!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const handleSubmit = async (data) => {
    console.log("ini name", formik.values.name);
    console.log("ini referral", referralCode);
    data.referral = referralCode;
    try {
      console.log(data, "ini data");
      await axios.post("http://localhost:2000/users", data);
      notify();
    } catch (err) {
      console.log(err);
    }
  };

  const referralCodeGenerator = () => {
    if (formik.values.name.length >= 2) {
      console.log("Ini length", formik.values.name.length);
      const words = formik.values.name.split(" ");
      const userChars = words
        .map((word) => word.charAt(0).toUpperCase())
        .join("");
      const randomChars = Math.random()
        .toString(36)
        .substring(2, 6)
        .toUpperCase();
      const generatedCode = `${userChars}${randomChars}`;
      console.log("Ini generated Code", generatedCode);
      setReferralCode(generatedCode);
    } else {
      // alert("name must at least contain 2 characters");
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      username: "",
      password: "",
      // referral: referralCodeGenerator()
    },
    validationSchema: RegisterSchema,
    onSubmit: (values, action) => {
      console.log(values, "ini values");
      handleSubmit(values);
      action.resetForm();
    },
  });

  return (
    <>
      {/* <div className="grid grid-cols-2"> */}
      {/* <div className="colspan-1 ml-10 pt-16">
          <h1 className="text-orange-400 font-bold text-left text-4xl italic mr-8 font-roboto">
            Karcis.com
          </h1>
          <p> Crying real tears dk what to do</p>
        </div> */}
      <div className="min-h-screen flex item-center justify-center bg-center lg:h-screen lg:bg-none pr-20 pt-20 tablet laptop">
        {/* <div className="flex item-center">
            <h1 className="text-orange-400 font-bold text-left italic mr-8 font-roboto">
              {" "}
            </h1>
          </div> */}
        <div className="flex item-center justify-center">
          <Card color="transparent" shadow={false}>
            <Typography
              variant="h4"
              color="blue-gray"
              className="hover:text-orange-400"
            >
              Sign Up
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Enter your details to register.
            </Typography>
            <form
              onSubmit={formik.handleSubmit}
              className="mt-6 mb-2 w-80 max-w-screen-lg sm:w-96"
            >
              <div className="mb-3 flex flex-col gap-4">
                <Input
                  size="lg"
                  label="Name"
                  name="name"
                  type="text"
                  ref={dataReferral}
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className=" text-red-900 text-xs">
                    {formik.errors.name}
                  </div>
                ) : null}
                <Input
                  size="lg"
                  label="Email"
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className=" text-red-900 text-xs">
                    {formik.errors.email}
                  </div>
                ) : null}
                <Input
                  size="lg"
                  label="Username"
                  name="username"
                  onChange={formik.handleChange}
                  value={formik.values.username}
                  error={
                    formik.touched.username && Boolean(formik.errors.username)
                  }
                />
                {formik.touched.username && formik.errors.username ? (
                  <div className=" text-red-900 text-xs">
                    {formik.errors.username}
                  </div>
                ) : null}
                <Input
                  type="password"
                  size="lg"
                  label="Password"
                  name="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className=" text-red-900 text-xs">
                    {formik.errors.password}
                  </div>
                ) : null}
                <Input size="lg" label="Referral" name="referral" />
              </div>
              <Checkbox
                label={
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center font-normal text-gray-700"
                  >
                    I agree with the
                    <a
                      href="#"
                      className="font-medium transition-colors text-gray-900 hover:text-orange-400"
                    >
                      &nbsp;Terms and Conditions
                    </a>
                  </Typography>
                }
                containerProps={{ className: "-ml-2.5" }}
              />
              <Button
                onClick={() => {
                  referralCodeGenerator();
                }}
                type="submit"
                className="mt-6 bg-orange-400 text-black text-sm"
                fullWidth
              >
                Register
              </Button>
              <ToastContainer />
              <Typography color="gray" className="mt-4 text-center font-normal">
                Already have an account?{" "}
                <a
                  href="/signin"
                  className="font-medium text-gray-900 hover:text-orange-400"
                >
                  Sign In
                </a>
              </Typography>
            </form>
          </Card>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};
