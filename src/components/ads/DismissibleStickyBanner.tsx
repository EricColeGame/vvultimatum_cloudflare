"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { AdBanner } from "./AdBanner";

/**
 * Site-wide sticky 320x50 banner (top revenue slot per course data).
 * Constrained to content width (mx-auto max-w-4xl) so no full-width blank
 * frame appears beside the banner on desktop. Dismissable via the ✕ button
 * for the current page view.
 */
export function DismissibleStickyBanner() {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;

  return (
    <div className="sticky top-20 z-20 py-2">
      <div className="relative mx-auto max-w-4xl pr-10">
        <AdBanner size="320x50" />
        <button
          type="button"
          aria-label="Close ad"
          onClick={() => setDismissed(true)}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border bg-background/95 p-1 text-muted-foreground hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
