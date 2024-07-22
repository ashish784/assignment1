"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../../public/assets/Logo.svg";
import User from "../../public/assets/User.svg";
import Menu from "../../public/assets/Menu.svg";

const navLinks = [
    { name: "Services" },
    { name: "Pricing" },
    { name: "Cases" },
    { name: "FAQ" },
    { name: "Contacts" }
];

export function Navbar() {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100)
            {
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

    return (
        <nav className={`flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20 bg-white shadow-md ${isSticky ? 'fixed top-0 z-50' : ''}`}>
            <div className="flex items-center">
                <Image src={Logo} alt="Logo" />

                <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
                    {navLinks.map((item, index) => (
                        <p className="text-[#36485C] font-medium" key={index}>{item.name}</p>
                    ))}
                </div>
            </div>

            <div className="flex gap-x-5">
                <p className="hidden lg:block font-medium text-[#36485C] pr-[56px]">Open an account</p>
                <div className="flex items-center gap-x-2">
                    <Image src={User} alt="User Profile" />
                    <span className="hidden font-medium text-[#36485C] lg:block">Sign in </span>
                </div>
                <Image src={Menu} alt="Menu" className="lg:hidden" />
            </div>
        </nav>
    );
}
