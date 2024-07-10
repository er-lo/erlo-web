import { getProjectPosts } from 'app/projects/utils'

export const baseUrl = 'https://portfolio-blog-starter.vercel.app'

export default async function sitemap() {
  let blogs = getProjectPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.techUsed,
  }))

  let routes = ['', '/projects'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}
