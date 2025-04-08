'use client'

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "../_components/protectedRoute";

const DeleteUser = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const deleteUser = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.delete(
        `http://localhost:8000/api/user/delete-user/${username}/${password}`
      );

      if (response.status === 200 || response.status === 204) {
        toast.success("User deleted successfully!", {
          position: "top-center",
          autoClose: 2000,
        });

        setTimeout(() => router.push("/"), 2000);
      } else {
        toast.error("Failed to delete user. Please try again.", {
          position: "top-center",
          autoClose: 3000,
        });
      }
    } catch (error) {
      if (error.response?.status === 404) {
        toast.error("User not found. Check your username and password.", {
          position: "top-center",
          autoClose: 3000,
        });
      } else {
        toast.error("Server error. Please try again later.", {
          position: "top-center",
          autoClose: 3000,
        });
      }
    }
  };

  return (
    <ProtectedRoute>
      <div className="flex justify-center items-center h-screen bg-gradient-to-tr from-gray-900 via-black to-gray-800 text-gray-100">
        <div className="w-96 p-6 bg-gray-800 border border-gray-700 rounded-xl shadow-xl">
          <h3 className="text-2xl font-semibold text-center mb-6 text-white">Delete User</h3>
          <form onSubmit={deleteUser}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-1">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="mb-4 text-sm flex items-center">
              <input type="checkbox" id="confirm" required className="accent-red-600" />
              <label htmlFor="confirm" className="ml-2 text-gray-400">
                Are you sure you want to delete this user?
              </label>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="w-full p-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-200"
              >
                Delete
              </button>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    </ProtectedRoute>
  );
};

export default DeleteUser;
