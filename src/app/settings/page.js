// pages/settings.js
'use client'
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "../_components/Sidebar";
import ProtectedRoute from "../_components/protectedRoute";


const Settings = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(true); 

  const navigateToDeleteUser = () => {
    // Navigate to the Delete User page
    router.push("/deleteuser");
  };

  return (
    <ProtectedRoute>
    <div className="flex justify-center items-center h-screen ">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
      <div className="w-96 p-6 bg-yellow-200 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-center mb-4">Settings</h3>
        
        {/* Button to navigate to Delete User page */}
        <button
          onClick={navigateToDeleteUser}
          className="w-full p-3 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none"
        >
          Delete User Account
        </button>
      </div>
    </div>
    </ProtectedRoute>
  );
};

export default Settings;
