export function detectPlatform(url) {
  try {
    const hostname = new URL(url).hostname.toLowerCase();
    if (hostname.includes("itch.io"))
      return { platform: "itch", label: "Itch.io" };
    if (hostname.includes("github.com"))
      return { platform: "github", label: "GitHub" };
    if (hostname.includes("youtube.com") || hostname.includes("youtu.be"))
      return { platform: "youtube", label: "YouTube" };
    return { platform: "link", label: "Link" };
  } catch {
    return { platform: "link", label: "Link" };
  }
}
