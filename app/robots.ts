import { MetadataRoute } from "next";
import { PERSONAL_INFO } from "@/data/content";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${PERSONAL_INFO.portfolioDomain}/sitemap.xml`,
  };
}

