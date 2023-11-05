import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaUserLarge } from "react-icons/fa6";
import { Menu, MenuHandler, MenuList, MenuItem, Button } from "@material-tailwind/react";

const Navbar = () => {
  const user = useSelector((state) => state.user.value);
  const id = user.id;
  console.log(user);
  const checkUser = () => {
    if (user) {
      // console.log(user);
      return true;
    } else {
      // console.log(user);
      return false;
    }
  };
  useEffect(() => {
    checkUser();
  });
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("id");
    navigate("/");
    window.location.reload();
  };
  return (
    <nav className="bg-primary-500 pb-4 px-4 pt-4 flex justify-between items-center sticky">
      <div className="flex">
        <Link to={"/"}>
          <h1 className="text-orange-400 font-bold text-left text-4xl italic mr-8 font-roboto">
            Karcis
          </h1>
        </Link>
        <label className="relative block ml-8">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 fill-none"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </span>
          <input
            placeholder="Search events"
            type="text"
            className="rounded-full w-[27rem] px-8 py-2 shadow-lg"
          />
        </label>
      </div>
      <div className="flex gap-x-10 md:gap-x-4">
        <Link to="/create-event">
          <button className="flex gap-x-1 text-base items-center text-blue-gray-900">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className="w-6 h-6 fill-none stroke-blue-gray-900"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                />
              </svg>
            </span>
            Create Events
          </button>
        </Link>
        <Link to="/">
          <button className="flex gap-x-1 text-base items-center text-blue-gray-900">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 fill-blue-gray-900"
                viewBox="0 0 512 512"
              >
                <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm306.7 69.1L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
              </svg>
            </span>
            Find Events
          </button>
        </Link>
      </div>
      <div className="flex gap-x-6 mr-8">
        {!id ? (
          <div>
            <Link to="/signin">
              <button
                className={
                  "inline border py-2 px-4 rounded-full border-brown-200 text-blue-gray-900"
                }
              >
                Sign In
              </button>
            </Link>
            <Link to="/signup">
              <button
                className={
                  " border bg-brown-100 rounded-full py-2 px-4 border-brown-200 text-blue-gray-900"
                }
              >
                Sign Up
              </button>
            </Link>
          </div>
        ) : ( 
          // <Link to={"/discovery"}>
            <Menu>
              <MenuHandler>
                <Button
                // onClick={handleLogout}
                // className={
                // " border bg-brown-100 rounded-full py-2 px-4 border-brown-200 text-blue-gray-900"
                //  }
                >
                  <FaUserLarge />
                </Button>
              </MenuHandler>
              <MenuList>
                <Link to={"/profile"}>
                <MenuItem> My Profile </MenuItem>
                </Link>
                <Link to={"/"}>
                <MenuItem> Home </MenuItem>
                </Link>
                <Link to={"/"}>
                <MenuItem onClick={handleLogout}> Log Out </MenuItem>
                </Link>

              </MenuList>
            </Menu>
          // </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
