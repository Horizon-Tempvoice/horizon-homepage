"use client";

import { useEffect } from "react";

/**
 * Ensures external links inside the top.gg sandboxed iframe open correctly.
 *
 * top.gg sets sandbox with allow-popups but NOT allow-top-navigation.
 * So target="_blank" (popup) works, but target="_top" does not.
 * This handler ensures all external links use _blank, never _top.
 */
export default function IframeLinkHandler() {
  useEffect(() => {
    // Only activate inside a cross-origin iframe
    if (window === window.top) return;

    const handler = (e: MouseEvent) => {
      const a = (e.target as Element).closest<HTMLAnchorElement>("a[href]");
      if (!a?.href) return;

      const url = new URL(a.href, window.location.href);

      // Only handle external links
      if (url.origin === window.location.origin) return;

      // Navigate the top-level page (allow-top-navigation-by-user-activation).
      // Important: do NOT call stopImmediatePropagation — it breaks
      // the browser's user-activation chain needed for sandbox permission.
      a.target = "_top";
    };

    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler, true);
  }, []);

  return null;
}
