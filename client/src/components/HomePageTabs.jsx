import { useSelector } from "react-redux";

const HomePageTabs = ({ city, setCity }) => {
  const cities = useSelector((state) => state.event.city);

  const handleClick = (data) => {
    setCity(data);
  };

  return (
    <>
      <section className="mt-2">
        <div className="flex justify-center gap-x-4">
          {cities.map((value, index) => (
            <button
              key={index}
              onClick={() => {
                handleClick(value);
              }}
              className={`rounded-3xl border border-blue-gray-100  px-6 py-2 font-roboto text-sm shadow hover:bg-primary-500 ${
                city == value ? "bg-primary-500" : ""
              }`}
            >
              {value}
            </button>
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePageTabs;
