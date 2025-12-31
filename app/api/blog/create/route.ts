import { Client } from '@notionhq/client';
import { NextResponse } from 'next/server';

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { title, description, content, tags, published, password } = await request.json();

    // Simple password protection
    if (password !== process.env.BLOG_ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
    }

    // Generate slug from title
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    const databaseId = process.env.NOTION_BLOG_DATABASE_ID!;

    // Create page in Notion
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        Title: {
          title: [{ text: { content: title } }],
        },
        Slug: {
          rich_text: [{ text: { content: slug } }],
        },
        Description: {
          rich_text: [{ text: { content: description } }],
        },
        Date: {
          date: { start: new Date().toISOString().split('T')[0] },
        },
        Tags: {
          multi_select: tags.map((tag: string) => ({ name: tag })),
        },
        Published: {
          checkbox: published,
        },
      },
      children: [
        {
          object: 'block',
          type: 'paragraph',
          paragraph: {
            rich_text: [{ text: { content: content } }],
          },
        },
      ],
    });

    return NextResponse.json({ 
      success: true, 
      pageId: response.id,
      slug 
    });
  } catch (error: any) {
    console.error('Error creating blog post:', error);
    return NextResponse.json({ 
      error: error.message || 'Failed to create blog post' 
    }, { status: 500 });
  }
}
