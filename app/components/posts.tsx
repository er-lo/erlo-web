import Link from 'next/link'
import { getProjectPosts } from 'app/projects/utils'

export function ProjectPosts() {
  let allBlogs = getProjectPosts()

  return (
    <div className="my-4">
      {allBlogs
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/projects/${post.slug}`}
          >
            <div className="w-full flex flex-col space-x-0 md:space-x-2">
              <p className="text-neutral-900 text-xl dark:text-neutral-100 mb-1">
                {post.metadata.title}
              </p>
              <p className="text-neutral-900 dark:text-neutral-200 tracking-tight">
                {post.metadata.summary}
              </p>
              <p className="text-neutral-900 dark:text-neutral-400 tracking-tight">
                Tech Used: {post.metadata.techUsed}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}
