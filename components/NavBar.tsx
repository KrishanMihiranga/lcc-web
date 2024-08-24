"use client";

import Image from "next/image";
import lccLogoBlack from "@/public/lccLogoBlack.png";
import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const handleLinkClick = (section: string) => {
    setActiveSection(section);
    setDrawerOpen(false); 
  };

  return (
    <header className="bg-white shadow fixed top-0 w-full z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4 relative">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Image src={lccLogoBlack} alt="lcc tea collectors logo" className="h-8 w-auto" />
          <div className="md:hidden">
            <button
              onClick={() => setDrawerOpen(!drawerOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-600"
            >
              {drawerOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {["Home", "About", "Rates", "Services", "Contact"].map((item, idx) => (
            <li key={idx}>
              <Link
                href={`#${item.toLowerCase()}`}
                className={`block px-4 py-2 text-gray-700 hover:text-green-600 transition duration-300 ease-in-out ${
                  activeSection === item.toLowerCase() ? "border-b-2 border-green-600" : "border-b-2 border-transparent"
                }`}
                onClick={() => handleLinkClick(item.toLowerCase())}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Side Drawer */}
        <div
          className={`fixed inset-y-0 left-0 z-40 transition-transform transform ${
            drawerOpen ? "translate-x-0" : "-translate-x-full"
          } bg-white w-64 shadow-lg md:hidden`}
        >
          <div className="flex items-center justify-between p-4 border-b">
            <Image src={lccLogoBlack} alt="lcc tea collectors logo" className="h-8 w-auto" />
            <button
              onClick={() => setDrawerOpen(false)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <ul className="flex flex-col p-4 space-y-2">
            {["Home", "About", "Rates", "Services", "Contact"].map((item, idx) => (
              <li key={idx}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className={`block px-4 py-2 text-gray-700 hover:text-green-600 ${
                    activeSection === item.toLowerCase()
                      ? "border-b-2 border-green-600"
                      : "border-b-2 border-transparent"
                  } transition duration-300 ease-in-out`}
                  onClick={() => handleLinkClick(item.toLowerCase())}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Overlay */}
        {drawerOpen && (
          <div
            className="fixed inset-0 z-30 bg-black opacity-50 md:hidden"
            onClick={() => setDrawerOpen(false)}
          />
        )}
      </nav>
    </header>
  );
};

export default NavBar;
