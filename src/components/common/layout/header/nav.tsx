import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useMemo, type CSSProperties } from "react";

export type NavType = {
  className?: string;

  /** Style props */
  top?: CSSProperties["top"];
  position?: CSSProperties["position"];
  padding?: CSSProperties["padding"];
  shadow?: CSSProperties["boxShadow"];
  bgColor?: CSSProperties["backgroundColor"];
};

const Nav: NextPage<NavType> = ({
  className = "",
  top,
  position,
  padding,
  shadow,
  bgColor,
}) => {
  const NavStyle: CSSProperties = useMemo(() => {
    return {
      top: top,
      position: position,
      padding: padding,
      boxShadow: shadow,
      backgroundColor: bgColor,
    };
  }, [top, position, padding, shadow, bgColor]);

  return (
    <header
      className={`self-stretch flex flex-row items-center justify-between pt-spacing-container-md px-spacing-section-section-horizontal-padding pb-[1rem] top-[0] z-[99] sticky gap-[0rem] [row-gap:20px] text-left text-[1.125rem] text-colors-background-bg-primary font-text-md-regular ${className}`}
      style={NavStyle}
    >
      <div className="w-[8.75rem] flex flex-col items-start justify-center">
        <Image
          className="w-[6rem] h-[2.75rem] relative object-cover"
          loading="eager"
          alt="Casa Feliz Logo"
          width={96}
          height={44}
          src="/images/logos/homelife-white-nav.png"
        />
      </div>
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
          className="h-[2rem] w-[2rem] relative overflow-hidden shrink-0"
          loading="eager"
          alt="Mobile Menu Icon"
          width={32}
          height={32}
          src="/images/icons/mobile-menu.svg"
        />
      </div>
    </header>
  );
};

export default Nav;
