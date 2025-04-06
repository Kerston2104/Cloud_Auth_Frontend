'use client'

import React, { useEffect, useState } from "react";
import Sidebar from "../_components/Sidebar"; // Adjust the import path according to your file structure
import ProtectedRoute from "../_components/protectedRoute";

const Dashboard = () => {
  const [userCount, setUserCount] = useState(0);
  const [isOpen, setIsOpen] = useState(true);  // State to toggle sidebar visibility

  useEffect(() => {
    fetch("http://localhost:8000/api/user")
      .then((response) => response.json())
      .then((data) => setUserCount(data["Users List"]?.length))  // Count users
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <ProtectedRoute>
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar Component */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      
      {/* Main Content */}
      <div className={`transition-all duration-300 flex-1 p-10 ${isOpen ? 'ml-64' : 'ml-20'}`}>
        <h2 className="text-3xl font-semibold mb-6">Welcome to Dashboard</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card for Total Users */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-medium mb-2">Total Users</h3>
            <p className="text-3xl font-semibold">{userCount}</p>
          </div>

          {/* Card for Revenue */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-medium mb-2">Revenue</h3>
            <p className="text-3xl font-semibold">$25,000</p>
          </div>

          {/* Card for Active Sessions */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-medium mb-2">Active Sessions</h3>
            <p className="text-3xl font-semibold">500</p>
          </div>
        </div>
      </div>
    </div>
    </ProtectedRoute>
  );
};

export default Dashboard;
