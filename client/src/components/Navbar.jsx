import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-primary-500 pb-4 px-4 pt-4 flex justify-between items-center">
      <div className="flex">
        <h1 className="text-orange-400 font-bold text-left text-2xl italic mr-8 font-roboto">
          Karcis
        </h1>
        <label className="relative block">
          <span className=" absolute inset-y-0 left-0 flex items-center pl-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 fill-none">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </span>
          <input
            placeholder="Search events"
            type="text"
            className=" rounded-full w-60 px-8 py-2 shadow-sm"
          />
        </label>
      </div>
      <div className="flex gap-x-6">
        <button>Sign In</button>
        <button>Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
