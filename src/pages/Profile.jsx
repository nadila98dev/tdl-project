import React, { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    studentId: "123456",
    email: "user@example.com",
    firstName: "John",
    lastName: "Doe",
    phoneNumber: "123-456-7890",
    role: "User",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div>
      <h2 className="font-bold text-xl">Profile</h2>
      {isEditing ? <h5>Edit Profile</h5> : <h5>View Profile</h5>}
      <div className="p-5">
        <div className="bg-white rounded-lg shadow-md p-5 w-full">
          <div className="mb-4">
            <label className="block text-gray-700">Student ID</label>
            {isEditing ? (
              <input
                type="text"
                name="studentId"
                value={profile.studentId}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            ) : (
              <div className="p-2 border border-gray-300 rounded mt-1 bg-gray-100">
                {profile.studentId}
              </div>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            ) : (
              <div className="p-2 border border-gray-300 rounded mt-1 bg-gray-100">
                {profile.email}
              </div>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">First Name</label>
            {isEditing ? (
              <input
                type="text"
                name="firstName"
                value={profile.firstName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            ) : (
              <div className="p-2 border border-gray-300 rounded mt-1 bg-gray-100">
                {profile.firstName}
              </div>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Last Name</label>
            {isEditing ? (
              <input
                type="text"
                name="lastName"
                value={profile.lastName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            ) : (
              <div className="p-2 border border-gray-300 rounded mt-1 bg-gray-100">
                {profile.lastName}
              </div>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone Number</label>
            {isEditing ? (
              <input
                type="text"
                name="phoneNumber"
                value={profile.phoneNumber}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            ) : (
              <div className="p-2 border border-gray-300 rounded mt-1 bg-gray-100">
                {profile.phoneNumber}
              </div>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Role</label>
            <div className="p-2 border border-gray-300 rounded mt-1 bg-gray-100">
              {profile.role}
            </div>
          </div>
          <button
            onClick={toggleEdit}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            {isEditing ? "Save Profile" : "Edit Profile"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
