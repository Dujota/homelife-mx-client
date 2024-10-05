import { ContactInfo, FooterLink, Section } from "@/types/layout";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

export type FooterProps = {
  contact: ContactInfo;
  sections: Section[];
  footerLinks: FooterLink[];

  className?: string;
};

const Footer: NextPage<FooterProps> = ({
  className = "",
  contact,
  sections,
  footerLinks,
}) => {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <section
      className={`self-stretch bg-colors-background-bg-primary overflow-hidden flex flex-col items-center justify-start py-spacing-section-section-vertical-padding px-spacing-section-section-horizontal-padding gap-spacing-5xl z-[1] text-left text-[0.875rem] text-content-base-base font-text-md-regular ${className} max-w-[98rem] mx-auto`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-spacing-container-lg">
        <div className="self-stretch flex flex-col items-start justify-start gap-spacing-container-md">
          <Link href="/">
            <Image
              className="w-[8.313rem] h-[4rem] relative object-cover"
              loading="eager"
              width={100}
              height={80}
              alt="Footer Logo"
              src={contact.logoSrc}
            />
          </Link>
          <div className="self-stretch flex flex-col items-start justify-start gap-spacing-container-xs">
            <div className="self-stretch relative leading-[1.125rem] whitespace-nowrap">
              {contact.email}
            </div>
            <div className="self-stretch relative leading-[1.125rem]">
              {contact.phone}
            </div>
            <div className="relative leading-[1.125rem]">{contact.address}</div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-spacing-container-md text-colors-text-text-primary-900">
          {sections.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className="flex-1 flex flex-col items-start justify-start gap-spacing-xl min-w-[6rem]"
            >
              <a className="[text-decoration:none] self-stretch relative leading-[1.25rem] text-[inherit]">
                {section.title}
              </a>
              <div className="self-stretch flex flex-col items-start justify-start py-[0rem] pl-[0rem] pr-[1.25rem] gap-spacing-container-xs text-[1rem] text-content-base-main">
                {section.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.href}
                    className="relative leading-[1.5rem] font-medium inline-block min-w-[4.563rem]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start">
        <footer className="self-stretch border-colors-border-border-secondary border-t-[1px] border-solid flex flex-col items-start justify-start pt-[0.875rem] pb-[0rem] pl-[0rem] pr-[1.25rem] gap-spacing-container-md text-left text-[1rem] text-content-base-base font-text-md-regular">
          <div className="relative leading-[1.5rem]">
            © {year} Homelife. All rights reserved.
          </div>
          <div className="w-[11.75rem] flex flex-row items-start justify-start gap-[0.687rem] text-colors-text-text-quarterary-500">
            {footerLinks.map((footerLink, footerLinkIndex) => (
              <a
                key={footerLinkIndex}
                href={footerLink.href}
                className="relative leading-[1.5rem] inline-block min-w-[3rem]"
              >
                {footerLink.label}
              </a>
            ))}
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
