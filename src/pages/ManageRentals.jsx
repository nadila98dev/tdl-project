import React from "react";
import { toReadableDate } from "../utilities/formatter";

const ManageRentals = () => {
  const rentals = [
    {
      bookId: "23023",
      userId: "1001",
      userName: "James Riley",
      bookTitle: "The Secret of the World",
      dateOfRent: "2025-01-19T00:00:00Z",
      dateOfReturn: "2025-01-30T00:00:00Z",
      status: "Returned",
    },
    {
      bookId: "23024",
      userId: "1002",
      userName: "Anna Smith",
      bookTitle: "Mystery of the Lost Island",
      dateOfRent: "2025-02-01T00:00:00Z",
      dateOfReturn: "2025-02-10T00:00:00Z",
      status: "Overdue",
    },
    {
      bookId: "23025",
      userId: "1003",
      userName: "John Doe",
      bookTitle: "Adventures in Wonderland",
      dateOfRent: "2025-03-05T00:00:00Z",
      dateOfReturn: "2025-03-15T00:00:00Z",
      status: "Returned",
    },
  ];

  return (
    <div>
      <h2 className="font-bold text-xl">Manage Rentals</h2>
      <h5>Manage Rentals of the users</h5>
      <div className="p-5">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <div className="pb-4 bg-white">
            <label htmlFor="table-search" className="sr-only">
              Search
            </label>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="table-search"
                className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search for items"
              />
            </div>
          </div>
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  Book ID
                </th>
                <th scope="col" className="px-6 py-3">
                  User ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Person of Rent
                </th>
                <th scope="col" className="px-6 py-3">
                  Book Title
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
              </tr>
            </thead>
            <tbody>
              {rentals.map((rental, index) => (
                <tr key={index} className="bg-white border-b hover:bg-gray-50">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id={`checkbox-table-search-${index}`}
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label
                        htmlFor={`checkbox-table-search-${index}`}
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {rental.bookId}
                  </th>
                  <td className="px-6 py-4">{rental.userId}</td>
                  <td className="px-6 py-4">{rental.userName}</td>
                  <td className="px-6 py-4">{rental.bookTitle}</td>
                  <td className="px-6 py-4">
                    {toReadableDate(rental.dateOfRent)}
                  </td>
                  <td className="px-6 py-4">
                    {toReadableDate(rental.dateOfReturn)}
                  </td>
                  <td className="px-6 py-4">{rental.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageRentals;
