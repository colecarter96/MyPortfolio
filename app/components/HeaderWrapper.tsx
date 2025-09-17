"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";

export default function HeaderWrapper() {
  const pathname = usePathname();

  // Don’t render header on home
  if (pathname === "/") return null;

  return <Header />;
}
