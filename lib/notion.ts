import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const n2m = new NotionToMarkdown({ notionClient: notion });

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  published: boolean;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const databaseId = process.env.NOTION_BLOG_DATABASE_ID;
    
    if (!databaseId) {
      console.warn('NOTION_BLOG_DATABASE_ID not set');
      return [];
    }
    
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: 'Published',
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: 'Date',
          direction: 'descending',
        },
      ],
    });

    return response.results.map((page: any) => ({
      id: page.id,
      slug: page.properties.Slug?.rich_text?.[0]?.plain_text || '',
      title: page.properties.Title?.title?.[0]?.plain_text || 'Untitled',
      description: page.properties.Description?.rich_text?.[0]?.plain_text || '',
      date: page.properties.Date?.date?.start || '',
      tags: page.properties.Tags?.multi_select?.map((tag: any) => tag.name) || [],
      published: page.properties.Published?.checkbox || false,
    }));
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export async function getBlogPost(slug: string): Promise<{ post: BlogPost; content: string } | null> {
  try {
    const databaseId = process.env.NOTION_BLOG_DATABASE_ID;
    
    if (!databaseId) {
      console.warn('NOTION_BLOG_DATABASE_ID not set');
      return null;
    }
    
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        and: [
          {
            property: 'Slug',
            rich_text: {
              equals: slug,
            },
          },
          {
            property: 'Published',
            checkbox: {
              equals: true,
            },
          },
        ],
      },
    });

    if (response.results.length === 0) {
      return null;
    }

    const page: any = response.results[0];
    
    // Get markdown content
    const mdblocks = await n2m.pageToMarkdown(page.id);
    const mdString = n2m.toMarkdownString(mdblocks);
    
    // Handle different return types from notion-to-md
    let content = '';
    if (typeof mdString === 'string') {
      content = mdString;
    } else if (mdString && typeof mdString === 'object' && 'parent' in mdString) {
      content = mdString.parent || '';
    }

    const post: BlogPost = {
      id: page.id,
      slug: page.properties.Slug?.rich_text?.[0]?.plain_text || '',
      title: page.properties.Title?.title?.[0]?.plain_text || 'Untitled',
      description: page.properties.Description?.rich_text?.[0]?.plain_text || '',
      date: page.properties.Date?.date?.start || '',
      tags: page.properties.Tags?.multi_select?.map((tag: any) => tag.name) || [],
      published: page.properties.Published?.checkbox || false,
    };

    return { post, content };
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

export async function getAllSlugs(): Promise<string[]> {
  try {
    const posts = await getBlogPosts();
    return posts.map(post => post.slug);
  } catch (error) {
    console.error('Error fetching slugs:', error);
    return [];
  }
}
