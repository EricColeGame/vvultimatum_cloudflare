export type BannerSize = "320x50" | "468x60" | "300x250" | "728x90" | "160x600" | "160x300";

// NOTE: keys must reference process.env.NEXT_PUBLIC_* as static literals —
// dynamic env lookups are not inlined into the client bundle by Next.js and
// would read as undefined during hydration, unmounting the server-rendered
// ad slots.
const ENV_VALUES: Record<BannerSize, string | undefined> = {
  "320x50": process.env.NEXT_PUBLIC_AD_MOBILE_320X50,
  "468x60": process.env.NEXT_PUBLIC_AD_BANNER_468X60,
  "300x250": process.env.NEXT_PUBLIC_AD_BANNER_300X250,
  "728x90": process.env.NEXT_PUBLIC_AD_BANNER_728X90,
  "160x600": process.env.NEXT_PUBLIC_AD_SIDEBAR_160X600,
  "160x300": process.env.NEXT_PUBLIC_AD_SIDEBAR_160X300,
};

const DIMENSIONS: Record<BannerSize, { width: number; height: number }> = {
  "320x50": { width: 320, height: 50 },
  "468x60": { width: 468, height: 60 },
  "300x250": { width: 300, height: 250 },
  "728x90": { width: 728, height: 90 },
  "160x600": { width: 160, height: 600 },
  "160x300": { width: 160, height: 300 },
};

export function adKey(size: BannerSize): string | null {
  const value = ENV_VALUES[size];
  return value && value !== "0" ? value : null;
}

export function adDimensions(size: BannerSize): { width: number; height: number } {
  return DIMENSIONS[size];
}

/** iframe html file name, e.g. /ads/banner-320x50.html or /ads/sidebar-160x600.html */
export function adSrc(size: BannerSize): string {
  const prefix = size.startsWith("160") ? "sidebar" : "banner";
  return `/ads/${prefix}-${size}.html`;
}
