/**
 * Adsterra Native Banner (4:1 responsive). The ad key lives in the script
 * URL itself, so no atOptions conflict is possible and no iframe isolation
 * is needed — the ad script is emitted straight into the server-side
 * HTML. Renders nothing when the key env var is missing or "0".
 */
export function NativeBannerAd({ className = "" }: { className?: string }) {
  const key = process.env.NEXT_PUBLIC_AD_NATIVE_BANNER;
  const scriptUrl = process.env.NEXT_PUBLIC_ADSTERRA_NATIVE_URL;
  if (!key || key === "0" || !scriptUrl || !scriptUrl.startsWith("https://")) return null;
  const escapedUrl = scriptUrl.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
  const html = `<script async="async" data-cfasync="false" src="${escapedUrl}"></script>`;
  return (
    <div className={`my-8 w-full ${className}`}>
      <div id={`container-${key}`} dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
