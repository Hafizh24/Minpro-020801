import React, { useState } from "react";
import { useFormik } from "formik";
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
const ValidationSchema = Yup.object({
  password: Yup.string().min(8, "Minimum 8 characters"),
});

const notify = () =>
    toast.success("Sign In success", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
export const LogIn = () => {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    try {
      console.log(data);
      if (data.input_data.includes("@")) {
        data.email = data.input_data;
        delete data.input_data;
        const response = await axios.post(
          `http://localhost:2000/users/login`, data
        ); notify()
        setUser(response.data[0]);
        localStorage.setItem("token", response.data?.token);
        navigate("/discovery");
        window.location.reload();
      } else {
        data.username = data.input_data;
        delete data.input_data;
        const response = await axios.post(
          `http://localhost:2000/users/login`,
          data,
        );
        setUser(response.data[0]);
        localStorage.setItem("token", response.data?.token);
        navigate("/");
        window.location.reload();
      }
      // console.log(response.data[0]);
    } catch (err) {
      console.log(err);
    }
  };
  const formik = useFormik({
    initialValues: {
      input_data: "",
      password: "",
    },
    validationSchema: ValidationSchema,
    onSubmit: (values, action) => {
      console.log(values);
      handleSubmit(values);
      action.resetForm();
    },
  });
  return (
    <>
      <div className=" flex min-h-screen items-center justify-center bg-gray-200">
        <div className="flex">
          <Card color="transparent" shadow={false}>
            <Typography
              variant="h4"
              color="blue-gray"
              className="hover:text-orange-400"
            >
              Sign In
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Enter your Karcis account
            </Typography>
            <form
              onSubmit={formik.handleSubmit}
              className="mt-4 mb-2 w-80 max-w-screen-lg sm:w-96"
            >
              <div className="mb-4 flex flex-col gap-6">
                <Input
                  type="text"
                  size="lg"
                  label="Email or Username"
                  name="input_data"
                  value={formik.values.input_data}
                  onChange={formik.handleChange}
                />
                <Input
                  type="password"
                  size="lg"
                  label="Password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                />
                {formik.touched.password || formik.errors.password ? (
                  <div className=" mt-[-20px] text-red-900">
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>

              <Button
                type="submit"
                className="mt-6 bg-orange-400 text-sm text-black"
                fullWidth
              >
                Sign In
              </Button>
              <ToastContainer />
              <Typography color="gray" className="mt-4 text-center font-normal">
                Don't have an account?{" "}
                <a
                  href="/signup"
                  className="font-medium text-gray-900 hover:text-orange-400"
                >
                  Sign Up
                </a>
              </Typography>
            </form>
          </Card>
        </div>
      </div>
    </>
  );
};
