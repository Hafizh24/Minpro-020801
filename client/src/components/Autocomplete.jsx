import { Fragment, useEffect, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useFormik } from "formik";
import { useSelector } from "react-redux";

const Autocomplete = ({ selected, setSelected }) => {
  const data = useSelector((state) => state.event.city);

  const [query, setQuery] = useState("");

  // console.log(selected);

  const filteredCities =
    query === ""
      ? data
      : data.filter((city) => {
          return city.toLowerCase().includes(query.toLowerCase());
        });

  const formik = useFormik({
    initialValues: {
      city: selected,
    },
    onSubmit: async (values, action) => {
      console.log(values);
      alert(JSON.stringify(selected, null, 2));
    },
  });
  return (
    <>
      <div className="">
        {/* <label htmlFor="">City</label> */}
        <Combobox name="city" value={selected} onChange={setSelected}>
          <div className="relative mt-1">
            <div className="relative w-full cursor-default overflow-hidden rounded-lg border-none text-left shadow-none">
              <Combobox.Input
                required={true}
                placeholder="city"
                name="city"
                className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 placeholder:text-base placeholder:tracking-wide"
                onChange={(e) => setQuery(e.target.value)}
              />
              <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Combobox.Button>
            </div>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterLeave={() => setQuery("")}
            >
              <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg sm:text-sm">
                {filteredCities.length === 0 && query !== "" ? (
                  <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                    Nothing found.
                  </div>
                ) : (
                  filteredCities.map((city) => (
                    <Combobox.Option
                      key={city}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? "bg-teal-600 text-white" : "text-gray-900"
                        }`
                      }
                      value={city}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {city}
                          </span>
                          {selected ? (
                            <span
                              className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                active ? "text-white" : "text-teal-600"
                              }`}
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            </Transition>
          </div>
        </Combobox>
      </div>
    </>
  );
};

export default Autocomplete;
