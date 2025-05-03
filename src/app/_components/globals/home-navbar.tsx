"use client"
import React, { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";

const HomeNavbar = () => {
  const [open, setOpen] = useState(false);
  const items = ["Home", "Features", "Github", "Login"];

  return (
    <nav className="max-w-5xl w-full mx-auto px-4 py-4">
      <div className="flex items-center justify-between md:justify-center mx-auto">
        <button
          className="md:hidden text-secondary/50"
          onClick={() => setOpen(!open)}
        >
          {open ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>

        <div className="hidden md:flex items-center gap-x-10 font-medium text-secondary/50 border border-neutral-700 bg-neutral-900/50 px-6 py-2 rounded-full shadow-sm">
          {items.map((item) => (
            <span
              key={item}
              className="hover:text-secondary/75 cursor-pointer transition-colors duration-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-y-3 text-secondary/50">
          {items.map((item) => (
            <span
              key={item}
              className="hover:text-secondary/75 border-b border-neutral-700 pb-2 cursor-pointer"
            >
              {item}
            </span>
          ))}
        </div>
      )}
    </nav>
  );
};

export default HomeNavbar;
