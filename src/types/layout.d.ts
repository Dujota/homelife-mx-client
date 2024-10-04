// Section link type
export type SectionLink = {
  label: string;
  href: string;
};

// Section type
export type Section = {
  title: string;
  links: SectionLink[];
};

// Contact information type
export type ContactInfo = {
  email: string;
  phone: string;
  address: string;
  logoSrc: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
};

// Footer link type
export type FooterLink = {
  label: string;
  href: string;
};
