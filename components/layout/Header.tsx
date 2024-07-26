"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { navList } from "@/constants";


const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const pathName = usePathname()

  return (
    <header className="header__top">
      <Link href="/">
        <Image
          src="/icon.png"
          alt="logo"
          width={50}
          height={50}
          className="object-contain"
        />
      </Link>

      <nav className="header-nav__xl"> {/* Main navigation */}
      {navList.map((link) => {
          const isActive = pathName.startsWith(link.href);
          return (
              <Link
                href={link.href}
                key={link.name}
                className={isActive ? "header-active_link" : " header-inactive_link" }
              >
                {link.name}
              </Link>
          );
        })}
                
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
           navList.map((link) => {
            const isActive = pathName.startsWith(link.href);
            return (
                <Link
                  href={link.href}
                  key={link.name}
                  className={isActive ? "header-active_link" : " header-inactive_link" }
                >
                  {link.name}
                </Link>
            );
          })
        )}
      </nav>
    </header>
  );
};

export default Header;