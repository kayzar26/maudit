import fs from "fs";
import path from "path";
import matter from "gray-matter";

// ─── Types ───
export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  featured_image: string;
  excerpt: string;
  tags: string[];
  content: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  featured_image: string;
  excerpt: string;
  tags: string[];
}

// ─── Constants ───
const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

/**
 * Format a date string (e.g. "2026-03-18") to a human-readable format (e.g. "March 18, 2026").
 */
function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  try {
    const date = new Date(dateStr + "T00:00:00");
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateStr;
  }
}

// ─── Helpers ───

/**
 * Convert simple markdown to HTML.
 * Supports: headings (##, ###), paragraphs, bold, italic, links,
 * unordered lists, ordered lists, blockquotes, images, horizontal rules, line breaks.
 */
function markdownToHtml(md: string): string {
  let html = md;

  // Images: ![alt](src)
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<figure><img src="$2" alt="$1" /><figcaption>$1</figcaption></figure>');

  // Links: [text](url)
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

  // Bold: **text** or __text__
  html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/__(.+?)__/g, "<strong>$1</strong>");

  // Italic: *text* or _text_
  html = html.replace(/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/g, "<em>$1</em>");

  // Horizontal rule
  html = html.replace(/^---$/gm, "<hr />");

  // Split into blocks by double newline
  const blocks = html.split(/\n\n+/);
  const processedBlocks: string[] = [];

  for (const block of blocks) {
    const trimmed = block.trim();
    if (!trimmed) continue;

    // Headings
    if (trimmed.startsWith("### ")) {
      processedBlocks.push(`<h3>${trimmed.slice(4)}</h3>`);
    } else if (trimmed.startsWith("## ")) {
      processedBlocks.push(`<h2>${trimmed.slice(3)}</h2>`);
    }
    // Blockquote
    else if (trimmed.startsWith("> ")) {
      const quoteContent = trimmed
        .split("\n")
        .map((l) => l.replace(/^>\s?/, ""))
        .join(" ");
      processedBlocks.push(`<blockquote><p>${quoteContent}</p></blockquote>`);
    }
    // Unordered list
    else if (/^[-*]\s/.test(trimmed)) {
      const items = trimmed
        .split("\n")
        .filter((l) => /^[-*]\s/.test(l.trim()))
        .map((l) => `<li>${l.trim().replace(/^[-*]\s+/, "")}</li>`)
        .join("\n");
      processedBlocks.push(`<ul>${items}</ul>`);
    }
    // Ordered list
    else if (/^\d+\.\s/.test(trimmed)) {
      const items = trimmed
        .split("\n")
        .filter((l) => /^\d+\.\s/.test(l.trim()))
        .map((l) => `<li>${l.trim().replace(/^\d+\.\s+/, "")}</li>`)
        .join("\n");
      processedBlocks.push(`<ol>${items}</ol>`);
    }
    // Already HTML (figure, hr, etc.)
    else if (trimmed.startsWith("<")) {
      processedBlocks.push(trimmed);
    }
    // Paragraph
    else {
      const withBr = trimmed.replace(/\n/g, "<br />");
      processedBlocks.push(`<p>${withBr}</p>`);
    }
  }

  return processedBlocks.join("\n\n");
}

/**
 * Get all blog post slugs (filenames without extension).
 */
export function getAllSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

/**
 * Get metadata for all blog posts, sorted by date (newest first).
 */
export function getAllPostsMeta(): BlogPostMeta[] {
  const slugs = getAllSlugs();
  const posts = slugs.map((slug) => {
    const filePath = path.join(CONTENT_DIR, `${slug}.md`);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(raw);

    return {
      slug,
      title: data.title || slug,
      rawDate: data.date || "",
      date: formatDate(data.date || ""),
      author: data.author || "Majed Al Shamsi",
      category: data.category || "General",
      featured_image: data.featured_image || "/img/blog/blog-1.png",
      excerpt: data.excerpt || "",
      tags: data.tags || [],
    };
  });

  // Sort newest first using raw date
  posts.sort(
    (a, b) => new Date(b.rawDate).getTime() - new Date(a.rawDate).getTime()
  );

  // Return without rawDate
  return posts.map(({ rawDate, ...rest }) => rest) as BlogPostMeta[];
}

/**
 * Get a single blog post by slug, including parsed HTML content.
 */
export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title || slug,
    date: formatDate(data.date || ""),
    author: data.author || "Majed Al Shamsi",
    category: data.category || "General",
    featured_image: data.featured_image || "/img/blog/blog-1.png",
    excerpt: data.excerpt || "",
    tags: data.tags || [],
    content: markdownToHtml(content),
  };
}
