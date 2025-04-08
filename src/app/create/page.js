'use client';

import { useState } from 'react';
import axios from 'axios';
import Sidebar from '../_components/Sidebar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';

export default function CreateBlog() {
  const [formData, setFormData] = useState({ username: '', title: '', content: '' });
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const router = useRouter();

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://127.0.0.1:8000/api/blogs/', formData);
      toast.success(res.data.message || 'Blog created successfully!');
      setTimeout(() => {
        router.push('/dashboard');
      }, 1500); // Wait for toast to show
    } catch (err) {
      toast.error(err.response?.data?.error || 'Error creating blog');
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-tr from-amber-900 via-black to-amber-800 text-white">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <div className={`transition-all duration-300 p-6 w-full ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
        <ToastContainer />

        <h1 className="text-3xl font-bold mb-6 text-white">Create Blog</h1>
        <form onSubmit={handleSubmit} className="space-y-6 max-w-xl bg-amber-800/60 p-6 rounded-2xl shadow-lg backdrop-blur-md border border-amber-700">
          <input
            name="username"
            placeholder="Username"
            onChange={handleChange}
            className="bg-amber-900 text-white border border-amber-700 px-4 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            name="title"
            placeholder="Title"
            onChange={handleChange}
            className="bg-amber-900 text-white border border-amber-700 px-4 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <textarea
            name="content"
            placeholder="Content"
            onChange={handleChange}
            className="bg-amber-900 text-white border border-amber-700 px-4 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-red-500"
            rows={5}
          />
          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-2 rounded-xl hover:bg-red-700 transition-all duration-200"
          >
            Create Blog
          </button>
        </form>
      </div>
    </div>
  );
}
