'use client'

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const eventhandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("http://localhost:8000/api/user");
      const users = response.data["Users List"];

      const validUser = users.find(
        (user) => user.username === username && user.password === password
      );

      if (validUser) {
        localStorage.setItem("username", validUser.username);
        localStorage.setItem("isLoggedIn", "true");
        toast.success("Login successful! Redirecting...", {
          position: "top-center",
          autoClose: 2000,
        });
        setTimeout(() => router.push("/dashboard"), 2000);
      } else {
        toast.error("Invalid username or password!", {
          position: "top-center",
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      toast.error("Server error. Try again later.", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <form onSubmit={eventhandler}>
          <h3 className="text-2xl font-semibold text-center mb-6">Sign In</h3>
          <div className="flex justify-center mb-4">
            <Image
              src="/loginimg.jpg"
              alt="login img"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-lg font-medium">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-lg font-medium">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none">
              Sign In
            </button>
          </div>
          <p className="text-center text-gray-600">
            Don't have an account?{" "}
            <Link href="/signup" className="text-blue-500 hover:text-blue-700">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignIn;
