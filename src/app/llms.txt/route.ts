import messages from "../../../messages/en.json";

const LINKS = {
  Invite: "https://invite.horizon-bot.me",
  Documentation: "https://horizon-bot.me/docs",
  "Support (Discord)": "https://support.horizon-bot.me",
  Dashboard: "https://dashboard.horizon-bot.me",
  Stats: "https://topstats.gg/discord/bots/1463545589907197996",
};

function clean(text: string): string {
  return text
    .replace(/<\/?highlight>/g, "")
    .replace(/https:\/\/docs\.horizon-bot\.me/g, "https://horizon-bot.me/docs");
}

function build(): string {
  const { hero, footer, features, showcase, faq } = messages;
  const out: string[] = [];

  out.push("# Horizon");
  out.push("");
  out.push(`> ${clean(hero.headline)} ${clean(hero.headlineAccent)}`);
  out.push("");
  out.push(clean(hero.description));
  out.push("");
  out.push(clean(footer.description));
  out.push("");

  out.push(`## ${features.sectionTitle}`);
  out.push("");
  for (const item of features.items) {
    out.push(`- **${clean(item.title)}**: ${clean(item.description)}`);
  }
  out.push("");

  out.push("## What you can do");
  out.push("");
  for (const item of showcase.items) {
    out.push(`- **${clean(item.title)}** ${clean(item.description)}`);
  }
  out.push("");

  out.push(`## ${faq.sectionTitle}`);
  out.push("");
  for (const item of faq.items) {
    out.push(`### ${clean(item.question)}`);
    out.push(clean(item.answer));
    out.push("");
  }

  out.push("## Links");
  out.push("");
  for (const [label, url] of Object.entries(LINKS)) {
    out.push(`- ${label}: ${url}`);
  }
  out.push("");

  out.push("## About");
  out.push("");
  out.push("Horizon is developed by Diamondforge Labs.");
  out.push("");

  return out.join("\n");
}

export function GET() {
  return new Response(build(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
