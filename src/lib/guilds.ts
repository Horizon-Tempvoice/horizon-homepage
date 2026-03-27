import redis from "@/lib/redis";
import type { CachedGuild } from "@/types/guild";
import config from "../../guild-overrides.json";

type Overrides = Record<string, { url?: string }>;

let _memo: { data: CachedGuild[]; until: number } | null = null;
const MEMO_TTL = 10 * 60 * 1000;

async function fetchFromRedis(): Promise<CachedGuild[]> {
  if (_memo && Date.now() < _memo.until) return _memo.data;

  try {
    const keys: string[] = [];
    let cursor = "0";
    do {
      const [next, batch] = await redis.scan(
        cursor,
        "MATCH",
        "guild:*:data",
        "COUNT",
        100,
      );
      cursor = next;
      keys.push(...batch);
    } while (cursor !== "0");

    if (keys.length === 0) {
      _memo = { data: [], until: Date.now() + MEMO_TTL };
      return [];
    }

    const pipeline = redis.pipeline();
    for (const key of keys) pipeline.get(key);
    const results = await pipeline.exec();

    const guilds: CachedGuild[] = [];
    if (results) {
      for (const [err, value] of results) {
        if (!err && value && typeof value === "string") {
          try {
            guilds.push(JSON.parse(value));
          } catch {}
        }
      }
    }

    const alwaysShow = new Set<string>(config.alwaysShow);
    const overrides = config.overrides as Overrides;

    const filtered = guilds
      .filter((g) => g.isVerified || g.isPartnered || alwaysShow.has(g.id))
      .map((g) => {
        const override = overrides[g.id];
        return override ? { ...g, vanityUrl: override.url ?? g.vanityUrl } : g;
      });

    _memo = { data: filtered, until: Date.now() + MEMO_TTL };
    return filtered;
  } catch {
    _memo = { data: [], until: Date.now() + MEMO_TTL };
    return [];
  }
}

export async function getDisplayGuilds(): Promise<CachedGuild[]> {
  return fetchFromRedis();
}
