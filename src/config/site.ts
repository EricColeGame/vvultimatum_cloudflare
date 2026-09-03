export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "My Seafood Stand Wiki",
  shortName: "My Seafood Stand",
  logoText: "SS",
  tagline: "Complete Guides, Codes, Recipes & Tier Lists",
  description: "Your ultimate guide to My Seafood Stand on Roblox! Explore active working codes, seafood recipes, best upgrades, profit strategies, and progression guides.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://myseafoodstand.top",
  gameUrl: "https://www.roblox.com/games/my-seafood-stand",
  heroVideoId: "M8DvcwoFRrk", // Roblox My Seafood Stand codes & gameplay video
  social: {
    discord: "https://discord.gg/roblox",
    youtube: "https://www.youtube.com/@roblox",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
