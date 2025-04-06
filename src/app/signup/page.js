'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = {
            username: username,
            email: email,
            password: password,
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
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-500">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <form onSubmit={handleSubmit}>
                    <h3 className="text-2xl font-semibold text-center mb-6">Sign Up</h3>
                    <div className="flex justify-center mb-4">
                        <Image
                            src="/signup.jpg" // Place your image inside the public folder
                            alt="sign up img"
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
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-lg font-medium">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                            Sign Up
                        </button>
                    </div>
                    <p className="text-center text-gray-600">
                        Already have an account?{' '}
                        <Link href="/signin" className="text-blue-500 hover:text-blue-700">
                            Sign In
                        </Link>
                    </p>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SignUp;
