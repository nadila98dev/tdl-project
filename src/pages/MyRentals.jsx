import React from "react";
import { toReadableDate } from "../utilities/formatter";

const MyRentals = () => {
  const rentalsList = [
    {
      id: 1,
      title: "The Secret",
      author: "James Riley",
      dateOfRent: "2025-01-19T00:00:00Z",
      dateOfReturn: null,
      status: "Rent",
    },
    {
      id: 2,
      title: "The World",
      author: "John Doe",
      dateOfRent: "2025-01-19T00:00:00Z",
      dateOfReturn: "2025-01-25T00:00:00Z",
      status: "Returned",
    },
  ];
  const dateString = "2025-01-19T00:00:00Z"; // Example ISO date string
  return (
    <div>
      <h2 className="font-bold text-xl">My Rentals</h2>
      <h5>List of book you rent</h5>
      <div className="p-5">
        <div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div className="pb-4 bg-white ">
              <label for="table-search" className="sr-only">
                Search
              </label>
              <div className="relative mt-1">
                <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="table-search"
                  className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500   "
                  placeholder="Search for items"
                ></input>
              </div>
            </div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                <tr>
                  <th scope="col" className="p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-all-search"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                      ></input>
                      <label for="checkbox-all-search" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Book ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Author
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Date of Rent
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Date of Return
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {rentalsList.map((rental) => (
                  <tr className="bg-white border-b ">
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  "
                        ></input>
                        <label
                          for="checkbox-table-search-1"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      {rental.id}
                    </th>
                    <td className="px-6 py-4">{rental.title}</td>
                    <td className="px-6 py-4">{rental.author}</td>
                    <td className="px-6 py-4">
                      {toReadableDate(rental.dateOfRent)}
                    </td>
                    <td className="px-6 py-4">
                      {!rental.dateOfRent
                        ? "-"
                        : toReadableDate(rental.dateOfReturn)}
                    </td>
                    <td className="px-6 py-4">{rental.status}</td>
                    <td className="px-6 py-4">
                      <button
                        type="button"
                        class="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 0"
                      >
                        {rental.status === "Rent" ? "Return" : "Returned"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyRentals;
