import { adDimensions, adKey, adSrc, type BannerSize } from "./ad-config";

/**
 * Adsterra Banner / Sidebar ad slot, isolated per unit via a dedicated
 * /ads/*.html iframe window (each iframe owns its own atOptions, so multiple
 * banners on one page never overwrite each other). Renders nothing when the
 * ad key env var is missing or "0".
 */
export function AdBanner({ size, className = "" }: { size: BannerSize; className?: string }) {
  if (!adKey(size)) return null;
  const { width, height } = adDimensions(size);
  return (
    <div className={`flex w-full justify-center ${className}`}>
      <iframe src={adSrc(size)} width={width} height={height} scrolling="no" style={{ border: "none" }} title={`Ad slot ${size}`} />
    </div>
  );
}
