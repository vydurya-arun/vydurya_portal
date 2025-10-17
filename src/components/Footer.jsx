import React, { useState } from "react";
import { mainLinks, payments, socialMedia } from "../constants/footeritems";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { ChevronDown } from "lucide-react";

const Footer = () => {
  const isMobile = useMediaQuery({ maxWidth: 930 }); // sm breakpoint in Tailwind
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };
  return (
    <footer className="bg-secondary px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-10 text-background">
      {/* Top Section — Main Links */}
      <ul className="flex flex-col sm:flex-row sm:flex-wrap justify-between gap-8 md:gap-10 md:py-3 lg:gap-12">
        {mainLinks.map((item) => (
          <li
            key={item.id}
            className="w-full sm:w-[45%] md:w-[30%] lg:w-auto border-b sm:border-none border-gray-700 pb-2"
          >
            {/* Header (clickable on mobile) */}
            <div
              className="flex justify-between items-center cursor-pointer sm:cursor-default"
              onClick={() => isMobile && toggleDropdown(item.id)}
            >
              <h3 className="text-lg md:text-xl font-semibold text-primary mb-2 sm:mb-0">
                {item.title}
              </h3>

              {/* Mobile dropdown indicator */}
              {isMobile && item.sublinks && item.sublinks.length > 0 && (
                <span
                  className={`text-primary transition-transform duration-200 ${
                    openDropdown === item.id ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <ChevronDown />
                </span>
              )}
            </div>

            {/* Sublinks */}
            {item.sublinks && item.sublinks.length > 0 && (
              <>
                {/* Desktop view (always visible) */}
                {!isMobile && (
                  <ul className="space-y-1 text-sm md:text-sm mt-2">
                    {item.sublinks.map((link) => (
                      <li key={link.id}>
                        <a
                          href={link.urlpath}
                          className="footerlink hover:text-primary transition-colors duration-200"
                        >
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Mobile dropdown (toggle open) */}
                {isMobile && openDropdown === item.id && (
                  <ul className="space-y-1 text-sm mt-2 pl-2 animate-fadeIn">
                    {item.sublinks.map((link) => (
                      <li key={link.id}>
                        <a
                          href={link.urlpath}
                          className="footerlink "
                        >
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}
          </li>
        ))}
      </ul>

      {/* Middle Section — Logo, Social, Payment */}
      <div className=" border-t border-gray-600 pt-3 flex flex-col gap-6">
        {/* Logo + Social */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <img
            src="/images/logo.png"
            className="w-40 sm:w-48 md:w-56 lg:w-60 h-25 object-cover"
            alt="footerlogo"
          />
          <div className="flex gap-3">
            {socialMedia.map((item) => (
              <Link key={item.id} to={item.link}>
                <img
                  className="w-8 sm:w-9 md:w-10 hover:opacity-80 transition"
                  src={item.imagepath}
                  alt={item.title}
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Payments + Policies */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap justify-center gap-3">
            {payments.map((item) => (
              <img
                className="w-12 sm:w-14 md:w-16"
                key={item.id}
                src={item.imagepath}
                alt={item.title}
              />
            ))}
          </div>
          <ul className="flex flex-wrap justify-center gap-3 text-sm">
            <Link className="footerlink hover:text-primary">
              Privacy policy
            </Link>
            <Link className="footerlink hover:text-primary">Refund policy</Link>
            <Link className="footerlink hover:text-primary">
              Terms of service
            </Link>
          </ul>
        </div>
      </div>

      {/* Bottom Section — Copyright */}
      <div className="mt-6 border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-center md:text-left gap-2">
        <p>
          © 2004–2025 Vydurya Digital – Launch, grow, and succeed online,
          supported by AI that puts the power in your hands.
        </p>
        <p>Prices are listed without VAT</p>
      </div>
    </footer>
  );
};

export default Footer;
