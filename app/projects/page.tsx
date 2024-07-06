import { ProjectPosts } from 'app/components/posts'

export const metadata = {
  title: 'Projects',
  description: 'Check out my projects.',
}

export default function Page() {
  return (
    <section className="">
      <h1 className="font-semibold text-2xl tracking-tighter">My Projects</h1>
      <ProjectPosts />
    </section>
  )
}
