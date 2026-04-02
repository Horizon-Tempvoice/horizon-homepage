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
        <IntlProvider locale="en" messages={messages}>
          {children}
        </IntlProvider>
      </body>
    </html>
  );
}
