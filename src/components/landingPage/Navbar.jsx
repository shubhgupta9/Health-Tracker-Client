import React from 'react'
import logo from "../../assets/img/landingPage/medical-logo.png";
import { useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation();
  return (
    <header className="text-gray-400 bg-gray-900 body-font sticky top-0">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a href className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
        <img
        src={logo}
        alt="logo"
        className="lg:h-10 lg:pr-3 h-10 pr-4 pl-2 mt-2"
      />
        <a href="/">Health Tracker</a>
      </a>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <a href="/" className="mr-5 hover:text-white">Home</a>
        <a href="/about" className="mr-5 hover:text-white">About Us</a>
        <a href="/contact" className="mr-5 hover:text-white">Contact Us</a>
         {location.pathname === "/register" ? (
          <a href='/'>Login</a>
        ) : (
          <a href="/register" className="mr-5 hover:text-white">Register</a>
        )}
      </nav>
    </div>
  </header>
  )
}

export default Navbar