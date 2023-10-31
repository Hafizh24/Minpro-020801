import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
import { Formik, form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const RegisterSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Invalid email format"),
  password: Yup.string().min(8, "Minimum 8 characters")
});

const handleSubmit = async (data) => {
    try {
      await axios.post("http://localhost:2000/users", data);
    } catch (err) {
      console.log(err);
    }
  };

   
  export const LogIn = () => {
    return (
      <>
      <div className="flex justify-end items-end p-32"> 
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign In
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your Karcis account
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 lg:mt-10">
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Enter your email here dumbass" />
            <Input type="password" size="lg" label="Password" />
          </div>
         
          <Button className="mt-6" fullWidth>
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
            Don't have an account? {" "}
            <a href="/signup" className="font-medium hover:text-gray-900">
              Sign Up
            </a>
          </Typography>
        </form>
      </Card>
      </div>
      </>
    );
  }