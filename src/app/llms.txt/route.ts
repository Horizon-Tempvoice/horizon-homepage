const BODY = `# Horizon

> Horizon is a free Discord bot that creates temporary "Join to Create" voice channels. Join a generator channel and Horizon spins up a private voice room that deletes itself once empty. No configuration required.

## What it does
- Temporary voice channels, auto-created on join and auto-deleted when empty
- Join to Create generator channels (up to 3 per server)
- User-controlled permissions: rename, lock, limit, whitelist and blacklist
- Session profiles to save and restore channel setups
- Native Discord control panel plus slash commands
- Web dashboard for server configuration

## Links
- Website: https://horizon-bot.me
- Documentation: https://horizon-bot.me/docs
- Quickstart: https://horizon-bot.me/docs/quickstart
- Invite: https://invite.horizon-bot.me
- Support (Discord): https://support.horizon-bot.me
- Dashboard: https://dashboard.horizon-bot.me

## About
Horizon is developed by Diamondforge Labs. It is free to use, with a planned premium tier.
`;

export function GET() {
  return new Response(BODY, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
