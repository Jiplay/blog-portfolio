import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostSlugsPath(dir: string) {
  return fs.readdirSync(dir)
}

export function getPostBySlug(slug: string, fields: string[] = [], dir: string) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(dir, `${realSlug}.md`)
  
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
}

export function getAllPosts(fields: string[] = [], directory: string) {
  let slugs = getPostSlugsPath(directory)
  slugs = slugs.filter((slug) => slug.endsWith('.md'));

  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields, directory))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}


export function getAllCategoriesPosts(fields: string[] = []) {
  const categoriesPosts = [
    getCategoryPost(fields, '_posts/books'),
    getCategoryPost(fields, '_posts/health'),
    getCategoryPost(fields, '_posts/else'),
    getCategoryPost(fields, '_posts/projects'),
  ]

  return categoriesPosts
}

export function getHeroPost(fields: string[] = []) {
  const posts = ["Presentation"]
    .map((slug) => getPostBySlug(slug, fields, '_posts'))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    return posts[0]
}

export function getCategoryPost(fields: string[] = [], categoryPath: string) {
  const posts = getPostSlugsPath(join(process.cwd(), categoryPath))
    .map((slug) => getPostBySlug(slug, fields, categoryPath))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts[0]
}