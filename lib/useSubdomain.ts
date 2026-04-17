import { useEffect, useState } from "react";

export function useSubdomain() {
  const [subdomain, setSubdomain] = useState<string | null>(null);

  useEffect(() => {
    const host = window.location.hostname;
    // e.g. "services.interactiveworkers.com"

    const parts = host.split(".");

    if (parts.length > 2) {
      setSubdomain(parts[0]); // "services"
    } else {
      setSubdomain(null); // no subdomain (e.g. interactiveworkers.com)
    }
  }, []);

  return subdomain;
}
