import { useEffect, useState } from "react";

/**
 * Fetches the real "last week" download count for an npm package from the
 * public npm registry downloads API (CORS-enabled). Returns null while loading
 * or if the request fails, so the UI can hide the badge gracefully.
 */
export const useNpmDownloads = (packageName?: string) => {
  const [downloads, setDownloads] = useState<number | null>(null);

  useEffect(() => {
    if (!packageName) return;

    const controller = new AbortController();

    fetch(`https://api.npmjs.org/downloads/point/last-week/${packageName}`, {
      signal: controller.signal,
    })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data && typeof data.downloads === "number") {
          setDownloads(data.downloads);
        }
      })
      .catch(() => {
        /* offline or blocked — leave the badge hidden */
      });

    return () => controller.abort();
  }, [packageName]);

  return downloads;
};
