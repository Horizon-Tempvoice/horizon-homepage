"use client";

import { useEffect } from "react";

export default function IframeLinkHandler() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const a = (e.target as Element).closest<HTMLAnchorElement>(
        'a[target="_blank"]',
      );
      if (a?.href) {
        e.stopImmediatePropagation();
        e.preventDefault();
        window.open(a.href, "_blank", "noopener,noreferrer");
      }
    };
    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler, true);
  }, []);

  return null;
}
