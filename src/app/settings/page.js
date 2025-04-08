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
    router.push("/deleteuser");
  };

  return (
    <ProtectedRoute>
      <div className="flex h-screen bg-gradient-to-tr from-amber-900 via-black to-amber-800 text-amber-100 transition-colors">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

        <div className={`transition-all duration-300 flex-1 flex items-center justify-center ${isOpen ? 'ml-64' : 'ml-20'}`}>
          <div className="w-96 p-6 bg-amber-800 border border-amber-700 rounded-xl shadow-xl">
            <h3 className="text-2xl font-semibold text-center text-white mb-6">Settings</h3>

            <button
              onClick={navigateToDeleteUser}
              className="w-full p-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition duration-200"
            >
              Delete User Account
            </button>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Settings;
