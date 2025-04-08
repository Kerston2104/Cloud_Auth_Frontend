'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      username,
      email,
      password,
    };

    try {
      const response = await axios.post('http://localhost:8000/api/user/', userData);
      if (response.status === 200) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', userData.username);
        toast.success('Sign up successful! Redirecting...', {
          position: 'top-center',
          autoClose: 2000,
        });
        setTimeout(() => router.push('/dashboard'), 2000);
      }
    } catch (error) {
      console.error('Error signing up:', error);
      toast.error('Error signing up. Please try again.', {
        position: 'top-center',
        autoClose: 3000,
      });
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-tr from-amber-900 via-black to-amber-800 text-amber-100 font-sans flex items-center justify-center px-4">
      <div className="backdrop-blur-md bg-black/50 border border-amber-700 rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <form onSubmit={handleSubmit}>
          <h2 className="text-3xl font-bold text-center mb-6 text-white">Create an Account</h2>

          <div className="flex justify-center mb-6">
            <Image
              src="/signup.jpg"
              alt="Sign Up"
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

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-amber-300 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-amber-800 border border-amber-600 text-amber-100 placeholder-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="you@example.com"
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
            Sign Up
          </Button>

          <p className="mt-6 text-center text-amber-400 text-sm">
            Already have an account?{' '}
            <Link href="/signin" className="text-white hover:text-red-300 font-medium">
              Sign In
            </Link>
          </p>
        </form>

        <ToastContainer />
      </div>
    </main>
  );
};

export default SignUp;
