import React, { useEffect, useState, useRef } from "react";
import { navItems } from "../constants/navItems";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown, Menu } from "lucide-react";
import { useMediaQuery } from "react-responsive";
import Dashbtn from "./Dashbtn";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);

  // Smooth scroll listener with debounce
  useEffect(() => {
    let scrollTimeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolled(window.scrollY > 50);
      }, 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(scrollTimeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close menu on outside click or route change
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !menuButtonRef.current?.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    const handleRouteChange = () => setMenuOpen(false);

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("popstate", handleRouteChange);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, [menuOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background shadow-sm" : "bg-background"
      }`}
    >
      {/* Top banner (hidden on scroll or mobile) */}
      {!isMobile && (
        <div
          className={`transition-all duration-300 overflow-hidden ${
            isScrolled ? "h-0 opacity-0" : "h-10 opacity-100"
          } bg-primary flex items-center justify-center gap-5`}
        >
          <p className="text-secondary font-semibold text-xs">
            Debug your Render services in Claude Code and Cursor.
          </p>
          <button className="bg-secondary py-1 px-4 text-white text-sm">
            Try it!
          </button>
        </div>
      )}

      {/* Main navbar */}
      <div className="flex flex-row items-center justify-between h-20 md:h-20 border-b border-gray-200">
        {/* Mobile Menu Icon */}
        <div className="flex items-center gap-4 w-[50%] pl-10">
          <Menu
            ref={menuButtonRef}
            className="w-8 h-8 md:hidden text-secondary cursor-pointer"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle mobile menu"
          />

          {/* Logo */}
          <img
            src="/images/logo2.png"
            alt="logo"
            className="w-28 md:w-40 cursor-pointer "
            onClick={() => navigate("/")}
          />

          {/* Desktop Nav */}
          <ul className="hidden md:flex flex-row flex-1 justify-center gap-6 text-lg">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className="flex items-center text-sm lg:text-lg hover:text-primary transition-colors"
                >
                  {item.navTitle}
                  {item.navicon && <ChevronDown className="w-4 h-4 ml-1" />}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://vyduryadigital.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm lg:text-lg hover:text-primary transition-colors"
              >
                Company
              </a>
            </li>
          </ul>
        </div>

        {/* Dashboard Button */}
        <Dashbtn />
      </div>

      {/* Mobile Navbar */}
      {menuOpen && (
        <>
          <div
            ref={menuRef}
            className="bg-background border-b border-gray-600 md:hidden fixed top-20 left-0 w-full z-50 animate-slide-down"
          >
            <ul className="flex flex-col gap-4 px-6 py-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className="flex items-center text-base py-2 hover:text-primary transition-colors"
                    onClick={closeMenu}
                  >
                    {item.navTitle}
                    {item.navicon && <ChevronDown className="w-4 h-4 ml-1" />}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://vyduryadigital.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-base py-2 hover:text-primary transition-colors"
                  onClick={closeMenu}
                >
                  Company
                </a>
              </li>
            </ul>
            <div
              className="text-background w-full bg-secondary h-12 flex justify-center items-center text-lg font-semibold cursor-pointer hover:bg-secondary/90 transition-colors"
              onClick={closeMenu}
            >
              Contact
            </div>
          </div>

          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={closeMenu}
          />
        </>
      )}
    </header>
  );
};

export default Header;
