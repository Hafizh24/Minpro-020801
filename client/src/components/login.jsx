import React, { useState } from "react";
import { useFormik } from "formik";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const ValidationSchema = Yup.object({
  // email: Yup.string()
  //   .required("Email is required")
  //   .email("Invalid email format"),
  password: Yup.string().min(8, "Minimum 8 characters"),
});

function validateInput(input) {
  // Check if the input contains an "@" symbol; if it does, it's likely an email address.
  if (input.includes("@")) {
    console.log("email");
  } else {
    console.log("username");
  }
}

export const LogIn = () => {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    try {
      console.log(data);
      if (data.input_data.includes("@")) {
        data.email = data.input_data;
        delete data.input_data;
        const response = await axios.get(
          `http://localhost:2000/users?email=${data.email}&password=${data.password}`
        );
        setUser(response.data[0]);
        localStorage.setItem("id", response.data[0]?.id);
        navigate("/discovery");
        window.location.reload();
      } else {
        data.username = data.input_data;
        delete data.input_data;
        const response = await axios.get(
          `http://localhost:2000/users?username=${data.username}&password=${data.password}`
        );
        setUser(response.data[0]);
        localStorage.setItem("id", response.data[0]?.id);
        navigate("/discovery");
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
      <div className=" bg-gray-200 min-h-screen flex items-center justify-center">
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
              className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
            >
              <div className="mb-4 flex flex-col gap-6">
                <Input
                  type="text"
                  size="lg"
                  label="Email or Username"
                  name="input_data"
                  value={formik.values.input_data}
                  onChange={formik.handleChange}
                  // error={formik.touched.email && Boolean(formik.errors.email)}
                />
                {/* {formik.touched.email || formik.errors.email ? (
                  <div className=" text-red-900 mt-[-20px]">
                    {formik.errors.email} */}
                {/* </div>
                ) : null} */}
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
                  <div className=" text-red-900 mt-[-20px]">
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>

              <Button
                type="submit"
                className="mt-6 bg-orange-400 text-black text-sm"
                fullWidth
              >
                Sign In
              </Button>
              <div>
                <Checkbox
                  label={
                    <Typography
                      variant="small"
                      color="gray"
                      className="flex items-center font-normal"
                    >
                      remember me
                    </Typography>
                  }
                  containerProps={{ className: "-ml-2.5" }}
                />
              </div>
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
