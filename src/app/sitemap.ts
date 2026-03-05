import { MetadataRoute } from "next";
import { getAllPostsMeta } from "@/lib/mdx";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://maudit.ae";

  // List of all known static routes based on file directory tree
  const staticRoutes = [
    "",
    "/about-us",
    "/blog",
    "/contact-us",
    "/faq",
    "/privacy-policy",
    "/services",
    "/services/accounting-outsourcing",
    "/services/accounting-vat",
    "/services/asset-tagging",
    "/services/asset-tracking",
    "/services/asset-valuation",
    "/services/audit-and-assurance",
    "/services/business-process-outsourcing",
    "/services/business-valuation",
    "/services/cash-flow-management",
    "/services/corporate-tax",
    "/services/corporate-tax-filing",
    "/services/corporate-tax-registration",
    "/services/custom-code-certificate-registration",
    "/services/digital-transformation",
    "/services/due-diligence",
    "/services/esg-advisory",
    "/services/expanded-consulting",
    "/services/forensic-audit",
    "/services/icv-audit-certification",
    "/services/internal-audit",
    "/services/internal-control",
    "/services/inventory-management",
    "/services/management-consulting",
    "/services/management-system-certification",
    "/services/payroll-outsourcing",
    "/services/performance-audit",
    "/services/probity-audit",
    "/services/process-mapping-and-sops",
    "/services/property-valuation",
    "/services/risk-advisory",
    "/services/statutory-audit",
    "/services/stock-audit",
    "/services/strategic-planning",
    "/services/supply-chain-management",
    "/services/tax-agency",
    "/services/tax-planning-compliance",
    "/services/transfer-pricing",
    "/services/vat",
    "/services/virtual-cfo",
    "/services/working-capital-optimization"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Fetch all MDX dynamic routes dynamically
  const posts = await getAllPostsMeta();
  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
