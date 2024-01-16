"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Work", href: "/work" },
  { label: "Gear", href: "/gear" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact"}
];

export default function Navigation() {
  const pathname = usePathname(); // active paths on dynamic subpages
  console.log(pathname);
  const [nav, showNav] = useState(false);

  return (
    <header className="relative md:sticky top-0 z-20 bg-white">
      <nav className="px-4 md:px-6 py-3 lg max-w-[700px] mx-auto flex justify-between items-center gap-3">
        <Link href="/" className="shrink-0 text-primary">
          Hello
        </Link>
        <ul className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <Link className={`link ${pathname === link.href ? 'px-4 py-2 text-sm font-bold' : 'px-4 py-2 text-sm'}`} href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <div className="relative ml-auto md:hidden">
          <button aria-label="Open Menu" title="Open Menu" className="flex items-center gap-1 text-secondary p-1" onClick={() => showNav(!nav)}>
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z" fill="#000000"/>
            </svg>
          </button>
        </div>
      </nav>
      {nav ? 
        <div className="absolute top-0 left-0  divide-gray-400">
          <div className="px-4 py-3 w-screen h-screen  bg-white ">
            <div className="flex items-center justify-between">
              <div></div>
              <div>
                <button aria-label="Close Menu" title="Close Menu" className="flex items-center gap-1 text-secondary p-1" onClick={() => showNav(false)}>
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <nav className="h-[95%] flex flex-col items-center justify-between m-auto">
              <ul className="flex flex-col m-auto text-center animate-in">
                {links.map((link) => (
                  <li className="px-4 py-2" key={link.href}>
                    <Link className={`link ${pathname === link.href ? 'text-xl font-bold' : 'text-xl'}`}  href={link.href} onClick={() => showNav(false)}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        : 
        <div></div>
      }
    </header>
  );
}