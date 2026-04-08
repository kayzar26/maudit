import { MetadataRoute } from "next";
import { getAllPostsMeta } from "@/lib/mdx";
import { services } from "@/data/services";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://maudit.ae";

  // Base core pages
  const coreRoutes = [
    "",
    "/about-us",
    "/blog",
    "/contact-us",
    "/faq",
    "/privacy-policy",
    "/services",
    "/terms-and-conditions",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Map out all the dynamically structured services
  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Fetch all MDX dynamic routes dynamically
  const posts = await getAllPostsMeta();
  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...coreRoutes, ...serviceRoutes, ...blogRoutes];
}
