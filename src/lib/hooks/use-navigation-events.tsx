"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function useNavigationEvents() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return { router, pathname, searchParams };
}
