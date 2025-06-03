"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.location.href = "/";
  };

  return (
    <header className="fixed top-0 left-0 w-full flex justify-center gap-4 p-4 bg-black/50 text-white z-10">
      <Link href="/">
        <button className="px-4 py-2 bg-white/10 rounded hover:bg-white/20">Home</button>
      </Link>
      <Link href="/heroes">
        <button className="px-4 py-2 bg-white/10 rounded hover:bg-white/20">Heroes</button>
      </Link>
      <Link href="/villanos">
        <button className="px-4 py-2 bg-white/10 rounded hover:bg-white/20">Villanos</button>
      </Link>
      {!user ? (
        <>
          <Link href="/login">
            <button className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">Login</button>
          </Link>
          <Link href="/register">
            <button className="px-4 py-2 bg-green-600 rounded hover:bg-green-700">Register</button>
          </Link>
        </>
      ) : (
        <>
          <span className="px-4 py-2 bg-white/10 rounded">{user.username}</span>
          <button onClick={handleLogout} className="px-4 py-2 bg-red-600 rounded hover:bg-red-700">Logout</button>
        </>
      )}
    </header>
  );
}
