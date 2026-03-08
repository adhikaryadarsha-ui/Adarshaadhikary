import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { GoDownload } from "react-icons/go";
import resume from "../assets/images/Adarsha_Adhikary_Resume - Front-End-Developer.pdf";

const Header = () => {
     const [menu, setMenu] = useState(false);
  return (
    <div>
      <header className=" text-gray-950 shadow-md">
        <div className="md:max-w-full mx-auto px-0 py-0 flex justify-between items-center bg-gray-50">
          {/* Logo */}
          <div className="bg-orange-700 text-white px-10 md:px-16 py-4 font-semibold md:text-2xl clip-path-logo">
            Adarsha Adhikary
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex md:align-middle space-x-8 text-lg pe-16">
            <Link to="/" className="hover:text-indigo-400 transition">
              Home
            </Link>
            <Link to="/about" className="hover:text-indigo-400 transition">
              About
            </Link>
            <Link to="/project" className="hover:text-indigo-400 transition">
              Projects
            </Link>
            <Link to="/contact" className="hover:text-indigo-400 transition">
              Contact
            </Link>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="border rounded-full flex items-center text-sm ms-7 px-4 py-2 font-semibold border-orange-300 hover:bg-gray-300 transition duration-300 text-orange-800"
            >
              <GoDownload className="me-2 text-orange-800" />
              Download CV
            </a>
          </nav>

          {/* Mobile Button */}
          <button className="md:hidden text-2xl me-5" onClick={() => setMenu(!menu)}>
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {menu && (
          <div className="md:hidden bg-gray-800 px-10 pb-4 space-y-3">
            <Link to="/" className="block hover:text-indigo-400 text-gray-50">
              Home
            </Link>
            <Link to="/about" className="block hover:text-indigo-400 text-gray-50">
              About
            </Link>
            <Link to="/projects" className="block hover:text-indigo-400 text-gray-50">
              Projects
            </Link>
            <Link to="/contact" className="block hover:text-indigo-400 text-gray-50">
              Contact
            </Link>
          </div>
        )}
      </header>
    </div>
  );
}

export default Header