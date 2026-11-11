import { MetadataRoute } from "next";
import { PERSONAL_INFO } from "@/data/content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: PERSONAL_INFO.portfolioDomain,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${PERSONAL_INFO.portfolioDomain}/#projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${PERSONAL_INFO.portfolioDomain}/#skills`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${PERSONAL_INFO.portfolioDomain}/#experience`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${PERSONAL_INFO.portfolioDomain}/#contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
