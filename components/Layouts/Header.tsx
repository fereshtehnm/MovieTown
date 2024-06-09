"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="header__top">
      <div className="">
        <Image
          src="/icon.png"
          alt="logo"
          width={50}
          height={50}
          className="object-contain"
        />
      </div>

      <nav className="header-nav__xl"> {/* Main navigation */}
        <Link href="./" className="header-nav__item">
          Home
        </Link>
        <Link href="./about" className="header-nav__item">
          About
        </Link>
        <Link href="./contact" className="header-nav__item">
          Contact Us
        </Link>
      </nav>

      <nav className="header-nav__mobile"> {/* Mobile navigation */}
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="header-nav__toggle"
        >
          {showMenu ? (
            "Close Menu"
          ) : (
            <Image
              src="/menu.png"
              alt="menu"
              width={30}
              height={28}
              className="object-contain py-2"
            />
          )}
        </button>

        {showMenu && (
          <>
            <Link href="./" className="header-nav__item">
              Home
            </Link>
            <Link href="./about" className="header-nav__item">
              About
            </Link>
            <Link href="./contact" className="header-nav__item">
              Contact
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;