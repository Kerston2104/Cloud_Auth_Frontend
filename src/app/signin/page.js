'use client'

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const eventhandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/user/", {
        username,
        password,
      });

      const user = response.data.user;

      if (user) {
        localStorage.setItem("username", user.username);
        localStorage.setItem("isLoggedIn", "true");
        toast.success(response.data.message, {
          position: "top-center",
          autoClose: 2000,
        });
        setTimeout(() => router.push("/dashboard"), 2000);
      } else {
        toast.error("Login failed!", {
          position: "top-center",
          autoClose: 3000,
        });
      }
    } catch (error) {
      toast.error(
        error.response?.data?.error || "Server error. Try again later.",
        {
          position: "top-center",
          autoClose: 3000,
        }
      );
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-tr from-amber-900 via-black to-amber-800 text-amber-100 font-sans flex items-center justify-center px-4">
      <div className="backdrop-blur-md bg-black/50 border border-amber-700 rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <form onSubmit={eventhandler}>
          <h2 className="text-3xl font-bold text-center mb-6 text-white">Welcome Back</h2>

          <div className="flex justify-center mb-6">
            <Image
              src="/loginimg.jpg"
              alt="Login"
              width={80}
              height={80}
              className="rounded-full border border-amber-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-amber-300 mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-amber-800 border border-amber-600 text-amber-100 placeholder-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Your username"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-amber-300 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-amber-800 border border-amber-600 text-amber-100 placeholder-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="••••••••"
              required
            />
          </div>

          <Button type="submit" className="w-full rounded-full px-6 py-3 text-lg bg-amber-600 hover:bg-amber-500 text-white shadow-md">
            Sign In
          </Button>

          <p className="mt-6 text-center text-amber-400 text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-white hover:text-red-300 font-medium">
              Sign Up
            </Link>
          </p>
        </form>

        <ToastContainer />
      </div>
    </main>
  );
};

export default SignIn;
