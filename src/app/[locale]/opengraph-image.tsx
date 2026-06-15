import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Horizon - Temporary Voice Channels for Discord";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = (await import(`../../../messages/${locale}.json`))
    .default as {
    hero: { headline: string; headlineAccent: string };
  };
  const tagline = `${messages.hero.headline} ${messages.hero.headlineAccent}`;
  const logo = await readFile(join(process.cwd(), "public/logo.png"), "base64");
  const logoSrc = `data:image/png;base64,${logo}`;

  return new ImageResponse(
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background: "#080a10",
        color: "#dde2f0",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "36px" }}>
        <img
          src={logoSrc}
          width={148}
          height={148}
          style={{ borderRadius: "30px" }}
          alt=""
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 104, fontWeight: 700, color: "#ffffff" }}>
            Horizon
          </div>
          <div style={{ fontSize: 38, fontWeight: 600, color: "#00A0FF" }}>
            Join to Create
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: 52,
          fontSize: 46,
          lineHeight: 1.3,
          color: "rgba(221,226,240,0.85)",
          maxWidth: 1000,
        }}
      >
        {tagline}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: 12,
          background: "#00A0FF",
        }}
      />
    </div>,
    { ...size },
  );
}
