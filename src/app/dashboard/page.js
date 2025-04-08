'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Sidebar from '../_components/Sidebar';
import ProtectedRoute from '../_components/protectedRoute';

export default function DashboardPage() {
  const [blogs, setBlogs] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8000/api/blogs/')
      .then(res => res.json())
      .then(data => setBlogs(data.blogs));
  }, []);

  return (
    <ProtectedRoute>
      <div className="flex min-h-screen bg-gradient-to-tr from-amber-900 via-black to-amber-800 text-amber-100">
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        <div className={`transition-all duration-300 p-6 w-full ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
          <h1 className="text-4xl font-bold text-white mb-8">Other's and Recent News</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map(blog => (
              <div
                key={blog.id}
                className="bg-amber-800 border border-amber-700 rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 cursor-pointer"
              >
                <h2 className="text-xl font-semibold text-indigo-400 mb-2">{blog.title}</h2>
                <p className="text-amber-300 text-sm line-clamp-4">{blog.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
