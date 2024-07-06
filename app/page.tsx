import Image from 'next/image'
import MyAvatar from "../public/me-rs.png";
import Link from 'next/link';

export default function Page() {
  return (
    <section className="mt-8 md:mt-0">
      <div className="flex flex-col gap-6 mx-auto w-full md:flex-row md:items-center">
        <Image height={90} width={90} className="rounded-full max-w-[90px]" src={MyAvatar} alt="me"></Image>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Erick Lopez</h1>
          <p className="">I develop software and build keyboards for fun</p>
        </div>
      </div>
      <p className="my-4">
        {`Hi, I'm Erick Lopez! A computer science student born and raised in Oklahoma City attending Oklahoma State University - Online. Recently graduated with an AS Degree in Computer Science. As someone who is attempting to make a career change, I enjoy building whatever comes to mind with code.`}
      </p>
      <ul className="animated-list flex animate-in flex-col gap-2 text-secondary md:flex-row md:gap-6">
            <li className="transition-opacity">
              <Link
                href="mailto:contactme@ericklopez.dev"
                className="flex items-center gap-2 no-underline"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path className="text-white fill-current" d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z"></path>
                  <path className="text-white fill-current" d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z"></path>
                </svg>
                <span>Email me</span>
              </Link>
            </li>
            <li className="transition-opacity">
              <Link
                href="/links"
                className="flex items-center gap-2 no-underline"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className='w-4 h-4' viewBox="0 0 24 24">
                  <path className="text-white fill-current" d="M17.033 6.966c.584.583.584 1.529 0 2.112l-7.955 7.956c-.583.583-1.529.583-2.112 0-.583-.583-.583-1.529 0-2.112l7.956-7.956c.582-.583 1.528-.583 2.111 0zm-9.138 13.386c-1.171 1.171-3.076 1.171-4.248 0-1.171-1.171-1.171-3.077 0-4.248l5.639-5.632c-1.892-.459-3.971.05-5.449 1.528l-2.147 2.147c-2.254 2.254-2.254 5.909 0 8.163 2.254 2.254 5.909 2.254 8.163 0l2.147-2.148c1.477-1.477 1.986-3.556 1.527-5.448l-5.632 5.638zm6.251-18.662l-2.146 2.148c-1.478 1.478-1.99 3.553-1.53 5.445l5.634-5.635c1.172-1.171 3.077-1.171 4.248 0 1.172 1.171 1.172 3.077 0 4.248l-5.635 5.635c1.893.459 3.968-.053 5.445-1.53l2.146-2.147c2.254-2.254 2.254-5.908 0-8.163-2.253-2.254-5.908-2.254-8.162-.001z"/>
                </svg> 
                <span>More ways to connect</span>
              </Link>
            </li>
          </ul> 
    </section>
  )
}
