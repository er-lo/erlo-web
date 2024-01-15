import Image from 'next/image'
import MyAvatar from "../../public/me-rs.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className="px-6 md:px-6 pt-16 pb-24 md:pt-20 md:pb-44 max-w-[700px] mx-auto">
        <div className="flex flex-col gap-16 md:gap-24">
          <div className="flex animate-in flex-col gap-8">
            <div className="flex animate-in flex-col gap-6 text-secondary md:flex-row md:items-center">
              <Image height={80} width={80} className="rounded-full max-w-[80px]" src={MyAvatar} alt="me"></Image>
              <div>
                <h1 className="animate-in text-3xl font-bold tracking-tight text-primary">Erick Lopez</h1>
                <p className="animate-in text-secondary">I develop software for fun</p>
              </div>
            </div>
            <p className="max-w-lg animate-in text-primary">
              Hello, I am Erick Lopez. A computer science student born and raised in Oklahoma City attending Oklahoma State University - Online. I enjoy building whatever comes to mind with code. From websites to mobile apps I enjoy doing it all.
            </p>
            <ul className="animated-list flex animate-in flex-col gap-2 text-secondary md:flex-row md:gap-6">
              <li className="transition-opacity">
                <Link
                  href="mailto:contactme@ericklopez.dev"
                  className="flex items-center gap-2 no-underline"
                >
                  <span>Email me</span>
                </Link>
              </li>
              <li className="transition-opacity">
                <Link
                  href="/links"
                  className="flex items-center gap-2 no-underline"
                >
                  <span>More ways to connect</span>
                </Link>
              </li>
            </ul> {/* socials go here */}
          </div>
          <div className="flex animate-in flex-col gap-8"></div>
        </div>
      </div>
  )
}
