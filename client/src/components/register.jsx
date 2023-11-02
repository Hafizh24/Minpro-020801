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
  name: Yup.string().required("Name is required"),
  email: Yup.string().required("Email is required").email("Invalid email format"),
  password: Yup.string().min(8, "Minimum 8 characters")
});

  export const Register = () => {
    const handleSubmit = async (data) => {
      try {
        await axios.post("http://localhost:2000/users", data);
        
      } catch (err) {
        console.log(err);
      }
      console.log(data);
    };
    

    return (
      <>
      <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={RegisterSchema}
          onSubmit={(values, action) => {
            // console.log(values);
            handleSubmit(values);
            action.resetForm();
          }}
         
    >
      
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to register.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            {/* <Input size="lg" label="Name" /> */}
            <label htmlFor="name" className="block">Name</label>
                  <Field
                    name="name"
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                    autoComplete="off"
                  />
            {/* <Input size="lg" label="Email" /> */}
            <label htmlFor="email" className="block">Email</label>
                  <Field
                    name="email"
                    type="email"
                    className="w-full p-2 border border-gray-300 rounded"
                    autoComplete="off"
                  />
            {/* <Input type="password" size="lg" label="Password" /> */}
            <label htmlFor="password" className="block">Password</label>
                  <Field
                    name="password"
                    type="password"
                    className="w-full p-2 border border-gray-300 rounded"
                    autoComplete="off"
                  />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree with the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button type="submit" className="mt-6" fullWidth>
            Register
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <a href="#" className="font-medium hover:text-gray-900">
            Sign In
            </a>
          </Typography>
        </form>
      </Card>
      </Formik>
      </>
    );
  }