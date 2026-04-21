import { useEffect, useState } from "react";

export function useLocation() {
  const [location, setLocation] = useState<string | null>(null);
  useEffect(() => {
    const url = window.location.toString();
    setLocation(url);
  }, []);
  return location;
}

export function useSubdomain() {
  const [subdomain, setSubdomain] = useState<string | null>(null);

  useEffect(() => {
    const host = window.location.hostname;
    console.log(window.location.hostname);
    // e.g. "services.interactiveworkers.com"

    const parts = host.split(".");

    if (parts.length > 2 || parts[1] === "localhost") {
      setSubdomain(parts[0]); // "services"
    } else {
      setSubdomain(null); // no subdomain (e.g. interactiveworkers.com)
    }
  }, []);

  return subdomain;
}
