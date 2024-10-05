"use client";
import { useEffect, useState } from "react";
import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

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
  const pathname = usePathname();

  const { data: session } = useSession();

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

  const showBlackGrey = useMemo(() => {
    return isScrolled || pathname !== "/";
  }, [isScrolled, pathname]);

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
                  showBlackGrey
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
                  className={` hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium  ${showBlackGrey ? "text-gray-800" : "text-white"}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            {!session?.user && (
              <button className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                <Link
                  href="/login"
                  className="[text-decoration:none] relative text-[1.25rem] font-text-md-regular text-colors-background-bg-primary text-left inline-block min-w-[4.063rem] whitespace-nowrap"
                >
                  Sign In
                </Link>
              </button>
            )}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`bg-transparent inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500 ${showBlackGrey ? "text-black" : "text-white"}`}
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
                {!session?.user && (
                  <button className="w-full bg-primary text-white px-4 py-2 rounded-md text-base font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                    <Link
                      href="/login"
                      className="[text-decoration:none] relative text-[1.25rem] font-text-md-regular text-colors-background-bg-primary text-left inline-block min-w-[4.063rem] whitespace-nowrap"
                    >
                      Sign In
                    </Link>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
