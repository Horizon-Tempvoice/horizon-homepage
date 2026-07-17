import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Horizon",
    short_name: "Horizon",
    description:
      "Horizon automatically creates temporary voice channels on Discord. Join to Create, zero configuration.",
    start_url: "/",
    display: "standalone",
    background_color: "#080a10",
    theme_color: "#00A0FF",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
