import React, { useState } from "react";
import "../../Styles/Header.css";
import { IoIosArrowDown } from "react-icons/io";
import { HiMenuAlt3 } from "react-icons/hi"; // Menu Icon

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header aria-label="Main Header">
        {/* Menu Icon for mobile */}
        <div
          className="menu-icon"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <HiMenuAlt3 />
        </div>

        {/* Sliding Header Content */}
        <nav className={`navbar ${menuOpen ? "visible" : ""}`}>
          <div
            className="logo-container"
            aria-label="Website Logo"
            role="button"
          >
            <div className="logo" alt="Company Logo">
              CB
            </div>
            <span className="logo-text">Cloudbankin</span>
          </div>
          <div className="user-profile" aria-label="User Profile" role="button">
            <div className="user-avatar">GC</div>
            <div className="user-name">Gregory Clark</div>
            <span className="user-arr">
              <IoIosArrowDown />
            </span>
          </div>
        </nav>
      </header>
    </>
  );
}
