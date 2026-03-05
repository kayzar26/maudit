import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';

const rootDirectory = path.join(process.cwd(), 'content', 'articles');

export type PostMeta = {
  title: string;
  excerpt: string;
  date: string;
  featuredImage?: string;
  author: string;
  category: string;
  slug: string;
  readingTime?: string;
};

export type Post = {
  meta: PostMeta;
  content: React.ReactNode; 
};

// Calculate approximate reading time
function getReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const noOfWords = content.split(/\s/g).length;
  const minutes = noOfWords / wordsPerMinute;
  const readTime = Math.ceil(minutes);
  return `${readTime} min read`;
}

// Get a single post by slug
export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const realSlug = slug.replace(/\.mdx$/, '');
    const fullPath = path.join(rootDirectory, `${realSlug}.mdx`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    // Parse the frontmatter and content
    const { data, content } = matter(fileContents);
    
    // Compile MDX
    const { content: compiledContent } = await compileMDX({
      source: content,
      options: {
        parseFrontmatter: false, // Already parsed with gray-matter
        mdxOptions: {
          development: process.env.NODE_ENV === 'development',
        }
      },
    });
    
    return {
      meta: {
        ...data,
        slug: realSlug,
        readingTime: getReadingTime(content),
      } as PostMeta,
      content: compiledContent,
    };
  } catch (error) {
    console.error(`Error loading post ${slug}:`, error);
    return null;
  }
}

// Get all posts meta for the index page and sitemap
export async function getAllPostsMeta(): Promise<PostMeta[]> {
  try {
    if (!fs.existsSync(rootDirectory)) {
      return [];
    }
    
    const files = fs.readdirSync(rootDirectory);
    const posts = files
      .filter((file) => file.endsWith('.mdx'))
      .map((fileName) => {
        const fullPath = path.join(rootDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);
        const slug = fileName.replace(/\.mdx$/, '');
        
        return {
          ...data,
          slug,
          readingTime: getReadingTime(content),
        } as PostMeta;
      });
      
    // Sort posts by date (newest first)
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error('Error reading posts:', error);
    return [];
  }
}
