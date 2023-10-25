import React from "react";

const Tabs = ({ location, setLocation }) => {
  const handleClick = (data) => {
    setLocation(data);
  };
  return (
    <>
      <section className="mt-32">
        <div className="flex justify-center gap-x-4">
          <button
            onClick={() => handleClick("Bandung")}
            className={`border px-6 py-2  rounded-3xl border-blue-gray-100 shadow font-roboto text-sm hover:bg-primary-500 ${
              location === "Bandung" ? "bg-primary-500" : ""
            }`}>
            Bandung
          </button>
          <button
            onClick={() => handleClick("Jakarta")}
            className={`border px-6 py-2  rounded-3xl border-blue-gray-100 shadow font-roboto text-sm hover:bg-primary-500 ${
              location === "Jakarta" ? "bg-primary-500" : ""
            }`}>
            Jakarta
          </button>
          <button
            onClick={() => handleClick("Bali")}
            className={`border px-6 py-2  rounded-3xl border-blue-gray-100 shadow font-roboto text-sm hover:bg-primary-500 ${
              location === "Bali" ? "bg-primary-500" : ""
            }`}>
            Bali
          </button>
        </div>
      </section>
    </>
  );
};

export default Tabs;
