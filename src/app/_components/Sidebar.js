'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import { HiOutlineHome, HiOutlineUser, HiOutlineCog, HiPencilAlt, HiTrash } from 'react-icons/hi';
import { IoMdLogOut } from 'react-icons/io';
import Link from 'next/link';
import { Delete, PenBoxIcon, SidebarClose, SidebarOpen, SidebarOpenIcon } from 'lucide-react';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const router = useRouter();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    router.push('/');
  };

  return (
    <div className={`fixed top-0 left-0 h-full z-10 transition-all ease-in-out duration-300 bg-amber-400/20 ${isOpen ? 'w-64' : 'w-20'} p-5`}>
      <button className="text-white text-3xl mb-5" onClick={toggleSidebar}>
        {isOpen ? <SidebarClose className='cursor-pointer'/> : <SidebarOpenIcon className='cursor-pointer'/>}
      </button>

      <div className="space-y-5">
        <Link href="/dashboard" className="text-white flex items-center space-x-2">
          <HiOutlineHome className="text-xl" />
          {isOpen && <span className="text-lg cursor-pointer">Home</span>}
        </Link>
        <Link href="/create" className="text-white flex items-center space-x-2">
          <HiPencilAlt className="text-sm" />
          {isOpen && <span className="text-lg cursor-pointer">Create New</span>}
        </Link>
        <Link href="/delete-blogs" className="text-white flex items-center space-x-2">
          <HiTrash className="text-xl" />
          {isOpen && <span className="text-lg cursor-pointer">Delete All</span>}
        </Link>
        <Link href="/settings" className="text-white flex items-center space-x-2">
          <HiOutlineCog className="text-xl" />
          {isOpen && <span className="text-lg cursor-pointer">Settings</span>}
        </Link>
        <button onClick={handleLogout} className="text-white flex items-center space-x-2">
          <IoMdLogOut className="text-xl" />
          {isOpen && <span className="text-lg cursor-pointer">Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
