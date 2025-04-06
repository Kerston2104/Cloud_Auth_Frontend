'use client'

import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import Sidebar from "../_components/Sidebar";
import ProtectedRoute from "../_components/protectedRoute";

const Profile = () => {
  const [user, setUser] = useState(null); 
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();c
  const [isOpen, setIsOpen] = useState(true); 

  useEffect(() => {
    fetch("http://localhost:8000/api/user")
      .then((response) => response.json())
      .then((data) => {
        const currentUser = data["Users List"]?.[0]; 
        if (currentUser) {
          setUser(currentUser);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ProtectedRoute>
    <div className="flex justify-center items-center h-screen bg-gray-100">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <div className="flex justify-center mb-6">
          <img
            src="/profile.png" 
            alt="Profile Avatar"
            className="w-32 h-32 rounded-full border-4 border-gray-300"
          />
        </div>

        <h2 className="text-2xl font-semibold text-center mb-4">User Profile</h2>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">Username</h3>
            <p className="text-gray-600">{user?.username || "Not available"}</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">Email</h3>
            <p className="text-gray-600">{user?.email || "Not available"}</p>
          </div>
        </div>
      </div>
    </div>
    </ProtectedRoute>
  );
};

export default Profile;
