"use client";

import { useEffect } from "react";

export default function IframeLinkHandler() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const a = (e.target as Element).closest<HTMLAnchorElement>(
        'a[target="_blank"]',
      );
      if (a?.href) {
        // sandbox="allow-popups" is not set by top.gg, so window.open/_blank is blocked.
        // Switching to _top navigates the top-level window instead (requires allow-top-navigation).
        e.stopImmediatePropagation();
        a.target = "_top";
        // No preventDefault — let the browser handle navigation with the updated target.
      }
    };
    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler, true);
  }, []);

  return null;
}
