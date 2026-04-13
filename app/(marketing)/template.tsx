"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

export default function MarketingTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      const main = document.querySelector('[data-scroll-root="true"]');
      if (main && "scrollTo" in main) {
        (main as HTMLElement).scrollTo({ top: 0, left: 0, behavior: "auto" });
      }
    };

    scrollToTop();

    requestAnimationFrame(() => {
      scrollToTop();
    });

    setTimeout(() => {
      scrollToTop();
    }, 80);
  }, [pathname]);

  return <>{children}</>;
}