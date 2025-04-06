// pages/delete-user.js
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

        // Redirect to a success page after the success toast
        setTimeout(() => router.push("/"), 2000);
      } else {
        toast.error("Failed to delete user. Please try again.", {
          position: "top-center",
          autoClose: 3000,
        });
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
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
    <div className="flex justify-center items-center h-screen bg-gray-800">
      <div className="w-96 p-6 bg-white rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-center mb-4">Delete User</h3>
        <form onSubmit={deleteUser}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="mb-4 text-center">
            <input type="checkbox" required />
            <label className="text-sm ml-2 text-gray-700">Are you sure you want to delete this user?</label>
          </div>

          <div className="text-center">
            <button type="submit" className="w-full p-3 bg-red-600 text-white rounded-md hover:bg-red-700">
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
