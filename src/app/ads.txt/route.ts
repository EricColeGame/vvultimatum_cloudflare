export const dynamic = "force-static";

/** AdSense ads.txt (course §1.3 verification method 1), generated from
 * NEXT_PUBLIC_GOOGLE_ADSENSE_ID so the publisher id never lands in git. */
export function GET() {
  const id = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID;
  const body =
    id && id.startsWith("ca-pub-")
      ? `google.com, ${id.replace(/^ca-/, "")}, DIRECT, f08c47fec0942fa0\n`
      : "# ads.txt pending: NEXT_PUBLIC_GOOGLE_ADSENSE_ID not configured\n";
  return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8" } });
}
