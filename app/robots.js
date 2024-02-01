export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/studio",
    },
    sitemap: "https://oaksintelligence.co/sitemap.xml",
  };
}
