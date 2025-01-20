import React from "react";

const Navbar = () => {
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex bg-gray-50 dark:bg-gray-800 py-4 md:px-10 px-7 justify-between items-center">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-mallory text-white">
          E-Library
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
