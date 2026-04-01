export const blogPosts = []

export function getBlogPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug)
}
