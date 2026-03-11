import React from "react";
import { Link } from "react-router";

function Home() {
  return (
    <div className="space-y-10">
      <div className="bg-lime-50 border border-lime-200 rounded-xl p-8">
        <h1 className="text-4xl font-semibold text-gray-700 mb-3">Welcome to User Management App</h1>
        <p className="text-lg text-gray-600">
          This is a basic CRUD app where you can add users and view active users list.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <Link to="/add-user" className="bg-lime-500 text-white px-5 py-2 rounded-lg text-lg">
            Add New User
          </Link>
          <Link to="/users-list" className="bg-gray-700 text-white px-5 py-2 rounded-lg text-lg">
            View Users List
          </Link>
        </div>
      </div>

      <div>
        <h2 className="text-3xl text-gray-700 mb-5">What You Can Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="shadow-md rounded-lg p-5 border">
            <p className="text-2xl text-gray-700 mb-2">Create User</p>
            <p className="text-gray-600">Add user details like name, email, date of birth and mobile number.</p>
          </div>

          <div className="shadow-md rounded-lg p-5 border">
            <p className="text-2xl text-gray-700 mb-2">List Active Users</p>
            <p className="text-gray-600">See all active users in one place with clean cards.</p>
          </div>

          <div className="shadow-md rounded-lg p-5 border">
            <p className="text-2xl text-gray-700 mb-2">Soft Delete / Activate</p>
            <p className="text-gray-600">Backend supports status update so user records are not permanently removed.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;