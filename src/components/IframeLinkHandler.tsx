"use client";

import { useEffect } from "react";

export default function IframeLinkHandler() {
  useEffect(() => {
    if (window === window.top) return;

    const handler = (e: MouseEvent) => {
      const a = (e.target as Element).closest<HTMLAnchorElement>("a[href]");
      if (!a?.href) return;

      const url = new URL(a.href, window.location.href);

      // Only handle external links
      if (url.origin === window.location.origin) return;

      // Navigate inside the iframe, sandbox blocks both _blank and _top
      a.target = "_self";
    };

    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler, true);
  }, []);

  return null;
}
