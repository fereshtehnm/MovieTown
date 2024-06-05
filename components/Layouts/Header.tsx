"use client";
import { useState } from "react";
import Image from "next/image";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="header__top">
      <Image
        src="/icon.png"
        alt="logo"
        width={50}
        height={50}
        className="object-contain"
      />

      <nav className="header-nav__xl">
        <a href="#" className="header-nav__item">
          Home
        </a>
        <a href="#" className="header-nav__item">
          About
        </a>
        <a href="#" className="header-nav__item">
          Contact
        </a>
      </nav>
      {/* mobile nav */}
      <nav className="header-nav__mobile">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="header-nav__toggle"
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
            <a href="#" className="header-nav__item">
              Home
            </a>
            <a href="#" className="header-nav__item">
              About
            </a>
            <a href="#" className="header-nav__item">
              Contact
            </a>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
