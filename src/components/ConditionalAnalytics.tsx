"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { getConsentLevel } from "@/lib/cookieConsent";

const CLARITY_ID = "wf5n18lutr";

async function initClarity() {
  const Clarity = (await import("@microsoft/clarity")).default;
  Clarity.init(CLARITY_ID);
  Clarity.consentV2();
}

export default function ConditionalAnalytics() {
  const [clarityEnabled, setClarityEnabled] = useState(false);

  useEffect(() => {
    if (process.env.NODE_ENV === "development") return;

    if (getConsentLevel() === "all") {
      setClarityEnabled(true);
      initClarity();
    }

    function onConsentChange(e: Event) {
      if ((e as CustomEvent<string>).detail === "all") {
        setClarityEnabled(true);
        initClarity();
      }
    }
    window.addEventListener("consent-change", onConsentChange);
    return () => window.removeEventListener("consent-change", onConsentChange);
  }, []);

  if (process.env.NODE_ENV === "development") return null;

  return (
    <>
      <Script
        src="https://analytics.diamondforge.me/script.js"
        data-website-id="49c54271-ab93-41ce-a58e-0a04eaeef4b8"
        strategy="afterInteractive"
      />
      <Script
        src="https://analytics.diamondforge.me/recorder.js"
        data-website-id="49c54271-ab93-41ce-a58e-0a04eaeef4b8"
        data-sample-rate="0.75"
        data-mask-level="moderate"
        data-max-duration="300000"
        strategy="afterInteractive"
      />
      {clarityEnabled && (
        <Script
          src={`https://www.clarity.ms/tag/${CLARITY_ID}`}
          strategy="afterInteractive"
        />
      )}
    </>
  );
}
