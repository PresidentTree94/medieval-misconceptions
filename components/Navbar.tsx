"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navs = [
  { text: "Categories", link: "/categories" },
  { text: "Topics", link: "/topics" },
  { text: "Historical Figures", link: "/figures" },
  //{ text: "About", link: "/about" }
];

export default function Navbar() {

  const pathname = usePathname();
  const [open, setOpen] = useState(false); 
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    if (pathname !== "/" || open) {
      setScrolled(true);
      return;
    }
    const handleScroll = () => setScrolled(window.scrollY > 64);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <header className={`fixed top-0 inset-x-0 z-1 ${scrolled || open ? "bg-background-light/95 backdrop-blur-md shadow-sm" : "bg-transparent"} transition-all duration-300`}>
      <div className="flex flex-col md:flex-row justify-between md:items-center">
        <div className="h-16 flex justify-between items-center px-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary flex items-center justify-center rounded-lg text-background-light">
              <i className="ri-quill-pen-line text-base"></i>
            </div>
            <span className={`font-display text-lg font-bold ${scrolled || open ? "text-foreground" : "text-background-light"} transition-colors`}>Medieval Misconceptions</span>
          </Link>
          <button className={`w-8 h-8 rounded-lg ${scrolled || open ? "bg-background-dark" : "bg-background-light/15"} md:hidden cursor-pointer transition-colors`} onClick={() => setOpen(!open)}>
            <i className={`${open ? "ri-close-line" : "ri-menu-line"} text-lg`}></i>
          </button>
        </div>
        <nav className={`text-sm font-medium ${open ? "flex" : "hidden md:flex"} flex-col md:flex-row gap-1 px-6 py-6 md:py-0`}>
          {navs.map((n, index) => (
            <Link key={index} href={n.link} className={`px-3 py-2 rounded-md ${scrolled || open ? "text-subtext hover:text-primary hover:bg-primary/5" : "text-background-light/90 hover:text-background-light hover:bg-background-light/15"} transition-colors`} onClick={() => setOpen(false)}>{n.text}</Link> 
          ))}
        </nav>
      </div>
    </header>
  );
}