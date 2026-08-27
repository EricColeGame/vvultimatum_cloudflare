/**
 * Adsterra Native Banner (4:1 responsive). The ad key lives in the script
 * URL itself, so no atOptions conflict is possible and no iframe isolation
 * is needed — the invoke.js script is emitted straight into the server-side
 * HTML. Renders nothing when the key env var is missing or "0".
 */
export function NativeBannerAd({ className = "" }: { className?: string }) {
  const key = process.env.NEXT_PUBLIC_AD_NATIVE_BANNER;
  // host is per-site (pl<website-id>.<cdn-domain>) and MUST come from
  // NEXT_PUBLIC_ADSTERRA_NATIVE_HOST — never hardcode a real site's host here.
  const host = process.env.NEXT_PUBLIC_ADSTERRA_NATIVE_HOST;
  if (!key || key === "0" || !host) return null;
  const html = `<script async="async" data-cfasync="false" src="https://${host}/${key}/invoke.js"></script>`;
  return (
    <div className={`my-8 w-full ${className}`}>
      <div id={`container-${key}`} dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
