"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/assets/Logo.svg";
import User from "../../public/assets/User.svg";
import MenuIcon from "../../public/assets/Menu.svg";
import { MdClose } from "react-icons/md";

const navLinks = [
  { name: "Features", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Enterprise", href: "#" },
  { name: "Careers", href: "#" },
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
          <Link href="/">
            <Image src={Logo} alt="Logo" className="cursor-pointer" />
          </Link>

          <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
            {navLinks.map((item, index) => (
              <Link href={item.href} key={index}>
                <p className="text-[#36485C] font-medium cursor-pointer">
                  {item.name}
                </p>
              </Link>
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
                src={MenuIcon}
                alt="Menu Button"
                className="cursor-pointer"
                width={24}
                height={24}
              />
            )}
          </div>
        </div>
      </nav>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-white z-50 flex items-center justify-center transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="absolute top-5 right-5">
          <MdClose
            size={24}
            className="cursor-pointer text-[#36485C]"
            onClick={handleMenuToggle}
          />
        </div>
        <div className="flex flex-col items-center gap-6">
          {navLinks.map((item, index) => (
            <Link href={item.href} key={index} onClick={handleMenuToggle}>
              <p className="text-[#36485C] font-medium text-xl cursor-pointer hover:underline">
                {item.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
