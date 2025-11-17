import React from "react";

export default function Navbar() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center mr-3">
            Test
          </div>
          <h1 className="text-2xl font-bold text-blue-800">
            <span className="text-emerald-600">RSUD</span> BOLTIM
          </h1>
        </div>

        <nav className="hidden md:flex space-x-8 ">
          <a
            href="#"
            className="text-blue-800 font-medium hover:text-blue-600 transition"
          >
            Home
          </a>
          <a
            href="#"
            className="text-blue-800 font-medium hover:text-blue-600 transition"
          >
            Antrian Online
          </a>
          <a
            href="#"
            className="text-blue-800 font-medium hover:text-blue-600 transition"
          >
            Informasi
          </a>
          <a
            href="#"
            className="text-blue-800 font-medium hover:text-blue-600 transition"
          >
            Tentang Kami
          </a>
        </nav>
      </div>
    </header>
  );
}
