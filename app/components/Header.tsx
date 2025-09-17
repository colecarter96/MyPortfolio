import React from "react";
import Link from "next/link";

type HeaderProps = {
  className?: string;
};

export default function Header({ className }: HeaderProps) {
  return (
    <div className={`flex justify-between p-5 items-center ${className || ""}`}>
      <div className="font-bold text-3xl md:text-4xl lg:text-6xl tracking-tight">
        <Link href="/">
            Cole Carter 
        </Link>
        
      </div>

      {/* <div className="hidden md:flex font-semibold text-md pt-5">
        <div className="pr-2">
            <Link href="/education">
                EDUCATION,
            </Link>
        </div>
        <div className="pr-2">
            <Link href="/experience">
                EXPERIENCE,
            </Link>
        </div>
        <div className="pr-2">
            <Link href="/projects">
                PROJECTS,
            </Link>
        </div>
        <div className="pr-2">
            <Link href="/fun">
                FOR FUN,
            </Link>
        </div>
      </div> */}
      <div className="hidden md:flex font-semibold text-md pt-5 space-x-4">
        {["EDUCATION", "EXPERIENCE", "PROJECTS", "FUN"].map((text, i) => (
          <Link
            key={i}
            href={`/${text.toLowerCase()}`}
            className="relative overflow-hidden h-6 inline-block group"
          >
            {/* Original text */}
            <span className="block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
              {text},
            </span>

            {/* Hover text (can be the same, just slides in) */}
            <span className="absolute top-full left-0 block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
              {text},
            </span>
          </Link>
        ))}
      </div>

      {/* <button className="rounded-full bg-black text-white text-md md:text-lg font-semibold h-12 p-6 flex justify-center items-center">
        Get In Touch ↗ ‡
      </button> */}

      <button className="text-xs md:text-lg relative overflow-hidden rounded-full bg-black text-white font-semibold h-12 px-6 flex justify-center items-center group">
        {/* Original text */}
        <span className="block transition-transform duration-300 ease-in-out group-hover:-translate-y-9">
          Get In Touch ↗ ‡
        </span>

        {/* Hover text (can be the same, or slightly styled differently) */}
        <span className="absolute top-full left-0 w-full text-center transition-transform duration-300 ease-in-out group-hover:-translate-y-9">
          Get In Touch ↗ ‡
        </span>
      </button>
    </div>
  );
}   