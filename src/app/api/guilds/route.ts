import { NextResponse } from "next/server";
import { getDisplayGuilds } from "@/lib/guilds";

export async function GET() {
  try {
    const guilds = await getDisplayGuilds();
    return NextResponse.json(guilds);
  } catch {
    return NextResponse.json([]);
  }
}
