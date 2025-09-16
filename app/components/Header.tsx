import React from "react";
import Link from "next/link";

type HeaderProps = {
  className?: string;
};

export default function Header({ className }: HeaderProps) {
  return (
    <div className={`flex justify-between p-5 items-center ${className || ""}`}>
      <div className="font-bold text-xl md:text-4xl lg:text-6xl tracking-tight">
        <Link href="/">
            Cole Carter 
        </Link>
        
      </div>

      <div className="hidden md:flex font-semibold text-md pt-5">
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
      </div>

      <button className="rounded-full bg-black text-white text-lg font-semibold h-12 p-6 flex justify-center items-center">
        Get In Touch
      </button>
    </div>
  );
}   