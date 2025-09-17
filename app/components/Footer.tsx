// // components/Footer.tsx

// import React from 'react';
// import Clock from './Clock';

// const Footer: React.FC = () => {
//     return (
//         <footer className="text-black py-12 px-6 border-t-[1.5px]">
            
//             {/* The rest of the content now lives directly inside the footer
//                 and uses responsive padding (px-6) for spacing.
//             */}
                
//             {/* Upper Section */}
//             <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-8">
                
//                 {/* Image and Initials */}
//                 <div className="flex flex-col items-start mb-6 md:mb-0">
//                     <img src="/path/to/your/image.png" alt="Your Initials" className="h-full object-cover" />
//                     <p className="mt-2 text-xl font-semibold">CSC</p>
//                 </div>

//                 {/* Navigation and other info */}
//                 <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-12">
//                     {/* Navigation Links */}
//                     <div className="flex flex-col ">
//                         <h3 className="font-semibold mb-3">(NAVIGATION)</h3>
//                         <ul className="text-2xl font-semibold">
//                             <li><a href="/" className="">HOME</a></li>
//                             <li><a href="/education" className="">EDUCATION</a></li>
//                             <li><a href="/experience" className="">EXPERIENCE</a></li>
//                             <li><a href="/projects" className="">PROJECTS</a></li>
//                             <li><a href="/fun" className="">FOR FUN</a></li>
//                         </ul>
//                     </div>
                    
//                     {/* Other Info (Hidden on small screens) */}
//                     <div className="hidden md:flex flex-col">
//                         <h3 className="font-semibold mb-3">(INFO)</h3>
//                         <ul className="text-2xl font-semibold">
//                             <div className="flex">
//                                 <li><a href="#" className="">E: </a> <a className="font-medium">colescarter@gmail.com</a></li>
//                             </div>

//                             <div className="flex">
//                                 <li><a href="#" className="">SE: </a> <a className="font-medium">cscarter@ucsd.edu</a></li>
//                             </div>

//                             <div className="flex">
//                                 <li><a href="#" className="">M: </a> <a className="font-medium">+1 (805) 754-7679</a></li>
//                             </div>

//                             <div className="flex">
//                                 <li><a href="#" className="">H: </a> <a className="font-medium">Monday-Friday, 9am-5pm</a></li>
//                             </div>
                            
                            
//                         </ul>
//                     </div>
//                 </div>
//             </div>

//             {/* Lower Section */}
//             <div className="flex flex-col md:flex-row justify-between text-left">
//                 {/* Column 1 */}
//                 <div className="flex flex-col text-md font-semibold mb-4 md:mb-0">
//                     <p>&copy; {new Date().getFullYear()} COLE CARTER, ALL RIGHTS RESERVED</p>
//                     <p>SAN DIEGO🡒CA (PST)</p>
//                 </div>

//                 {/* Column 2 */}
//                 <div className="flex flex-col text-md font-semibold mb-4 md:mb-0">
//                     <p>LINKEDIN</p>
//                     <p>INSTAGRAM</p>
//                 </div>
                
//                 {/* Column 3 */}
//                 <div className="flex flex-col text-md font-semibold">
//                     <Clock />
//                 </div>
//                 </div>
//         </footer>
//     );
// };

// export default Footer;
// components/Footer.tsx

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Clock from "./Clock";

const Footer: React.FC = () => {
  return (
    <footer className="text-black py-12 px-6 border-t-[1.5px]">
      {/* Upper Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-8">
        {/* Image and Initials */}
        <div className="flex flex-col items-start mb-6 md:mb-0">
          <Image
            src="/path/to/your/image.png"
            alt="Your Initials"
            width={80} // adjust as needed
            height={80} // adjust as needed
            className="object-cover"
          />
          <p className="mt-2 text-xl font-semibold">CSC</p>
        </div>

        {/* Navigation and other info */}
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-12">
          {/* Navigation Links */}
          <div className="flex flex-col">
            <h3 className="font-semibold mb-3">(NAVIGATION)</h3>
            <ul className="text-2xl font-semibold">
              <li>
                <Link href="/">HOME</Link>
              </li>
              <li>
                <Link href="/education">EDUCATION</Link>
              </li>
              <li>
                <Link href="/experience">EXPERIENCE</Link>
              </li>
              <li>
                <Link href="/projects">PROJECTS</Link>
              </li>
              <li>
                <Link href="/fun">FOR FUN</Link>
              </li>
            </ul>
          </div>

          {/* Other Info (Hidden on small screens) */}
          <div className="hidden md:flex flex-col">
            <h3 className="font-semibold mb-3">(INFO)</h3>
            <ul className="text-2xl font-semibold space-y-2">
              <li className="flex">
                <span className="">E: </span>{" "}
                <span className="font-medium">colescarter@gmail.com</span>
              </li>
              <li className="flex">
                <span className="">SE: </span>{" "}
                <span className="font-medium">cscarter@ucsd.edu</span>
              </li>
              <li className="flex">
                <span className="">M: </span>{" "}
                <span className="font-medium">+1 (805) 754-7679</span>
              </li>
              <li className="flex">
                <span className="">H: </span>{" "}
                <span className="font-medium">Monday-Friday, 9am-5pm</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Lower Section */}
      <div className="flex flex-col md:flex-row justify-between text-left">
        {/* Column 1 */}
        <div className="flex flex-col text-md font-semibold mb-4 md:mb-0">
          <p>&copy; {new Date().getFullYear()} COLE CARTER, ALL RIGHTS RESERVED</p>
          <p>SAN DIEGO🡒CA (PST)</p>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col text-md font-semibold mb-4 md:mb-0">
          <p>LINKEDIN</p>
          <p>INSTAGRAM</p>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col text-md font-semibold">
          <Clock />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
