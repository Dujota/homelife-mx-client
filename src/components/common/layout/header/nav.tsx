"use client";
import { useEffect, useState } from "react";
import { useMemo, type CSSProperties } from "react";

import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

// Compoinents
import { Menu, X } from "lucide-react";

type UserType = "public" | "admin" | "broker";

type NavType = {
  className?: string;
  userType?: UserType;
};

interface NavLink {
  href: string;
  label: string;
}

const publicLinks: NavLink[] = [
  { href: "/listings", label: "Listings" },
  { href: "/join", label: "Join" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About" },
];

const adminBrokerLinks: NavLink[] = [
  { href: "/listings", label: "Listings" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About" },
];

const Nav: NextPage<NavType> = ({ className = "", userType = "public" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const links = useMemo(() => {
    return userType === "public" ? publicLinks : adminBrokerLinks;
  }, [userType]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // <nav className="bg-white bg-opacity-90 shadow-md">
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      <div className="max-w-[98rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                className="w-[6rem] h-[2.75rem] relative object-cover"
                loading="eager"
                alt="Homefile Logo"
                width={96}
                height={44}
                src={
                  isScrolled
                    ? "/images/logos/nav-black.svg"
                    : "/images/logos/nav-white.svg"
                }
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={` hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium  ${isScrolled ? "text-gray-800" : "text-white"}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <button className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              <Link
                href="/login"
                className="[text-decoration:none] relative text-[1.25rem] font-text-md-regular text-colors-background-bg-primary text-left inline-block min-w-[4.063rem] whitespace-nowrap"
              >
                Sign In
              </Link>
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`bg-transparent inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500 ${isScrolled ? "text-black" : "text-white"}`}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="fixed inset-0 z-50 bg-white">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <Link href="/" className="flex-shrink-0">
                    <Image
                      className="w-[6rem] h-[2.75rem] relative object-cover"
                      loading="eager"
                      alt="Homefile Logo"
                      width={96}
                      height={44}
                      src="/images/logos/nav-black.svg"
                    />
                  </Link>
                </div>
                <div>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="bg-transparent inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
                  >
                    <span className="sr-only">Close menu</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
              <div className="mt-6">
                <button className="w-full bg-primary text-white px-4 py-2 rounded-md text-base font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                  <Link
                    href="/login"
                    className="[text-decoration:none] relative text-[1.25rem] font-text-md-regular text-colors-background-bg-primary text-left inline-block min-w-[4.063rem] whitespace-nowrap"
                  >
                    Sign In
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;

function Test({ className }) {
  return (
    <header
      className={`self-stretch flex flex-row items-center justify-between pt-spacing-container-md pb-[1rem] top-[0] z-[99] gap-[0rem] [row-gap:20px] text-left text-[1.125rem] text-colors-background-bg-primary font-text-md-regular ${className}`}
    >
      {/* LOGO */}
      <div className="w-[8.75rem] flex flex-col items-start justify-center ml-[1rem]">
        <Link href="/">
          <Image
            className="w-[6rem] h-[2.75rem] relative object-cover"
            loading="eager"
            alt="Casa Feliz Logo"
            width={96}
            height={44}
            src="/images/logos/nav-black.svg"
          />
        </Link>
      </div>
      {/* Links */}
      <div className="flex flex-row items-center justify-start gap-spacing-container-md">
        <button className="cursor-pointer [border:none] py-[0.625rem] px-[2.312rem] bg-primary rounded-lg flex flex-row items-center justify-center whitespace-nowrap">
          <Link
            href="/login"
            className="[text-decoration:none] relative text-[1.25rem] font-text-md-regular text-colors-background-bg-primary text-left inline-block min-w-[4.063rem] whitespace-nowrap"
          >
            Sign In
          </Link>
        </button>
        <Image
          className="h-[2rem] w-[2rem] relative overflow-hidden shrink-0 px-[1rem]"
          loading="eager"
          alt="Mobile Menu Icon"
          width={32}
          height={32}
          src="/images/icons/mobile-menu.svg"
        />
      </div>
    </header>
  );
}
