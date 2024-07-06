import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section className="">
      <h1 className="font-semibold text-2xl tracking-tighter">My Blog</h1>
    </section>
  )
}
