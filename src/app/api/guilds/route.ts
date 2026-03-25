import { NextResponse } from "next/server";
import redis from "@/lib/redis";
import type { CachedGuild } from "@/types/guild";
import config from "../../../../guild-overrides.json";

export const runtime = "nodejs";

type Overrides = Record<string, { url?: string }>;

export async function GET() {
  try {
    const keys = await redis.keys("guild:*:data");

    if (keys.length === 0) {
      return NextResponse.json([]);
    }

    const pipeline = redis.pipeline();
    for (const key of keys) {
      pipeline.get(key);
    }

    const results = await pipeline.exec();

    const guilds: CachedGuild[] = [];

    if (results) {
      for (const [err, value] of results) {
        if (!err && value && typeof value === "string") {
          try {
            const parsed = JSON.parse(value);
            guilds.push(parsed);
          } catch {
            // skip malformed entries
          }
        }
      }
    }

    const alwaysShow = new Set<string>(config.alwaysShow);
    const overrides = config.overrides as Overrides;

    const filtered = guilds
      .filter((g) => g.isVerified || g.isPartnered || alwaysShow.has(g.id))
      .map((g) => {
        const override = overrides[g.id];
        if (!override) return g;
        return { ...g, vanityUrl: override.url ?? g.vanityUrl };
      });

    return NextResponse.json(filtered);
  } catch (error) {
    console.error("Failed to fetch guilds:", error);
    return NextResponse.json([]);
  }
}
