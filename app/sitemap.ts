import type { MetadataRoute } from "next";
import { BRAND } from "@/lib/config/brand";

const routes = [
  "",
  "/gaming",
  "/kommentator",
  "/bloodyarmy",
  "/ueber-mich",
  "/kontakt",
  "/impressum",
  "/datenschutz",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${BRAND.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}