const COOKIE_NAME = "cookie-consent";
const COOKIE_DOMAIN = ".horizon-bot.me";

export type ConsentLevel = "none" | "necessary" | "all";

export function getConsentLevel(): ConsentLevel {
  if (typeof document === "undefined") return "none";
  const value = document.cookie
    .split(";")
    .find((c) => c.trim().startsWith(`${COOKIE_NAME}=`))
    ?.split("=")[1]
    ?.trim();
  if (value === "all") return "all";
  if (value === "necessary" || value === "1") return "necessary";
  return "none";
}

export async function setConsentLevel(
  level: "necessary" | "all",
): Promise<void> {
  const isProd = !["localhost", "127.0.0.1"].includes(window.location.hostname);
  const expires = Date.now() + 365 * 24 * 60 * 60 * 1000;

  if ("cookieStore" in window) {
    await cookieStore.set({
      name: COOKIE_NAME,
      value: level,
      path: "/",
      expires,
      sameSite: "lax",
      ...(isProd && { domain: COOKIE_DOMAIN.replace(/^\./, "") }),
    });
  } else {
    const domain = isProd ? `; domain=${COOKIE_DOMAIN}` : "";
    const secure = isProd ? "; Secure" : "";
    // biome-ignore lint/suspicious/noDocumentCookie: Cookie Store API unavailable in this browser
    document.cookie = `${COOKIE_NAME}=${level}; path=/; max-age=31536000; SameSite=Lax${secure}${domain}`;
  }

  window.dispatchEvent(new CustomEvent("consent-change", { detail: level }));
}

export async function resetConsent(): Promise<void> {
  const isProd = !["localhost", "127.0.0.1"].includes(window.location.hostname);

  if ("cookieStore" in window) {
    await cookieStore.delete({
      name: COOKIE_NAME,
      path: "/",
      ...(isProd && { domain: COOKIE_DOMAIN.replace(/^\./, "") }),
    });
  } else {
    const domain = isProd ? `; domain=${COOKIE_DOMAIN}` : "";
    const secure = isProd ? "; Secure" : "";
    // biome-ignore lint/suspicious/noDocumentCookie: Cookie Store API unavailable in this browser
    document.cookie = `${COOKIE_NAME}=; path=/; max-age=0; SameSite=Lax${secure}${domain}`;
  }

  window.dispatchEvent(new CustomEvent("consent-change", { detail: "none" }));
}
