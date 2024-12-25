import React from "react";
import "../../Styles/Header.css";
import { IoIosArrowDown } from "react-icons/io";

export default function Header() {
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="logo-container">
            <div className="logo">CB</div>
            <span className="logo-text">Cloudbankin</span>
          </div>
          <div className="user-profile">
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
