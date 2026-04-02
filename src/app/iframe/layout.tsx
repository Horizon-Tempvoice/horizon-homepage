import type { Metadata } from "next";
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
      <body className="antialiased">
        {/* Ensure top.gg iframe container CSS cannot block clicks on interactive elements */}
        <style>{`
          * { pointer-events: auto !important; }
          [class*="absolute"], [class*="inset"] { pointer-events: none !important; }
          a, button, [role="button"], input, select, textarea { pointer-events: auto !important; }
        `}</style>
        <IntlProvider locale="en" messages={messages}>
          {children}
        </IntlProvider>
      </body>
    </html>
  );
}
