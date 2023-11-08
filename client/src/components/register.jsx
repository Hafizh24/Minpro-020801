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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


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
  const dataReferral = useRef();

  const notify = () =>
    toast.success("Register Success!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const handleSubmit = async (data) => {
    try {
      console.log(data, "ini data");
      await axios.post("http://localhost:2000/users", data);
      notify();
    } catch (err) {
      console.log(err);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      username: "",
      password: "",
      referral_code: "",
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
      <div className=" bg-gray-0 min-h-screen flex item-center justify-center bg-center lg:h-screen lg:bg-none pr-20 pt-20 laptop">
        <div className="flex item-center justify-center">
          <Card color="transparent" shadow={false}>
            <Typography
              variant="h4"
              color="blue-gray"
              className="hover:text-orange-400 ml-14"
            >
              Sign Up
            </Typography>
            <Typography color="gray" className="mt-1 ml-14 font-normal">
              Enter your details to register.
            </Typography>
            <form
              onSubmit={formik.handleSubmit}
              className="mt-6 mb-2 ml-14 w-80 max-w-screen-lg sm:w-96"
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
                <Input size="lg" label="Referral" name="referral_code"
                onChange={formik.handleChange}
                value={formik.values.referral_code}/>
              </div>
              <Button
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
