import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  // Dynamic URL example:
  const videoUrl = req.nextUrl.searchParams.get("url");
  if (!videoUrl) {
    return new Response("Missing video url", { status: 400 });
  }

  const range = req.headers.get("range") || "";

  const upstream = await fetch(videoUrl, {
    headers: range ? { Range: range } : {},
  });

  // Extract relevant headers
  const headers: Record<string, string> = {
    "Content-Type": "video/mp4",
    "Accept-Ranges": "bytes",
  };

  const passthrough = ["content-range", "content-length", "content-encoding"];

  passthrough.forEach((key) => {
    const value = upstream.headers.get(key);
    if (value) headers[key] = value;
  });

  const status = upstream.status === 206 ? 206 : 200;

  // Force cast is needed because upstream.body is ReadableStream<Uint8Array>
  // which is valid BodyInit but TS can't infer.
  return new Response(upstream.body as any, {
    status,
    headers,
  });
}
