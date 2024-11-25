import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./../assets/logo.avif";
import { BsPerson } from "react-icons/bs";
import { IoBagOutline } from "react-icons/io5";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Reusable Navlink Item Component
  const NavlinkItem = ({ to, label }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `uppercase py-[8px] px-5 text-sm rounded-[4px]  font-semibold ${
          isActive ? "bg-primary text-white" : "text-black hover:bg-gray-100"
        }`
      }
    >
      {label}
    </NavLink>
  );

  return (
    <div className="container mx-auto px-4">
      <nav className="grid grid-cols-3 items-center py-5">
        {/* Left: NavLinks */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-14 left-0 w-full bg-white transition-all duration-300 md:static md:flex md:gap-6`}
        >
          <div className="flex flex-col gap-3 py-4 md:flex-row md:py-0">
            <NavlinkItem to={"/"} label={"Shop"} />
            <NavlinkItem to={"/about"} label={"About"} />
            <NavlinkItem to={"/reviews"} label={"Reviews"} />
            <NavlinkItem to={"/blogs"} label={"Blog"} />
          </div>
        </div>

        {/* Center: Logo */}
        <div className="flex justify-center">
          <img className="h-8" src={Logo} alt="Logo" />
        </div>

        {/* Right: Icons */}
        <div className="hidden md:flex justify-end items-center gap-5 text-2xl text-black">
          <BsPerson />
          <IoBagOutline />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="text-2xl md:hidden absolute right-4"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </nav>
    </div>
  );
}

export default Navbar;