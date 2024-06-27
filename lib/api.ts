import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostSlugsPath(dir: string) {
  try {
    let resp = fs.readdirSync(dir)
    return resp.filter((fileName) => fileName.endsWith('.md'));
  } catch {
    return null
  }
}

export function getPostBySlug(slug: string, fields: string[] = [], dir: string) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(dir, `${realSlug}.md`)
  try {
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const { data, content } = matter(fileContents)

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
  } catch (err) {
    return null
  }
}

export function getAllPosts(fields: string[] = [], directory: string) {
  let slugs = getPostSlugsPath(directory)
  if (slugs !== null) {
    slugs = slugs.filter((slug) => slug.endsWith('.md'));

    const posts = slugs
      .map((slug) => getPostBySlug(slug, fields, directory))
      .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    return posts
  }
}


export function getAllCategoriesPosts(fields: string[] = []) {
  return getCategoryPost(fields, '_posts/')
}

export function getHeroPost(fields: string[] = []) {
  const posts = ["Presentation"]
    .map((slug) => getPostBySlug(slug, fields, '_posts/main'))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    return posts[0]
}

export function getCategoryPost(fields: string[] = [], categoryPath: string) {
  const posts = getPostSlugsPath(join(process.cwd(), categoryPath))
    .map((slug) => getPostBySlug(slug, fields, categoryPath))
    .sort((post1, post2) => (post1.date < post2.date ? -1 : 1))
    return posts
}

export function getLatestPost(categories: string[] = []) {
  const latestPosts = [];

  for (const category of categories) {
    const post = getAllPosts([
      'title',
      'date',
      'slug',
      'author',
      'coverImage',
      'excerpt',
      'tag',
    ], `_posts/${category}`)
    latestPosts.push(post[0])
  }

  latestPosts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return latestPosts[0]
}