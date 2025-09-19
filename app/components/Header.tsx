


"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import ContactForm from "./ContactForm";

type HeaderProps = {
  className?: string;
};

export default function Header({ className }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

   useEffect(() => {
    if (mobileMenuOpen) {
      setShowMenu(true);
    } else {
      // Delay unmounting to allow exit animation
      const timeout = setTimeout(() => setShowMenu(false), 500); // match transition duration
      return () => clearTimeout(timeout);
    }
  }, [mobileMenuOpen]);

  return (
    <div className={`flex justify-between p-5 items-center ${className || ""}`}>
      {/* Logo */}
      <div className="font-bold text-3xl md:text-4xl lg:text-6xl tracking-tight">
        <Link href="/">Cole Carter</Link>
      </div>

      {/* Desktop nav */}
      <div className="hidden md:flex font-semibold text-md pt-5 space-x-2">
        {["EDUCATION", "EXPERIENCE", "PROJECTS", "FUN"].map((text, i, arr) => (
          <Link
            key={i}
            href={`/${text.toLowerCase()}`}
            className="relative overflow-hidden h-6 inline-block group"
          >
            <span className="block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
              {text}{i < arr.length - 1 ? "," : ""}
            </span>
            <span className="absolute top-full left-0 block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
              {text}
            </span>
          </Link>
        ))}
      </div>

      {/* Desktop Get In Touch */}
      <button className="hidden md:block bg-black relative overflow-hidden text-xl  mt-4 px-6 py-3 border border-black rounded-full text-white font-semibold z-50 group">
          <a
            href="https://form.typeform.com/to/lZyPQMDq"
            target="_blank"
            rel="noopener noreferrer"
            className="relative block h-6"
          >
            {/* Top text (slides up on hover) */}
            <span className="block transition-transform duration-300 ease-in-out group-hover:-translate-y-9">
              Get In Touch ↗ ‡
            </span>

            {/* Bottom text (slides in from below) */}
            <span className="absolute pt-10 top-full left-0 w-full text-center transition-transform duration-300 ease-in-out group-hover:-translate-y-16">
              Get In Touch ↗ ‡
            </span>
          </a>
        </button>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden relative overflow-hidden font-semibold h-12 px-6 flex justify-center items-center"
        onClick={() => setMobileMenuOpen(true)}
      >
        MENU
      </button>

      {/* Mobile Menu Overlay */}
      {showMenu && (
        <div
          className={`fixed inset-0 bg-black z-50 flex flex-col justify-center items-left space-y-3 text-4xl
            transform transition-transform duration-500 ease-out
            ${mobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
            pointer-events-auto`} // ensure parent receives clicks
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-6xl text-white hover:text-gray-500 z-50"
            onClick={() => setMobileMenuOpen(false)}
          >
            ×
          </button>

          {/* Nav Links */}
          {["HOME", "EDUCATION", "EXPERIENCE", "PROJECTS", "FUN"].map((text, i) => (
            <Link
              key={i}
              href={text === "HOME" ? "/" : `/${text.toLowerCase()}`}
              className="text-white hover:text-gray-400 mx-20 font-semibold tracking-tight relative z-50 pointer-events-auto"
              onClick={() => setMobileMenuOpen(false)}
            >
              {text}
            </Link>
          ))}

          {/* Mobile Get In Touch */}
          <button
            className="text-white text-xl mx-20 mt-4 px-6 py-3 border border-white rounded-full z-50 pointer-events-auto"
            
          >
            <a href="https://form.typeform.com/to/lZyPQMDq" target="_blank" rel="noopener noreferrer">Get In Touch ↗ ‡</a>
          </button>
        </div>
      )}


      {/* Single instance of ContactForm (desktop + mobile) */}
      <ContactForm />
    </div>
  );
}

