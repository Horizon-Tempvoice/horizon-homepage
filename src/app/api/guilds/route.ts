import { NextResponse } from "next/server";
import { getDisplayGuilds } from "@/lib/guilds";

export async function GET() {
  try {
    const guilds = await getDisplayGuilds();
    const publicGuilds = guilds.map(
      ({
        ownerId: _ownerId,
        systemChannelId: _systemChannelId,
        features: _features,
        ...rest
      }) => rest,
    );
    return NextResponse.json(publicGuilds);
  } catch {
    return NextResponse.json([]);
  }
}
