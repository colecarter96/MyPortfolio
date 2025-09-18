// import React from "react";
// import Link from "next/link";
// import ContactForm from "./ContactForm";

// type HeaderProps = {
//   className?: string;
// };

// export default function Header({ className }: HeaderProps) {
//   return (
//     <div className={`flex justify-between p-5 items-center ${className || ""}`}>
//       <div className="font-bold text-3xl md:text-4xl lg:text-6xl tracking-tight">
//         <Link href="/">
//             Cole Carter 
//         </Link>
        
//       </div>

//       {/* <div className="hidden md:flex font-semibold text-md pt-5">
//         <div className="pr-2">
//             <Link href="/education">
//                 EDUCATION,
//             </Link>
//         </div>
//         <div className="pr-2">
//             <Link href="/experience">
//                 EXPERIENCE,
//             </Link>
//         </div>
//         <div className="pr-2">
//             <Link href="/projects">
//                 PROJECTS,
//             </Link>
//         </div>
//         <div className="pr-2">
//             <Link href="/fun">
//                 FOR FUN,
//             </Link>
//         </div>
//       </div> */}
//       <div className="hidden md:flex font-semibold text-md pt-5 space-x-4">
//         {["EDUCATION", "EXPERIENCE", "PROJECTS", "FUN"].map((text, i) => (
//           <Link
//             key={i}
//             href={`/${text.toLowerCase()}`}
//             className="relative overflow-hidden h-6 inline-block group"
//           >
//             {/* Original text */}
//             <span className="block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
//               {text},
//             </span>

//             {/* Hover text (can be the same, just slides in) */}
//             <span className="absolute top-full left-0 block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
//               {text},
//             </span>
//           </Link>
//         ))}
//       </div>

//       {/* <button className="rounded-full bg-black text-white text-md md:text-lg font-semibold h-12 p-6 flex justify-center items-center">
//         Get In Touch ↗ ‡
//       </button> */}

//       <button className="text-xs md:text-lg relative overflow-hidden rounded-full bg-black text-white font-semibold h-12 px-6 flex justify-center items-center group">
//         {/* Original text */}
//         <span className="block transition-transform duration-300 ease-in-out group-hover:-translate-y-9">
//           Get In Touch ↗ ‡
//         </span>

//         {/* Hover text (can be the same, or slightly styled differently) */}
//         {/* <span className="absolute top-full left-0 w-full text-center transition-transform duration-300 ease-in-out group-hover:-translate-y-9">
//           Get In Touch ↗ ‡
//         </span> */}
//         <ContactForm />
//       </button>
//     </div>
//   );
// }   


// "use client";
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import ContactForm from "./ContactForm";

// type HeaderProps = {
//   className?: string;
// };

// export default function Header({ className }: HeaderProps) {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   // Dispatch global event to open ContactForm from mobile menu
//   const openContactForm = () => {
//     const evt = new Event("openContactForm");
//     window.dispatchEvent(evt);
//   };

//   return (
//     <div className={`flex justify-between p-5 items-center ${className || ""}`}>
//       {/* Logo */}
//       <div className="font-bold text-3xl md:text-4xl lg:text-6xl tracking-tight">
//         <Link href="/">Cole Carter</Link>
//       </div>

//       {/* Desktop nav */}
//       <div className="hidden md:flex font-semibold text-md pt-5 space-x-4">
//         {["EDUCATION", "EXPERIENCE", "PROJECTS", "FUN"].map((text, i) => (
//           <Link
//             key={i}
//             href={`/${text.toLowerCase()}`}
//             className="relative overflow-hidden h-6 inline-block group"
//           >
//             <span className="block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
//               {text},
//             </span>
//             <span className="absolute top-full left-0 block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
//               {text}
//             </span>
//           </Link>
//         ))}
//       </div>

//       {/* Desktop Get In Touch */}
//       <button className="hidden md:flex text-xs md:text-lg relative overflow-hidden rounded-full bg-black text-white font-semibold h-12 px-6 flex justify-center items-center group">
//         <span className="block transition-transform duration-300 ease-in-out group-hover:-translate-y-9">
//           Get In Touch ↗ ‡
//         </span>
//         <ContactForm />
//       </button>

//       {/* Mobile Menu Button */}
//       <button
//         className="md:hidden relative overflow-hidden rounded-full bg-black text-white font-semibold h-12 px-6 flex justify-center items-center"
//         onClick={() => setMobileMenuOpen(true)}
//       >
//         MENU
//       </button>

//       {/* Mobile Menu Overlay */}
//       {mobileMenuOpen && (
//         <div className="fixed inset-0 bg-black z-50 flex flex-col justify-center items-center space-y-8 text-3xl">
//           {/* Close Button */}
//           <button
//             className="absolute top-6 right-6 text-6xl text-white hover:text-gray-500"
//             onClick={() => setMobileMenuOpen(false)}
//           >
//             ×
//           </button>

//           {/* Nav Links */}
//           {["HOME", "EDUCATION", "EXPERIENCE", "PROJECTS", "FUN"].map(
//             (text, i) => (
//               <Link
//                 key={i}
//                 href={text === "HOME" ? "/" : `/${text.toLowerCase()}`}
//                 className="text-white hover:text-gray-400"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 {text}
//               </Link>
//             )
//           )}

//           {/* Get In Touch Button */}
//           <button
//             className="rounded-full bg-white text-black text-lg font-semibold h-12 px-6 flex justify-center items-center"
//             onClick={() => {
//               setMobileMenuOpen(false);
//               openContactForm();
//             }}
//           >
//             Get In Touch ↗ ‡
//           </button>
//         </div>
//       )}

//       {/* Contact Form for Desktop */}
//       {/* <ContactForm /> */}
//     </div>
//   );
// }



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

  // Open ContactForm via global event
  const openContactForm = () => {
    const evt = new Event("openContactForm");
    window.dispatchEvent(evt);
    setMobileMenuOpen(false); // close mobile menu if open
  };

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
      <div className="hidden md:flex font-semibold text-md pt-5 space-x-4">
        {["EDUCATION", "EXPERIENCE", "PROJECTS", "FUN"].map((text, i) => (
          <Link
            key={i}
            href={`/${text.toLowerCase()}`}
            className="relative overflow-hidden h-6 inline-block group"
          >
            <span className="block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
              {text},
            </span>
            <span className="absolute top-full left-0 block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
              {text}
            </span>
          </Link>
        ))}
      </div>

      {/* Desktop Get In Touch */}
      <button
        className="hidden md:flex text-xs md:text-lg relative overflow-hidden rounded-full bg-black text-white font-semibold h-12 px-6 flex justify-center items-center group"
        onClick={openContactForm}
      >
        Get In Touch ↗ ‡
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
          className={`fixed inset-0 bg-black z-50 flex flex-col justify-center items-left space-y-3 text-5xl
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
            onClick={openContactForm}
          >
            Get In Touch ↗ ‡
          </button>
        </div>
      )}


      {/* Single instance of ContactForm (desktop + mobile) */}
      <ContactForm />
    </div>
  );
}

