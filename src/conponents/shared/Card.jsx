import React from "react";

const Card = ({ icon, title, value }) => {
  return (
    <div className="bg-white  text-dark p-5 rounded-lg shadow-md flex items-center space-x-8 ">
      <div className="text-2xl ">{icon}</div>
      <div>
        <div>{title}</div>
        <div>{value}</div>
      </div>
    </div>
  );
};

export default Card;
