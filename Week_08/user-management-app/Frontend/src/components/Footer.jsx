import React from "react";
import { Link } from "react-router";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-100 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <p className="text-xl font-medium">User Management App</p>
          <p className="text-sm text-gray-300">Basic MERN practice project</p>
        </div>

        <div className="flex gap-5 text-sm">
          <Link to="/" className="hover:text-lime-300">
            Home
          </Link>
          <Link to="/add-user" className="hover:text-lime-300">
            Add User
          </Link>
          <Link to="/users-list" className="hover:text-lime-300">
            Users List
          </Link>
        </div>
      </div>

      <div className="border-t border-gray-700 py-3 text-center text-xs text-gray-300">
        Copyright {new Date().getFullYear()} User Management App
      </div>
    </footer>
  );
}

export default Footer;