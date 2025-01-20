import React, { useState } from "react";
import { FaBlender, FaBook, FaBookmark, FaDashcube } from "react-icons/fa";
import {
  FaBookAtlas,
  FaPersonRifle,
  FaUser,
  FaWpexplorer,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Sidebar = () => {
  let links = [
    { icon: <FaDashcube />, name: "Dashboard", link: "/dashboard" },
    { icon: <FaBookAtlas />, name: "Manage Books", link: "/manage-books" },
    { icon: <FaBookmark />, name: "Manage Rentals", link: "/manage-rentals" },
    { icon: <FaUser />, name: "Manage Users", link: "/manage-users" },
    { icon: <FaWpexplorer />, name: "Browse Books", link: "/browse-books" },
    { icon: <FaBlender />, name: "My Rentals", link: "/my-rentals" },
    { icon: <FaPersonRifle />, name: "Profile", link: "/profile" },
    { name: "Log Out", link: "/" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <aside
      className={`bg-gray-50 dark:bg-gray-800 transition-transform duration-300 ${
        open ? "w-64" : "w-16"
      }`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      style={{ marginTop: "1rem" }}
    >
      <div className="h-full px-1 py-4 overflow-y-auto">
        <ul className="space-y-2 font-medium">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                to={link.link}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="mr-6">{link.icon}</span>

                <span className="ml-16">{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
