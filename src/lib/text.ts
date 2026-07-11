export function extractText(html: string) {
  if (!html) return "";

  return html
    .replace(/<[^>]*>/g, "")
    .trim();
}