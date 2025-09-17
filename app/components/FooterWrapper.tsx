"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function FooterWrapper() {
  const pathname = usePathname();

  // Don’t render header on home
  if (pathname === "/") return null;

  return <Footer />;
}
