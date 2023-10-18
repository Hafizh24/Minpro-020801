import React from "react";

const Category = ({ setCategory }) => {
  const handleClick = (data) => {
    // console.log(data);
    setCategory(data);
  };
  return (
    <>
      <section className="mt-32">
        <div className="flex justify-center gap-x-4">
          <button
            onClick={() => handleClick("Bandung")}
            className=" border px-6 py-2  rounded-3xl border-blue-gray-100 shadow font-roboto text-sm">
            Bandung
          </button>
          <button
            onClick={() => handleClick("Jakarta")}
            className=" border px-6 py-2  rounded-3xl border-blue-gray-100 shadow font-roboto text-sm">
            Jakarta
          </button>
          <button
            onClick={() => handleClick("Bali")}
            className=" border px-6 py-2  rounded-3xl border-blue-gray-100 shadow font-roboto text-sm">
            Bali
          </button>
        </div>
      </section>
    </>
  );
};

export default Category;
