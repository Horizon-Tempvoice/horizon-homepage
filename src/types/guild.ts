export interface CachedGuild {
  id: string;
  name: string;
  iconUrl: string | null;
  bannerUrl: string | null;
  memberCount: number;
  ownerId: string;
  boostTier: number;
  vanityUrl: string | null;
  systemChannelId: string | null;
  features: string[];
  isPartnered: boolean;
  isVerified: boolean;
}
