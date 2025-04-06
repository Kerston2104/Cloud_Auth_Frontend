'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const ProtectedRoute = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");

    if (loggedInStatus) {
      setIsLoggedIn(true);
    } else {
      toast.error("Restricted access. Please sign in first.", {
        position: "top-center",
        autoClose: 2000,
      });

      // Delay navigation to allow toast to show
      setTimeout(() => {
        router.push("/");
      }, 1000); // Delay for 1 second
    }
  }, [router]);

  return isLoggedIn ? children : null;
};

export default ProtectedRoute;
