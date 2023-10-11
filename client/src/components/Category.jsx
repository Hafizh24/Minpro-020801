import React from "react";

const Category = () => {
  return (
    <>
      <section className="mt-32">
        <div className="flex justify-center gap-x-4">
          <button className=" border px-6 py-2  rounded-3xl border-blue-gray-100 shadow font-roboto text-sm">
            Category 1
          </button>
          <button className=" border px-6 py-2  rounded-3xl border-blue-gray-100 shadow font-roboto text-sm">
            Category 2
          </button>
          <button className=" border px-6 py-2  rounded-3xl border-blue-gray-100 shadow font-roboto text-sm">
            Category 3
          </button>
          <button className=" border px-6 py-2  rounded-3xl border-blue-gray-100 shadow font-roboto text-sm">
            Category 4
          </button>
        </div>
      </section>
    </>
  );
};

export default Category;
