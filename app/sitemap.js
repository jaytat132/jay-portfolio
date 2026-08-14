export default function sitemap() {
  const baseUrl = "https://www.jaytat.dev";

  return [
    { url: baseUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/resume`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/projects`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/daylog`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/daylog/privacy`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${baseUrl}/daylog/support`, changeFrequency: "monthly", priority: 0.6 },
  ];
}
