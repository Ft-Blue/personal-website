import { MetadataRoute } from "next";

const sitemap = (): MetadataRoute.Sitemap => {
  return [
    {
      url: "https://moadfethallah.com",
      lastModified: new Date(),
    },
    {
      url: "https://moadfethallah.com/resume.pdf",
      lastModified: new Date(),
    },
  ];
};

export default sitemap;
