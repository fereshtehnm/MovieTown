"use client";
import { useState } from "react";
import Image from "next/image";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="flex flex-row justify-between p-1 border-b-2 bg-gray-900">
      <div className="px-2">
        <Image
          src="/icon.png"
          alt="logo"
          width={50}
          height={50}
          className="object-contain"
        />
      </div>

      <nav className="hidden sm:flex justify-between items-center gap-4 px-2 font-semibold justify-self-end">
        <a href="#" className="text-white hover:text-gray-500">
          Home
        </a>
        <a href="#" className="text-white hover:text-gray-500">
          About
        </a>
        <a href="#" className="text-white hover:text-gray-500">
          Contact
        </a>
      </nav>
      <nav className="sm:hidden flex flex-col items-end gap-1 font-semibold">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="sm:hidden font-bold text-lg text-white hover:text-gray-500"
        >
          {showMenu ? (
            "Menu"
          ) : (
            <Image
            src="/menu.png"
            alt="logo"
            width={30}
            height={28}
            className="object-contain py-2"
          />
          )}
        </button>
        {showMenu && (
          <>
            <a href="#" className="text-white hover:text-gray-500">
              Home
            </a>
            <a href="#" className="text-white hover:text-gray-500">
              About
            </a>
            <a href="#" className="text-white hover:text-gray-500">
              Contact
            </a>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
