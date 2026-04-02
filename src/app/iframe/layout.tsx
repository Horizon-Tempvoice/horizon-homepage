import type { Metadata } from "next";
import IframeLinkHandler from "@/components/IframeLinkHandler";
import IntlProvider from "@/components/IntlProvider";
import messages from "../../../messages/en.json";
import "../globals.css";

export const metadata: Metadata = {
  title: "Horizon",
  robots: { index: false, follow: false },
};

export default function IframeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Ensure interactive elements are always clickable inside the top.gg iframe */}
        <style>{`
          a, button, [role="button"], input, select, textarea {
            pointer-events: auto !important;
            position: relative;
            z-index: 1;
          }
        `}</style>
      </head>
      <body className="antialiased">
        <IntlProvider locale="en" messages={messages}>
          {/* Intercept _blank link clicks before the browser silently blocks them
              from a cross-origin iframe, and open explicitly via window.open */}
          <IframeLinkHandler />
          {children}
        </IntlProvider>
      </body>
    </html>
  );
}
