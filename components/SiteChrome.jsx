"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";

export default function SiteChrome() {
  const pathname = usePathname();

  if (pathname.startsWith("/daylog")) {
    return null;
  }

  return <Header />;
}
