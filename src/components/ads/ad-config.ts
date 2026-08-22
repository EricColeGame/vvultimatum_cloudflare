export type BannerSize = "320x50" | "468x60" | "300x250" | "728x90" | "160x600" | "160x300";

const BANNER_ENV: Record<BannerSize, string> = {
  "320x50": "NEXT_PUBLIC_AD_MOBILE_320X50",
  "468x60": "NEXT_PUBLIC_AD_BANNER_468X60",
  "300x250": "NEXT_PUBLIC_AD_BANNER_300X250",
  "728x90": "NEXT_PUBLIC_AD_BANNER_728X90",
  "160x600": "NEXT_PUBLIC_AD_SIDEBAR_160X600",
  "160x300": "NEXT_PUBLIC_AD_SIDEBAR_160X300",
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
  const value = process.env[BANNER_ENV[size]];
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
