"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../../public/assets/Logo.svg";
import User from "../../public/assets/User.svg";
import Menu from "../../public/assets/Menu.svg";
import { MdClose } from "react-icons/md";

const navLinks = [
  { name: "Features" },
  { name: "Pricing" },
  { name: "Enterprise" },
  { name: "Careers" },
];

export function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <nav
        className={`flex w-full items-center justify-between px-[20px] py-[16px] lg:px-20 transition-all duration-300 ${
          isSticky ? "fixed top-0 left-0 w-full bg-white shadow-md z-50" : ""
        }`}
      >
        <div className="flex items-center">
          <Image src={Logo} alt="Logo" />

          <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
            {navLinks.map((item, index) => (
              <p className="text-[#36485C] font-medium" key={index}>
                {item.name}
              </p>
            ))}
          </div>
        </div>

        <div className="flex gap-x-5">
          <p className="hidden lg:block font-medium text-[#36485C] pr-[56px]">
            Open an Account
          </p>

          <div className="flex items-center gap-x-2">
            <Image src={User} alt="User Profile" />
            <span className="hidden font-medium text-[#36485C] lg:block">
              Sign in
            </span>
          </div>

          <div className="lg:hidden" onClick={handleMenuToggle}>
            {isMenuOpen ? (
              <MdClose size={24} className="cursor-pointer text-[#36485C]" />
            ) : (
              <Image
                src={Menu}
                alt="Menu Button"
                className="cursor-pointer"
                width={24}
                height={24}
              />
            )}
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center justify-center">
          <div className="grid grid-cols-1 gap-4 p-8 md:grid-cols-2">
            {navLinks.map((item, index) => (
              <div
                key={index}
                className="bg-gray-200 text-center py-4 px-8 rounded-lg shadow-lg text-[#36485C] font-medium text-lg cursor-pointer"
                onClick={handleMenuToggle}
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
