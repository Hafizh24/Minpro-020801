import { Input } from "@material-tailwind/react";
import axios from "axios";
import { useFormik } from "formik";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Sidebar2 } from "./Sidebar2";

export const ProfileInfo = () => {
  const user = useSelector((state) => state.user.value);
  console.log(user);

  const token = localStorage.getItem("token");
  const handleSubmit = async (data) => {
    try {
      console.log(data, "ini data");
      await axios.patch("http://localhost:2000/users/user-edit", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      window.location.reload();
      // notify();
    } catch (err) {
      console.log(err);
    }
  };
  const deleteAccount = async () => {
    try {
      await axios.delete("http://localhost:2000/users/delete-account", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      localStorage.removeItem("token");
      window.location.reload();
    } catch (err) {}
  };
  // const handleChange =
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      username: "",
      password: "",
    },
    // validationSchema: RegisterSchema,
    onSubmit: (values, action) => {
      console.log(values, "ini values");
      handleSubmit(values);
      action.resetForm();
    },
  });

  return (
    <>
      <div>
        <a href="/">
          <h1 className="text-orange-400 ml-6 mt-6 font-bold text-left text-4xl italic mr-8 font-roboto">
            Karcis
          </h1>
        </a>
      </div>
      <div className="flex flex-cols-2">
        <div className="">
          <Sidebar2 />
        </div>
        <div className="flex justify-between px-10 pt-10 mx-1 ">
        <img
                className="w-40 h-40 rounded-full object-cover object-center"
                src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                alt="nature image"
              />
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className=" flex flex-col ml-1 space-y-6 mt-[14%] max-w-sm sm:w-96">
            <Input
              variant="static"
              type="text"
              label="Name"
              name="name"
              placeholder={user.name}
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            <Input
              variant="static"
              type="email"
              name="email"
              label="Email"
              placeholder={user.email}
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <Input
              variant="static"
              type="text"
              name="username"
              label="Username"
              placeholder={user.username}
              onChange={formik.handleChange}
              value={formik.values.username}
            />
            <Input
              variant="static"
              type="password"
              name="password"
              label="Password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <div className="bg-orange-400 rounded-md cursor-pointer py-2 flex justify-center">
              <button type="submit">Update Data</button>
            </div>
            <div className="bg-orange-400 rounded-md cursor-pointer py-2 flex justify-center">
              <button onClick={deleteAccount}> Delete Account </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
