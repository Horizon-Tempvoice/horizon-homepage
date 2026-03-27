import Image from "next/image";
import { connection } from "next/server";
import { getTranslations } from "next-intl/server";
import { getDisplayGuilds } from "@/lib/guilds";
import type { CachedGuild } from "@/types/guild";

function accentFromId(id: string): string {
  const colors = [
    "#00A0FF",
    "#22d3ee",
    "#0ea5e9",
    "#38bdf8",
    "#0070cc",
    "#0284c7",
  ];
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = (hash * 31 + id.charCodeAt(i)) >>> 0;
  }
  return colors[hash % colors.length];
}

function formatCount(n: number): string {
  if (n >= 1_000_000)
    return `${(n / 1_000_000).toFixed(1).replace(/\.0$/, "")}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1).replace(/\.0$/, "")}K`;
  return n.toString();
}

function GuildCard({
  guild,
  membersLabel,
}: {
  guild: CachedGuild;
  membersLabel: string;
}) {
  const accent = accentFromId(guild.id);
  const initials = guild.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const inner = (
    <div
      className={`feature-card flex items-center gap-3 px-4 py-3 rounded-xl min-w-[180px] max-w-[240px] shrink-0${guild.vanityUrl ? " cursor-pointer" : ""}`}
    >
      {guild.iconUrl ? (
        <Image
          src={guild.iconUrl}
          alt={guild.name}
          width={40}
          height={40}
          className="rounded-full object-cover shrink-0"
          unoptimized
        />
      ) : (
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
          style={{ backgroundColor: accent }}
        >
          {initials}
        </div>
      )}
      <div className="flex flex-col min-w-0">
        <div className="flex items-center gap-1">
          <span className="text-sm font-semibold text-white truncate leading-tight">
            {guild.name}
          </span>
          {guild.isVerified && (
            <Image
              src="/verified.png"
              alt="Verified"
              width={14}
              height={14}
              className="shrink-0"
            />
          )}
          {guild.isPartnered && (
            <Image
              src="/partnered.png"
              alt="Partnered"
              width={14}
              height={14}
              className="shrink-0"
            />
          )}
        </div>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className="text-xs text-white/50">
            {formatCount(guild.memberCount)} {membersLabel}
          </span>
        </div>
      </div>
    </div>
  );

  if (guild.vanityUrl) {
    return (
      <a href={guild.vanityUrl} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }

  return inner;
}

function MarqueeRow({
  guilds,
  direction,
  membersLabel,
}: {
  guilds: CachedGuild[];
  direction: "left" | "right";
  membersLabel: string;
}) {
  const minCount = 10;
  const repeatCount = Math.ceil(minCount / guilds.length);
  const doubled = [...Array(repeatCount * 2)].flatMap((_, rep) =>
    guilds.map((g) => ({ guild: g, rep })),
  );
  return (
    <div
      className="marquee-track group relative overflow-x-clip py-3"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
      }}
    >
      <div
        className={`flex gap-3 will-change-transform group-hover:[animation-play-state:paused] ${direction === "left" ? "animate-marquee-left-fast md:animate-marquee-left" : "animate-marquee-right-fast md:animate-marquee-right"}`}
      >
        {doubled.map(({ guild, rep }) => (
          <GuildCard
            key={`${guild.id}-rep${rep}`}
            guild={guild}
            membersLabel={membersLabel}
          />
        ))}
      </div>
    </div>
  );
}

export default async function GuildMarquee() {
  await connection();
  const [guilds, t] = await Promise.all([
    getDisplayGuilds(),
    getTranslations("guildMarquee"),
  ]);

  if (guilds.length === 0) return null;

  const shuffled = [...guilds].sort(() => Math.random() - 0.5);
  const offset = Math.ceil(shuffled.length / 2);
  const row1 = shuffled;
  const row2 = [...shuffled.slice(offset), ...shuffled.slice(0, offset)];

  return (
    <section className="py-32 relative">
      <div className="text-center mb-16 px-4">
        <h2 className="text-5xl font-bold mb-4">
          {t("title")} <span className="text-brand">{t("titleAccent")}</span>
        </h2>
        <p className="text-xl text-white/70">{t("subtitle")}</p>
      </div>
      <div className="flex flex-col gap-3 overflow-x-clip">
        <MarqueeRow
          guilds={row1}
          direction="left"
          membersLabel={t("members")}
        />
        <MarqueeRow
          guilds={row2}
          direction="right"
          membersLabel={t("members")}
        />
      </div>
    </section>
  );
}
