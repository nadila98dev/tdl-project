import React from "react";
import Card from "../conponents/shared/Card";
import { FaBook, FaBox, FaUser } from "react-icons/fa";
import { FaBookBookmark } from "react-icons/fa6";

const Dashboard = () => {
  return (
    <div className="grow-2">
      <h2 className="font-bold text-xl"> Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-4 gap-4 mt-6">
        <Card icon={<FaUser />} title={"Users"} value={5} />
        <Card icon={<FaBook />} title={"Books"} value={5} />
        <Card icon={<FaBookBookmark />} title={"Rented"} value={5} />
      </div>
    </div>
  );
};

export default Dashboard;
