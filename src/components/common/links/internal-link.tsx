"use client";

import Link from "next/link";

export default function InternalLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}
