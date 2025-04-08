'use client';
import { useState } from 'react';
import axios from 'axios';
import Sidebar from '../_components/Sidebar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function DeleteAllBlogs() {
  const [username, setUsername] = useState('');
  const [isOpen, setIsOpen] = useState(true);

  const handleDelete = async () => {
    if (!username) {
      toast.error('Please enter your username');
      return;
    }

    try {
      const res = await axios.delete('http://127.0.0.1:8000/api/blogs/delete_all/', {
        data: { username }
      });
      toast.success(res.data.message || 'All blogs deleted');
    } catch (err) {
      toast.error(err.response?.data?.error || 'Something went wrong');
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-tr from-amber-900 via-black to-amber-800 text-white">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className={`transition-all duration-300 p-6 w-full ${isOpen ? 'ml-64' : 'ml-20'}`}>
        <ToastContainer />

        <h1 className="text-3xl font-bold mb-6">Delete All Your Blogs</h1>

        <div className="max-w-xl space-y-4 bg-amber-800/60 p-6 rounded-2xl shadow-lg backdrop-blur-md border border-amber-700">
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="bg-amber-900 text-white border border-amber-700 px-4 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <button
            onClick={handleDelete}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-xl transition-all duration-200"
          >
            Delete All Blogs
          </button>
        </div>
      </div>
    </div>
  );
}
