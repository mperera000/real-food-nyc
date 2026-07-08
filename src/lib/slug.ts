// One home for turning a name into a URL-friendly slug (e.g. "Blue Hill" -> "blue-hill").
export function slugify(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
