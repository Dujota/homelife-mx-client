import type { NextPage } from "next";
import Image from "next/image";
import { useMemo, type CSSProperties } from "react";

export type FooterType = {
  className?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propFlexWrap?: CSSProperties["flexWrap"];
  propWidth?: CSSProperties["width"];
  propOverflowX?: CSSProperties["overflowX"];
  propTextDecoration?: CSSProperties["textDecoration"];
  propTextDecoration1?: CSSProperties["textDecoration"];
  propTextDecoration2?: CSSProperties["textDecoration"];
  propTextDecoration3?: CSSProperties["textDecoration"];
};

const Footer: NextPage<FooterType> = ({
  className = "",
  propAlignSelf,
  propFlexWrap,
  propWidth,
  propOverflowX,
  propTextDecoration,
  propTextDecoration1,
  propTextDecoration2,
  propTextDecoration3,
}) => {
  const linksAndNewsletterStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flexWrap: propFlexWrap,
      width: propWidth,
      overflowX: propOverflowX,
    };
  }, [propAlignSelf, propFlexWrap, propWidth, propOverflowX]);

  const heading1Style: CSSProperties = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  const textStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: propTextDecoration1,
    };
  }, [propTextDecoration1]);

  const text1Style: CSSProperties = useMemo(() => {
    return {
      textDecoration: propTextDecoration2,
    };
  }, [propTextDecoration2]);

  const footerLinkStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: propTextDecoration3,
    };
  }, [propTextDecoration3]);

  const year = useMemo(() => new Date().getFullYear(), []);
  return (
    <section
      className={`self-stretch bg-colors-background-bg-primary overflow-hidden flex flex-col items-center justify-start py-spacing-section-section-vertical-padding px-spacing-section-section-horizontal-padding gap-spacing-5xl z-[1] text-left text-[0.875rem] text-content-base-base font-text-md-regular ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-spacing-container-lg">
        <div className="self-stretch flex flex-col items-start justify-start gap-spacing-container-md">
          <Image
            className="w-[8.313rem] h-[4rem] relative object-cover"
            loading="lazy"
            width={100}
            height={80}
            alt="Footer Logo"
            src="/images/logos/footer-black.svg"
          />
          <div className="self-stretch flex flex-col items-start justify-start gap-spacing-container-xs">
            <div className="self-stretch relative leading-[1.125rem] whitespace-nowrap">
              contact@homelife.com
            </div>
            <div className="self-stretch relative leading-[1.125rem]">
              +1 (555) 555-5555
            </div>
            <div className="relative leading-[1.125rem]">
              4517 Washington Ave., Manchester, Kentucky 39495
            </div>
          </div>
        </div>
        <div
          className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-spacing-container-md text-colors-text-text-primary-900"
          style={linksAndNewsletterStyle}
        >
          <div className="flex-1 flex flex-col items-start justify-start gap-spacing-xl min-w-[6rem]">
            <a
              className="[text-decoration:none] self-stretch relative leading-[1.25rem] text-[inherit]"
              style={heading1Style}
            >
              Product
            </a>
            <div className="self-stretch flex flex-col items-start justify-start py-[0rem] pl-[0rem] pr-[1.25rem] gap-spacing-container-xs text-[1rem] text-content-base-main">
              <div className="relative leading-[1.5rem] font-medium inline-block min-w-[4.563rem]">
                Overview
              </div>
              <div className="relative leading-[1.5rem] font-medium inline-block min-w-[4.188rem]">
                Features
              </div>
              <div className="relative leading-[1.5rem] font-medium inline-block min-w-[4.5rem]">
                Solutions
              </div>
              <a
                className="[text-decoration:none] relative leading-[1.5rem] font-medium text-[inherit] inline-block min-w-[4.188rem]"
                style={textStyle}
              >
                Tutorials
              </a>
              <div className="relative leading-[1.5rem] font-medium inline-block min-w-[3.375rem]">
                Pricing
              </div>
              <div className="relative leading-[1.5rem] font-medium inline-block min-w-[4.313rem]">
                Releases
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-spacing-xl min-w-[6rem]">
            <div className="self-stretch relative leading-[1.25rem]">
              Resources
            </div>
            <div className="self-stretch flex flex-col items-start justify-start py-[0rem] pl-[0rem] pr-[1.25rem] gap-spacing-container-xs text-[1rem] text-content-base-main">
              <div className="relative leading-[1.5rem] font-medium inline-block min-w-[4.563rem]">
                Overview
              </div>
              <div className="relative leading-[1.5rem] font-medium inline-block min-w-[4.188rem]">
                Features
              </div>
              <div className="relative leading-[1.5rem] font-medium inline-block min-w-[4.5rem]">
                Solutions
              </div>
              <div
                className="relative leading-[1.5rem] font-medium inline-block min-w-[4.188rem]"
                style={text1Style}
              >
                Tutorials
              </div>
              <div className="relative leading-[1.5rem] font-medium inline-block min-w-[3.375rem]">
                Pricing
              </div>
              <div className="relative leading-[1.5rem] font-medium inline-block min-w-[4.313rem]">
                Releases
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-spacing-xl min-w-[6rem]">
            <div className="self-stretch relative leading-[1.25rem]">
              Resources
            </div>
            <div className="self-stretch flex flex-col items-start justify-start py-[0rem] pl-[0rem] pr-[1.25rem] gap-spacing-container-xs text-[1rem] text-content-base-main">
              <div className="relative leading-[1.5rem] font-medium inline-block min-w-[4.563rem]">
                Overview
              </div>
              <div className="relative leading-[1.5rem] font-medium inline-block min-w-[4.188rem]">
                Features
              </div>
              <div className="relative leading-[1.5rem] font-medium inline-block min-w-[4.5rem]">
                Solutions
              </div>
              <div className="relative leading-[1.5rem] font-medium inline-block min-w-[4.188rem]">
                Tutorials
              </div>
              <div className="relative leading-[1.5rem] font-medium inline-block min-w-[3.375rem]">
                Pricing
              </div>
              <div className="relative leading-[1.5rem] font-medium inline-block min-w-[4.313rem]">
                Releases
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start">
        <footer className="self-stretch border-colors-border-border-secondary border-t-[1px] border-solid flex flex-col items-start justify-start pt-[0.875rem] pb-[0rem] pl-[0rem] pr-[1.25rem] gap-spacing-container-md text-left text-[1rem] text-content-base-base font-text-md-regular">
          <div className="relative leading-[1.5rem]">
            © {year} Homelife. All rights reserved.
          </div>
          <div className="w-[11.75rem] flex flex-row items-start justify-start gap-[0.687rem] text-colors-text-text-quarterary-500">
            <div className="relative leading-[1.5rem] inline-block min-w-[3rem]">
              Terms
            </div>
            <a
              className="[text-decoration:none] flex-1 relative leading-[1.5rem] text-[inherit] inline-block min-w-[3.5rem]"
              style={footerLinkStyle}
            >
              Privacy
            </a>
            <div className="flex-1 relative leading-[1.5rem] inline-block min-w-[3.875rem]">
              Cookies
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
