import { Fragment, useEffect, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useFormik } from "formik";

const people = [
  "Wade Cooper",
  "Arlene Mccoy",
  "Devon Webb",
  "Tom Cook",
  "Tanya Fox",
  "Hellen Schmidt",
  "sasa",
  "sadada",
  "adaddadad",
  "edidiwdiwdw",
  "pwowwq",
  "dwdwwdwa",
  "adadqdq",
  "oepwplw,md",
];

const Test = () => {
  const [selected, setSelected] = useState(people[0]);
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) => {
          return person.toLowerCase().includes(query.toLowerCase());
        });

  const formik = useFormik({
    initialValues: {},
    onSubmit: (values, action) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleChange = (e) => {
    setQuery(e.target.value);
    formik.setFieldValue("people", selected);
  };

  useEffect(() => {
    console.log({ formik });
  });

  return (
    <>
      <div className="fixed left-16 top-16 w-72">
        <Combobox value={selected} onChange={setSelected}>
          <div className="relative mt-1">
            <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
              <Combobox.Input
                className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                // onChange={(event) => setQuery(event.target.value)}
                onChange={handleChange}
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
              <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                {filteredPeople.length === 0 && query !== "" ? (
                  <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                    Nothing found.
                  </div>
                ) : (
                  filteredPeople.map((person) => (
                    <Combobox.Option
                      key={person}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? "bg-teal-600 text-white" : "text-gray-900"
                        }`
                      }
                      value={person}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {person}
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

export default Test;

// import React, { useEffect, useState } from 'react';

// const UserFilter = () => {
//   const [users, setUsers] = useState([]);
//   const [filteredUsers, setFilteredUsers] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     // Fetch user data from the API
//     const fetchData = async () => {
//       try {
//         const res = await fetch('https://randomuser.me/api?results=50');
//         const { results } = await res.json();
//         setUsers(results);
//         setFilteredUsers(results);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleSearch = (e) => {
//     const searchTerm = e.target.value.toLowerCase();
//     setSearchTerm(searchTerm);
//     const filteredUsers = users.filter((user) => {
//       const fullName = `${user.name.first} ${user.name.last}`.toLowerCase();
//       const location = user.location.city.toLowerCase();
//       return fullName.includes(searchTerm) || location.includes(searchTerm);
//     });
//     setFilteredUsers(filteredUsers);
//   };

//   return (
//     <div className="container mx-auto bg-white shadow-lg rounded-lg overflow-hidden w-96">
//       <div className="bg-primary text-white p-5">
//         <h4 className="text-2xl font-bold">Live User Filter</h4>
//         <small className="opacity-75">Search by name and/or location</small>
//         <input
//           type="text"
//           id="filter"
//           className="bg-black bg-opacity-30 text-white rounded-full px-4 py-2 mt-4 w-full"
//           placeholder="Search"
//           onChange={handleSearch}
//           value={searchTerm}
//         />
//       </div>
//       <ul className="user-list max-h-96 overflow-y-auto">
//         {filteredUsers.length > 0 ? (
//           filteredUsers.map((user, index) => (
//             <li key={index} className="flex items-center justify-between border-b border-gray-300 p-4">
//               <div className="flex items-center">
//                 <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} className="w-12 h-12 rounded-full object-cover" />
//                 <div className="user-info ml-4">
//                   <h4 className="text-lg font-semibold">
//                     {`${user.name.first} ${user.name.last}`}
//                   </h4>
//                   <p className="text-sm">
//                     {`${user.location.city}, ${user.location.country}`}
//                   </p>
//                 </div>
//               </div>
//             </li>
//           ))
//         ) : (
//           <li className="p-4 text-center">No matching users found</li>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default UserFilter;
